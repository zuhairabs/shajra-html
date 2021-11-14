import IconSection from "../components/HomePage/IconSection";
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function contact() {

    const router = useRouter();

  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const messageRef = React.useRef();

  const [message, setAlert] = React.useState(null);
  const [error, setError] = React.useState(null);

    const closeAlert = (alert) => {
        if(alert === "success") {
            setAlert(null)
        } else {
            setError(null)
        }
    }

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios({
      url: "https://formspree.io/xoqnqby",
      method: "post",
      headers: {
        Accept: "application/json",
      },
      data: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      },
    }).then((response) => {
      if (response.status === 200) {
        setAlert("Message sent Succesfully");
        emailRef.current.value = '';
        nameRef.current.value = '';
        messageRef.current.value = '';
        router.push('/');
      } else {
        setError("Error sending Message");
      }
    }).catch(err => {setError("Error sending Message"); emailRef.current.value = ''; nameRef.current.value = ''; messageRef.current.value = '';});
  };

  return (
    <>
      {message && <div className="alert alert-success"><i class="linearicons-arrow-right-circle"></i> {message} <button onClick={() => closeAlert('success')} type="button" class="btn-close"></button></div>}
      {error && <div className="alert alert-danger"><i class="linearicons-arrow-right-circle"></i> {error} <button onClick={() => closeAlert('danger')} type="button" class="btn-close"></button></div>}
      <div className="mt-4 container d-flex justify-content-center align-items-center">
        <div className="row">
          <IconSection />
          <div className="mx-auto spaceTop mb-4 col-sm-12 col-md-6">
            <div className="card contact">
              <div className="card-body">
                <h1 className="mt-4 mb-4 text-center card-title">Contact Us</h1>
                <form
                  onSubmit={handleSubmit}
                  action="https://formspree.io/xoqnqbyg"
                  method="POST"
                >
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                      ref={nameRef}
                      value={nameRef.current}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="_replyto"
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                      value={emailRef.current}
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
                      value={messageRef.current}
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
