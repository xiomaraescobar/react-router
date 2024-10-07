// import React from 'react'
import {blogdata} from './BlogData'
import { Link, Outlet } from "react-router-dom"

const BlogPage = () => {
    return (
        <div>
            <h1>
                BlogPage
            </h1>
            <Outlet></Outlet>
            {
                blogdata.map(post => (
                    <BlogLink key={post.slug} post={post} />
                ))
            }
        </div>
    )
}

const BlogLink = ({post}) => {
    return (
        <li>
        <Link to={`/blog/${post.slug}`}>{post.title}
            </Link>
        </li>
    )
}

export { BlogPage }
