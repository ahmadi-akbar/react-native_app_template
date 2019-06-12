import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import images from '../../../utils/images';
import theme from '../../../utils/theme';
import { moderateScale } from '../../../utils/fontScaling';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

  mainSec: {
    height:(theme.HEIGHT),
    width:(theme.WIDTH),
  },

  header: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
          height: (theme.HEIGHT * 0.08),
      },
      android: {
        height: 66,
				paddingTop:(theme.HEIGHT * 0.02)
			}
    }),
		elevation: 0
  },

	left: {
    flex: 0.5,
		 backgroundColor: 'transparent',
  },

  body: {
		flex: 2,
		alignItems: 'center',
  },

  right: {
    flex: 0.5
  },

  headerTitle: {
    color: "#fff",
 		fontFamily: 'SFUIDisplay-Semibold',
		fontSize: moderateScale(18),
  },

  iconColor: {
    color: "#fff",
  },

  contentSec: {
    height:(theme.HEIGHT * 0.92),
    width:(theme.WIDTH),  
  }

});

export default styles;
