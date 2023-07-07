import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  returnBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center'
  },
  returnText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.md
  },
  heading: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxl
  },
  flexBox: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  boldText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xl
  },
  font: {
    fontFamily: FONT.regular,
  },
  circle: {
    height: 15,
    width: 15,
    backgroundColor: COLORS.redColor,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.redColor
  }
});

export default styles;
