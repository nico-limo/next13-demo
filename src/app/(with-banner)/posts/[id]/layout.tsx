import Link from 'next/link'
import React from 'react'
import { fetchSinglePost } from '../../../../backend/fetchs'

const PostPage = async ({
  children,
  params
}: {
  children: React.ReactNode
  params: { id: number }
}) => {
  const { id } = params
  const post = await fetchSinglePost(id)

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link style={{ color: 'green' }} href={`/posts/${id}/comments`}>
        Ver Comentarios
      </Link>
      {children}
    </article>
  )
}

export default PostPage
