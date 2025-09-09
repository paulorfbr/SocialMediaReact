import { StyleSheet } from "react-native";
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling';


const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
  },
  firstName: {
    fontSize: scaleFontSize(14),
    color: '#022150',
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    padding: horizontalScale(3),
    borderRadius: 65,
  },
  image: {
    width: horizontalScale(65),
    height: horizontalScale(65),
  },
});


export default style;