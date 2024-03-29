import React, { Component } from 'react';
import { TouchableHighlight,Modal,Dimensions, StyleSheet,ImageBackground,Image,View,StatusBar,Platform,TouchableOpacity ,BackHandler,I18nManager} from 'react-native';
import { Container,Text,Content,Form,Item,Button,Input,CheckBox,Body ,Footer,Icon,Header, Left,Right, Title} from 'native-base';

import { Fonts, Metrics, Colors } from '../../../Themes/';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class Signup_05 extends Component{
  componentWillMount() {
		var that = this
		BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('SignUp')
			return true;
		});
	}

  render() {

    StatusBar.setBarStyle('light-content', true);

    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    let pic = {
      uri: 'https://antiqueruby.aliansoftware.net//Images/signup/image_bg_signup_five.jpg'
    };

    let logo13 = {
      uri: 'https://antiqueruby.aliansoftware.net/Images/signin/ic_logo_mountifysthirteen.png'
    };
    return (

      <ImageBackground source={pic} style={styles.screenBg}>

          <Container style={styles.container}>
            <Header style={styles.header}>
              <Left style={styles.left}>
              <TouchableOpacity styles={styles.backArrow} onPress={()=>this.props.navigation.navigate('SignUp')}>
                <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
              </TouchableOpacity>
              </Left>
              <Body style={styles.body}>
              </Body>
              <Right style={styles.right}/>
            </Header>

            <Image source={logo13} style={styles.logostyle}/>

            <View style={styles.view2}>
              <Item underline style={styles.itememail}>
                <Icon active name='ios-person-outline' style={styles.iconitem}  />
                <Input  placeholderTextColor={Colors.hintblue} textAlign={I18nManager.isRTL ? 'right' : 'left'} placeholder='Full Name' style={styles.inputemail} />
              </Item>
              <Item underline style={styles.itememail}>
                <Icon active name='ios-mail-outline' style={styles.iconitem} />
                <Input  placeholderTextColor={Colors.hintblue} textAlign={I18nManager.isRTL ? 'right' : 'left'} placeholder='Email' style={styles.inputemail} />
              </Item>
              <Item underline style={styles.itememail}>
                <Icon active name='ios-unlock-outline' style={styles.iconitem} />
                <Input  placeholderTextColor={Colors.hintblue} textAlign={I18nManager.isRTL ? 'right' : 'left'} secureTextEntry={true} placeholder='Password' style={styles.inputemail} />
              </Item>
              <Item underline style={styles.itememail}>
                <Icon active name='ios-unlock-outline' style={styles.iconitem} />
                <Input  placeholderTextColor={Colors.hintblue} textAlign={I18nManager.isRTL ? 'right' : 'left'} secureTextEntry={true} placeholder='Confirm Password' style={styles.inputemail} />
              </Item>
            </View>

            <TouchableHighlight info style={styles.buttondialogsignup} onPress = {() => alert('Sign Up')}>
              <Text autoCapitalize="words" style={styles.buttonsignin}>Sign Up</Text>
            </TouchableHighlight>
          </Container>

          <View style={styles.view3}>
            <Text autoCapitalize="words" style={styles.buttontext}>Already have an account? Sign In</Text>
          </View>

      </ImageBackground>
    );
  }
}
