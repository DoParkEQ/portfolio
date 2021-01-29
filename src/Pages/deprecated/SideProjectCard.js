import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
  root: {},
  gridContainer: {
    width: '100%',
    height: 600,
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(12, auto)',
    gridTemplateRows: 'repeat(3, auto)',
    columnGap: 24,
    rowGap: 24,
  },
  gridItem: {
    borderRadius: 10,
    backgroundColor: theme.color.secondary[300],
  },
}))

const gridConfig = [
  {
    i: 'item 0',
    x:0,
    y:0,
    w:9,
    h:2,
  },
  {
    i: 'item 1',
    x:9,
    y:0,
    w:3,
    h:1,
  },
  {
    i: 'item 2',
    x:9,
    y:1,
    w:3,
    h:1,
  },
  {
    i: 'item 3',
    x:9,
    y:2,
    w:3,
    h:1,
  },
  {
    i: 'item 4',
    x:0,
    y:2,
    w:6,
    h:1,
  },
  {
    i: 'item 5',
    x:6,
    y:2,
    w:3,
    h:1,
  },
  {
    i: 'item 6',
    x:9,
    y:2,
    w:3,
    h:1,
  },
]

const getGridProps = (config) => {

  const { x, y, w, h } = config

  return {
    gridColumnStart: x + 1,
    gridColumnEnd: x + w + 1,
    gridRowStart: y + 1,
    gridRowEnd: y + h + 1,
  }
  
}



const SideProjectCard = (data) => {
  const classes = useStyles()
  
  return (
    <div className={classes.gridContainer}>
      {gridConfig.map(item => <div className={classes.gridItem} style={getGridProps(item)}>{item.i}</div>)}
    </div>
  )
}

export default SideProjectCard
