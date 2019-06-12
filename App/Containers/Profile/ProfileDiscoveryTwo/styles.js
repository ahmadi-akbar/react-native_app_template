
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  main: {
    height: Metrics.HEIGHT*0.82,
    width: Metrics.WIDTH,
    backgroundColor: Colors.transparent,
    flexDirection: 'column'
  },

  header: {
  	backgroundColor: Colors.snow,
  	height: Metrics.HEIGHT * 0.1,
  	borderBottomWidth: 0,
  	paddingTop: (Metrics.HEIGHT * 0.05),
  	elevation: 0,
  	paddingLeft: (Metrics.WIDTH * 0.05),
  	padding: (Metrics.WIDTH * 0.05),
  },

  left: {
    flex: 0.5
  },

  body: {
    flex: 3,
    alignItems: 'center'
  },

  right: {
    flex: 0.5
  },

  headerTxt: {
    color: "#363636",
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    textAlign: 'center'
  },

  footerTitle: {
    fontSize: Fonts.moderateScale(12)
  },

  messageIcon: {
    height: (Metrics.WIDTH * 0.04),
    width: (Metrics.WIDTH * 0.045),
    justifyContent: 'center'
  },

  footerTabBg: {
    backgroundColor: Colors.snow,
  }

});

export default styles;
