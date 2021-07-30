import { makeStyles } from "@material-ui/core";
import styled from 'styled-components';
import { Form } from 'formik';

const styles = makeStyles({
  modal: {
    position: "absolute",
    width: 600,
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    boxShadow:
      "0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2)",
    padding: "40px 30px 20px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export const FormContainer = styled(Form)`

`;
export default styles;
