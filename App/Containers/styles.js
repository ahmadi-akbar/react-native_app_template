
import { Platform, StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');


const styles = StyleSheet.create({

  mainview:{
    marginLeft: 50,
    marginTop: 25
  },
  headertxt:{
    marginTop: 10,
    fontSize: 27,
    textAlign: 'center',
    color:'white',
    fontFamily: (Platform.OS === 'ios') ? null : 'Steelworks_Vintage_Demo',
  },
  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 15,
  },
  rowicon:{
    backgroundColor: 'transparent',
    tintColor: 'white',
    height: 20,
    width:20,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
  },
  rowtxt:{
    color:'white',
    fontSize: 23,
    backgroundColor: 'transparent',
    marginLeft: 20,
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#1a191f',
    height: 56,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				marginTop:10
			}
    }),
		elevation: 0
  },
});




export default styles;
