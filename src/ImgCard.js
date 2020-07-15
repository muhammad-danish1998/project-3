import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ProductContext } from "./Global/ProductsContext";
import { Banner } from "./Banner";
import { useContext } from 'react';
import { CartContext } from "./Global/CartContext";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 270,
    },
});

export function ImgCard() {
    const { products } = useContext(ProductContext);
    const classes = useStyles();
    const {dispatch} = useContext(CartContext);

    return (<>
        <Banner />
        <div className='container-fluid '>
        <div className='row' >
          <div className='col-10 mx-auto' >
        <div className='products'>
                 
            {products.map((product) => (
                <div className='product' key={product.id} style={{marginBottom:10}}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={product.image}
                                    title="Contemplative Reptile"
                                
                                     
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h5" style={{textAlign:'center',fontWeight:'bold'}}>
                                        {product.name}
                                  </Typography>
                                  <Typography gutterBottom variant="h5" component="h2" style={{marginLeft:128,width:400}}>
                                        ${product.price}
                                  </Typography>
                                   
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
            
                            <button type="button" className="btn btn-success btn-lg btn-block" onClick = {()=>dispatch({type:'ADD_TO_CART',id:product.id,product})} style={{color:'white'}}>ADD TO CART</button>
                            </CardActions>
                        </Card>

                    </div>
                
                  ))}


        </div></div></div></div>
         </> );
}
