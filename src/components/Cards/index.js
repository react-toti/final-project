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
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { Formik} from 'formik';
import * as Yup from 'yup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Cards(props) {
  const [ prod, setProd ] = useState([]);
  const style = useStyles();
  let isAdmin = true;
  const btnMsg = ['Comprar', 'Editar', 'Add to Cart', 'Delete'];



  const getProduct = async () => {
    const response = await api.get('/Product');
    console.log(response);
    setProd(response.data);
  }



  useEffect(()=>getProduct());
  

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [idCloth, setIdCloth] = useState([]);


  const handleOpen = (idCloth) => {
    setOpenEdit(true)
    setIdCloth(idCloth)
    console.log(idCloth)
  };

  const handleClose = () => {
    setOpenDelete(false);
    setOpenEdit(false);
  };
  
  const handleDelete = async () => {
    const response = await api.delete(`/product/${idCloth}`)
    handleClose()
    console.log(response)
  };

  const handleClickOpen = () => {
    setOpenDelete(true);
  };

  const initialValues = {
    Imagen: '',
    Price: '',
    name: '',
  };

  const scheme = Yup.object().shape({
    Imagen: Yup.string().required('url obrigatória'),
    Price: Yup.string().required('Preço obrigatória'),
    name: Yup.string().required('Nome Obrigatório'),
  });

  const onSubmit = async (values) => {
    const response = await api.put(`/product/${idCloth}`,{
      Imagen: values.Imagen,
      Price: values.Price,
      name: values.name,
    });
    console.log(response);
    if (response.status === 201) {
      handleClose();
    }
  };

  const body = (
    <Formik
    initialValues={initialValues}
    validationSchema={scheme}
    onSubmit={(values) => onSubmit(values)}
    >
      <div style={modalStyle} className={classes.paper}>
        <Card className={style.card}>
          <div>
            
                <label>
                  Url Image
                </label>
                <div><br /></div>
                <input gutterBottom variant="h5" component="h2" name='Imagen' placeholder={initialValues.Imagen}></input>
                <div><br /></div>
                <label>
                  Name
                </label>
                <div><br /></div>
                <input gutterBottom variant="h5" component="h2" name='name' placeholder={initialValues.name}></input>
                <div><br /></div>
                <label>
                  Price
                </label>
                <div><br /></div>
                <input gutterBottom variant="h5" component="h2" name='Price' placeholder={initialValues.Price}></input>
                <div><br /></div>
            
          </div>
          <CardActions className={style.btnCont}>
            <Button  size="small" color="primary" className={style.btnComprar} onClick={handleClose}> 
              Discard
            </Button>
            <Button size="small" color="primary" className={style.btnAddCart} type='submit'>
              Salvar
            </Button>
          </CardActions>
        </Card>
      </div>
    </Formik>
  );

  const body2 = (
    <div>
      <Dialog
        open={openDelete}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Apagar?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que quer apagar?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Não
          </Button>
          <Button color="secondary" autoFocus onClick={handleDelete}>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </div> 
  )

  const getAdmin = isAdmin === true ? btnMsg[1] : btnMsg[0];
  const getRoute = isAdmin === true ? '' : `/product/${idCloth}`;
  const getAdmin2 = isAdmin === true ? btnMsg[3] : btnMsg[2];
  const getRoute2 = isAdmin === true ? '' : 'PONER LA RUTA DEL CARRITO';


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
                  <Link to={getRoute} className={style.link} >
                    <Button size="small" color="primary" className={style.btnComprar} onClick={handleOpen.bind(this, cloth.id)}> 
                      {getAdmin}
                    </Button>
                    <Modal
                      open={openEdit}
                      onClose={handleClose}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      >
                      {body}
                    </Modal>
                  </Link>
                  <Link to={getRoute2} className={style.link} >
                  <Button size="small" color="primary" className={style.btnAddCart} onClick={handleClickOpen.bind(this, cloth.id)}>
                    {getAdmin2}
                  </Button>
                  <Modal
                      open={openDelete}
                      onClose={handleClose}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      >
                      {body2}
                    </Modal>
                  </Link>

                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Album>
  );
}

export default Cards;