import Image from 'next/image'
import { fetchPostComments } from '../../../../../backend/fetchs'

const CommentsPage = async ({ params }: { params: { id: number } }) => {
  const { id } = params
  const comments = await fetchPostComments(id)
  // const error = await fetchPostError(id)

  return (
    <ul style={{ fontSize: '12px', background: '#444' }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            src={`https://robohash.org/${comment.email}`}
            alt={comment.name}
            width='34'
            height='34'
          />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}

export default CommentsPage
