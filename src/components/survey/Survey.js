import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import axios from "axios";

import AnswersPossibilities from "./AnswersPossibilities";
import BarProgress from "../progressBar/BarProgress";

import "./Survey.css";
import line from '../../images/line.png'

import Button from "@material-ui/core/Button";
import ValidationPage from "../validation/ValidationPage";
import ThanksPage from "../thanks/ThanksPage";

import arrow from "../../images/left-arrow.png"

class Survey extends Component {

  state = {
    data: [],
    isLoading: false,
    questionsReponses: [],
    isPosted: [],
    length: 0,
    pillarId: 0,
    subPillarId: 0,
    validationPage: false,
    thanksPage: false,
    user_answers: [],
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    let progression = [0];

    if(localStorage.getItem("progression") !== null)
      progression = localStorage.getItem("progression").split(",").map(e => e = parseInt(e))
    
    axios({
      method: "GET",
      url: "http://localhost:3002/users/surveyById/",
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(res =>
      this.setState({
        data: res.data[0],
        isLoading: true,
        length: 0,
        questionsReponses:
          res.data[0].pole.pillars[this.state.pillarId].sub_pillars[
            this.state.subPillarId
          ].questions,
          isPosted: progression
      })
    );
    console.log("Mounted", this.state.isPosted, progression)
  }

  liftState = (sonState) => {
    let answers = this.state.user_answers;
    answers.push(sonState);
    this.setState({ user_answers: answers });
  };

  updateState = (sonState) => {
    let answers = this.state.user_answers;

    answers.map((e, i) => {
      if (e.questionId === sonState.questionId) {
        e.userId = sonState.userId;
        e.answersPossibilityId = sonState.answersPossibilityId;
        answers.splice(i, 1)
      }
    }, () => this.setState({ user_answers: answers }));
  };

  goToThanksPage = () => {
    this.setState({ thanksPage: !this.state.thanksPage });
  };

  goBacktoSurvey = () => {
    this.setState({ length: this.state.length - 1, validationPage: false });
  };

  handleBack = () => {
    if (this.state.subPillarId > 0)
      this.setState({ subPillarId: this.state.subPillarId - 1 }, () => {
        this.setState({
          questionsReponses: this.state.data.pole.pillars[this.state.pillarId]
            .sub_pillars[this.state.subPillarId].questions,
          length: this.state.length - 1,
          user_answers: [],
        });
      });
    else {
      if (this.state.pillarId > 0) {
        this.setState(
          {
            pillarId: this.state.pillarId - 1,
            subPillarId:
              this.state.data.pole.pillars[this.state.pillarId].sub_pillars
                .length - 1
          },
          () => {
            this.setState({
              questionsReponses: this.state.data.pole.pillars[
                this.state.pillarId
              ].sub_pillars[this.state.subPillarId].questions,
              length: this.state.length - 2,
              user_answers: [],
            });
          }
        );
      }
    }
  };

  submitAnswers = () => {
    let url = 'http://localhost:3002/users_answers_possibilities_questions';
    const config = this.state.user_answers

    let array = this.state.isPosted;
    console.log("array", this.state.isPosted)

    if (array[this.state.length] === 1) {
      this.state.user_answers.map((e, i) => {
        axios.put(url, config[i])
          .then(this.setState({ user_answers: [], isPosted: array }));
      });
    } else {
      if (this.state.length === 4 || this.state.length === 8 || this.state.length === 12) {
        array.push(0);
      }
  
      if (array[this.state.length] === 0) {
        array.push(0);
        array[this.state.length] = 1;
  
        this.state.user_answers.map((e, i) => {
          axios.post(url, config[i])
            .then(this.setState({ user_answers: [], isPosted: array }));
        });
      }

    }

    
    localStorage.setItem("progression", array.join(','))
    console.log("FINAL", this.state.isPosted)
  }

  handleContinue = () => {
    if (
      this.state.subPillarId <
      this.state.data.pole.pillars[this.state.pillarId].sub_pillars.length - 1
    ) {
      this.setState({ subPillarId: this.state.subPillarId + 1 },
        () => {
          this.setState({
            questionsReponses: this.state.data.pole.pillars[this.state.pillarId]
              .sub_pillars[this.state.subPillarId].questions,
            length: this.state.length + 1,
          });
        });
    } else {
      if (this.state.pillarId < this.state.data.pole.pillars.length - 1) {
        this.setState(
          { pillarId: this.state.pillarId + 1, subPillarId: 0 },
          () => {
            this.setState({
              questionsReponses: this.state.data.pole.pillars[
                this.state.pillarId
              ].sub_pillars[this.state.subPillarId].questions,
              length: this.state.length + 2,
            });
          }
        );
      } else {
        this.setState({ validationPage: true, length: this.state.length + 1 });
      }
    }
    this.submitAnswers();
  };

  render() {
    console.table('UnitedStates', this.state.user_answers)
    console.table(this.state.user_answers)
    if (!this.state.isLoading) return <div>Loading...</div>;
    if (this.state.thanksPage)
      return (
        <div>
          <Hidden only={['xs']}>
            <BarProgress
              data={this.state.data.pole.pillars}
              step={this.state.length + 2}
            />
          </Hidden>
          <ThanksPage
            thanksPage={this.goToThanksPage}
            answers_users={this.state.user_answers} />
        </div>
      );
    if (this.state.validationPage)
      return (
        <div>
          <Hidden only={['xs']}>
            <BarProgress
              data={this.state.data.pole.pillars}
              step={this.state.length + 1}
            />
          </Hidden>
          <ValidationPage
            thanksPage={this.goToThanksPage}
            validPage={this.goBacktoSurvey}
            answers_users={this.state.user_answers}
          />
        </div>
      );

    return (
      <div>
        <Grid container>
          <Hidden only={['xs']}>
            <BarProgress
              data={this.state.data.pole.pillars}
              step={this.state.length}
            />
          </Hidden>

          <Hidden only={['xs']}>
            <Grid item sm={3} md={4} className="background-left">
              <div>
                <h1 className="title-survey">AGILE MATURITY ASSESSMENT</h1>
              </div>

              <div>
                <h2 className="pole-survey">{this.state.data.pole.pillars[this.state.pillarId].name}</h2>
              </div>

              <div>
                <img className="line-survey" src={line} alt='separator' />
              </div>

              <div className="container-subpillars-survey">
                {this.state.data.pole.pillars[
                  this.state.pillarId
                ].sub_pillars.map((e, i) => (
                  <h3 className={this.state.subPillarId === i ? "subpillars-survey-active" : "subpillar-survey"} key={i} value={e.id}>
                    {e.name}
                  </h3>
                ))}
              </div>
            </Grid>
          </Hidden>

          <Grid item xs={12} sm={9} md={8} className="background-right">
            {this.state.questionsReponses.map((elem, index) => (
              <div key={index}>
                <div className="question">{elem.question}</div>
                <AnswersPossibilities
                  data_answers={elem.answers_possibilities}
                  liftState={this.liftState}
                  updateState={this.updateState}
                  userAnswers={this.state.user_answers}
                  id={elem.id}
                  user_id={this.state.data.id}
                />
              </div>
            ))}
            <div className="container-survey-button">
              <Button style={{ padding: "2%", marginRight: "50px", fontSize: "calc(0.5vw + 0.5vh + 0.5vmin)" }}
                className={this.state.pillarId === 0 && this.state.subPillarId === 0 ? 'HiddenBack' : 'VisibleBack'} onClick={this.handleBack}>
                <img className="arrow" src={arrow} alt="back arrow" />
                Back
            </Button>

              <Button className={this.state.questionsReponses.length === this.state.user_answers.length ? "continue-button" : "hidden-button"} onClick={this.handleContinue}>CONTINUE</Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Survey;
