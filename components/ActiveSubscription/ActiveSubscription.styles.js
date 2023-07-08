import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
 
  subHeading: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xl,
    marginTop: 15
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
