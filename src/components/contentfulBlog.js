import { Link } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"
const ContentfulBlog = ({ id, title, description, slug, date }) => {
  return (
    <>
      <div className="row mb-3">
        <div className="col-12">
          <div className="card p-3 shadow">
            <div className="card-title">
              <Link to={`/contentful/${slug}`} key={id}>
                <h3>{title}</h3>
              </Link>
            </div>
            <div className="card-body p-0">
              <div>
                <ReactMarkdown source={description.description}></ReactMarkdown>
              </div>
              <small className="text-muted">{date}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentfulBlog
