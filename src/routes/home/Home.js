import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  homeContainer: {
    height: '100%'
  },
  topBand: {
    display: 'flex',
    justifyContent: 'flex-end',
     
  },
  topBandItems: {
    padding: '4px 8px'
  },
  root: {
    flexGrow: 1, 
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 2,
    
  
  },
  pageContent: {
    height: 'calc(100% - 128px)',
    overflow: 'auto'
  },
  topBanner: {
    textAlign: 'center'
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  banner: {
    height: '200px',
    width: '33%'
  },
  productContainer: {
    margin: '8px',
    width: 'calc(100% - 8px)'
  },
  products: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  mediaRoot: {
    maxWidth: '16%'
  },
  media: {
    height: 140
  }
}));
export const Home = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.homeContainer}>
      <div className={classes.root}>
        <AppBar position="static"  style={{background:"black"}}>
          <Toolbar>
            <div className={classes.title} />
            <Button color="inherit">download our app</Button>
            <Button color="inherit">img 1</Button>
            <Button color="inherit">img 2</Button>
            <Button color="inherit">phone number</Button>
          </Toolbar>
        </AppBar>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit">Dental Kart</Button>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.title} />
            <Button color="inherit">Login & Sign Up</Button>
            <div>
              <Button color="inherit" onClick={handleMenu}>
                menu
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>

                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>

                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ShoppingCartIcon />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <NotificationsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.pageContent}>
        <div className={classes.topBanner}>
          Pickup & Deliveries are Impacted Due to Night Curfew & Lockdown in
          Several States & Union Territories Across the Country
        </div>
        {[
          {
            header: 'covid 19 best seller',
            products: [
              {
                image: 'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
                header: '',
                subHeader: '',
                oldCost: '',
                newCost: '',
                discount: '',
                stars: '',
                reviews: ''
              },
              {image: '',
                header: '',
                subHeader: '',
                oldCost: '',
                newCost: '',
                discount: '',
                stars: '',
                reviews: ''},
              {image: '',
                header: '',
                subHeader: '',
                oldCost: '',
                newCost: '',
                discount: '',
                stars: '',
                reviews: ''},
              {image: '',
                header: '',
                subHeader: '',
                oldCost: '',
                newCost: '',
                discount: '',
                stars: '',
                reviews: ''},
              {image: '',
                header: '',
                subHeader: '',
                oldCost: '',
                newCost: '',
                discount: '',
                stars: '',
                reviews: ''},
              {image: '',
                header: '',
                subHeader: '',
                oldCost: '',
                newCost: '',
                discount: '',
                stars: '',
                reviews: ''}
            ],
            images: [
              'https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg',
              'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg',
              'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'
            ]
          },
          { header: 'super endo',
           images: ['https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'] },
          { header: 'best seller',
           images: ['https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'] },
          { header: 'covid 19 best seller', 
          images: ['https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'] },
          { header: 'covid 19 best seller',
           images: ['https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'] },
          { header: 'covid 19 best seller',
           images: ['https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'] },
          { header: 'covid 19 best seller',
           images: ['https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'] },
          { header: 'covid 19 best seller',
           images: ['https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'] },
          { header: 'covid 19 best seller',
           images: ['https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'] },
          { header: 'covid 19 best seller',
           images: ['https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg', 'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'] }
        ].map((item, index) => {
          return (
            <div key={index}>
              <Card className={classes.productContainer}>
                <CardHeader
                  action={
                    <Button variant="contained" color="secondary">
                      View All
                    </Button>
                  }
                  title={item.header}
                />
                <Divider />
                <CardContent>
                  <div className={classes.products}>
                    {[1, 2, 3, 4, 5, 6].map(i => {
                      return (
                        <Card className={classes.mediaRoot}>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media}
                              image="https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg"
                              title="Contemplative Reptile"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                Lizard
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
              <div className={classes.bannerContainer}>
                {item.images.map((image, index) => {
                  return (
                    <Card key={index} className={classes.banner}>
                      {/* {image} */}
                      <img src={image} />
                      
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <div>
                <div>About</div>
                <div>Contact Us</div>
                <div>careers</div>
                <div>Dealer Partnership</div>
                <div>Blog</div>
              </div>
              <div className={classes.title} />

              <div>
                <div>Order</div>
                <div>Refund</div>
                <div>Payments</div>
                <div>Rewards</div>
                <div>dentalkart</div>
              </div>
              <div className={classes.title} />

              <div>
                <div>Return Policy</div>
                <div>Terms of Use</div>
                <div>Privacy</div>
                <div>Sitemap</div>
               
              </div>
              <div className={classes.title} />

              <div>
                <div>facebook</div>
                <div>twiter</div>
                <div>pintrest</div>
                <div>Youtube</div>
                <div>Linkdin</div>
                 <div>Instagram</div>
              </div>
              <div className={classes.title} />

              <div>
                <div>VASA Denticity Pvt. Ltd.,</div>
                <div>Khasra No. 714, Village, P.O.- Chattarpur,</div>
                <div>Opp. DLF Gate No.-2,</div>
                <div>Near Geetanjali Salon</div>
                <div>New Delhi, India, 110074</div>
                <div>+91-728-9999-456-Mon to Sat (10:00 AM to 7:00 PM)</div>
              </div>
              <div className={classes.title} />
              <div>
                <div>Android IOS </div>
                {/* <div>IOS</div> */}
                
              </div>
            </Toolbar>
          </AppBar>
          <AppBar position="static" border="3px">
            <Toolbar>
              <div className={classes.title} />
              <span color="inherit">
                <HelpIcon />
                Help Center
              </span>
              <span color="inherit">
                <AttachMoneyIcon />
                Rewards
              </span>
              <span color="inherit">
                <CheckCircleIcon />
                Genuiene Products
              </span>
              <div className={classes.title} />

              <span color="inherit">
                2016-2021, VASA Denticity Pvt. Ltd. Crafted with in India
              </span>
              <div className={classes.title} />
              <span color="inherit">
                Credit Cards, Debit Cards, Internet Banking, Paytm Wallet
                payment methods are available. Available all around globe.
              </span>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </div>
  );
};
