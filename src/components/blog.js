import { Link } from "gatsby"
import React from "react"
const Blog = ({ id, title, image, category, description, slug, date }) => {
  return (
    <>
      <div className="row mb-3">
        <div className="col-12">
          <div className="card p-3 shadow">
            <div className="card-title">
              <Link to={`/blogs/${slug}`} key={id}>
                <h3>{title}</h3>
                <img src={image.publicURL} height="200" alt={id} />
              </Link>
            </div>
            <div className="card-body p-0">
              <div>
                <p>{description}</p>
              </div>
              <div>
                <span className="badge badge-secondary">
                  {category.toUpperCase()}
                </span>
              </div>
              <small className="text-muted">{date}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
