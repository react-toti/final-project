import React, { useState } from "react";
import { Modal, Button, TextField, Grid, Typography } from "@material-ui/core";
import styles, { FormContainer } from "./styles";
import { Formik } from "formik";
import * as Yup from "yup";

const ModalCart = () => {
  const classes = styles();
  const [modal, setModal] = useState(false);

  const initialValues = {
    cardNumber: "",
    nameOnCard: "",
    cardExpiration: "",
    cvv: "",
  };

  const schema = Yup.object().shape({
    cardNumber: Yup.string()
      .min(16, "Digite 16 números de seu cartão")
      .max(16, "")
      .required("Obrigatório"),
    nameOnCard: Yup.string()
      .min(3, "Deve ser nome completo")
      .required("Obrigatório"),
    cardExpiration: Yup.string().required("Obrigatório"),
    cvv: Yup.string().required("Obrigatório"),
  });

  const openCloseModal = () => {
    setModal(!modal);
  };

  const onSubmit = (e) => {
    alert("Compra finalizada com sucesso");
    e.preventDefault();
    setModal(!modal);
  };

  const renderBody = (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={() => onSubmit()}
    >
      <FormContainer className={classes.modal} onSubmit={onSubmit}>
        <div>
          <h2>Pagamento</h2>
        </div>
        <br />
        <Typography>Insira os dados de pagamento</Typography>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="cardNumber"
              id="cardNumber"
              label="Número de cartão"
              variant="outlined"
              fullWidth
              className={classes.root}
              helperText="Obrigatório"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="nameOnCard"
              id="nameOnCard"
              label="Nome impresso no cartão"
              variant="outlined"
              fullWidth
              helperText="Obrigatório"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="cardExpiration"
              id="cardExpiration"
              label="Validade"
              variant="outlined"
              fullWidth
              helperText="Obrigatório"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="cvv"
              id="cvv"
              label="cvv"
              variant="outlined"
              fullWidth
              helperText="Obrigatório"
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h3>Total:</h3>
            <h3>R$1000.00</h3>
          </Grid>
        </Grid>

        <div align="right">
          <Button onClick={() => openCloseModal()} color="primary">
            Cancelar
          </Button>
          <Button type="submit">Efetuar pagamento</Button>
        </div>
      </FormContainer>
    </Formik>
  );

  return (
    <div>
      <Button onClick={() => openCloseModal()}>Abrir modal</Button>
      <Modal open={modal} onClose={openCloseModal}>
        {renderBody}
      </Modal>
    </div>
  );
};

export default ModalCart;
