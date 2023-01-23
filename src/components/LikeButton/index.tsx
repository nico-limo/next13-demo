'use client'
import React, { useState } from 'react'

export function LikeButton() {
  const [liked, setLiked] = useState(false)
  const handleClick = () => {
    setLiked(!liked)
  }
  return <button onClick={handleClick}>{liked ? '♥' : '♡'}</button>
}
