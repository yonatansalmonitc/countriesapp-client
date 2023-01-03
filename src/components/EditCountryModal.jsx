import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../App.css";
import { Form, Button } from "react-bootstrap";

function CountryModal() {
  return (
    <Modal>
      <form className="EditCountryModal">
        <Form.Control placeholder="Country Name.." className="textInput" name="text" />
        <Form.Control placeholder="Capital.." className="textInput" as="textInput" rows={3} name="text" />
        <Button type="submit">Edit Country</Button>
      </form>
    </Modal>
  );
}

export default CountryModal;
