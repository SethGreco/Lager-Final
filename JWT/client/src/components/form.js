import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Form extends Component {


  state = {
    who: "",
    when: "",
    what: "",
    how: ""
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {who, when, what, how} = this.state;
    const lead = {who, when, what, how};
    const conf = {
      method: "post",
      body: JSON.stringify(lead),
      headers: new Headers({"Content-Type": "application/json"})
    };

    const result = await fetch('http://127.0.0.1:8000/api/project/',conf)
    console.log(result);
    this.props.onSumbitClick()
  };

  handleReset = e => {

    this.setState({who: "", when: "", what: "", how: ""})
};


  render() {
    const {who, what, how} = this.state;
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>

          <div className="field">
            <label className="label">Who</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="who"
                onChange={this.handleChange}
                value={who}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">What</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="what"
                onChange={this.handleChange}
                value={what}
                required
              />
            </div>
          </div>


          <div className="field">
            <label className="label">How</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="how"
                onChange={this.handleChange}
                value={how}
                required
              />
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div className="control">
            <Button variant="contained" type="submit" className="classes.button" color="primary">
              Post Report
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="contained" className="classes.button" color="secondary" onClick={this.handleReset}>
              Reset Form
            </Button>

          </div>
        </form>
        &nbsp;&nbsp;&nbsp;
      </div>

    );
  }


}

export default Form;