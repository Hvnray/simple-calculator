import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  displayArea: {
    backgroundColor: '#CCE6FF',
    minWidth: '100%',
    maxWidth: '100%',
    borderRadius: '12px',
  },
  userLink1: {
    color: '#163A5D',
    textDecoration: 'none',
    fontWeight: 600,
    paddingLeft: '2rem',
    // float: 'right',
  },
  userLink: {
    color: '#163A5D',
    textDecoration: 'none',
    fontWeight: 600,
    paddingLeft: '3rem',
    // float: 'right',
  },
  userDetails: {
    color: '#649BD2',
    fontWeight: 500,
  },
  displayInput: {
    color: '#649BD2',
    fontWeight: 600,
    minHeight: '2rem',
    letterSpacing: '5px',
  },
  displayResult: {
    wordWrap: 'break-word',
    color: '#173B60',
    // fontSize: '1.3vw',
    fontWeight: 900,
    minHeight: '4rem',
  },
  numberButton: {
    backgroundColor: '#CCE6FF',
    padding: theme.spacing(2),
    fontSize: '1.1rem',
    borderRadius: '16px',
    width: '90%',
    marginTop: theme.spacing(1),
    fontWeight: 900,
    color: '#163A5D',
    '&:hover': {
      color: '#CCE6FF',
      backgroundColor: '#163A5D',
    },
  },
  enterButton: {
    textTransform: 'none',
    backgroundColor: '#4D8AC8',
    padding: theme.spacing(2),
    width: '94.5%',
    marginTop: theme.spacing(1),
    borderRadius: '16px',
    fontWeight: 900,
    fontSize: '1.1rem',
    color: '#EAF5FF',
    '&:hover': {
      color: '#4D8AC8',
      backgroundColor: '#163A5D',
    },
  },
  actionButton: {
    backgroundColor: '#A3D1FA',
    padding: theme.spacing(2),
    width: '90%',
    marginTop: theme.spacing(1),
    fontSize: '1.1rem',
    borderRadius: '16px',
    fontWeight: 900,
    color: '#4D8AC7',
    '&:hover': {
      color: '#A3D1FA',
      backgroundColor: '#4D8AC7',
    },
  },
  specialButton: {
    textTransform: 'none',
    backgroundColor: '#A3D1FA',
    padding: theme.spacing(2),
    width: '90%',
    marginTop: theme.spacing(1),
    fontWeight: 700,
    fontSize: '1.1rem',
    borderRadius: '16px',
    color: '#4D8AC7',
    '&:hover': {
      color: '#A3D1FA',
      backgroundColor: '#4D8AC7',
    },
  },
  paper: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#EBF5FF',
    height: 'max-content',
    width: '100%',
    borderRadius: '12px',
  },
}));
export default function FullWidthGrid() {
  const classes = useStyles();
  const [currentInput, setCurrentInput] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [result, setResult] = React.useState('');
  const [islastInputAction, setlastInputAction] = React.useState(false);
  const [lastInput, setlastInput] = React.useState('');
  const handleEnterFunction = () => {
    setlastInput('Enter');
    setlastInputAction(false);
    try {
      // eslint-disable-next-line no-eval
      const response = eval(currentInput);
      const result = response.toString();
      setResult(result);
      // setlastInputAction(result)
    } catch (error) {
      console.log(error, 'error');
      setResult('Math Error');
    }
  };
  const handleInput = (e) => {
    let input = currentInput;
    input += e;
    setlastInputAction(false);
    setCurrentInput(input);
  };
  const handleSmile = () => {
    setlastInputAction(false);
    setChecked((p) => !p);
  };
  const handleDot = () => {
    setlastInputAction(false);
    if ('.' !== currentInput.slice(-1)) {
      setCurrentInput((input) => (input += '.'));
    }
  };
  const handleAction = (e) => {
    let editedText;
    if (islastInputAction) {
      editedText = currentInput.slice(0, -1);
      // setCurrentInput(editedText);
    } else {
      editedText = currentInput;
    }
    if (lastInput === 'Enter') {
      setCurrentInput(result);
      editedText = result;
    }
    switch (e) {
      case 'minus':
        editedText += '-';
        break;
      case 'plus':
        editedText += '+';
        break;
      case 'times':
        editedText += '*';
        break;
      case 'divide':
        editedText += '/';
        break;
      default:
        editedText += '';
        break;
    }
    setlastInputAction(true);
    setCurrentInput(editedText);
    setlastInput(e);
  };
  const handleDelete = () => {
    setlastInputAction(false);
    if (currentInput.length <= 1) {
      setResult('');
    }
    if (currentInput.length < 1) return;
    const editedText = currentInput.slice(0, -1);
    setCurrentInput(editedText);
  };
  const handleClear = () => {
    setlastInputAction(false);
    setCurrentInput('');
    setResult('');
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignItems="center" direction="column">
        {/* <Grid item xs={0}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
          <Paper className={classes.paper} elevation={5}>
            <Box
              width="100%"
              flexGrow
              mx="auto"
              className={classes.displayArea}
            >
              <Box textAlign="start" mx={2} py={1}>
                <Typography variant="h6" className={classes.displayInput}>
                  {currentInput}
                </Typography>
              </Box>
              <Box textAlign="end" mx={2} pb={2}>
                <Typography variant="h3" className={classes.displayResult}>
                  {result}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" width="100%">
              <Box width="20%">
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  fullWidth
                  onClick={() => handleInput('7')}
                  className={classes.numberButton}
                >
                  7
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disableElevation
                  name="8"
                  onClick={() => handleInput('8')}
                  className={classes.numberButton}
                >
                  8
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disableElevation
                  name="9"
                  onClick={() => handleInput('9')}
                  className={classes.numberButton}
                >
                  9
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  disableElevation
                  name="delete"
                  onClick={handleDelete}
                  className={classes.specialButton}
                >
                  del
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  disableElevation
                  name="clear"
                  onClick={handleClear}
                  className={classes.specialButton}
                >
                  clear
                </Button>
              </Box>
            </Box>
            <Box display="flex" width="100%">
              <Box width="20%">
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  fullWidth
                  name="4"
                  onClick={() => handleInput('4')}
                  className={classes.numberButton}
                >
                  4
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disableElevation
                  name="5"
                  onClick={() => handleInput('5')}
                  className={classes.numberButton}
                >
                  5
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disableElevation
                  name="6"
                  onClick={() => handleInput('6')}
                  className={classes.numberButton}
                >
                  6
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  disableElevation
                  name="times"
                  onClick={() => handleAction('times')}
                  className={classes.actionButton}
                >
                  &times;
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  disableElevation
                  name="divide"
                  onClick={() => handleAction('divide')}
                  className={classes.actionButton}
                >
                  &divide;
                </Button>
              </Box>
            </Box>
            <Box display="flex" width="100%">
              <Box width="20%">
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  fullWidth
                  name="1"
                  onClick={() => handleInput('1')}
                  className={classes.numberButton}
                >
                  1
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disableElevation
                  name="2"
                  onClick={() => handleInput('2')}
                  className={classes.numberButton}
                >
                  2
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disableElevation
                  name="3"
                  onClick={() => handleInput('3')}
                  className={classes.numberButton}
                >
                  3
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  disableElevation
                  name="plus"
                  onClick={() => handleAction('plus')}
                  className={classes.actionButton}
                >
                  &#43;
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  disableElevation
                  name="minus"
                  onClick={() => handleAction('minus')}
                  className={classes.specialButton}
                >
                  &minus;
                </Button>
              </Box>
            </Box>
            <Box display="flex" width="100%">
              <Box width="20%">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disableElevation
                  name="smile"
                  onClick={handleSmile}
                  className={classes.numberButton}
                >
                  {!checked ? <span>&#128528;</span> : <span>&#128516;</span>}
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  fullWidth
                  name="."
                  onClick={handleDot}
                  className={classes.numberButton}
                >
                  .
                </Button>
              </Box>
              <Box width="20%">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disableElevation
                  name="0"
                  onClick={() => handleInput('0')}
                  className={classes.numberButton}
                >
                  0
                </Button>
              </Box>
              <Box width="40%">
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  disableElevation
                  name="enter"
                  onClick={handleEnterFunction}
                  className={classes.enterButton}
                >
                  <Box mx={5}>Enter</Box>
                </Button>
              </Box>
            </Box>
            <Collapse in={checked} collapsedHeight={0}>
              <Box
                width="100%"
                flexGrow
                mx="auto"
                my={3}
                className={classes.displayArea}
              >
                <Box textAlign="start" mx={2} py={1}>
                  <Typography
                    variant="h6"
                    className={classes.userDetails}
                    gutterBottom
                    noWrap
                  >
                    linkedIn
                    <a
                      className={classes.userLink1}
                      href="https://www.linkedin.com/in/hvnray/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @Hvnray
                    </a>
                  </Typography>
                  <Typography
                    variant="h6"
                    className={classes.userDetails}
                    gutterBottom
                    noWrap
                  >
                    github
                    <a
                      className={classes.userLink}
                      href="https://github.com/Hvnray"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @Hvnray
                    </a>
                  </Typography>
                </Box>
              </Box>
            </Collapse>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
