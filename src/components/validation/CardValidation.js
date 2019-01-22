import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./CardValidation.css";


import arrow from "../../images/left-arrow.png"

const styles = {
  pos: {
    marginBottom: 0
  }
};

class CardValidation extends Component {
  state = {
    redirect: false
  };

  handleClick = e => {
    this.props.thanksPage();
  };

  handleBack = e => {
    this.props.validPage();
  };

  render() {
    return (
      <Card
        className="card"
        style={{
          width: "70%",
          alignContent: "center",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20%"
        }}
      >
        <CardContent className="cardContent">
          {/* <Button
            onClick={this.props.validPage}
            style={{
              border: "solid"
            }}
          >
            {" "}
            Back{" "}
          </Button> */}

          <Button style={{ fontSize: "calc(0.6vw + 0.6vh + 0.6vmin)" ,padding: "2%" ,marginRight: "50px"}}
            onClick={this.props.validPage}>
            <img className="arrow" src={arrow} alt="back arrow"/>
              Back
          </Button>

          <Typography
            gutterBottom
            style={{
              textAlign: "center",
              fontFamily: "Raleway, sans-serif",
              fontSize: "calc(0.8vw + 0.8vh + 1.2vmin)",
              marginTop: "5%"
            }}
          >
            Congratulations, you’ve finished !
          </Typography>
          <Typography
            gutterBottom
            style={{
              textAlign: "center",
              fontFamily: "Raleway, sans-serif",
              fontSize: "calc(0.6vw + 0.6vh + 1vmin)",
            }}
          >
            Please note that no changes will be possible after the validation
          </Typography>

          <div className="button">
          <Button className="button-start-survey"
              onClick={this.handleClick}
              variant="contained"
              size="large"
              style={{
                backgroundColor: "rgb(186, 28, 58)",
                color: "white",
                fontFamily: "Raleway",
                borderRadius: "15px",
                marginTop: "5%"
              }}
            >
                <Typography
                  gutterBottom
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "calc(0.6vw + 0.6vh + 1vmin)",
                    padding: "15px 35px",
                    fontFamily: "Raleway",
                  }}
                  >
                  VALIDATE
                </Typography>
              </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(CardValidation);
