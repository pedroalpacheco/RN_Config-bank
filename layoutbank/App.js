

import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Text, Picker, Slider, Switch} from 'react-native';
import DatePicker from 'react-native-datepicker'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {date:"2018-09-20", 
    valor:1, 
    peso:10,
    doador:false,
    salario:0
  }

  }

  render() {
    return (
      <View >
      <Text>DADOS PESSOAIS</Text>
        <TextInput placeholder = "Seu nome"/>

        <Text>Nascimento</Text>

        <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-1930"
        maxDate="01-01-2090"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 0,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 20
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

      <Text>Sexo</Text>
      <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        <Picker.Item label="Masculino" value="masculino" />
        <Picker.Item label="Feminino" value="feminino" />
      </Picker>

      <Text>Altura</Text>
      <Slider value={this.state.valor} minimumValue={1} maximumValue={3} onValueChange={(v)=>this.setState({valor:v})}/>
      <Text>{this.state.valor.toFixed(2)}</Text>

      <Text>Peso</Text>
      <Slider value={this.state.valor} minimumValue={10} maximumValue={300} onValueChange={(v)=>this.setState({peso:v})}/>
      <Text>{this.state.peso.toFixed()}Kg</Text>

      <Text>Doador de orgãos?</Text>
      <Switch value={this.state.doador} onValueChange={(m)=>this.setState({doador:m})}/>
      <Text>{(this.state.doador)?"É DOADOR":"NÃO É DOADOR"}</Text>

      <Text>DADOS FINANCEIROS</Text>
      <Text>Salário</Text>
      <Slider value={this.state.valor} minimumValue={200} maximumValue={30000} onValueChange={(v)=>this.setState({salario:v})}/>
      <Text>R${this.state.salario.toFixed()}</Text>

      <Text>Banco</Text>
      <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        <Picker.Item label="Banco do Brasil" value="Banco do Brasil" />
        <Picker.Item label="Itau" value="Itau" />
        <Picker.Item label="Bradesco" value="Bradesco" />
        <Picker.Item label="Bank of Boston" value="Bank of Boston" />
      </Picker>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
