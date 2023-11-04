import { useEffect, useState } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

const [N1, setN1] = useState(0)
const [N2, setN2] = useState(0)
const [result, setresult] = useState(0)
const [opr, setopr] = useState('')

useEffect(()=>{
  setN1(parseFloat(N1))
  setN2(parseFloat(N2))
  setN1 (N1)
  setN2 (N2)
}, [])

function change1() {
  setopr ('+')
}
function change2() {
  setopr ('-')
}
function change3() {
  setopr ('*')
}
function change4() {
  setopr ('/')
}

function calc() {
  if (opr == '+') {
    setresult (N1 + N2);
  }
  else if (opr == '-') {
    setresult (N1 - N2);
  }
  else if (opr == '*') {
    setresult (N1 * N2);
  }
  else if (opr == '/') {
    setresult (N1 / N2);
  }
}

useEffect(() => {
  setresult (result)
})

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CALCULADORA</Text>


      <SafeAreaView style={styles.inputview}>

        <TextInput
        placeholder='N1'
        onChangeText={(N1) => setN1(Number(N1))}
        keyboardType='numeric'
        style={styles.textinput}/>

        <Text style={styles.opr}>{opr}</Text>

        <TextInput
        placeholder='N2'
        onChangeText={(N2) => setN2(Number(N2))}
        keyboardType='numeric'
        style={styles.textinput}/>

        <TouchableOpacity style={styles.igual} onPress={calc}>
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>

      </SafeAreaView>

      <SafeAreaView style={styles.btnview}>

        <TouchableOpacity style={styles.oprbnt} onPress={change1}>
          <Text style={styles.text}> + </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.oprbnt} onPress={change2}>
          <Text style={styles.text}> - </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.oprbnt} onPress={change3}>
          <Text style={styles.text}> * </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.oprbnt} onPress={change4}>
          <Text style={styles.text}> / </Text>
        </TouchableOpacity>

      </SafeAreaView>

      <SafeAreaView>
        <Text style={styles.text}>O RESULTADO É:</Text>
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
    top:-250
  },
  opr:{
    color: '#fff',
    fontSize:30,
    paddingHorizontal:20,
    borderWidth: 3,
    borderRadius:40,
    marginHorizontal: 20,
    borderColor: '#ff0000',
    textAlign: 'center'
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
  textinput:{
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
