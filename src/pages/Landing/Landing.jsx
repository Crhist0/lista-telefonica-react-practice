/* eslint-disable quotes */
import { FlexWrapper } from '../../components/FlexWrapper/FlexWrapper';
import { DrawerComponent } from '../../components/Drawer/Drawer';
import CustomizedSwitches from '../../components/ThemeSwitch/ThemeSwitch';

import { useDispatch } from 'react-redux';
import BasicTooltip from '../../components/Tooltip/Tooltip';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { updateState as listAdd } from '../../store/ListSlice';
import { updateState as changeDrawerStatusTo } from '../../store/DrawerSlice';
import EnhancedTable from '../../components/Table/Table';

export const Landing = () => {
  const dispatch = useDispatch();
  const [entry, setEntry] = useState({ name: undefined, phone: undefined });

  function handleClick() {
    dispatch(listAdd(entry));
    setEntry({ name: '', phone: '' });
    dispatch(changeDrawerStatusTo(false));
  }

  function handleChange(e) {
    switch (e.target.id) {
      case 'name':
        setEntry({ name: e.target.value, phone: entry.phone });
        break;
      case 'phone':
        setEntry({ name: entry.name, phone: e.target.value });
        break;
      default:
        break;
    }
  }

  return (
    <>
      <FlexWrapper id="container" direction="column">
        <DrawerComponent open id="configurations">
          <FlexWrapper
            id="sliders"
            p="1.5rem 0rem 0rem"
            direction="column"
            justify="center"
          >
            <FlexWrapper
              id="sliders"
              direction="column"
              xSize="80%"
              ySize="35rem"
              p="0rem 0rem 2rem 0rem"
            >
              <Box sx={{ marginBottom: '1rem', width: '300px' }}>
                <TextField
                  label="Nome"
                  variant="standard"
                  id="name"
                  value={entry.name}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>
              <Box sx={{ marginBottom: '3rem', width: '300px' }}>
                <TextField
                  label="Telefone"
                  variant="standard"
                  id="phone"
                  value={entry.phone}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>
              <Box>
                <Button onClick={handleClick} variant="contained">
                  Salvar
                </Button>
              </Box>
            </FlexWrapper>
          </FlexWrapper>
        </DrawerComponent>
        <FlexWrapper id="preview" p="2rem 3rem" xSize="30%" ySize="50%">
          <EnhancedTable />
        </FlexWrapper>
      </FlexWrapper>
      <CustomizedSwitches />
    </>
  );
};
