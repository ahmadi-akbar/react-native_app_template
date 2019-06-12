import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import styles from './styles';
import { Fonts, Metrics, Colors, Images } from '../../../Themes/';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.menucontrolPanel}>
        <ImageBackground source={Images.drawerBG} style={styles.menuimageBg}>
          <View style={styles.menusearchSec}>
            <Item rounded style={styles.searchBorder}>
              <Input placeholder='Search' placeholderTextColor="white" style={styles.searchInputField} />
              <Ionicons name='ios-search' color='#ffffff' size={20} style={{right: 15}} />
            </Item>
          </View>
          <View style={styles.menuListSec}>
            <View style={styles.menuList}>
              <MaterialCommunityIcons name="file-outline" color='#ffffff' size={18} />
              <Text style={styles.menuItemText}>Article</Text>
            </View>
            <View style={styles.menuList}>
              <SimpleLineIcons name="bubbles" color='#ffffff' size={18} />
              <Text style={styles.menuItemText}>Message</Text>
              <View style={styles.msgCountSec}>
                <Text style={styles.menumsgCount}>12</Text>
              </View>
            </View>
            <View style={styles.menuList}>
              <SimpleLineIcons name="bell" color='#ffffff' size={18} />
              <Text style={styles.menuItemText}>Activity</Text>
            </View>
            <View style={styles.menuList}>
              <SimpleLineIcons name="star" color='#ffffff' size={18} />
              <Text style={styles.menuItemText}>Favorite</Text>
            </View>
            <View style={styles.menuList}>
              <SimpleLineIcons name="people" color='#ffffff' size={18} />
              <Text style={styles.menuItemText}>Friends</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
