import React from "react"
const Blog = ({ blog }) => {
  return (
    <>
      <div className="card p-3">
        <div className="card-title">
          <h3>{blog.title}</h3>
        </div>
        <div className="card-body p-0">
          <p>{blog.description}</p>
        </div>
      </div>
    </>
  )
}

export default Blog
