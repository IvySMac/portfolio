import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const formId = "Y16rsmHq";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const initialFormState = {
    email: "",
    name: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState();

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      setMessage({
        class: "thankyou",
        text: "Thank you for your message!",
      });
    } catch (error) {
      console.log(error);
      setMessage({
        class: "uh-oh",
        text: "Sorry, there was a problem. Please try again.",
      });
    }
  };

  const updateFormControl = (event) => {
    const { id, value } = event.target;
    const formKey = id;
    const updateFormState = { ...formState };
    updateFormState[formKey] = value;
    setFormState(updateFormState);
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      {message && <div className={`${message.class}`}>{message.text}</div>}
      <div>
        <label className="name" htmlFor="name">Name</label>
        <input
          onChange={updateFormControl}
          type="text"
          id="name"
          value={formState.name}
        ></input>
      </div>
      <div>
        <label className="email" htmlFor="email">E-Mail</label>
        <input
          onChange={updateFormControl}
          type="text"
          id="email"
          value={formState.email}
        ></input>
      </div>
      <div>
        <label className="message" htmlFor="message">Message</label>
        <textarea
          id="message"
          onChange={updateFormControl}
          value={formState.message}
        ></textarea>
      </div>
      <form onSubmit={submitForm}>
        <button disabled={submitting} className="submit">
          {submitting ? "...Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
