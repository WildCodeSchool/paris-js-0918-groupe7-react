import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

class AnswersPossibilities extends Component {
  state = {
    dropDownMenu: "",
    lickertScale: "",
    yes: false,
    no: false,
    type: 0
  };

  componentDidMount = () => {
    this.setState({ type: this.props.data_answers[0].answersTypeId });
  };

  componentDidUpdate = prevprops => {
    if (
      prevprops.data_answers[0].answersTypeId !==
      this.props.data_answers[0].answersTypeId
    )
      this.setState({ type: this.props.data_answers[0].answersTypeId });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickYes = event => {
    this.setState({ yes: true, no: false });
  };

  handleClickNo = event => {
    this.setState({ no: true, yes: false });
  };

  render() {
    console.log("metal", this.props.data_answers);

    if (this.state.type === 1) {
      return (
        <div>
          <Button onClick={this.handleClickYes} value="yes" variant="outlined">
            Yes
          </Button>
          <Button onClick={this.handleClickNo} value="no" variant="outlined">
            No
          </Button>
        </div>
      );
    }
    if (this.state.type === 3) {
      return (
        <div>
          <TextField
            select
            onChange={this.handleChange("dropDownMenu")}
            value={this.state.dropDownMenu}
            helperText="Select your answer"
            margin="normal"
            variant="outlined"
          >
            {/* {this.state.answersPossibilitiesDropDown.map((e, i) => (
                        <MenuItem key={i} value={e.answer}>
                            {e.answer}
                        </MenuItem>
                    ))} */}
          </TextField>
        </div>
      );
    }
    if (this.state.type === 2) {
      return (
        <div>
          <FormControl>
            <RadioGroup row onChange={this.handleChange("lickertScale")}>
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
    return <h1>HELLO WORLD</h1>;
  }
}

export default AnswersPossibilities;
