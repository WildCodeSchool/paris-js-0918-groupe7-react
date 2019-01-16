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
    subPillarId: 0, // 2,2 pour drop down
    validationPage: false,
    thanksPage: false
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
    console.log("Survey:", this.state.pillarId, this.state.subPillarId)
    if (!this.state.isLoading) return <div>Loading...</div>;
    if (this.state.thanksPage)
      return (
        <div>
          <BarProgress
            data={this.state.data.pole.pillars}
            step={this.state.length + 2}
          />
          <ThanksPage thanksPage={this.goToThanksPage} />
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
          <Grid item sm={5} className="background-left">
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

          <Grid item xs={12} sm={7} className="background-right">
            {this.state.questionsReponses.map((elem, index) => (
              <div key={index}>
                <div className="question">{elem.question}</div>
                <AnswersPossibilities
                  data_answers={elem.answers_possibilities}
                  id={elem.id}
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
