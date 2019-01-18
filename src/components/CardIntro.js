import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./CardIntro.css";

import clock from '../images/clock.png'


import { Redirect } from "react-router-dom";

const styles = {
  pos: {
    marginBottom: 0
  }
};

class CardIntro extends Component {
  state = {
    redirect: false
  };

  handleClick = e => {
    this.setState({
      redirect: true
    });
  };

render(){
    if (this.state.redirect)
        return(<Redirect to ="/user/survey"/>)
    return (
      <Card
        className="card"
        style={{
          width: "70%",
          alignContent: "center",
          alignItems: "center",
          margin:'auto',
          padding: '7%',
          borderRadius:'10%',
        }}
      >
        <CardContent className="cardContent">

          <h1 className="title-intro">Some information before you begin</h1>

          <div className="container-clock">
            <img className="clock" src={clock} alt='clock'/>
          </div>


          <Typography
            style={{
              textAlign: "center",
              fontFamily: "Raleway",
              fontSize: "calc(0.6vw + 0.6vh + 0.6vmin)",
              marginBottom: "20px",
              textAlign: "justify"
            }}
            >
            The survey should last around 20 minutes.{" "}
            You can quit the survey and resume at your convenience.{" "}
            Your answers will be automatically saved.{" "}
          </Typography>

          <hr/>

              <Typography
                style={{
                  textAlign: "center",
                  fontFamily: "Raleway",
                  fontSize: "calc(0.6vw + 0.6vh + 0.6vmin)",
                  marginBottom: "20px",
                  marginTop: "20px",
                  textAlign: "justify"
                }}
              >
                This survey, conducted by Exton Consulting, aims at assessing the
                level of maturity of your company / entity on Agile.
                Please note that the survey is a picture of your Agile adoption and
                capabilities level at a given moment and that the results are likely
                to change overtime.
                While completing the survey, please answer with as much transparency
                as possible !
              </Typography>


          <div className="button">
            <Button className="button-start-survey"
              onClick={this.handleClick}
              variant="contained"
              size="large"
            >
              Start Now
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

CardIntro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardIntro);
