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
          Select Filter And Click on{" "}
          <span style={{ color: "#dc3545" }}>Apply</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Form>
          <Form.Group className="mb-3" controlId="artistCategory">
            <Form.Label className="mr-3">Artist Category</Form.Label>
            <Form.Select
              name="artist_category"
              onChange={(e) => handleChange(e)}
            >
              <option value="">Artist Category</option>
              <option value="singer">Singer</option>
              <option value="music_band">Music Band</option>
              <option value="d_j">DJ</option>
              <option value="musician">Musician</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="genreCategory">
            <Form.Label className="mr-3">Select Genre</Form.Label>
            <Form.Select
              name="genre_category"
              onChange={(e) => handleChange(e)}
            >
              <option value="">Genre</option>
              <option value="bollywood_musician">Bollywood</option>
              <option value="english_musician">English</option>
              <option value="soulful_musician">Soulful</option>
              <option value="sufi">Sufi</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="eventCategory">
            <Form.Label className="mr-3">Select Event</Form.Label>
            <Form.Select
              name="event_category"
              onChange={(e) => handleChange(e)}
            >
              <option value="">Event</option>
              <option value="private_event">Private Event</option>
              <option value="wedding">Wedding</option>
              <option value="house_party">House Party</option>
              <option value="anniversary_celebration">Anniversary</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="language">
            <Form.Label className="mr-3">Select language</Form.Label>
            <Form.Select name="languages" onChange={(e) => handleChange(e)}>
              <option value="">Languages</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
              <option value="punjabi">Punjabi</option>
              <option value="marathi">Marathi</option>
              <option value="telugu">Telugu</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="Gender">
            <Form.Label className="mr-3">Select Gender</Form.Label>
            <Form.Select name="gender" onChange={(e) => handleChange(e)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="city">
            <Form.Label className="mr-3">Select City</Form.Label>
            <Form.Select name="travel_city" onChange={(e) => handleChange(e)}>
              <option value="">Cities</option>
              <option value="del">Delhi</option>
              <option value="mum">Mumbai</option>
              <option value="blr">Banglore</option>
              <option value="hyd">Hyderabad</option>
              <option value="ptn">Patna</option>
            </Form.Select>
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
