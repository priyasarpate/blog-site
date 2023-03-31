// pages/posts/[slug].js

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const components = {}

export default function PostPage({ source, frontMatter }) {
  return (
    <div>
      <article>
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.date}</p>
        <MDXRemote {...source} components={components} />
      </article>
    </div>
  )
}

// export async function getStaticPaths() {
//   const postsDirectory = path.join(process.cwd(), 'posts')
//   const filenames = fs.readdirSync(postsDirectory)

//   const slugs = filenames.map((filename) => filename.replace(/\.mdx$/, ''))
//   return slugs;
// }


export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}