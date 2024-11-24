import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import {
  sidebarButton,
  activeButton,
  sidebarText,
} from '../styles/sidebarStyles';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', href: '/dashboard' },
    { text: 'Reports', href: '/reports' },
    { text: 'Analytics', href: '/analytics' },
    { text: 'Alerts', href: '/alerts' },
    { text: 'Logs', href: '/logs' },
  ];

  const uploadItems = [
    { text: 'Metrics', href: '/metrics' },
    { text: 'DataHouse', href: '/data-house' },
    { text: 'People', href: '/people' },
  ];

  const pathname = usePathname();

  return (
    <Box component="nav">
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={pathname.startsWith(item.href) ? activeButton : sidebarButton}
            >
              <ListItemText primary={item.text} sx={sidebarText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ margin: '20px 0', borderColor: 'gray' }} />
      <List>
        {uploadItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={pathname.startsWith(item.href) ? activeButton : sidebarButton}
            >
              <ListItemText primary={item.text} sx={sidebarText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
