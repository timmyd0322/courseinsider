import React from "react";
import Navigationbar from "./navbar";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Row,
  Col,
} from "react-bootstrap";

export class prof_qingge extends React.Component {
  render() {
    return (
      <div>
        <Navigationbar />
        <div class="wrapper">
          <div class="one">
            <center>
              <h1>Dr. Letu</h1>
            </center>
          </div>
          <div class="two">
            <center></center>
          </div>
          <div class="three">
            <center>
              <Form>
                <fieldset>
                  <Form.Group as={Row}>
                    Level of feedback given in course?
                    <Form.Label as="legend" column sm={2}></Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="None"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="Some"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                      <Form.Check
                        type="radio"
                        label="Sufficient"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />
                      <Form.Check
                        type="radio"
                        label="Tons"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios4"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                  Quality of education?
                    <Form.Label as="legend" column sm={2}></Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Great"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios5"
                      />
                      <Form.Check
                        type="radio"
                        label="Good"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios6"
                      />
                      <Form.Check
                        type="radio"
                        label="Bad"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios7"
                      />
                      <Form.Check
                        type="radio"
                        label="Unacceptable"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios8"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    How enthusiastic was the teacher?
                    <Form.Label as="legend" column sm={2}></Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Super"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios9"
                      />
                      <Form.Check
                        type="radio"
                        label="Kinda"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios10"
                      />
                      <Form.Check
                        type="radio"
                        label="Not at all"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios11"
                      />
                      <Form.Check
                        type="radio"
                        label="Hated it"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios12"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                  Did you find this material valuable?
                    <Form.Label as="legend" column sm={2}></Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Mandatory"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios13"
                      />
                      <Form.Check
                        type="radio"
                        label="Helpful"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios14"
                      />
                      <Form.Check
                        type="radio"
                        label="Nice to know"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios15"
                      />
                      <Form.Check
                        type="radio"
                        label="Useless"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios16"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Teacher Feedback</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </fieldset>

                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Submit</Button>
                  </Col>
                </Form.Group>
              </Form>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default prof_qingge;
