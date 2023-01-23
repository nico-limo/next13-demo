import Link from 'next/link'
import { fetchPost } from '../../backend/fetchs'
import { LikeButton } from '../LikeButton'
import styles from './ListOfPosts.module.css'
export async function ListOfPosts() {
  const posts = await fetchPost()

  return posts.map((post) => (
    <article key={post.id} className={styles.article}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton />
      </Link>
    </article>
  ))
}
