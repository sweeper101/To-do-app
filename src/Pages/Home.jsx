import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import IconButton from "@mui/material/IconButton";
import {
  AiOutlineFileDone,
  AiOutlineDelete,
  AiOutlineSend,
} from "react-icons/ai";

import { v4 as uuidv4 } from "uuid";

function Home() {
  const history = useHistory();
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), status: "", task: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    history.push("/");
    alert("Successfully submitted!!", { inputFields });
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), status: "", task: "" }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <Container>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div
            style={{
              justifyContent: "space-between",
              color: "white",
              //   backgroundColor: "#4b2faf",
            }}
          >
            <TextField
              name="status"
              label="Status"
              variant="filled"
              color="success"
              text="white"
              value={inputField.firstName}
              onChange={(event) => handleChangeInput(inputField.id, event)}
              style={{
                marginLeft: "1.5rem",
                backgroundColor: "#4b2faf",
              }}
            />
            <TextField
              name="task"
              label="Task"
              variant="filled"
              color="warning"
              value={inputField.lastName}
              onChange={(event) => handleChangeInput(inputField.id, event)}
              style={{
                marginLeft: "1.5rem",
                backgroundColor: "#4b2faf",
              }}
            />
            <IconButton
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              <AiOutlineDelete
                style={{
                  color: "white",
                  backgroundColor: "#4b2faf",
                  borderRadius: "10px",
                }}
              />
            </IconButton>
            <IconButton onClick={handleAddFields}>
              <AiOutlineFileDone
                style={{
                  color: "white",
                  backgroundColor: "#4b2faf",
                  borderRadius: "10px",
                }}
              />
            </IconButton>
          </div>
        ))}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          style={{
            marginTop: "30px",
            color: "white",
            backgroundColor: "#4b2faf",
            borderRadius: "20px",
          }}
        >
          Send
          <AiOutlineSend
            style={{
              color: "white",
              backgroundColor: "#4b2faf",
              borderRadius: "20px",
            }}
          />
        </Button>
      </form>
    </Container>
  );
}

export default Home;
