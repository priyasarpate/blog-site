// pages/index.js

import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'

export default function Home({ posts }) {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <div>{post.title}</div>
              <div className='post-date'>Posted on {post.date}</div>

            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title,
      date: data.date
    }
  })

  return {
    props: {
      posts
    }
  }
}
