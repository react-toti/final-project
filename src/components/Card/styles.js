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
    width: '15%',
    minWidth: '260px',
    height: '15vw',
    minHeight: '260px',
  },
  par: {
    width: '90%',
    height: '30%',
    fontSize: '10px',
    marginTop: '-15px',
  },
  table: {
    marginLeft: '700px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr'
  },
})

export default useStyles