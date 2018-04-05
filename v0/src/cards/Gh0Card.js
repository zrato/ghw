// This was a SimpleMediaCard
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 175,
  },
  media: {
    height: 90,
  },
};

function Gh0Card(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://avatars3.githubusercontent.com/u/1809991?s=400&v=4"
          title="stormasm"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="p">
            <a href="https://github.com/stormasm">stormasm</a>
          </Typography>
          <Typography component="p">
            Michael Angerman <b>Corvallis, Oregon</b>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Gh0Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gh0Card);
