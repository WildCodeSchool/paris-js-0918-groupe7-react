import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import MenuItem from "@material-ui/core/MenuItem";

import './AnswersPossibilities.css'

class AnswersPossibilities extends Component {

  state = {
    type: 0,
  };

  componentDidMount = () => {
    this.setState({ type: this.props.data_answers[0].answersTypeId });
  };

  componentWillReceiveProps = prevpropsid => {
    if (prevpropsid.id !== this.props.data_answers[0].questions_answers_possibilities.questionId)
      this.setState({ type: 0 })
  }

  componentDidUpdate = () => {
    if (
      this.state.type !==
      this.props.data_answers[0].answersTypeId
    )
      this.setState({ type: this.props.data_answers[0].answersTypeId })
  };

  handleChange = prop => e => {
    let target = e.target.value;
    e.preventDefault();
    this.setState({ [prop]: target }, () => {
          this.props.userAnswers.map(element => {
        if (element.questionId === this.props.data_answers[0].questions_answers_possibilities.questionId) {
          this.props.updateState({
            "questionId": this.props.data_answers[0].questions_answers_possibilities.questionId,
            "answersPossibilityId": parseInt(target),
            "userId": this.props.user_id
          });
          return 0;
        }
      });
      this.props.liftState({
        "questionId": this.props.data_answers[0].questions_answers_possibilities.questionId,
        "answersPossibilityId": parseInt(target),
        "userId": this.props.user_id
      });
    });
  };

  handleClick = e => {
    let target = e.currentTarget.value;
    e.preventDefault();
    this.setState({
      [this.props.data_answers[0].questions_answers_possibilities.questionId] : e.currentTarget.value
    },
      () => {
        this.props.userAnswers.map(element => {
          if (element.questionId === this.props.data_answers[0].questions_answers_possibilities.questionId) {
            this.props.updateState({
              "questionId": this.props.data_answers[0].questions_answers_possibilities.questionId,
              "answersPossibilityId": parseInt(target),
              "userId": this.props.user_id
            });
            return 0;
          }
        });
        this.props.liftState({
          "questionId": this.props.data_answers[0].questions_answers_possibilities.questionId,
          "answersPossibilityId": parseInt(target),
          "userId": this.props.user_id
        });
      });
  };


  render() {
    console.log(this.state)
    if (this.state.type === 1) {
      return (
        <div className="container-yes-no-answer">
          <Button className={ this.state[this.props.data_answers[0].questions_answers_possibilities.questionId]=== "1" ? "Selected" : "Not selected"} onClick={this.handleClick} value={this.props.data_answers[0].id} variant="outlined">
            Yes
          </Button>
          <Button className={ this.state[this.props.data_answers[0].questions_answers_possibilities.questionId]=== "2" ? "Selected" : "Not selected"} onClick={this.handleClick} value={this.props.data_answers[1].id} variant="outlined">
            No
          </Button>
          <Button  className={ this.state[this.props.data_answers[0].questions_answers_possibilities.questionId] === "3" ? "Selected" : "Not selected"} onClick={this.handleClick} value={this.props.data_answers[2].id} variant="outlined">
            I don't know
          </Button>
        </div>
      );
    }

    if (this.state.type === 2) {
      return (
        <div  className="container-lickert-answer">
          <FormControl>
            <RadioGroup row
              onChange={this.handleChange()} >
              <FormControlLabel className="lickert-answer"
                className={ this.state[this.props.data_answers[0].questions_answers_possibilities.questionId] === "4" ? "Selected" : "Not selected"}
                value="4"
                control={<Radio className={ this.state[this.props.data_answers[0].questions_answers_possibilities.questionId] === "4" ? "Selected" : "Not selected"} />}
                label="Strongly Disagree"
                labelPlacement="top"
              />
              <FormControlLabel className="lickert-answer"
              className={ this.state[this.props.data_answers[0].questions_answers_possibilities.questionId] === "5" ? "Selected" : "Not selected"}
                value="5"
                control={<Radio />}
                label="Disagree"
                labelPlacement="top"
              />
              <FormControlLabel className="lickert-answer"
              className={ this.state[this.props.data_answers[0].questions_answers_possibilities.questionId] === "6" ? "Selected" : "Not selected"}
                value="6"
                control={<Radio />}
                label="Agree"
                labelPlacement="top"
              />
              <FormControlLabel className="lickert-answer"
                className={ this.state[this.props.data_answers[0].questions_answers_possibilities.questionId] === "7" ? "Selected" : "Not selected"}
                value="7"
                control={<Radio />}
                label="Strongly agree"
                labelPlacement="top"
              />
              <FormControlLabel className="lickert-answer"
                className={ this.state[this.props.data_answers[0].questions_answers_possibilities.questionId] === "8" ? "Selected" : "Not selected"}
                value="8"
                control={<Radio />}
                label="Don't know"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </div>
      );
    }

    if (this.state.type === 3) {
      const index = [this.props.id]
      return (
        <div className="container-drop-answer">
          <TextField
            select
            onChange={this.handleChange(index)}
            value={this.state[index]}
            helperText="Select your answer"
            margin="normal"
            variant="outlined"

          >
            {this.props.data_answers.map((e, i) => (
              <MenuItem key={i} value={e.id}>
                {e.answer}
              </MenuItem>
            ))}
          </TextField>
        </div>
      );
    }

    return 0;
  }
}

export default AnswersPossibilities;
