import IconSection from "../components/HomePage/IconSection";
import React from "react";
import axios from "axios";

export default function contact() {
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const messageRef = React.useRef();

  const [message, setAlert] = React.useState(null);
  const [error, setError] = React.useState(null);

  const closeAlert = (alert) => {
    if (alert === "success") {
      setAlert(null);
    } else {
      setError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios({
      url: "https://formspree.io/xoqnqbyg",
      method: "post",
      headers: {
        Accept: "application/json",
      },
      data: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setAlert("Message sent Succesfully");
          emailRef.current.value = "";
          nameRef.current.value = "";
          messageRef.current.value = "";
        } else {
          setError("Error sending Message");
        }
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        setError("Error sending Message");
        emailRef.current.value = "";
        nameRef.current.value = "";
        messageRef.current.value = "";
      });
  };

  return (
    <>
      {message && (
        <div className="alert alert-success">
          <i className="linearicons-checkmark-circle"></i> {message}{" "}
          <button
            onClick={() => closeAlert("success")}
            type="button"
            className="btn-close"
          ></button>
        </div>
      )}
      {error && (
        <div className="alert alert-danger">
          <i className="linearicons-warning"></i> {error}{" "}
          <button
            onClick={() => closeAlert("danger")}
            type="button"
            className="btn-close"
          ></button>
        </div>
      )}
      <div className="mt-4 container d-flex justify-content-center align-items-center">
        <div className="row">
          <IconSection />
          <div className="mx-auto spaceTop mb-4 col-sm-12 col-md-6">
            <div className="card contact">
              <div className="card-body">
                <h1 className="mt-4 mb-4 text-center card-title">Contact Us</h1>
                <form onSubmit={handleSubmit} method="POST">
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                      ref={nameRef}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="_replyto"
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                      ref={emailRef}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className="form-control"
                      rows="4"
                      required
                      ref={messageRef}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn-block btn btn-primary contact-btn"
                      name="submit"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
