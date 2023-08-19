import React, { useState } from "react";
import axios from "axios";


function Contact() {
  const formId = "Y16rsmHq";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const initialFormState = {
    email: '',
    name: '',
    message: '',
  };

  const [formState, setFormState]= useState(initialFormState);
  
  const submitForm = async (event) => {
    event.preventDefault();
    await postSubmission();
  };

  const postSubmission = async () => {
    const payload = {
      message: "Test formspark submission",
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
    } catch(error) {
      console.log(error);
    }
  };

  const updateFormControl = (event) => {
    const { id, value} = event.target;
    const formKey = id;
    const updateFormState = { ...formState};
    updateFormState[formKey] = value;
    setFormState(updateFormState);
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={updateFormControl}
           type="text"
            id="name"
             value={formState.name}></input>
        </div>
        <form onSubmit={submitForm}>
          <button className="submit">Submit</button>
        </form>
    </div>
  );
}

export default Contact;
