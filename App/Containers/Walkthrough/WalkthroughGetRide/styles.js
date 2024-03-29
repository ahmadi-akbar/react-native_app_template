
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
		backgroundColor: Colors.snow,
		width: (Metrics.WIDTH),
		height: (Metrics.HEIGHT)
	},

	header: {
		backgroundColor: Colors.transparent,
		width: Metrics.WIDTH,
		flexDirection: 'row',
		borderBottomColor: Colors.transparent,
		height: (Metrics.HEIGHT * 0.1),
		elevation: 0,
		paddingTop: (Metrics.HEIGHT * 0.05),
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
	},

	left: {
		flex: 0.5,
	},

	right: {
		flex: 0.5
	},

	body: {
		flex: 3,
		alignSelf: 'center'
	},

	skipTxt: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize: Fonts.moderateScale(16),
		color: '#6f6f6f',
		textAlign: 'right',
	},

	slidesec:{
		height: (Metrics.HEIGHT*0.78),
		backgroundColor: Colors.transparent
	},

	btnsec:{
		height: (Metrics.HEIGHT*0.12),
		justifyContent: 'center',
		backgroundColor: Colors.transparent
	},

	slide: {
		height: (Metrics.HEIGHT*0.78),
		backgroundColor: Colors.transparent
	},

	sliderImage: {
		resizeMode: 'cover',
		height: (Metrics.HEIGHT * 0.44),
		width: (Metrics.HEIGHT * 0.44),
		borderRadius: (Metrics.HEIGHT * 0.22),
		alignSelf: 'center',
		...Platform.select({
        ios: {
          marginTop: (Metrics.HEIGHT * 0.04),
        },
        android: {
          marginTop: (Metrics.HEIGHT * 0.02),
        }
    }),
	},

	contentStyle: {
		marginTop: (Metrics.HEIGHT * 0.07),
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplayLight,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(21),
		width :(Metrics.WIDTH) * .85,
		color:'#363636',
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(11),
		width :(Metrics.WIDTH) * 0.7,
		color:'rgba(54,54,54,0.8)',
		marginTop: (Metrics.HEIGHT * 0.03)
	},

	dot:{
		backgroundColor:'rgba(111,111,111,0.3)',
		marginTop: (Metrics.HEIGHT * 0.015),
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	activeDot:{
		backgroundColor:'#6f6f6f',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
		marginTop: (Metrics.HEIGHT * 0.015),
	},

	discoverBg: {
		backgroundColor:'#0691ce',
		alignSelf: 'center',
		justifyContent: 'center',
		paddingLeft: (Metrics.WIDTH * 0.08),
		paddingRight: (Metrics.WIDTH * 0.08),
		paddingTop: (Metrics.WIDTH * 0.02),
		paddingBottom: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.06),
	},

	discoverTxt: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize: Fonts.moderateScale(12),
		color: Colors.snow,
		textAlign: 'center'
	},

});

export default styles;
