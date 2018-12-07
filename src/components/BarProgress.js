import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StepConnector from "@material-ui/core/StepConnector";
import "./BarProgress.css";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    width: "90%"
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
      borderColor: theme.palette.secondary.main
    }
  },
  connectorCompleted: {
    "& $connectorLine": {
      borderColor: theme.palette.primary.main
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

function getSteps() {
  return [
    "",
    "",
    "",
    "CLIENT",
    "",
    "",
    "",
    "COMPANY",
    "",
    "",
    "",
    "CULTURE",
    "",
    "",
    "",
    "CODE",
    "CONFIRM"
  ];
}

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
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
      <Grid container spacing={8} style={{ marginTop: "1%" }}>
        <div className={classes.root} style={{ margin: "auto" }}>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            connector={connector}
          >
            {steps.map((label, index) => {
              if (index === 3 || index === 7 || index === 11 || index >= 15) {
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

          <div>
            {this.state.activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you're finished
                </Typography>
                <Button onClick={this.handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions} />
                <div className="DivButton">
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Grid>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);
