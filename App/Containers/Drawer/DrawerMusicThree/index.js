import React, { Component } from 'react';
import {View,StatusBar,Platform , TouchableOpacity,ScrollView, BackHandler,Image, I18nManager} from 'react-native';
import { Container,Text,Header,  Left, Body,Right} from 'native-base';
// Screen Styles
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { Fonts, Metrics, Colors , Images} from '../../../Themes/';

export default class DrawerMusicThree extends Component {
  constructor() {
  	super();
    this.state = {
    }
  }
  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Drawer')
      return true;
    });
  }

  render() {

    StatusBar.setBarStyle('light-content', true);

    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    return (

    <Container style={styles.container}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Drawer')}>
            {
              (I18nManager.isRTL)
              ?
                <FontAwesome name="angle-right" size={30} color="white"/>
              :
                <FontAwesome name="angle-left" size={30} color="white"/>
            }

            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
          </Body>
          <Right style={styles.right}/>
        </Header>
        <Text style={styles.maintxt}>TAP ON THE CATEGORY YOU LIKE</Text>
      <ScrollView horizontal={true}  style={styles.mainScroll}>
        <View style={styles.mainview}>
          <View style={styles.oldies}>
            <Text style={styles.txtmusic}>OLDIES</Text>
          </View>
          <View style={styles.popbig}>
            <Text style={[styles.txtmusic,{fontSize: 25}]}>POP</Text>
          </View>
          <View style={styles.reggae}>
            <Text style={styles.txtmusic}>REGGAE</Text>
          </View>
          <View style={styles.electronic}>
            <Text style={{color: 'white',fontSize: 12}}>ELECTRONIC</Text>
          </View>
          <View style={styles.rock}>
            <Text style={styles.txtmusic}>ROCK</Text>
          </View>
          <View style={styles.popsmall}>
            <Text style={styles.txtmusic}>POP</Text>
          </View>
          <View style={styles.latin}>
            <Text style={styles.txtmusic}>LATIN</Text>
          </View>
          <View style={styles.country}>
            <Image style={styles.countryimg} source={Images.country}/>
              <Text style={styles.txtmusic}>COUNTRY</Text>
          </View>
          <View style={styles.classical}>
            <Text style={{color: 'white', fontSize: 12}}>CLASSICAL</Text>
          </View>
          <View style={styles.heavymetal}>
            <Image style={styles.countryimg} source={Images.heavymetal}/>
            <Text style={styles.txtmusic}>HEAVY METAL</Text>
          </View>
          <View style={styles.kpop}>
            <Text style={styles.txtmusic}>K-POP</Text>
          </View>
          <View style={styles.randb}>
            <Text style={styles.txtmusic}>R&B</Text>
          </View>
          <View style={styles.opera}>
            <Text style={styles.txtmusic}>OPERA</Text>
          </View>
          <View style={styles.folk}>
            <Text style={styles.txtmusic}>FOLK</Text>
          </View>
          <View style={styles.blues}>
            <Text style={styles.txtmusic}>BLUES</Text>
          </View>
          <View style={styles.jazz}>
            <Text style={[styles.txtmusic,{fontSize: 25}]}>JAZZ</Text>
          </View>
          <View style={styles.techno}>
            <Text style={styles.txtmusic}>TECHNO</Text>
          </View>
          <View style={styles.rap}>
            <Text style={styles.txtmusic}>RAP</Text>
          </View>
          <View style={styles.funk}>
            <Text style={styles.txtmusic}>FUNK</Text>
          </View>
          <View style={styles.disco}>
            <Text style={styles.txtmusic}>DISCO</Text>
          </View>
        </View>
      </ScrollView>
    </Container>



    );
  }
}
