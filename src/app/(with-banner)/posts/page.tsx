import React from 'react'
import { ListOfPosts } from '../../../components/ListOfPosts'
export default function PostPAge() {
  return (
    <section>
      {/* @ts-expect-error Server Component */}
      <ListOfPosts />
    </section>
  )
}
