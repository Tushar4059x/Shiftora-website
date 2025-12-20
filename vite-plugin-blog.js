import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { glob } from 'glob'

export default function markdownBlogPlugin() {
    const virtualModuleId = 'virtual:blog-posts'
    const resolvedVirtualModuleId = '\0' + virtualModuleId

    return {
        name: 'markdown-blog-plugin',

        resolveId(id) {
            if (id === virtualModuleId) {
                return resolvedVirtualModuleId
            }
        },

        async load(id) {
            if (id === resolvedVirtualModuleId) {
                const contentDir = path.resolve(process.cwd(), 'content/blog')

                // Check if directory exists
                if (!fs.existsSync(contentDir)) {
                    return 'export const blogPosts = [];'
                }

                // Get all markdown files
                const files = await glob('*.md', { cwd: contentDir })

                const posts = files.map((file) => {
                    const filePath = path.join(contentDir, file)
                    const fileContent = fs.readFileSync(filePath, 'utf-8')
                    const { data: frontmatter, content } = matter(fileContent)

                    // Convert markdown content to HTML
                    const htmlContent = marked(content)

                    return {
                        slug: frontmatter.slug || file.replace('.md', ''),
                        title: frontmatter.title || 'Untitled',
                        metaTitle: frontmatter.metaTitle || frontmatter.title,
                        metaDescription: frontmatter.metaDescription || frontmatter.excerpt || '',
                        excerpt: frontmatter.excerpt || '',
                        author: frontmatter.author || 'ScaletrailAI Team',
                        publishDate: frontmatter.publishDate || new Date().toISOString().split('T')[0],
                        readTime: frontmatter.readTime || '5 min read',
                        category: frontmatter.category || 'General',
                        featured: frontmatter.featured || false,
                        content: htmlContent
                    }
                })

                // Sort by date (newest first)
                posts.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))

                return `export const blogPosts = ${JSON.stringify(posts, null, 2)};`
            }
        },

        // Watch for changes in content directory
        configureServer(server) {
            const contentDir = path.resolve(process.cwd(), 'content/blog')

            server.watcher.add(contentDir)

            server.watcher.on('change', (file) => {
                if (file.includes('content/blog') && file.endsWith('.md')) {
                    const module = server.moduleGraph.getModuleById(resolvedVirtualModuleId)
                    if (module) {
                        server.moduleGraph.invalidateModule(module)
                        server.ws.send({ type: 'full-reload' })
                    }
                }
            })

            server.watcher.on('add', (file) => {
                if (file.includes('content/blog') && file.endsWith('.md')) {
                    server.ws.send({ type: 'full-reload' })
                }
            })

            server.watcher.on('unlink', (file) => {
                if (file.includes('content/blog') && file.endsWith('.md')) {
                    server.ws.send({ type: 'full-reload' })
                }
            })
        }
    }
}
