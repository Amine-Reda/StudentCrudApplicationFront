import axios from "axios";
import React from "react";

import { useForm } from "react-hook-form";
import classes from "./AddStudent.module.css";

const AddStudent = () => {
  const { register, handleSubmit } = useForm();

  function fetchData(dataStudent) {
    axios({
      method: "POST",
      url: "http://localhost:8080/student/students",
      data: JSON.stringify(dataStudent),
      headers: { "Content-Type": "application/json" },
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit(fetchData)}>
        <div className="row">
          <div className="input-field col s2">
            <input placeholder="firstName" name="firstName" ref={register} />
          </div>
          <div className="input-field col s3">
            <input placeholder="lastName" name="lastName" ref={register} />
          </div>
          <div className="input-field col s3">
            <input placeholder="address" name="address" ref={register} />
          </div>
          <div className="input-field col s3">
            <button className="btn waves-effect waves-light" type="submit">
              ADD STUDENT
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
