import React, { useState } from "react";
import { Modal, Button, TextField, Grid, Typography } from "@material-ui/core";
import styles from "./styles";

const ModalCart = () => {
  const classes = styles();
  const [modal, setModal] = useState(false);

  const openCloseModal = () => {
    setModal(!modal);
  };

  const renderBody = (
    <form className={classes.modal}>
      <div>
        <h2>Pagamento</h2>
      </div>
      <br />
      <Typography>Insira os dados de pagamento</Typography>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Número de cartão"
            variant="outlined"
            required
            fullWidth
            className={classes.root}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Nome impresso no cartão"
            variant="outlined"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField label="Validade" variant="outlined" required fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="cvv" variant="outlined" required fullWidth />
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
    </form>
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
