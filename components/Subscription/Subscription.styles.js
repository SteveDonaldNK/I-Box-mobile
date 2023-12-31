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
  subHeading: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xl,
    marginTop: 15,
  },
  intro: {
    fontFamily: FONT.medium,
    fontSize: SIZES.md,
    color: COLORS.grayColor,
  },
  content: {
    marginTop: 10,
    fontFamily: FONT.regular,
  },
  date: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xl,
    color: COLORS.primary
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
  },
  container: {
    width: "100%",
    alignItems: 'center',
    marginTop: '10%',
    paddingHorizontal: '5%',
  }, 
  btn: {
    width: '60%',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: COLORS.primary,
    paddingVertical: 10,
    marginTop: 15,
  },
  btnText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.md,
    color: COLORS.primary
  },
});

export default styles;
