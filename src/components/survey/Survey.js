import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import axios from "axios";

import AnswersPossibilities from "./AnswersPossibilities";
import BarProgress from "../BarProgress";

import "./Survey.css";
import line from '../../images/line.png'

import Button from "@material-ui/core/Button";
import ValidationPage from "../ValidationPage";
import ThanksPage from "../ThanksPage";

class Survey extends Component {

  state = {
    data: [],
    isLoading: false,
    questionsReponses: [],
    length: 0,
    pillarId: 0,
    subPillarId: 0,
    validationPage: false,
    thanksPage: false,
    user_answers: []
  };

  componentDidMount() {
    const token = localStorage.getItem("token");

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
          ].questions
      })
    );
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
          length: this.state.length - 1
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
              length: this.state.length - 2
            });
          }
        );
      }
    }
  };

  submitAnswers = () => {
    let url = 'http://localhost:3002/users_answers_possibilities_questions'
    const config = this.state.user_answers

    this.state.user_answers.map((e, i) => {
      axios.post(url, config[i])
        .then(this.setState({ user_answers: [] }));
    })
  }

  handleContinue = () => {
    if (
      this.state.subPillarId <
      this.state.data.pole.pillars[this.state.pillarId].sub_pillars.length - 1
    ) {
      this.setState({ subPillarId: this.state.subPillarId + 1 }, () => {
        this.setState({
          questionsReponses: this.state.data.pole.pillars[this.state.pillarId]
            .sub_pillars[this.state.subPillarId].questions,
          length: this.state.length + 1
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
              length: this.state.length + 2
            });
          }
        );
      } else {
        this.setState({ validationPage: true, length: this.state.length + 1 });
      }
    }
    // Implémenter le submit de la partie du questionnaire
    this.submitAnswers();
  };

  render() {
    if (!this.state.isLoading) return <div>Loading...</div>;
    if (this.state.thanksPage)
      return (
        <div>
          <BarProgress
            data={this.state.data.pole.pillars}
            step={this.state.length + 2}
          />
          <ThanksPage
            thanksPage={this.goToThanksPage}
            answers_users={this.state.user_answers} />
        </div>
      );
    if (this.state.validationPage)
      return (
        <div>
          <BarProgress
            data={this.state.data.pole.pillars}
            step={this.state.length + 1}
          />
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
        <Hidden only={['xs', 'sm']}>
          <BarProgress
            data={this.state.data.pole.pillars}
            step={this.state.length}
          />
          </Hidden>

        <Hidden only={['xs']}>
          <Grid item sm={4} md={3} className="background-left">
            <div>
              <h1 className="title-survey">AGILE MATURITY ASSESSMENT</h1>
            </div>

            <div>
              <h2 className="pole-survey">{this.state.data.pole.pillars[this.state.pillarId].name}</h2>
            </div>

            <div>
            <img className="line-survey" src={line} alt='separator'/>
            </div>

            <div className="container-subpillars-survey">
              {this.state.data.pole.pillars[
                this.state.pillarId
              ].sub_pillars.map((e, i) => (
                <h3 className="subpillars-survey" key={i} value={e.id}>
                  {e.name}
                </h3>
              ))}
            </div>
          </Grid>
          </Hidden>

          <Grid item xs={12} sm={8} md={9} className="background-right">
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
            <Button onClick={this.handleBack}>Back</Button>
            <Button onClick={this.handleContinue}>continue</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Survey;
