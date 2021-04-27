import React, { Component } from 'react';
import Navigationbar from './navbar';
import './course.scss'


export class COMP_121 extends React.Component {    

  state = {
    review:""
  };
  constructor() {
    super();

    this.state = {
      rating: '2'
    };

    this.onRadioChange1 = this.onRadioChange1.bind(this);
    this.onSubmit1 = this.onSubmit1.bind(this);

    this.state = {
      second: '2'
    };

    this.onRadioChange2 = this.onRadioChange2.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);

    this.state = {
      third: '2'
    };

    this.onRadioChange3 = this.onRadioChange3.bind(this);
    this.onSubmit3 = this.onSubmit3.bind(this);

    this.state = {
      fourth: '2'
    };

    this.onRadioChange4 = this.onRadioChange4.bind(this);
    this.onSubmit4 = this.onSubmit4.bind(this);

    this.state = {
      fifth: '2'
    };

    this.onRadioChange5 = this.onRadioChange5.bind(this);
    this.onSubmit5 = this.onSubmit5.bind(this);

  }

  onRadioChange1 = (e) => {
    this.setState({
      rating: e.target.value
    });
  }

  onSubmit1 = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  onRadioChange2 = (e) => {
    this.setState({
      second: e.target.value
    });
  }

  onSubmit2 = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  onRadioChange3 = (e) => {
    this.setState({
      third: e.target.value
    });
  }

  onSubmit3 = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  onRadioChange4 = (e) => {
    this.setState({
      fourth: e.target.value
    });
  }

  onSubmit4 = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  onRadioChange5 = (e) => {
    this.setState({
      fifth: e.target.value
    });
  }

  onSubmit5 = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange = event => {
    this.setState({review: event.target.value});
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return  ( <div>
         <Navigationbar/>
         
         <div class="wrapper">
    <div class="one"><center>
    <h1>Course Name</h1>
    </center>
    </div>
  <div class="two"><center>
    <a href="/logoat.svg">Course Syllabus</a>
    </center>
  </div>
  <div class="three"><center>
    Course Desciption
  <h3>
  This course examines the increasingly complex interaction between computer systems, our social fabric and ethics. Software and microprocessors control automobiles, banks, brokerage trading, aircraft, medical equipment, and just about every other device used in industrialized nations. Impacts of computerized systems upon personal privacy and citizen involvement in governance are examined in relation to the public policy questions of the day. The role and opportunity for historically under-represented groups will be explored. Interdisciplinary readings are stressed, along with required written and oral presentations and class debates.  </h3>
  <form onSubmit={this.onSubmit}>
          <strong>Level of work in class from 1 to 5?</strong>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="1"
                  checked={this.state.rating === "1"}
                  onChange={this.onRadioChange}
                />
                <span>1</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="2"
                  checked={this.state.rating === "2"}
                  onChange={this.onRadioChange}
                />
                <span>2</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="3"
                  checked={this.state.rating === "3"}
                  onChange={this.onRadioChange}
                />
                <span>3</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="4"
                  checked={this.state.rating === "4"}
                  onChange={this.onRadioChange}
                />
                <span>4</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="5"
                  checked={this.state.rating === "5"}
                  onChange={this.onRadioChange}
                />
                <span>5</span>
              </label>
            </li>
          </ul>

          <button type="submit">submit</button>
        </form>
        <form onSubmit={this.onSubmit}>
          <strong>Level of work in class from 1 to 5?</strong>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="1"
                  checked={this.state.second === "1"}
                  onChange={this.onRadioChange}
                />
                <span>1</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="2"
                  checked={this.state.second === "2"}
                  onChange={this.onRadioChange}
                />
                <span>2</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="3"
                  checked={this.state.second === "3"}
                  onChange={this.onRadioChange}
                />
                <span>3</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="4"
                  checked={this.state.second === "4"}
                  onChange={this.onRadioChange}
                />
                <span>4</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="5"
                  checked={this.state.second === "5"}
                  onChange={this.onRadioChange}
                />
                <span>5</span>
              </label>
            </li>
          </ul>

          <button type="submit">submit</button>
        </form>
        <form onSubmit={this.onSubmit}>
          <strong>Level of work in class from 1 to 5?</strong>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="1"
                  checked={this.state.third === "1"}
                  onChange={this.onRadioChange}
                />
                <span>1</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="2"
                  checked={this.state.third === "2"}
                  onChange={this.onRadioChange}
                />
                <span>2</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="3"
                  checked={this.state.third === "3"}
                  onChange={this.onRadioChange}
                />
                <span>3</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="4"
                  checked={this.state.third === "4"}
                  onChange={this.onRadioChange}
                />
                <span>4</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="5"
                  checked={this.state.third === "5"}
                  onChange={this.onRadioChange}
                />
                <span>5</span>
              </label>
            </li>
          </ul>

          <button type="submit">submit</button>
        </form>
        <form onSubmit={this.onSubmit}>
          <strong>Level of work in class from 1 to 5?</strong>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="1"
                  checked={this.state.fourth === "1"}
                  onChange={this.onRadioChange}
                />
                <span>1</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="2"
                  checked={this.state.fourth === "2"}
                  onChange={this.onRadioChange}
                />
                <span>2</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="3"
                  checked={this.state.fourth === "3"}
                  onChange={this.onRadioChange}
                />
                <span>3</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="4"
                  checked={this.state.fourth === "4"}
                  onChange={this.onRadioChange}
                />
                <span>4</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="5"
                  checked={this.state.fourth === "5"}
                  onChange={this.onRadioChange}
                />
                <span>5</span>
              </label>
            </li>
          </ul>

          <button type="submit">submit</button>
        </form>
        <form onSubmit={this.onSubmit}>
          <strong>Level of work in class from 1 to 5?</strong>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="1"
                  checked={this.state.fifth === "1"}
                  onChange={this.onRadioChange}
                />
                <span>1</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="2"
                  checked={this.state.fifth === "2"}
                  onChange={this.onRadioChange}
                />
                <span>2</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="3"
                  checked={this.state.fifth === "3"}
                  onChange={this.onRadioChange}
                />
                <span>3</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="4"
                  checked={this.state.fifth === "4"}
                  onChange={this.onRadioChange}
                />
                <span>4</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="5"
                  checked={this.state.fifth === "5"}
                  onChange={this.onRadioChange}
                />
                <span>5</span>
              </label>
            </li>
          </ul>

          <button type="submit">submit</button>
        </form>
  </center>
  </div>
  <div class="four"><center>Four

  </center>
  </div>
  <div class="five"><center>Enter your review of your time with this class.
  <textarea value={this.state.review} onChange={this.handleChange} />
  <div>
<button onClick={this.handleSubmit}>Submit</button>
</div>
  </center>
  </div>
  <div class="six"><center>Six

  </center>
  </div>
  </div>
        </div>
        
    );
  }
}

export default COMP_121;