import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const FilterForm = ({ show, handleClose, handleBody }) => {
  const [tempBody, setTempBody] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempBody((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("temp", tempBody);
  };

  const handleSubmit = () => {
    handleBody(tempBody);
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Filter And Click on Apply
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="artistCategory">
            <Form.Label>Artist Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Artist Category"
              name="artist_category"
              onChange={(e) => handleChange(e)}
            />
            <Form.Text className="text-muted">
              Please Use _ for more than one words.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="genreCategory">
            <Form.Label>Select Genre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Genere"
              name="genre_category"
              onChange={(e) => handleChange(e)}
            />
            <Form.Text className="text-muted">
              Please Use _ for more than one words.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="eventCategory">
            <Form.Label>Select Event</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Event"
              name="event_category"
              onChange={(e) => handleChange(e)}
            />
            <Form.Text className="text-muted">
              Please Use _ for more than one words.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="language">
            <Form.Label>Select language</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Language"
              name="languages"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Gender">
            <Form.Label>Select Gender</Form.Label>
            <Form.Select
              type="text"
              placeholder="Enter Gender"
              name="gender"
              onChange={(e) => handleChange(e)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="city">
            <Form.Label>Select City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              name="travel_city"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Discard
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterForm;
