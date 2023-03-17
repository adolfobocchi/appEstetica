const colorP = '#D586EF';
const colorBS = '#D96FB6';
const colorBN = '#5A6BFA';
const colorT = '#006';

const styles = {
  boasVindasArea: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  resultadoArea: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  startArea: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colorP,
    justifyContent: 'center',
  },
  navArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40
  },
  imgArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: colorT
  },
  perguntaArea: {
    flex: 1,
  },
  perguntaText: {
    textAlign: 'center',
    height: 100,
    color: colorT,
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  texto: {
    color: colorT,
    fontSize: 24,
    fontWeight: 'bold',
  },
  textoInput: {
    color: colorT,
    fontSize: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 10,
    height: 50,
    minWidth: '90%',
    borderRadius: 8
  },
  btnSmall: {
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 10,
    height: 50,
    minWidth: 80,
    borderRadius: 8,
    margin: 8,
  },
  btnSelect: {
    backgroundColor: colorBS,
  },
  btnNaoSelect: {
    backgroundColor: colorBN,
  },
  input: {
    padding: 8,
    width: '90%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
  }
}

export default styles;