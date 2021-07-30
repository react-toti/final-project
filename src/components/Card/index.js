import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import { Container, Album } from './styles';
import useStyles from './styles';
import api from '../../services/api'
import {Link} from 'react-router-dom';



function MediaCard(props) {
  const [ prod, setProd ] = useState([]);
  const style = useStyles()

  const getProduct = async () => {
    const response = await api.get('/Product');
    setProd(response.data);
  }

  useEffect(()=>getProduct())
  
  return (
    <Album>
      <Container>
        <Grid container spacing={40} justify="center" className={style.table}>
          {prod.map(cloth => (
            <Grid item key={cloth.Departament}>
              <Card className={style.card}>
                <CardActionArea>
                  <Link to={`/product/${cloth.id}`}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      image={cloth.Imagen}
                      title="Contemplative Reptile"
                    />
                    
                    <CardContent  className={style.cont}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {cloth.title}
                      </Typography>
                      <Typography component="p" className={style.par1}>{cloth.name}</Typography>
                      <div><br /></div>
                      <Typography {...props} component="p" className={style.par2}>R$ {cloth.Price}</Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
                <CardActions className={style.btnCont}>
                  <Link to={`/product/${cloth.id}`} className={style.link}>
                    <Button  size="small" color="primary" className={style.btnComprar}> 
                      Comprar
                    </Button>
                  </Link>
                  <Button size="small" color="primary" className={style.btnAddCart}>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Album>
  );
}

export default MediaCard;