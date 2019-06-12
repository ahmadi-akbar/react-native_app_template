import React, { Component } from 'react';
import { AsyncStorage, Image, StatusBar, View, TouchableOpacity, Linking, Alert,Platform, ImageBackground} from "react-native";
import {Header, Button, Text, Container, List, ListItem, Content, Icon, top, Left, Right,Title,Body} from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { Fonts, Metrics, Colors, Images } from '../../../Themes/';
import styles from './styles';

export default class ControlPanel extends Component {

  render() {
    return (
      <Container style={styles.bottomModal}>
        <View style={styles.mainview}>
          <View style={styles.headerbottom}>
            <Text STYLE={{color:'#292d48', textAlign:'center', justifyContent:'center'}}>
              BROWSE BY CATEGORY
            </Text>
          </View>
          <View style={styles.horizontalline}></View>
          <View style={styles.semirow}>
             <View style={styles.listrow}>
              <Image source={Images.livingRoomBlue} style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Living Room</Text>
             </View>
             <View style={styles.verticalline}></View>
             <View style={styles.listrow}>
              <Image source={Images.diningRoomBlue} style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Dining Room</Text>
             </View>
             <View style={styles.verticalline}></View>
             <View style={styles.listrow}>
              <Image source={Images.bookCaseBlue} style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Bookcase</Text>
             </View>
          </View>
          <View style={styles.horizontalline}></View>
          <View style={styles.semirow}>
            <View style={styles.listrow}>
             <Image source={Images.bedRoomBlue} style={ styles.rowicon} />
             <Text style={styles.rowtxt}>Bedroom</Text>
            </View>
             <View style={styles.verticalline}></View>
            <View style={styles.listrow}>
             <Image source={Images.tvStandBlue} style={ styles.rowicon} />
             <Text style={styles.rowtxt}>TV Stands</Text>
            </View>
             <View style={styles.verticalline}></View>
            <View style={styles.listrow}>
             <Image source={Images.bathRoomBlue} style={ styles.rowicon} />
             <Text style={styles.rowtxt}>Bathroom</Text>
            </View>
          </View>
        </View>
      </Container>
    )
  }

}
