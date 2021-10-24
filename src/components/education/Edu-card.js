import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import SchoolIcon from '@material-ui/icons/School';
import parse from 'html-react-parser';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: 0,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({edu}) {
  const classes = useStyles();
  const subHeader = edu.institution + ' ' + '(' + edu.startYear + ' - ' + edu.endYear + ')'
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <SchoolIcon/>
          </Avatar>
        }
        title={edu.title}
        subheader={subHeader}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        { parse(edu.details) }
        </Typography>
      </CardContent>
    </Card>
  );
}
