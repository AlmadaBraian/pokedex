import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TablaDensa from "./TablaDensa";
import AutoComplete from "./Autocomplete"




const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
    <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
              <h1>Pokedex</h1>
          </Paper>
        </Grid>
        </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <form onSubmit={props.handleSubmit}>
                <label>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        placeholder="Ingrese nombre del pokemon"
                        value={props.pokemon}
                    />
                </label>
            </form>
            <AutoComplete handleSubmit= {props.handleSubmit} handleChange= {props.handleChange} pokemon= {props.pokemon}/>
            </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><TablaDensa pokeArray={props.pokeArray}/></Paper>
          
        </Grid>
        <Grid item xs = {3}>
          <Paper className={classes.paper}>coso</Paper>
        </Grid>
      </Grid>
    </div>
  );
}