import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import Perguntas from './src/models/Perguntas.js';
import Resultados from './src/models/Resultados.js';

import BoasVindas from './src/components/BoasVindasScreen.js';
import Start from './src/components/StartScreen.js';
import Resultado from './src/components/ResultadoScreen.js';

import styles from './styles.js';

import * as Icon from "react-native-feather";
import LinearGradient from 'react-native-linear-gradient';

function App() {
  const [pergunta, setPergunta] = useState('');
  const [count, setCount] = useState(0);
  const [respondeu, setRespondeu] = useState(false);
  const [btnProx, setBtnProx] = useState('Prox');
  const [btnVoltar, setBtnVoltar] = useState('Voltar');

  /* estados de tela */
  const [boasVindas, setboasVindas] = useState(true);
  const [start, setStart] = useState(false);
  const [questionario, setQuestionario] = useState(false);
  const [encerrar, setEncerrar] = useState(false);
  const [pele, setPele] = useState('');

  /* estados de resposta */
  const [select, setSelect] = useState(false);
  const [selectNao, setSelectNao] = useState(false);

  const [respostas, setRespostas] = useState([]);
  const [respostan, setRespostan] = useState([]);

  const [dados, setDados] = useState({ email: '', nome: '', idade: '' });

  //dispara e carrega a pergunta inicial quando abre a view
  useEffect(() => {
    setPergunta(Perguntas[0]);
    setBtnVoltar('Sair');
  }, []);

  //dispar e verifica o fim quando estado de encerrar se altera para true
  useEffect(() => {
    verificaFim();
  }, [encerrar]);

  //dispara e muda de pergunta quando o valor do estado de count se altera
  useEffect(() => {
    if (count === 0) {
      setBtnVoltar('Sair');
    } else {
      setBtnVoltar('Voltar');
    }
    selecionaPergunta();

  }, [count]);

  function reset() {
    setboasVindas(true);
    setStart(false);
    setQuestionario(false);
    setEncerrar(false);
    setDados({ ...dados, email: '', nome: '', idade: '' });
    setCount(0);
    setPergunta(Perguntas[0]);
    setRespostas([]);
    setRespostan([]);
    setSelect(false);
    setSelectNao(false);
    setBtnVoltar('Sair');
    setRespondeu(false);
    setBtnProx('Prox');
    setBtnVoltar('Sair');
  }

  /* trocando de telas */
  function boasVindaClique() {
    setboasVindas(false);
    setStart(true);
    setQuestionario(false);
  }

  function startClique() {
    setboasVindas(false);
    setStart(false);
    setQuestionario(true);
  }

  function refazerClique() {
    reset();
  }

  function verificaFim() {
    if (encerrar) {
      setQuestionario(false);
      respostas.sort();
      console.log(respostas);
      let achou = false;
      Resultados.forEach(function (item, i) {
        let gabarito = item.gabarito;
        if(!achou) {
          achou =
          respostas.length == gabarito.length &&
          respostas.every(function (element, index) {
            return element === gabarito[index];
          });
          if (achou) {
            //mostra msg
            setPele(item.resultado);
          }
        }
      });
      if(!achou) {
        setPele('Não foi possivel determinar!\n Refaça o questionario!')
      }
    }
  }

  /*muda de resposta a cada clique para prox ou voltar */
  function selecionaPergunta() {
    setPergunta(perguntas[count]); //seleciona a pergunta
    if (respostas.includes(count)) { //se pergunta selecionada teve resposta sim
      setSelect(true);
      setSelectNao(false);
      setRespondeu(true);
    } else if (respostan.includes(count)) { //se pergunta selecionada teve resposta nao
      setRespondeu(true);
      setSelect(false);
      setSelectNao(true);
    } else {
      setRespondeu(false);
      setSelect(false);
      setSelectNao(false);
    }
    if (count === 12) {
      setBtnProx('Resultado')
    }
  }
  /* controla estado do prox */
  function handleProx() {
    if (respondeu || respostas.includes(count) || respostan.includes(count)) {
      if (!encerrar) {

        setCount(count + 1);
        setRespondeu(false);
      }
    } else {
      alert('voce precisa responder');
    }
  }
  /* controla estado do voltar */
  function handleVoltar() {
    if (count === 0) {
      reset();
    }
    if (count - 1 >= 0) {
      setCount(count - 1);

    }

  }

  /* controla estado da reposta e incrementa o contador */
  function handleRespSim() {
    
    const index = respostan.findIndex((id) => id === count);
    if (index !== -1) {
      setRespostan([
        ...respostan.slice(0, index),
        ...respostan.slice(index + 1)
      ]);
    }
    if (!respostas.includes(count)) {
      setRespostas([...respostas, count]);
    }
    setRespondeu(true);
    setSelect(true);
    setSelectNao(false);
    if (count === perguntas.length - 1) {
      setEncerrar(true);
    }

  }
  /* controla estado da reposta e incrementa o contador */
  function handleRespNao() {
    const index = respostas.findIndex((id) => id === count);
    if (index !== -1) {
      setRespostas([
        ...respostas.slice(0, index),
        ...respostas.slice(index + 1)
      ]);
    }

    if (!respostan.includes(count)) {
      setRespostan([...respostan, count]);
    }
    setRespondeu(true);
    setSelect(false);
    setSelectNao(true);
    if (count === perguntas.length - 1) {
      setEncerrar(true);
    }
  }

  function handleChange(text, nome) {
    setDados({ ...dados, [nome]: text });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: 'auto', minHeight: '100%' }}>
        {boasVindas &&
          <BoasVindas boasVindasClique={boasVindaClique} />
        }
        {start &&
          <Start startClique={startClique} dados={dados} changeDados={handleChange} />
        }
        {questionario &&
          <LinearGradient colors={['#F79FFF', '#8094FF', '#8AD2FF']} style={{flex: 1}}>
            <View style={styles.navArea}>
              <TouchableOpacity style={styles.btnSmall} onPress={handleVoltar}>
                <Icon.ChevronsLeft stroke="#FFF" width={32} height={32} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSmall} onPress={handleProx}>
                <Icon.ChevronsRight stroke="#FFF" width={32} height={32} />
              </TouchableOpacity>
            </View>
            <View style={styles.imgArea}>
              <Image style={styles.img} source={require('./src/assets/start_bg.jpg')} />
            </View>
            <View style={styles.perguntaArea}>
              <Text style={styles.perguntaText}>{pergunta}</Text>
              <View style={styles.buttonArea}>
                <TouchableOpacity style={[styles.btnSmall, select && styles.btnSelect]} onPress={handleRespSim}>
                  <Icon.CheckCircle stroke="#FFF" width={32} height={32} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnSmall, selectNao && styles.btnNaoSelect]} onPress={handleRespNao}>
                  <Icon.XCircle stroke="#FFF" width={32} height={32} />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        }
        {encerrar &&
          <Resultado resultado={pele} dados={dados} refazerClique={refazerClique} />
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
