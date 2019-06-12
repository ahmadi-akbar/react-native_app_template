
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity,View,ListView, BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,Content,Body,Header,Icon,Title,RegularText} from 'native-base';
import ReadMore from 'react-native-read-more-text';
// Screen Styles
import styles from './styles';
import theme from '../../../utils/theme';
import images from '../../../utils/images';
import { moderateScale } from '../../../utils/fontScaling';
const { width, height } = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Images, Colors, Fonts, Metrics } from '../../../Themes/';
/**
 *  Profile Screen
 */
const profileImg = "https://antiqueruby.aliansoftware.net//Images/profile/ic_profile_pic_pnineteen.jpg";
const photosOne = "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_one_ptwentyfive.png";
const photosTwo = "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_two_ptwentyfive.png";
const photosThree = "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_three_ptwentyfive.png";

export default class ProfileGallery extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Profile')
      return true;
    });
  }

  constructor(props) {
 		super(props);
    this.state = {};
 	}

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#2d324f',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;

    return(
      <Container style={styles.main}>
        <View style={styles.profileDetailBg}>
          <Header style={styles.header}>
              <Left style={styles.left}>
                <TouchableOpacity onPress={()=>that.props.navigation.navigate('Profile')}>
                  <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                </TouchableOpacity>
              </Left>
              <Body style={styles.body}>
                <Text style={styles.textTitle}>Profiles</Text>
              </Body>
              <Right style={styles.right}>
                <TouchableOpacity onPress={()=>alert('Edit')}>
                  <Text style={styles.textTitle}>Edit</Text>
                </TouchableOpacity>
              </Right>
          </Header>

          <Image source={{uri:profileImg}} style={styles.profileImg}/>
          <Text style={styles.nameTxt}>Johnie Cornwall</Text>
          <Text style={styles.designationTxt}>Graphic Design</Text>
        </View>
        <Content>
          <View style={{flexDirection: 'row',margin: (theme.WIDTH) * 0.015}}>
            <Image source={{uri:photosOne}} style={styles.galleryImgOne}/>
            <View style={styles.galleryImgView}/>
            <View style={{flexDirection: 'column'}}>
              <Image source={{uri:photosTwo}} style={styles.galleryImgTwo}/>
              <View style={styles.photosHorizontalDivider}/>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.galleryImgThree} source={{uri:photosThree}}/>
                <View style={styles.photosVerticalDivider}/>
                <View style={styles.photosCountBg}>
                  <Text style={styles.photoCountTxt}>+135</Text>
                  <Text style={styles.photosTxt}>Photos</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.dividerHorizontal}/>

          <View style={styles.fieldDividerBg}>
            <View style={styles.fieldBg}>
              <Text style={styles.fieldTitle}>Account</Text>
              <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <Text style={styles.mailTxt}>johnie_cornwall@gmail.com</Text>
                <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color='#d6d6d6' />
              </View>
            </View>
            <View style={styles.fieldDivider}/>
          </View>

          <View style={styles.fieldDividerBg}>
            <View style={styles.fieldBg}>
              <Text style={styles.fieldTitle}>Change Password</Text>
              <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color='#d6d6d6' />
            </View>
            <View style={styles.fieldDivider}/>
          </View>

          <View style={styles.fieldDividerBg}>
            <View style={styles.fieldBg}>
              <Text style={styles.fieldTitle}>Payment</Text>
              <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color='#d6d6d6' />
            </View>
            <View style={styles.fieldDivider}/>
          </View>

          <View style={styles.fieldDividerBg}>
            <View style={styles.fieldBg}>
              <Text style={styles.fieldTitle}>Terms of Service</Text>
              <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color='#d6d6d6' />
            </View>
            <View style={styles.fieldDivider}/>
          </View>

          <View style={styles.fieldDividerBg}>
            <View style={styles.fieldBg}>
              <Text style={styles.fieldTitle}>Support</Text>
              <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color='#d6d6d6' />
            </View>
            <View style={styles.fieldDivider}/>
          </View>
        </Content>
      </Container>
    );
  }
}
