import { StyleSheet } from "react-native";
import { getFontFamily } from "../../utils/helper";
import { scaleFontSize } from '../../assets/styles/scaling';


const style = StyleSheet.create({
    title: {
       color: '#022150',
       fontFamily: getFontFamily('Inter', '600'),
       fontSize: scaleFontSize(24),
    }
});

export default style;