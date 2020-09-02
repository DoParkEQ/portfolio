import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import { Text } from '../Components';

const useStyles = createUseStyles((theme) => ({
  root: {
    maxWidth: 768,
    margin: '0 auto',
  },
  hero: {
      width: '100%',
  },
  titleBlock: {
    margin: '32px 0px',
  },
  imageBlock: {
    width: '100%',
    height: 600,
    backgroundColor: theme.color.secondary[300],
    borderRadius: '10px',
      '& img': {
      }
  },
  textBlock: {
      // padding: '0px 96px',
  },
}));

const Project = ({ match }) => {
  const classes = useStyles();
  const { pagename } = match.params;
  const history = useHistory();
  const gotoPage = (pagelink) => {
    history.push(`/work${pagelink}`);
  }
  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        <div className={classes.titleBlock}>
          <Text variant='button' onClick={()=>gotoPage('')}>Go back</Text>
          <Text variant='h5'>Lumen UI</Text>
          <Text variant='body'>EQ Works</Text>
        </div>
        <div className={classes.imageBlock}>
          <img src="" alt="" />
        </div>
      </div>
      <div className={classes.textBlock}>
        <Text variant='subtitle'>Intro</Text>
        <Text variant='body'> January 13th is the date I joined EQ Work's product team. I was a
          first designer to the team. During the course of time, our team has
          adopted a product-first approach to make a rapid progress in the data
          industry. It was surely a right decision as our company's market value
          grew 15 times in the last three years. However, there are rough
          patches here and there making the product not consistent.</Text>
      </div>
    </div>
  );
};

export default Project;
