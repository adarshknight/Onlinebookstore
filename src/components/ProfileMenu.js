import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const ProfileMenu = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Account
      </Typography>
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Account Info" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Saved Addresses" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary="Billing" />
        </ListItem>
      </List>
      <Divider />
      <Typography variant="h6" gutterBottom>
        Customer Support
      </Typography>
      <List>
        <ListItem button>
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </div>
  );
};

export default ProfileMenu;
