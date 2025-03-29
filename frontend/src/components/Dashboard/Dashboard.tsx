import React from 'react';
import { 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Divider, 
  Avatar, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAvatar,
  LinearProgress,
  Paper,
  IconButton
} from '@mui/material';
import { 
  MoreVert as MoreVertIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  AttachMoney as MoneyIcon,
  Person as PersonIcon,
  ShoppingCart as CartIcon,
  Email as EmailIcon
} from '@mui/icons-material';

interface DashboardProps {
  // You can add custom props here if needed
}

/**
 * Dashboard component with various card items
 */
const Dashboard: React.FC<DashboardProps> = () => {
  // Sample data for dashboard cards
  const statistics = [
    { title: 'Total Revenue', value: '$24,500', icon: <MoneyIcon />, change: 12, up: true },
    { title: 'Total Users', value: '1,250', icon: <PersonIcon />, change: 5.8, up: true },
    { title: 'New Orders', value: '450', icon: <CartIcon />, change: 2.7, up: false },
    { title: 'Pending Tasks', value: '48', icon: <EmailIcon />, change: 15, up: true }
  ];
  
  const recentActivities = [
    { user: 'John Doe', action: 'purchased Product X', time: '2 hours ago' },
    { user: 'Jane Smith', action: 'added new comment', time: '4 hours ago' },
    { user: 'Mike Johnson', action: 'completed task', time: '1 day ago' },
    { user: 'Sarah Williams', action: 'updated profile', time: '2 days ago' }
  ];
  
  const projects = [
    { name: 'Website Redesign', completion: 75 },
    { name: 'Mobile App Development', completion: 40 },
    { name: 'Database Migration', completion: 90 },
    { name: 'Marketing Campaign', completion: 25 }
  ];
  
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      
      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statistics.map((stat, index) => (
          <Grid component="div">
            <Card elevation={2}>
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Typography color="textSecondary" gutterBottom variant="body2">
                    {stat.title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {stat.value}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      color: stat.up ? 'success.main' : 'error.main' 
                    }}
                  >
                    {stat.up ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
                    {stat.change}%
                  </Typography>
                </Box>
                <Avatar
                  sx={{
                    backgroundColor: 'primary.light',
                    height: 56,
                    width: 56
                  }}
                >
                  {stat.icon}
                </Avatar>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Grid container spacing={3}>
        {/* Recent Activities Card */}
        <Grid component="div">
          <Card elevation={2}>
            <CardHeader 
              title="Recent Activities" 
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent>
              <List sx={{ width: '100%' }}>
                {recentActivities.map((activity, index) => (
                  <React.Fragment key={index}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar>{activity.user.charAt(0)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={activity.user}
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color="text.primary">
                              {activity.action}
                            </Typography>
                            {` — ${activity.time}`}
                          </>
                        }
                      />
                    </ListItem>
                    {index < recentActivities.length - 1 && <Divider variant="inset" component="li" />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Projects Progress Card */}
        <Grid component="div">
          <Card elevation={2}>
            <CardHeader 
              title="Project Progress" 
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent>
              {projects.map((project, index) => (
                <Box key={index} sx={{ mt: index > 0 ? 3 : 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body1">{project.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.completion}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={project.completion} 
                    color={
                      project.completion >= 75 ? "success" :
                      project.completion >= 50 ? "primary" :
                      project.completion >= 25 ? "warning" : "error"
                    }
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
        
        {/* Revenue Chart Card */}
        <Grid component="div">
          <Card elevation={2}>
            <CardHeader 
              title="Monthly Revenue" 
              subheader="Last 6 months performance"
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent>
              <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body1" color="textSecondary">
                  Revenue Chart would be displayed here
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;