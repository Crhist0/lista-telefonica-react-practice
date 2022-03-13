import { Paper, Box, Drawer, Typography } from '@mui/material';
import { FlexWrapper } from '../FlexWrapper/FlexWrapper';

import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateState as changeDrawerStatusTo } from '../../store/DrawerSlice';

const arrowTransitions = (state) => {
  if (!state) {
    return (
      <Typography
        sx={{
          transform: 'rotateZ(-90deg)',
          opacity: '0.8',
          transition: '6s',
          textTransform: 'full-width',
        }}
      >
        CADASTRO
      </Typography>
    );
  }
  return (
    <Typography
      sx={{
        transform: 'rotateZ(-90deg)',
        opacity: '0',
        transition: '0s',
        textTransform: 'full-width',
      }}
    >
      CADASTRO
    </Typography>
  );
};

export const DrawerComponent = (props) => {
  const [drawer, setDrawer] = useState(false);
  const drawerRedux = useSelector(({ drawer }) => drawer);

  const dispatch = useDispatch();

  useEffect(() => {
    setDrawer(drawerRedux);
  }, [drawerRedux]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    dispatch(changeDrawerStatusTo(open));
  };

  return (
    <div>
      {['left'].map((anchor) => (
        <Fragment key={anchor}>
          <Drawer
            SlideProps={{ timeout: 400 }}
            sx={{
              '& .MuiBackdrop-root, .MuiBackdrop-root-MuiModal-backdrop': {
                backgroundColor: 'rgba(0, 0, 0, 0) ',
              },
            }}
            anchor={anchor}
            open={drawer}
            onPointerEnter={toggleDrawer(anchor, true)}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              sx={{
                resize: 'horizontal',
                overflow: 'hidden',
                height: '100%',
                width: '500px',
              }}
              role="presentation"
            >
              {props.children}
            </Box>
          </Drawer>
          <Paper
            onPointerEnter={toggleDrawer(anchor, true)}
            elevation={5}
            style={{
              position: 'absolute',
              top: '0vh',
              bottom: '0vh',
              left: '0vw',
              right: '98vw',
            }}
          >
            <FlexWrapper>{arrowTransitions(drawer)}</FlexWrapper>
          </Paper>
        </Fragment>
      ))}
    </div>
  );
};
