
import React, { Component } from 'react';
import { Text, View,StatusBar, Platform,TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ContainTabStyle';
const activeindicator= 0;

export default class ContainTabDiscovery extends Component {

  constructor(props) {
 		super(props);
 		this.state = {
      index: '',
      activeindicator: 0,
    };
 	}


  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}


    return(
       <Container style={styles.container}>
            <Text style={styles.containTxt}>Discovery</Text>

              <Text style={styles.backtxt}>Back to Home</Text>
            
      </Container>

    );
  }
}
