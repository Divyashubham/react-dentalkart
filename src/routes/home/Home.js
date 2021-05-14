import React, { useState } from 'react';
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
import StarIcon from '@material-ui/icons/Star';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { motion } from 'framer-motion';

const imgBoxVariants = {
  hidden: {
    x: 500,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5
    }
  }
};

const useStyles = makeStyles(theme => ({
  homeContainer: {
    height: '100%'
  },
  topBand: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  topBandItems: {
    padding: '4px 8px'
  },
  root: {
    flexGrow: 1
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
    flexGrow: 2
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

  const dataArray = [
    {
      header: 'covid 19 best seller',
      products: [
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '4',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '3',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        }
      ],
      images: [
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'
      ]
    },
    {
      header: 'super endo',
      products: [
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        }
      ],
      images: [
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'
      ]
    },
    {
      header: 'best seller',
      products: [
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        }
      ],
      images: [
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'
      ]
    },
    {
      header: 'covid 19 best seller',
      products: [
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        }
      ],
      images: [
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'
      ]
    },
    {
      header: 'covid 19 best seller',
      products: [
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        }
      ],
      images: [
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'
      ]
    },
    {
      header: 'covid 19 best seller',
      products: [
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        }
      ],
      images: [
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'
      ]
    },
    {
      header: 'covid 19 best seller',
      products: [
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        }
      ],
      images: [
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'
      ]
    },
    {
      header: 'covid 19 best seller',
      products: [
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        }
      ],
      images: [
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'
      ]
    },
    {
      header: 'covid 19 best seller',
      products: [
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        }
      ],
      images: [
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'
      ]
    },
    {
      header: 'covid 19 best seller',
      products: [
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        },
        {
          image:
            'https://images.dentalkart.com/media/catalog/product/f/e/features_5.jpg',
          header: 'Finger Pulse Oximeter With TFT Display',
          subHeader: 'Heart rate,SpO2 PR pulse oximeter',
          oldCost: '2200',
          newCost: '850',
          discount: '61.4',
          stars: '5',
          reviews: '4'
        }
      ],
      images: [
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg',
        'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'
      ]
    }
  ];

  const topBrands = [
    {
      image: 'https://images.dentalkart.com/media/brand//d/r/dr.-morepen.jpg',
      name: 'Dr. Morepen'
    },
    {
      image: 'https://images.dentalkart.com/media/brand//w/a/waldent_fine_instrument.png',
      name: 'Waldent'
    },
    {
      image: 'https://images.dentalkart.com/media/brand//d/r/dr.-morepen.jpg',
      name: 'Dr. Morepen'
    },
    {
      image: 'https://images.dentalkart.com/media/brand//d/r/dr.-morepen.jpg',
      name: 'Dr. Morepen'
    },
    {
      image: 'https://images.dentalkart.com/media/brand//d/r/dr.-morepen.jpg',
      name: 'Dr. Morepen'
    },
    {
      image: 'https://images.dentalkart.com/media/brand//d/r/dr.-morepen.jpg',
      name: 'Dr. Morepen'
    },
    {
      image: 'https://images.dentalkart.com/media/brand//d/r/dr.-morepen.jpg',
      name: 'Dr. Morepen'
    },
    {
      image: 'https://images.dentalkart.com/media/brand//d/r/dr.-morepen.jpg',
      name: 'Dr. Morepen'
    }
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [step, setStep] = useState(1);

  const handleLeftArrow = () => {
    if (step === 1) {
      setStep(3);
    } else {
      setStep(step - 1);
    }
  };

  const handleRightArrow = () => {
    if (step === 3) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  const goToSlide1 = () => {
    setStep(1);
  };

  const goToSlide2 = () => {
    setStep(2);
  };

  const goToSlide3 = () => {
    setStep(3);
  };

  return (
    <div className={classes.homeContainer}>
      <div className={classes.root}>
        <AppBar position="static" style={{ background: 'black' }}>
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
        <div className={classes.topBanner} style={{background:"lightblue",marginTop:"5px"}}>
          Pickup & Deliveries are Impacted Due to Night Curfew & Lockdown in
          Several States & Union Territories Across the Country
        </div>
        <div className="wrapper">
          <div className="content">
            <div className="left-arrow" onClick={handleLeftArrow}>
              <KeyboardArrowLeftIcon color="primary" />
            </div>

            {step === 1 && (
              <motion.div
                className="img-box"
                variants={imgBoxVariants}
                initial="hidden"
                animate="visible"
              >
                <img
                  src="https://images.dentalkart.com/media/homepage/slider/default/Covid-19-Antigen-Test.jpg"
                  alt="img1"
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                className="img-box"
                variants={imgBoxVariants}
                initial="hidden"
                animate="visible"
              >
                <img
                  src="https://images.dentalkart.com/media/homepage/slider/default/Pulse-oximeter_1_.jpg"
                  alt="img2"
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                className="img-box"
                variants={imgBoxVariants}
                initial="hidden"
                animate="visible"
              >
                <img
                  src="https://images.dentalkart.com/media/homepage/slider/default/Waldent-Face-Mask.jpg"
                  alt="img3"
                />
              </motion.div>
            )}

            <div className="right-arrow" onClick={handleRightArrow}>
              <KeyboardArrowRightIcon color="primary" />
            </div>
          </div>

          <div className="indicators-box">
            {step === 1 && (
              <>
                <div className="indicator active" />
                <div className="indicator" onClick={goToSlide2} />
                <div className="indicator" onClick={goToSlide3} />
              </>
            )}

            {step === 2 && (
              <>
                <div className="indicator" onClick={goToSlide1} />
                <div className="indicator active" />
                <div className="indicator" onClick={goToSlide3} />
              </>
            )}

            {step === 3 && (
              <>
                <div className="indicator" onClick={goToSlide1} />
                <div className="indicator" onClick={goToSlide2} />
                <div className="indicator active" />
              </>
            )}
          </div>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 16px'
            }}
          >
            <div>Top Brands</div>
            <Button variant="contained" color="secondary">
              View All Brands
            </Button>
          </div>
          <div
            style={{
              marginTop: '32px',
              display: 'flex',
              justifyContent: 'space-around'
            }}
          >
            {topBrands.map((topBrand, index) => {
              return (
                <div key={index}>
                  <div
                    style={{
                      height: '100px',
                      width: '100px',
                      border: '1px solid grey',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img src={topBrand.image} />
                  </div>
                  <div style={{ textAlign: 'center' }}>{topBrand.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: 'flex', height: '280px', margin: '16px 0' }}>
          <div
            style={{
              width: '75%'
            }}
          >
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 16px'
                }}
              >
                <div>Featured Categories</div>
                <Button variant="contained" color="secondary">
                  View All Categories
                </Button>
              </div>
              <div className={classes.bannerContainer}>
                {[
                  'https://images.dentalkart.com/media/homepage/banner/default/default_default_Combo-Offers-mobile.jpg',
                  'https://images.dentalkart.com/media/homepage/banner/default/GC-Gold-Lable_Mobile.jpg',
                  'https://images.dentalkart.com/media/homepage/banner/default/default_default_default_default_default_default_Combo-Offers.jpg'
                ].map((image, index) => {
                  return (
                    <Card key={index} className={classes.banner}>
                      <img src={image} />
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
          <div style={{ width: '25%', textAlign: 'center' }}>
            <img
              style={{ width: 'auto', height: '100%' }}
              src="https://dentalkart-media.s3.ap-south-1.amazonaws.com/App-banner+(2).jpg"
            />
          </div>
        </div>
        {dataArray.map((item, index) => {
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
                    {item.products.map((product, index) => {
                      return (
                        <Card key={index} className={classes.mediaRoot}>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media}
                              image={product.image}
                            />
                            <CardContent>
                              <div
                                style={{
                                  fontWeight: 'bold',
                                  fontSize: 'large',
                                  width: '100%',
                                  overflow: 'hidden',
                                  whiteSpace: 'nowrap',
                                  textOverflow: 'ellipsis'
                                }}
                              >
                                {product.header}
                              </div>
                              <div
                                style={{
                                  width: '100%',
                                  overflow: 'hidden',
                                  whiteSpace: 'nowrap',
                                  textOverflow: 'ellipsis'
                                }}
                              >
                                {product.subHeader}
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-around'
                                }}
                              >
                                <span>
                                  <del> Rs.{product.oldCost}</del>
                                </span>
                                <span>Rs.{product.newCost}</span>
                                <span>{product.discount}% Off</span>
                              </div>
                              <div>
                                {Array.from(Array(+product.stars).keys()).map(
                                  (star, index) => {
                                    return (
                                      <StarIcon color="secondary" key={index} />
                                    );
                                  }
                                )}
                              </div>
                              <div>({product.reviews} reviews)</div>
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
                      <img src={image} />
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div style={{ marginTop: '16px'}} className={classes.root}>
          <AppBar position="static" style={{background:"black"}}>
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