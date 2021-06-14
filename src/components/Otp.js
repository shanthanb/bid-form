import { Grid, TextField, Card, CardHeader, CardContent, Divider, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  rootWidth: {
    maxWidth: 400,
  },
  title: {
    fontSize: 16,
  },
  content: {
    fontSize: 14,
  },
  right: {
    float: 'right',
  }
});

const Otp = (props) => {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [errorMessage, setMessage] = useState('');
  const handleChange = (e, handleSubmit) => {
    if(e.target.value === '1234') {
      handleSubmit();
    }
    if(e.target.value > 9999) {
      setError(true);
      setMessage('Only 4 digits allowed');
    } else if(!e.target.value.match(/^[0-9]+$/)) {
      setError(true);
      setMessage('Only numbers are allowed');
    } else {
      setError(false);
      setMessage('');
    }
  };
  return (
    <div className={classes.rootWidth}>
      <Card elevation={0} className={classes.root}>
        <CardHeader
          action={
            <Link href="#" className={classes.content} onClick={() => {props.handleBack(0)}}>
              Edit
            </Link>
          }
          title={<span className={classes.title}>Journey Details</span>}></CardHeader>
        <CardContent>
          <div className={classes.content}>{props.formik.values.source}-{props.formik.values.destination}</div>
          <div className={classes.content}>{props.formik.values.traveller} Persons-{props.formik.values.type}</div>
        </CardContent>
      </Card>
      <Divider />
      <Card elevation={0} className={classes.root}>
        <CardHeader
          title={<span className={classes.title}>Bio Details</span>}>
        </CardHeader>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <div className={classes.content}>{props.formik.values.mobile}</div>
              <div className={classes.content}>{props.formik.values.name}</div>
              <div className={classes.content}>{props.formik.values.remark}</div>
            </Grid>
            <Grid item xs={4}>
              <div>Rs. {props.formik.values.amount}</div>
              <div className={`${classes.content}`}>{props.formik.values.negotiable ? 'Negotiable' : 'Fixed Price'}</div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <div className={classes.content} style={{padding: 16}}>We have sent an OTP to your mobile number. Please enter it below to submit your bid. {props.formik.values.mobile}
      <Link href="#" className={`${classes.content} ${classes.right}`} onClick={() => {props.handleBack(1)}}>
         Edit
      </Link>
      </div>
      <Grid item xs={12}>
        <TextField
          margin="normal"
          id="otp"
          name="otp"
          label="OTP"
          error={error}
          helperText={errorMessage}
          fullWidth
          onChange={(e) => {handleChange(e, props.handleSubmit)}}
        />
      </Grid>
    </div>
  )
}

export default Otp;
