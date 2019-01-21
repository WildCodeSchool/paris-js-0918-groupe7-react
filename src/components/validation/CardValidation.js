import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./CardValidation.css";

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
          <Button
            onClick={this.props.validPage}
            style={{
              border: "solid"
            }}
          >
            {" "}
            Back{" "}
          </Button>
          <Typography
            gutterBottom
            style={{
              textAlign: "center",
              fontFamily: "Raleway",
              fontSize: "1.5em"
            }}
          >
            Congratulations, you’ve finished !
          </Typography>
          <Typography
            gutterBottom
            style={{
              textAlign: "center",
              fontFamily: "Raleway",
              fontSize: "1.5em"
            }}
          >
            Please note that no changes will be possible after the validation
          </Typography>

          <div className="button">
            <Button
              onClick={this.handleClick}
              variant="contained"
              color="primary"
              className="but"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                marginTop: "5%",
                fontFamily: "Raleway",
                fontSize: "1.5em"
              }}
            >
              DONE
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(CardValidation);
