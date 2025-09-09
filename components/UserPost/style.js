import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/helper';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling';


const style = StyleSheet.create({
  userContainer: {flexDirection: 'row'},
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'), //this font weight should have been a string
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#79869F',
    marginLeft: -4, //This is not really needed I just missed a space on location text right before the location prop, that is why we needed marginLeft
    fontFamily: getFontFamily('Inter', '400'), //this font weight should have been a string
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: horizontalScale(20),
  },
  userPostContainer: {
    marginTop: horizontalScale(35),
    paddingBottom: horizontalScale(20),
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
});

export default style;