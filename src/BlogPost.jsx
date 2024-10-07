// import React from 'react'

import { Navigate, useParams } from "react-router-dom"
import { blogdata } from "./BlogData"

const BlogPost = () => {
    const {slug} = useParams()
    const blogpost = blogdata.find(post => post.slug === slug)

    const returnToBlog = () => {
        Navigate('/blog')
    }
  return (
    <div>
        <h2>{blogpost.title}</h2>
        <button onClick={returnToBlog}>volver al blog</button>
        <p>
            {blogpost.content}
        </p>
        <p>
            {blogpost.author}
        </p>
    </div>
  )
}

export {BlogPost}
