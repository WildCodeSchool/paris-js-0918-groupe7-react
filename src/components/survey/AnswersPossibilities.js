import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import MenuItem from "@material-ui/core/MenuItem";

class AnswersPossibilities extends Component {

  state = {
    type: 0,
  };

  componentDidMount = () => {
    console.log('DidMount')
    this.setState({ type: this.props.data_answers[0].answersTypeId });
  };

  componentWillReceiveProps = prevpropsid => {
    console.log('WillReceiveProps')
    if (prevpropsid.id !== this.props.id)
      this.setState({ type: 0 })
  }

  componentDidUpdate = () => {
    console.log('DidUpdate')
    if (
      this.state.type !==
      this.props.data_answers[0].answersTypeId
    )
      this.setState({ type: this.props.data_answers[0].answersTypeId })
  };



  handleChange = prop => e => {
    e.preventDefault();
    this.setState({ [prop]: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    const index = [(`Id_Question ${this.props.id}`)]
    this.setState({ [index]: e.currentTarget.value })
  };



  render() {
    console.log("SATAN", this.state)

    const index = [(`Id_Question ${this.props.id}`)]

    if (this.state.type === 1) {
      return (
        <div>
          <Button onClick={this.handleClick} value="Yes" variant="outlined">
            Yes
          </Button>
          <Button onClick={this.handleClick} value="No" variant="outlined">
            No
          </Button>
          <Button onClick={this.handleClick} value="I don't know" variant="outlined">
            I don't know
          </Button>
        </div>
      );
    }

    if (this.state.type === 2) {
      return (
        <div>
          <FormControl>
            <RadioGroup row onChange={this.handleChange(index)}>
              <FormControlLabel
                value="Strongly Disagree"
                control={<Radio />}
                label="Strongly Disagree"
              />
              <FormControlLabel

                value="Disagree"
                control={<Radio />}
                label="Disagree"
              />
              <FormControlLabel
                value="Agree"
                control={<Radio />}
                label="Agree"
              />
              <FormControlLabel
                value="Strongly agree"
                control={<Radio />}
                label="Strongly agree"
              />
              <FormControlLabel
                value="Don't know"
                control={<Radio />}
                label="Don't know"
              />
            </RadioGroup>
          </FormControl>
        </div>
      );
    }

    if (this.state.type === 3) {

      return (
        <div>
          <TextField
            select
            onChange={this.handleChange(index)}
            value={this.state[index]}
            helperText="Select your answer"
            margin="normal"
            variant="outlined"

          >
            {this.props.data_answers.map((e, i) => (
              <MenuItem key={i} value={e.answer}>
                {e.answer}
              </MenuItem>
            ))}
          </TextField>
        </div>
      );
    }

    return <h1>HELLO WORLD</h1>;
  }
}

export default AnswersPossibilities;
