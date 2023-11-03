import { useEffect, useState } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

const [N1, setN1] = useState('');
const [N2, setN2] = useState('');
const [result, setresult] = useState(0);
const [opr, setopr] = useState('');

const change = () =>{
  if (change === '+') {
    setopr ('+')
  }
  else if (change === '-'){
    setopr('-')
  }
  else if (change === '*'){
    setopr('*')
  }
  else if (change === '/'){
    setopr('/')
  }
}

const calc = () => {
  if (opr === '+') {
    return parseFloat(N1) + parseFloat(N2);
  }
  else if (opr === '-'){
    return parseFloat(N1) - parseFloat(N2);
  }
  else if (opr === '*'){
    return parseFloat(N1) * parseFloat(N2);
  }
  else if (opr === '/'){
    return parseFloat(N1) / parseFloat(N2);
  }
}

useEffect(() =>{
  setresult(calc())
}, [N1, N2, opr]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CALCULADORA</Text>


      <SafeAreaView style={styles.inputview}>

        <TextInput
        placeholder='N1'
        value={N1}
        onChange={(e) => setN1(+e.target.value)}
        style={styles.textinput1}/>

        <Text style={styles.opr}>{opr}</Text>

        <TextInput
        placeholder='N2'
        value={N2}
        onChange={(e) => setN2(+e.target.value)}
        style={styles.textinput2}/>

        <TouchableOpacity style={styles.igual} onPress={calc}>
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>

      </SafeAreaView>

      <SafeAreaView style={styles.btnview}>

        <TouchableOpacity style={styles.oprbnt} onPress={change}>
          <Text style={styles.text}> + </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.oprbnt} onPress={change}>
          <Text style={styles.text}> - </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.oprbnt} onPress={change}>
          <Text style={styles.text}> * </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.oprbnt} onPress={change}>
          <Text style={styles.text}> / </Text>
        </TouchableOpacity>

      </SafeAreaView>

      <SafeAreaView>
        <Text style={styles.text}>{result}</Text>
      </SafeAreaView>
      <StatusBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: '#fff',
    fontSize:40,
    fontWeight: 'bold',
    top:-300
  },
  opr:{
    color: '#fff',
    fontSize:30,
    paddingHorizontal:30,
    borderWidth: 3,
    borderRadius:50,
    marginHorizontal: 20,
    borderColor: '#ff0000',
  },
  text:{
    color: '#fff',
    fontSize:30,
    textAlign: 'center',
    fontWeight: 'bold'
  },


  inputview:{
    flexDirection: 'row',
    height: 50,
    top: -200,
  },
  textinput1:{
    color: '#fff',
    fontSize:20,
    textAlign: 'center',
    width: 70,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#ff0000'
  },
  textinput2:{
    color: '#fff',
    fontSize:20,
    textAlign: 'center',
    width: 70,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#ff0000'
  },
  igual:{
    marginLeft: 20,
    width: 100,
    borderWidth:3,
    borderRadius:50,
    borderColor: '#ff0000'
  },


  btnview: {
    flexDirection: 'row',
    top: -100,
  },
  oprbnt: {
    marginHorizontal: 10,
    width: 75,
    borderWidth:3,
    borderRadius:50,
    borderColor: '#98F040'
  },
});
