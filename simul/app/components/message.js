import React, { Component } from 'react';
import I18n from 'react-native-i18n'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Home from './home.js'

class Message extends Component{

  constructor(props) {
    super(props);

    this.state = {
      user_Id: this.props.userId,
      name: this.props.name,
      message: this.props.message,
    }
  }

  _navigate() {
    this.props.navigator.push({
      title: I18n.t('home'),
      component: Home
    })
  }

  render() {
    console.log(this.state.message.author)
    return (
      <View style={styles.container}>
        <Text style={styles.contact}>
          <Text style={styles.to}>{this.state.name}</Text>

          <Text style={styles.from}>{I18n.t('from')} {this.state.message.author}</Text>
          <Text style={styles.from}>{I18n.t('senderContact')} {this.state.message.author_contact}</Text>
          <Text style={styles.from}>{I18n.t('date')} {this.state.message.created_at}</Text>
        </Text>

          <Text style={styles.title}>{I18n.t('subject')} {this.state.message.subject}</Text>
          <Text style={styles.content}>{this.state.message.content}</Text>
      </View>
    )
  }
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27c2dc',
    padding: 8,
  },
  title: {
   fontSize: 17,
   alignSelf: 'center',
   fontWeight: 'bold',
   margin: 40,
   backgroundColor: '#27c2dc',
   
  },
  from: {
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 5,
  },
  to: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    alignSelf: 'center',
    fontSize: 17,
    marginTop: 10,
    marginBottom: 5,
  },
  contact: {
    alignSelf: 'flex-start',
  }
});


module.exports = Message;
