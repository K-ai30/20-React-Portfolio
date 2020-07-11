import React from "react";
import "./style.css";

function Contact() {
  return (
    <div classNameName="container mt-5 mb-5">
      <section>
        <div className="form-group">
          <label for="exampleInputFullName">Full Name</label>
          <input
            type="fullname"
            className="form-control"
            id="exampleInputFullName"
            placeholder="Full name"
          />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label for="exampleFormControlMessage">Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlMessage"
            rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          className="custom-outline text-white custom-button"
        >
          Submit
        </button>
      </section>
    </div>
  );
}

export default Contact;
