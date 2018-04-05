// This was the ImageGridList prior to swapping out
// an img for a SimpleCard...

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import tileData from './tileData';
import Gh0Card from './../cards/Gh0Card';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  subheader: {
    width: '100%',
  },
});

function Gh0CardGL(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <Gh0Card />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Gh0CardGL.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gh0CardGL);
