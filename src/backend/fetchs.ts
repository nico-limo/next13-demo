import { CommentInterface, PostInterface } from '../interfaces'
import { POSTS_LINK } from '../utils/constants'

// getStaticProps
export const fetchStaticPost = () => {
  return fetch(POSTS_LINK)
    .then((res) => res.json())
    .then((data: PostInterface[]) => data)
}

// getServerSideProps
export const fetchServerSidePost = () => {
  return fetch(POSTS_LINK, { cache: 'no-store' })
    .then((res) => res.json())
    .then((data: PostInterface[]) => data)
}

// incremental static regeneration
export const fetchPost = () => {
  return fetch(POSTS_LINK, { next: { revalidate: 60 } })
    .then((res) => res.json())
    .then((data: PostInterface[]) => data)
}
export const fetchSinglePost = (id: number) => {
  return fetch(`${POSTS_LINK}/${id}`, { next: { revalidate: 60 } })
    .then((res) => res.json())
    .then((data: PostInterface) => data)
}
export const fetchPostComments = async (id: number) => {
  // await new Promise((resolve) => setTimeout(resolve, 4000))
  return fetch(`${POSTS_LINK}/${id}/comments`, { next: { revalidate: 60 } })
    .then((res) => res.json())
    .then((data: CommentInterface[]) => data)
}

export const fetchPostError = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  throw new Error('Error forzado')
}
