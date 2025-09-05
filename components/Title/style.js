import { StyleSheet } from "react-native";
import { getFontFamily } from "../../utils/helper";

const style = StyleSheet.create({
    title: {
       color: '#022150',
       fontFamily: getFontFamily('Inter', '600'),
       fontSize: 24,
    }
});

export default style;