import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import RangeSlider from 'react-rangeslider';
import Toggle from 'react-toggle';
import "react-toggle/style.css"

import AmbianceList from './../components/settings/ambianceList';
import LightSlider from './../components/settings/lightSlider';
import MusiqueDropdown from './../components/settings/musiqueDropdown';

const SettingPage = () => (
  <div>
    <Container fluid className="p-0">
        <Row>
            <Col>
                <AmbianceList />
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
                <label className="ml-3">
                    <span><strong>Lumière : </strong></span>
                    <Toggle
                        icons={false}
                        onChange={()=>{}} />
                </label>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col className="px-5">
                <label><strong>Intensité : </strong></label>
                <LightSlider />
            </Col>
        </Row>
        <Row className="mt-3">
            <Col>
                <label className="ml-3"><strong>Musique : </strong></label>
                <MusiqueDropdown />
            </Col>
        </Row>
    </Container>
  </div>
);

export default SettingPage;
