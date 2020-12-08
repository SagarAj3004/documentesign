import React from "react"
const Feature = ({ id, title, subtitle, description, image }) => {
  return (
    <div className="mb-5">
      <h3>{title}</h3>
      <img src={image.publicURL} height="200" alt={id} />
      <h4 className="text-muted">{subtitle}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Feature
