import React , { Component } from "react";
import {View, ListView ,Image , StatusBar, TouchableOpacity, AsyncStorage , Linking, BackHandler, Alert,Platform, } from "react-native";
import { Spinner, Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right, Input} from "native-base";
import { connect } from 'react-redux'
import styles from './styles';
class HomeScreen extends React.Component {


  render() {
    var that=this
    StatusBar.setBarStyle('light-content', true);

    if(Platform.OS === 'android') {
     StatusBar.setBackgroundColor('transparent',true);
     StatusBar.setTranslucent(true);
    }
    return (
      <Container>
      <Header style={styles.header}>
          <Left style={styles.left}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Icon name='ios-menu' />
          </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Title>Antiqueruby SignUp</Title>
          </Body>
          <Right style={styles.right}/>
        </Header>

          <Content>
            <View style={styles.container}>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_01')}>
                <Text style={styles.buttonText}>SignUp 1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_02')}>
                <Text style={styles.buttonText}>SignUp 2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_03')}>
                <Text style={styles.buttonText}>SignUp 3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_04')}>
                <Text style={styles.buttonText}>SignUp 4</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_05')}>
                <Text style={styles.buttonText}>SignUp 5</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_06')}>
                <Text style={styles.buttonText}>SignUp 6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_07')}>
                <Text style={styles.buttonText}>SignUp 7</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_08')}>
                <Text style={styles.buttonText}>SignUp 8</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_09')}>
                <Text style={styles.buttonText}>SignUp 9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_10')}>
                <Text style={styles.buttonText}>SignUp 10</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_11')}>
                <Text style={styles.buttonText}>SignUp 11</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_12')}>
                <Text style={styles.buttonText}>SignUp 12</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_13')}>
                <Text style={styles.buttonText}>SignUp 13</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_14')}>
                <Text style={styles.buttonText}>SignUp 14</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignUp_15')}>
                <Text style={styles.buttonText}>SignUp 15</Text>
              </TouchableOpacity>
            </View>
            </View>
          </Content>

      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
