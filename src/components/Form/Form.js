import styles from "./Form.module.css";
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
function Form(props) {
  const [currUserName, setCurrUserName] = useState(``);
  const [currUserAge, setCurrUserAge] = useState(``);

  const formData = {
    userName: currUserName,
    userAge: currUserAge,
  };

  function onUserNameChange(e) {
    setCurrUserName(e.target.value);
  }
  function onUserAgeChange(e) {
    setCurrUserAge(e.target.value);
  }
  function onFormSubmit(e) {
    e.preventDefault();
    if (formData.userAge < 0 || formData.userAge > 100) {
      props.onGetInvalidInputs(`Age should be less than 100 and bigger than 0`);
      return;
    }
    if (!formData.userAge.trim() || !formData.userName.trim()) {
      props.onGetInvalidInputs(`Username and Age should be non-empty`);
      return;
    }
    setCurrUserAge(``);
    setCurrUserName(``);
    props.onSaveNewUser({
      id: Math.random().toString(),
      username: currUserName,
      userage: currUserAge,
    });
  }

  return (
    <Card>
      {" "}
      <form onSubmit={onFormSubmit} className={styles.form}>
        <label>Username</label>
        <input
          value={currUserName}
          type="text"
          name="userName"
          onChange={onUserNameChange}
        />
        <label>Age (years)</label>
        <input
          value={currUserAge}
          type="number"
          name="age"
          onChange={onUserAgeChange}
        />
        <Button>Add User</Button>
      </form>
    </Card>
  );
}

export default Form;
