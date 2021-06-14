import { Grid, Card, CardHeader, CardContent, Divider, Link, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const Review = (props) => {
  const classes = useStyles();
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
          title={<span className={classes.title}>Bio Details</span>}></CardHeader>
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
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit Bid
      </Button>
    </div>
  )
}

export default Review;
