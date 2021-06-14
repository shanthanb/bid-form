import { Button, Grid, TextField, Card, CardHeader, CardContent, Divider, FormControlLabel, Checkbox, InputAdornment, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  title: {
    fontSize: 16,
  },
  content: {
    fontSize: 14,
  }
});

const PlaceBid = (props) => {
  const [next, setNext] = useState(false);
  const classes = useStyles();
  return (
    <div>
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
      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <div>
          <TextField
            margin="normal"
            id="amount"
            name="amount"
            size="medium"
            placeholder="0"
            InputProps={{
              startAdornment: <InputAdornment position="start">Rs.</InputAdornment>,
            }}
            value={props.formik.values.amount}
            onChange={props.formik.handleChange}
            error={props.formik.touched.amount && Boolean(props.formik.errors.amount)}
            helperText={props.formik.touched.amount && props.formik.errors.amount}
          />
        </div>
        <FormControlLabel
          control={<Checkbox id="negotiable" name="negotiable" color="primary" margin="normal" checked={props.formik.values.negotiable} onChange={props.formik.handleChange}/>}
          label="Rate Negotiable"
        />
      </div>
      {!next ?
      <Button color="primary" variant="contained" fullWidth disabled={props.formik.values.amount === '' ? true : false} onClick={() => {setNext(true)}}>
        Next
      </Button> :
      <div>
        <Divider />
        <Grid item xs={12}>
          <TextField
            margin="normal"
            id="mobile"
            name="mobile"
            label="Enter 10 digit mobile number*"
            fullWidth
            InputProps={{
              startAdornment: <InputAdornment position="start">+91-</InputAdornment>,
            }}
            value={props.formik.values.mobile}
            onChange={props.formik.handleChange}
            error={props.formik.touched.mobile && Boolean(props.formik.errors.mobile)}
            helperText={props.formik.touched.mobile && props.formik.errors.mobile}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            id="name"
            name="name"
            label="Enter your name*"
            fullWidth
            value={props.formik.values.name}
            onChange={props.formik.handleChange}
            error={props.formik.touched.name && Boolean(props.formik.errors.name)}
            helperText={props.formik.touched.name && props.formik.errors.name}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            id="remark"
            name="remark"
            label="Enter Remark(Optional)"
            fullWidth
            value={props.formik.values.remark}
            onChange={props.formik.handleChange}
            error={props.formik.touched.remark && Boolean(props.formik.errors.remark)}
            helperText={props.formik.touched.remark && props.formik.errors.remark}
            variant="outlined"
          />
        </Grid>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Verify via OTP
        </Button>
      </div>
      }
    </div>
  );
}

export default PlaceBid;
