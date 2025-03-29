import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Typography,
  Box,
  useTheme
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

interface SidebarProps {
  /**
   * The title displayed at the top of the sidebar
   */
  title?: string;
  
  /**
   * Width of the sidebar in pixels
   */
  width?: number;

  /**
   * Function that gets called when a menu item is clicked
   */
  onItemClick?: (itemId: string) => void;
}

interface MenuItem {
  id: string;
  text: string;
  icon: React.ReactNode;
}

/**
 * A permanent desktop sidebar navigation component built with Material-UI
 */
const Sidebar: React.FC<SidebarProps> = ({ 
  title = "Dashboard",
  width = 240, 
  onItemClick 
}) => {
  const theme = useTheme();

  // Demo menu items - replace with your actual navigation items
  const menuItems: MenuItem[] = [
    { id: 'dashboard', text: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'users', text: 'Users', icon: <PeopleIcon /> },
    { id: 'analytics', text: 'Analytics', icon: <BarChartIcon /> },
    { id: 'settings', text: 'Settings', icon: <SettingsIcon /> },
  ];

  const handleItemClick = (itemId: string) => {
    if (onItemClick) {
      onItemClick(itemId);
    }
  };

  return (
    <Drawer
      variant="permanent"
      open={true}
      sx={{
        width: width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: width,
          boxSizing: 'border-box',
          position: 'relative', // Makes the drawer part of the document flow
          height: '100vh',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" noWrap component="div" sx={{ padding: theme.spacing(2) }}>
          {title}
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.id}
            onClick={() => handleItemClick(item.id)}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;