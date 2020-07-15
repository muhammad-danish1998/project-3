import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartContext } from "./Global/CartContext";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    topNavbar: {
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        position:'fixed',

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: 'orange',
        fontWeight: 'bold',
        marginLeft:125,
        fontSize:30
    },

}));

export function Navbar() {
    const {qty} = useContext(CartContext)
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.topNavbar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                     <Link to ='/' style={{textDecoration:'none'}}>Danish</Link>  
                    </Typography>
                    <div className='right'>
                        <ul>
                            <li>
                                <Link to='/cart'>
                                    <span className='cartIcon'><ShoppingCartIcon style={{ fontSize: 30, color: '#222' }} />
                                        <span className='counter'>{qty}</span></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
