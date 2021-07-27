import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Album = styled.div`
width: 1800px;
height: 900px
`
export const Container = styled.div`
  margin: 20px;
  padding: 30px;
  width: 20%;
  height: 20vw;
`

const useStyles = makeStyles({
  card: {
    margin: '20px',
    width: '300px',
    minWidth: '260px',
    height: '328px',
    minHeight: '260px',
  },
  par1: {
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
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    marginLeft: '750px',
  },
  btn: {
    width: '50%',
  },
  cont: {
    padding: '16px 16px 0 16px'
  },
  btnCont: {
    borderTop: '1px solid',
  },
})

export default useStyles