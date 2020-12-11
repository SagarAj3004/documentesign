import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import axios from "axios"
export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    errors: {
      name: "",
      email: "",
    },
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value }, () => {})
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.validateForm()) {
      return
    }
    axios
      .post(`http://localhost:1337/contacts`, { ...this.state })
      .then(response => {
        console.log("response", response)
      })
  }
  render() {
    return (
      <Layout>
        <SEO title="Contact" description="this is contact page" />
        <div className="mt-4 text-center">
          <h2>Let's talk</h2>
          <p>
            Don’t hesitate to reach out with the contact information below, or
            send a message using the form.
          </p>
        </div>
        <div className="row">
          <div className="col-6 bg-white p-5">
            <h2 className="mt-4">Corporate office</h2>
            <p>
              Angular Minds<br></br>
              1st Floor, Silver Spring,Baner – Balewadi Rd<br></br>
              Sahyadri Farms, Baner <br></br>
              Pune, Maharashtra 411045 <br></br>
              India
            </p>
          </div>
          <div className="col-6 bg-white py-5 px-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="nameInput">
                  <strong>Name</strong>(required)
                </label>
                <input
                  type="text"
                  id="nameInput"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  className="form-control"
                />
                <span className="invalid-feedback d-block">
                  {this.state.errors.name}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">
                  <strong>Email</strong>(required)
                </label>
                <input
                  type="email"
                  id="emailInput"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  className="form-control"
                />
                <span className="invalid-feedback d-block">
                  {this.state.errors.email}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="messageInput">
                  <strong>Message</strong>
                </label>
                <textarea
                  rows="5"
                  id="messageInput"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Layout>
    )
  }

  validateForm = () => {
    let valid = true
    let errors = this.state.errors
    Object.keys(this.state).forEach(field => {
      switch (field) {
        case "name":
          errors.name =
            this.state.name.trim().length === 0 ? "Name is required" : ""
          break
        case "email":
          errors.email =
            this.state.email.trim().length === 0
              ? "Email is required"
              : !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                  this.state.email
                )
              ? "Email is invalid"
              : ""
          break
        default:
      }
    })
    valid = !errors.name.length && !errors.email.length
    this.setState({ errors }, () => {})
    return valid
  }
}
