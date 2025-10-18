import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PercentIcon from '@mui/icons-material/Percent';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Calculadora', icon: <CalculateIcon />, path: '/calculadora' },
  { label: 'Porcentagens', icon: <PercentIcon />, path: '/porcentagens' },
  { label: 'Pedidos', icon: <LocalMallIcon />, path: '/pedidos' },
];

function MobileNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = navItems.findIndex(item => location.pathname.startsWith(item.path));

  // Cores do sistema: vinho e branco
  const colors = {
    vinho: '#310204',
    branco: '#fff',
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1200, bgcolor: colors.branco, borderTop: `2px solid ${colors.vinho}` }} elevation={8}>
      <BottomNavigation
        showLabels
        value={currentIndex === -1 ? 0 : currentIndex}
        onChange={(event, newValue) => {
          navigate(navItems[newValue].path);
        }}
        sx={{
          bgcolor: colors.branco,
          height: 64,
        }}
      >
        {navItems.map((item, idx) => (
          <BottomNavigationAction
            key={item.label}
            label={item.label}
            icon={item.icon}
            sx={{
              color: currentIndex === idx ? colors.vinho : colors.vinho + '99',
              bgcolor: currentIndex === idx ? colors.branco : 'transparent',
              borderRadius: 2,
              fontWeight: currentIndex === idx ? 700 : 500,
              '&.Mui-selected': {
                color: colors.vinho,
                bgcolor: colors.branco,
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}

export default MobileNavbar;
