import React, { Component } from "react";
import { AsyncStorage, Image, StatusBar, View, TouchableOpacity, Linking, Alert,Platform, ImageBackground,ScrollView} from "react-native";
import {Header, Button, Text, Container, List, ListItem, Content, Icon, top, Left, Right,Title,Body} from "native-base";
// Styles
import styles from './styles';
import { Metrics,Images } from '../../../Themes/'

const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/drawer/profile_dtfive.jpg';
const bottomImage = "https://antiqueruby.aliansoftware.net//Images/drawer/musicpicdtsix.png";
const bgImage = "https://antiqueruby.aliansoftware.net//Images/drawer/backimgdtsix.png";

export default class ControlPanel extends Component {

  constructor (props) {
    super(props);
    this.state = {
      langId: 1,
      activeMenu: 'SignUp',
    }
  }

  render() {
    const {activeMenuImage} = this.state
    StatusBar.setBarStyle('light-content', true);

    if(Platform.OS === 'android') {
     StatusBar.setBackgroundColor('#2d324f',true);
     StatusBar.setTranslucent(true);
    }
    return (
      <Container>
        <View style={styles.container}>
          <View style={styles.listProfileContainer}>
           <View style={styles.profileDataBg}>
            <Image source={{uri:ProfileImage}} style={styles.profileImg}/>
            <View style={styles.nameAddressTxt}>
              <Text style={styles.nameTxt}>Johnie Cornwall</Text>
              <Text style={styles.addressTxt}>Seattle,USA</Text>
            </View>
           </View>

           <View style={styles.menuListScrollBg}>
           <ScrollView style={styles.menuListBg}>

            <TouchableOpacity style={styles.categoryRowBg}>
              <Text style={styles.menuListItem}>Categories</Text>
              <View style={styles.categoryCountBg}>
                <Text style={styles.categoryItemCount}>128</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.menuListDivider}/>
            <TouchableOpacity style={styles.menuListItemBg}>
              <Text style={styles.menuListItem}>Brands</Text>
            </TouchableOpacity>
            <View style={styles.menuListDivider}/>
            <TouchableOpacity style={styles.menuListItemBg}>
              <Text style={styles.menuListItem}>Sale</Text>
            </TouchableOpacity>
            <View style={styles.menuListDivider}/>
            <TouchableOpacity style={styles.menuListItemBg}>
              <Text style={styles.menuListItem}>Use QR code</Text>
            </TouchableOpacity>
            <View style={styles.menuListDivider}/>
            <TouchableOpacity style={styles.menuListItemBg}>
              <Text style={styles.menuListItem}>Wishlist</Text>
            </TouchableOpacity>
            <View style={styles.menuListDivider}/>
            <TouchableOpacity style={styles.menuListItemBg}>
              <Text style={styles.menuListItem}>FAQ</Text>
            </TouchableOpacity>
            <View style={styles.menuListDivider}/>
            <TouchableOpacity style={styles.menuListItemBg}>
              <Text style={styles.menuListItem}>Change Country</Text>
            </TouchableOpacity>
            <View style={styles.menuListDivider}/>
            <TouchableOpacity style={styles.menuListItemBg}>
              <Text style={styles.menuListItem}>Privacy Policy</Text>
            </TouchableOpacity>
            <View style={styles.menuListDivider}/>
            <TouchableOpacity style={styles.menuListItemBg}>
              <Text style={styles.menuListItem}>About Us</Text>
            </TouchableOpacity>

           </ScrollView>
           </View>

          </View>

          <View style={styles.bottomViewBg}>
             <View style={styles.bottomImageDataBg}>
               <Image source={Images.cartIconWhite} style={styles.cartImage}/>
               <View style={styles.cartCountBg}>
                <Text style={styles.cartItemCount}>3</Text>
               </View>
               <Text style={[styles.bottomTxt,{marginLeft: (Metrics.WIDTH * 0.02)}]}>My Cart</Text>
              </View>
              <Text style={styles.bottomTxt}>$150.00</Text>
          </View>
        </View>
      </Container>
    );
  }
}
