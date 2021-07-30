import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../styles/theme'
export const Album = styled.div`

`
export const Container = styled.div`

`

const useStyles = makeStyles({
  par1: {
    color: theme.primaryDark,
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
    margin: 'auto',
    paddingBottom: '50px',
  },
  link: {
    width: '50%',
  },
  btnAddCart: {

    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: theme.secondaryDark,
      color: '#deeaff',
    },
    color: theme.default,
  },
  btnComprar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: theme.secondaryDark,
      color: '#deeaff',
    },
    color: theme.default,
  },
  cont: {
    padding: '16px 16px 0 16px'
  },
  btnCont: {
    borderTop: '1px solid',
    
  },
})

export default useStyles