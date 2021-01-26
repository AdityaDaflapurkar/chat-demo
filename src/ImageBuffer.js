import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import img1 from './imgs/img1.png';
import img2 from './imgs/img2.png';
import img3 from './imgs/img3.png';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: '#ffffff',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const tileData = [
  {
    img: img1,
    title: 'Image',
    author: 'author',
  },
  {
    img: img2,
    title: 'Image',
    author: 'author',
  },
  {
    img: img3,
    title: 'Image',
    author: 'author',
  },
  {
    img: img1,
    title: 'Image',
    author: 'author',
  },
  {
    img: img2,
    title: 'Image',
    author: 'author',
  },
  {
    img: img3,
    title: 'Image',
    author: 'author',
  },
  {
    img: img1,
    title: 'Image',
    author: 'author',
  },
  {
    img: img2,
    title: 'Image',
    author: 'author',
  },
  {
    img: img3,
    title: 'Image',
    author: 'author',
  },
  {
    img: img1,
    title: 'Image',
    author: 'author',
  },
  {
    img: img2,
    title: 'Image',
    author: 'author',
  },
  {
    img: img3,
    title: 'Image',
    author: 'author',
  },
  {
    img: img1,
    title: 'Image',
    author: 'author',
  },
  {
    img: img2,
    title: 'Image',
    author: 'author',
  },
  {
    img: img3,
    title: 'Image',
    author: 'author',
  },
];
export default function ImageBuffer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} style={{ width: 200, height: 150 }}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <CancelIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
