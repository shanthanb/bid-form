import { Button, Grid, TextField, MenuItem } from '@material-ui/core';

const Bid = ({formik}) => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            margin="dense"
            id="source"
            name="source"
            label="Source Location*"
            value={formik.values.source}
            onChange={formik.handleChange}
            error={formik.touched.source && Boolean(formik.errors.source)}
            helperText={formik.touched.source && formik.errors.source}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="dense"
            id="destination"
            name="destination"
            label="Destination*"
            value={formik.values.destination}
            onChange={formik.handleChange}
            error={formik.touched.destination && Boolean(formik.errors.destination)}
            helperText={formik.touched.destination && formik.errors.destination}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          select
          fullWidth
          id="type"
          name="type"
          label="Enter Car Type*"
          margin="dense"
          value={formik.values.type}
          onChange={formik.handleChange}
          error={formik.touched.type && Boolean(formik.errors.type)}
          helperText={formik.touched.type && formik.errors.type}
          variant="outlined"
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value="Hatchback">Hatchback</MenuItem>
          <MenuItem value="Sedan">Sedan</MenuItem>
          <MenuItem value="SUV">SUV</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          margin="dense"
          id="traveller"
          name="traveller"
          label="Number of traveller*"
          value={formik.values.traveller}
          onChange={formik.handleChange}
          error={formik.touched.traveller && Boolean(formik.errors.traveller)}
          helperText={formik.touched.traveller && formik.errors.traveller}
          variant="outlined"
        />
      </Grid>
      <Button color="primary" variant="contained" fullWidth type="submit">
        Enter Bid Details
      </Button>
    </div>
  );
};

export default Bid;
