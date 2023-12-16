import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, AppBar, Tab, Tabs, Toolbar, Box, Link } from '@mui/material';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import book1Image from '../Assets/book1.jpeg';
import book2Image from '../Assets/book2.jpeg';
import book3Image from '../Assets/book3.jpeg';
import book4Image from '../Assets/book4.jpeg';
import book5Image from '../Assets/book5.jpeg';
import book6Image from '../Assets/book6.jpeg';
import book7Image from '../Assets/book3.jpeg';
import book8Image from '../Assets/book1.jpeg';
import book9Image from '../Assets/book4.jpeg';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import './BookCatalog.css';
import ProfileMenu from './ProfileMenu';

import ActionAdventureIcon from '@mui/icons-material/DirectionsRun';
import ComedyIcon from '@mui/icons-material/SentimentSatisfied';
import CrimeMysteryIcon from '@mui/icons-material/EmojiPeople';
import SpeculativeFictionIcon from '@mui/icons-material/Flare';
import FantasyIcon from '@mui/icons-material/Explore';
import HorrorIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ScienceFictionIcon from '@mui/icons-material/Science';
import RomanceIcon from '@mui/icons-material/Favorite';
import NonfictionIcon from '@mui/icons-material/Book';
import LiteraryFictionIcon from '@mui/icons-material/MenuBook';
import OtherNonfictionIcon from '@mui/icons-material/MenuBook';
import HistoricalFictionIcon from '@mui/icons-material/History';

import { useContext } from 'react';
import { Context } from '../App';


const bookData = [
  { id: 1, title: 'Shawshank', image: book1Image, details: 'J. K. Rowling' },
  { id: 2, title: 'Ruby', image: book2Image, details: 'Stephen King' },
  { id: 3, title: 'The Martian', image: book3Image, details: 'Charles Dickens' },
  { id: 4, title: 'Life of Pi', image: book4Image, details: 'Roald Dahl' },
  { id: 5, title: 'Gullivers travel', image: book5Image, details: 'Arundhati Roy' },
  { id: 6, title: 'The Hobbit', image: book6Image, details: 'Dr. Seuss' },
  { id: 7, title: 'Shaw redemption', image: book7Image, details: 'Rohit' },
  { id: 8, title: 'Beast', image: book8Image, details: 'Jay Shetty' },
  { id: 9, title: '50 Shades', image: book9Image, details: 'Pant Singh' },
];

const orderData = [
  {
    id: 1,
    orderId: 'ORDER001',
    date: '2023-11-26',
    items: [
      { bookId: 1, title: 'Shawshank', quantity: 2 },
      { bookId: 3, title: 'Elon Musk', quantity: 1 },
    ],
    total: 11.50,
    shippingAddress: '2, Dover Streey, NY',
    status: 'Processing',
  },
  {
    id: 2,
    orderId: 'ORDER002',
    date: '2023-11-15',
    items: [
      { bookId: 1, title: '50 Shades', quantity: 2 },
      { bookId: 3, title: 'The Martian', quantity: 3 },
    ],
    total: 120.50,
    shippingAddress: '123 Main St, Cityville, USA',
    status: 'Shipped',
  },
  {
    id: 1,
    orderId: 'ORDER003',
    date: '2023-10-17',
    items: [
      { bookId: 1, title: 'Scholar', quantity: 1},
      { bookId: 3, title: 'Mars', quantity: 1 },
    ],
    total: 89.50,
    shippingAddress: '16 St, Nashville, USA',
    status: 'Delivered',
  },
  
];

const BookCatalog = () => {
  const [value, setValue] = React.useState(0);

  const  hello=useContext(Context);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <div>
      <AppBar position="static" color='error'>
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BookScapess
            </Typography>
            <Tabs value={value} onChange={handleChange} textColor="inherit">
              <Tab label="Home" />
              <Tab label="New Arrivals" />
              <Tab label="Genres" />
              <Tab label="Orders" />
              <Tab label="Profile" />
            </Tabs>
          </Toolbar>
        </Container>
      </AppBar>
      <br /><br />
      <Container maxWidth="md">
        <TransitionGroup>
          <CSSTransition
            key={value}
            timeout={300}
            classNames="slide"
          >
            <div>
              <h1>{hello}</h1>
              {value === 0 && (
                <Grid container spacing={3}>
                  {bookData.map((book) => (
                    <Grid item xs={12} sm={6} md={4} key={book.id}>
                      <a href='hgfh'><Card>
                        <CardMedia
                          component="img"
                          height="140"
                          image={book.image}
                          alt={book.title}
                        />
                        <CardContent>
                          <Typography variant="h6" component="div">
                            {book.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {book.details}
                          </Typography>
                        </CardContent>
                      </Card></a>
                    </Grid>
                  ))}
                </Grid>
              )}

              {value === 1 && (
                <Grid container spacing={3}>
                  {bookData.map((book) => (
                    <Grid item xs={12} sm={6} md={4} key={book.id}>
                      <a href='hgfh'><Card>
                        <CardMedia
                          component="img"
                          height="140"
                          image={book.image}
                          alt={book.title}
                        />
                        <CardContent>
                          <Typography variant="h6" component="div">
                            {book.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {book.details}
                          </Typography>
                        </CardContent>
                      </Card></a>
                    </Grid>
                  ))}
                </Grid>
              )}

              {value === 2 && (
                
                <Grid container spacing={3}>
                  {[
                    
                    { label: 'Action and Adventure', icon: <ActionAdventureIcon fontSize="large" /> },
              { label: 'Comedy', icon: <ComedyIcon fontSize="large" /> },
              { label: 'Crime and Mystery', icon: <CrimeMysteryIcon fontSize="large" /> },
              { label: 'Speculative Fiction', icon: <SpeculativeFictionIcon fontSize="large" /> },
              { label: 'Fantasy', icon: <FantasyIcon fontSize="large" /> },
              { label: 'Horror', icon: <HorrorIcon fontSize="large" /> },
              { label: 'Science Fiction', icon: <ScienceFictionIcon fontSize="large" /> },
              { label: 'Romance', icon: <RomanceIcon fontSize="large" /> },
              { label: 'Nonfiction', icon: <NonfictionIcon fontSize="large" /> },
              { label: 'Literary Fiction', icon: <LiteraryFictionIcon fontSize="large" /> },
              { label: 'Other Nonfiction', icon: <OtherNonfictionIcon fontSize="large" /> },
              { label: 'Historical Fiction', icon: <HistoricalFictionIcon fontSize="large" /> },
                  ].map((genre, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                      <Card>
                        <CardContent>
                          <Box textAlign="center">
                            {genre.icon}
                            <Typography variant="subtitle1" color="text.secondary">
                              {genre.label}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}

              {value === 3 && (
                
                <Grid container spacing={3}>
                  {orderData.map((order) => (
                    <Grid item xs={12} md={6} key={order.id}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            Order ID: {order.orderId}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Date: {order.date}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Status: {order.status}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Shipping Address: {order.shippingAddress}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Total: ${order.total.toFixed(2)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Items:
                          </Typography>
                          <ul>
                            {order.items.map((item) => (
                              <li key={item.bookId}>
                                {item.quantity} x {item.title}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
              {value === 4 && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <ProfileMenu />
          </Grid>
        </Grid>
      )}
            </div>
          </CSSTransition>
        </TransitionGroup>
        <br /><br />
      </Container>
      <Box
        component="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are BookScape, dedicated to providing the best service to our customers.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                10 Downing Street, NY, USA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: bookscape@example.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +91 73717 37372
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright ©️ "}
              <Link color="inherit" href="https://your-website.com/">
                BookScape
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default BookCatalog;