import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import AnswersPossibilities from './AnswersPossibilities'

import "./Survey.css"

import Button from "@material-ui/core/Button";

class Survey extends Component{

    state = {
        data : [],
        isLoading:false,
        questionsReponses:[],
        pillarId: 0,
        subPillarId: 0,  // 2,2 pour drop down
        validationPage : false
    }

    componentDidMount(){
        const token = localStorage.getItem("token");
        axios({
            method: 'GET',
            url: 'http://localhost:3002/users/surveyById/',
            headers: {
            authorization: `Bearer ${token}`
            }
        })
        .then(res => this.setState({
            data: res.data[0] ,
            isLoading:true,
            questionsReponses: res.data[0].pole.pillars[this.state.pillarId].sub_pillars[this.state.subPillarId].questions
        }))
    }


handleBack = () => {
    if (this.state.subPillarId > 0)
    this.setState({subPillarId : this.state.subPillarId - 1},()=>{ 
        this.setState({questionsReponses: this.state.data.pole.pillars[this.state.pillarId].sub_pillars[this.state.subPillarId].questions})})

    else {
        if (this.state.pillarId > 0){
            this.setState({pillarId : this.state.pillarId - 1,subPillarId: this.state.data.pole.pillars[this.state.pillarId].sub_pillars.length - 1  }, ()=>{
                this.setState({questionsReponses: this.state.data.pole.pillars[this.state.pillarId].sub_pillars[this.state.subPillarId].questions})
            })
        }
    }
}

handleContinue = () => {
    if (this.state.subPillarId < this.state.data.pole.pillars[this.state.pillarId].sub_pillars.length - 1){ 
    this.setState({subPillarId : this.state.subPillarId +1 },()=>{ 
        this.setState({questionsReponses: this.state.data.pole.pillars[this.state.pillarId].sub_pillars[this.state.subPillarId].questions})

    })
    }else {
        if (this.state.pillarId < this.state.data.pole.pillars.length -1){
            this.setState({pillarId : this.state.pillarId +1 ,subPillarId: 0},()=>{ 
                this.setState({questionsReponses: this.state.data.pole.pillars[this.state.pillarId].sub_pillars[this.state.subPillarId].questions})
            })

        }
        else {
            // implémenter submit form
            this.setState({validationPage : true})
        }
    }
    // Implémenter le submit de la partie du questionnaire
}


    render(){
        if(!this.state.isLoading)
            return <div>Loading...</div>
        if(this.state.validationPage)
            return <Redirect to='/client/survey_validation' />
        console.log("id", this.state)
        return(
            <div>
                <Grid container>
                <Grid item xs={12} sm={4} className="background-left">
                    <div>
                        <h1>AGILE MATURITY ASSESSMENT</h1>
                    </div>

                    <div>
                        <h2>{this.state.data.pole.pillars[this.state.pillarId].name}</h2>
                    </div>

                    <div>
                        {this.state.data.pole.pillars[this.state.pillarId].sub_pillars.map((e, i) => (
                        <h3 key={i} value={e.id}>{e.name}</h3>
                        ))}
                    </div>
                </Grid>


                    <Grid item sm={8} className="background-right">
                        {this.state.questionsReponses.map((elem, index) =>
                          <div>
                            <h2 key={index}>{elem.question}</h2>
                            <AnswersPossibilities data_answers={elem.answers_possibilities}  />
                          </div>
                        )}
                    <Button
                    onClick={this.handleBack}>Back</Button>
                    <Button
                    onClick={this.handleContinue}>Continue</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Survey;
