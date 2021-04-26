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

export class TeacherPage extends React.Component {
  render() {
    return (
      <div>
        <Navigationbar />
        <div class="wrapper">
          <div class="one">
            <center>
              <h1>TeacherName</h1>
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
                    First Question
                    <Form.Label as="legend" column sm={2}></Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="first radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="second radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                      <Form.Check
                        type="radio"
                        label="third radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />
                      <Form.Check
                        type="radio"
                        label="fourth radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios4"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    Second Question
                    <Form.Label as="legend" column sm={2}></Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="first radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios5"
                      />
                      <Form.Check
                        type="radio"
                        label="second radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios6"
                      />
                      <Form.Check
                        type="radio"
                        label="third radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios7"
                      />
                      <Form.Check
                        type="radio"
                        label="fourth radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios8"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    Third Question
                    <Form.Label as="legend" column sm={2}></Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="first radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios9"
                      />
                      <Form.Check
                        type="radio"
                        label="second radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios10"
                      />
                      <Form.Check
                        type="radio"
                        label="third radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios11"
                      />
                      <Form.Check
                        type="radio"
                        label="fourth radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios12"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    Fourth Question
                    <Form.Label as="legend" column sm={2}></Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="first radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios13"
                      />
                      <Form.Check
                        type="radio"
                        label="second radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios14"
                      />
                      <Form.Check
                        type="radio"
                        label="third radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios15"
                      />
                      <Form.Check
                        type="radio"
                        label="fourth radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios16"
                      />
                    </Col>
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

export default TeacherPage;
