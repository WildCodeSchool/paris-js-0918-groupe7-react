import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import "./BarProgress.css";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing.unit
  },

  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  connectorActive: {
    "& $connectorLine": {
      borderColor: theme.palette.secondary.main,
      border: "solid 2px"
    }
  },
  connectorCompleted: {
    "& $connectorLine": {
      borderColor: theme.palette.secondary.main,
      border: "solid 2px"
    }
  },
  connectorDisabled: {
    "& $connectorLine": {
      borderColor: theme.palette.grey[100]
    }
  },
  connectorLine: {
    "& $connectorLine": {
      transition: theme.transitions.create("border-color")
    }
  }
});

class BarProgress extends React.Component {
  getSteps = () => {
    const data = this.props.data;
    let steps = [];

    data.map((pillar, i) => {
      pillar.sub_pillars.map(subpillar => {
        return steps.push("");
      });
      return steps.push(pillar.name.toUpperCase());
    });
    steps.push("CONFIRM");
    return steps;
  };

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine
        }}
      />
    );
    return (
      <Grid className="progressbar-container" container spacing={8} style={{ marginTop: "1%" }}>
        <div className={classes.root} style={{ margin: "auto" }}>
          <Stepper 
            activeStep={this.props.step}
            alternativeLabel
            connector={connector}
          >
            {steps.map((label, index) => {
              if (
                index === 3 ||
                index === 7 ||
                index === 11 ||
                index >= 15 ||
                index === steps.length - 1
              ) {
                return (
                  <Step key={index}>
                    <StepLabel className="polesCircle">{label}</StepLabel>
                  </Step>
                );
              } else {
                return (
                  <Step key={index}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              }
            })}
          </Stepper>
        </div>
      </Grid>
    );
  }
}

BarProgress.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(BarProgress);
