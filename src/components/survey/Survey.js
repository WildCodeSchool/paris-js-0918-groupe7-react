import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import AnswersPossibilities from "./AnswersPossibilities";
import BarProgress from "../BarProgress";

import "./Survey.css";

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
    subPillarId: 0, // 2,2 pour drop down
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
    console.log("Flic0", this.state.user_answers)
    let answers = this.state.user_answers;
    answers.map((e, i) => {
      if (e.questionId === sonState.questionId) {
        console.log(i)
        e.userId = sonState.userId;
        e.answersPossibilityId = sonState.answersPossibilityId;
        answers.splice(i, 1)
      }


    }, () => this.setState({ user_answers: answers }));
    console.log("Flic4", answers);

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
        // implémenter submit form
        this.setState({ validationPage: true, length: this.state.length + 1 });
      }
    }
    // Implémenter le submit de la partie du questionnaire
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
          <BarProgress
            data={this.state.data.pole.pillars}
            step={this.state.length}
          />
          <Grid item xs={12} sm={4} className="background-left">
            <div>
              <h1>AGILE MATURITY ASSESSMENT</h1>
            </div>

            <div>
              <h2>{this.state.data.pole.pillars[this.state.pillarId].name}</h2>
            </div>

            <div>
              {this.state.data.pole.pillars[
                this.state.pillarId
              ].sub_pillars.map((e, i) => (
                <h3 key={i} value={e.id}>
                  {e.name}
                </h3>
              ))}
            </div>
          </Grid>

          <Grid item sm={8} className="background-right">
            {this.state.questionsReponses.map((elem, index) => (
              <div key={index}>
                <h2>{elem.question}</h2>
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
