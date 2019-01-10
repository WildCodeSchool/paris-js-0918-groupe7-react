import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import axios from 'axios';

import "./Survey.css"

import DropMenu from "./DropMenu"

class Survey extends Component{

    state = {
        data : [],
        isLoading:false
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
    .then(res => this.setState({ data: res.data , isLoading:true}));
    }


    render(){

        if(!this.state.isLoading)
            return <div>Loading...</div>
        return(
            <div>
                <Grid container>
                <Grid item xs={12} sm={6} className="background-left">
                    <div>
                        <h1>AGILE MATURITY ASSESSMENT</h1>
                    </div>

                    <div>
                        <h2>{this.state.data[0].pole.pillars[0].name}</h2>
                    </div>

                    <div>
                        {this.state.data[0].pole.pillars[0].sub_pillars.map((e, i) => (
                        <h3 key={i} value={e.id}>{e.name}</h3>
                        ))}
                    </div>
                </Grid>


                <Grid item sm={6} className="background-right">
                <div>
                    {this.state.data[0].pole.pillars[0].sub_pillars[0].questions.map((e, i) => (
                    <div key={i} value={e.id}>{e.question}<DropMenu/></div>
                    ))}
                </div>
                {/* <div>
                    {this.state.data[0].pole.pillars[0].sub_pillars[0].questions.map((e, i) => (
                    <div key={i} value={e.id}>{e.question}{e.answers_possibilities.map((e, i) => (<DropMenu key={i} value={e.answer}>{e.value}</DropMenu>))}</div>
                    ))}
                </div> */}
                </Grid>
                </Grid>
            </div>
        )
    }
}

export default Survey;
