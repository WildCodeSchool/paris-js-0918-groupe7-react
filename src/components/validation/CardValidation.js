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
          marginTop: "10%"
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

          <Button style={{ fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)", padding: "2%" ,marginRight: "50px"}}
            onClick={this.props.validPage}>
          <img className="arrow" src={arrow} alt="back arrow"/>
            Back
          </Button>

          <Typography
            gutterBottom
            style={{
              textAlign: "center",
              fontFamily: "Raleway, sans-serif",
              fontSize: "calc(0.7vw + 0.7vh + 0.7vmin)",
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
              fontSize: "calc(0.45vw + 0.45vh + 0.45vmin)",
              marginTop: "5%"
            }}
          >
            Please note that no changes will be possible after the validation
          </Typography>

          <div className="button">
          <Button onClick={this.handleClick}
                style={{
                  backgroundColor: "rgb(186, 28, 58)",
                  color: "white",
                  fontFamily: "Raleway",
                  borderRadius: "15px",
                  margin:"0 0 5% 0"
                }}
            >
                <Typography
                  gutterBottom
                  style={{
                    textAlign: "center",
                    alignItems:"center",
                    color: "white",
                    fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
                    padding: "8px 30px",
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
