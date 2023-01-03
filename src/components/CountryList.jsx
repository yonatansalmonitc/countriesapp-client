import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Country from './Country';
import EditCountryModal from './EditCountryModal';
import AppContext from "../context/appContext";

function CountryList() {
  const { countryList } = useContext(AppContext);

  return (
    <Container>
      <Row>
        {countryList.map((country) => (
          <Col key={country.id} md={3}>
            <Country country={country}  />
          </Col>
        ))}
      </Row>
      <EditCountryModal />
    </Container>
  );
}

export default CountryList;
