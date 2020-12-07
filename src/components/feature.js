import React from "react"
const Feature = ({ feature }) => {
  return (
    <>
      <h3>{feature.title}</h3>
      <h4>{feature.subtitle}</h4>
      <p>{feature.description}</p>
    </>
  )
}

export default Feature
