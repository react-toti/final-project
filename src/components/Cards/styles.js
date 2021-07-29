import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { theme as Tema} from '../../styles/theme'
export const Album = styled.div`

`
export const Container = styled.div`

`

const useStyles = makeStyles((theme) => ({
  par1: {
    color: Tema.primaryDark,
    width: '100%',
    height: '30px',
    fontSize: '18px',
    marginTop: '-20px',
  },  
  par2: {
    width: '100%',
    height: '30px',
    fontSize: '16px',
    marginTop: '-20px',
    color: '#85bb65',
  },
  table: {
    width: '80%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridColumnGap: '20px',
    gridRowGap: '20px',
    margin: 'auto'
  },
  link: {
    width: '50%',
  },
  btnAddCart: {

    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: Tema.secondaryDark,
      color: '#deeaff',
    },
    color: Tema.default,
    //textTransform: 'capitalize',
  },
  btnComprar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: Tema.secondaryDark,
      color: '#deeaff',
    },
    color: Tema.default,
    //textTransform: 'capitalize',
  },
  cont: {
    padding: '16px 16px 0 16px'
  },
  btnCont: {
    borderTop: '1px solid',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
}))

export default useStyles