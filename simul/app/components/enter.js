import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

// var Home = require('./home')
import Home from './home.js'
import General from '../styles/general.js'

import I18n from 'react-native-i18n'

I18n.fallbacks = true;

I18n.translations = {
  en: {
    login: 'Login',
    username: 'Username',
    password: 'Password',
    register: 'Register',
    enter: 'Enter',
  },
  ar: {
    login: 'دخول',
    username: 'اسم المستخدم',
    password: 'كلمه السر',
    register: 'تسجيل',
    enter: 'أدخل'
  }
}

class Enter extends Component{

  constructor(props) {
    super(props);
  }

  _navigate() {
    this.props.navigator.push({
      title: 'Home',
      component: Home
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/simul_icon1.png')} style={styles.image}/>
        <Text style={styles.title}>SIMUL</Text>
        <TouchableHighlight onPress={ () => this._navigate()}>
          <Text style={styles.enter}>{I18n.t('enter')}</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue'
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
   fontSize: 20,
   alignSelf: 'center',
   margin: 40,
   backgroundColor: 'white',
  },
  enter: {
    fontSize: 15,
    width: 300,
    textAlign: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#27c2dc',
  }
});

module.exports = Enter;
