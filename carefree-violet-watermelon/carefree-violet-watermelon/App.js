import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');
  const [operacao, setOperacao] = useState('adicao');

  const calcular = () => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert('Erro', 'Digite valores válidos!');
      return;
    }

    switch (operacao) {
      case 'adicao':
        setResultado((num1 + num2).toString());
        break;
      case 'subtracao':
        setResultado((num1 - num2).toString());
        break;
      case 'multiplicacao':
        setResultado((num1 * num2).toString());
        break;
      case 'divisao':
        if (num2 === 0) {
          Alert.alert('Erro', 'Divisão por zero não permitida');
          setResultado('');
        } else {
          setResultado((num1 / num2).toString());
        }
        break;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Calculadora Estilizada</Text>

      <View style={styles.formulario}>
        <Text>Valor 1:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          onChangeText={setValor1}
        />
      </View>

      <View style={styles.formulario}>
        <Text>Valor 2:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={valor2}
          onChangeText={setValor2}
        />
      </View>

      <View style={styles.formulario}>
        <Text>Operação:</Text>
        <View style={styles.opcoes}>
          {['adicao', 'subtracao', 'multiplicacao', 'divisao'].map((op) => (
            <TouchableOpacity
              key={op}
              style={[
                styles.botaoOpcao,
                operacao === op && styles.botaoSelecionado,
              ]}
              onPress={() => setOperacao(op)}
            >
              <Text style={styles.textoBotao}>{op}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formulario: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
  opcoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  botaoOpcao: {
    backgroundColor: '#ddd',
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },
  botaoSelecionado: {
    backgroundColor: '#4caf50',
  },
  botao: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
  },
  resultado: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
