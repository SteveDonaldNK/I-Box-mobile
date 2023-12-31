import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50
  },
  logo: {
    resizeMode: 'contain',
    height: 100
  },
  heading: {
    fontFamily: FONT.bold,
    marginTop: 15,
    fontSize: SIZES.xxl
  },
  boxStateContainer: {
    alignItems: 'center',
    width: '100%',
  },
  boxStateText: {
    fontSize: SIZES.xl,
    fontFamily: FONT.medium,
    marginTop: 20
  },
  boxState: {
    color: COLORS.primary,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  btn: {
    paddingVertical: 12,
    backgroundColor: COLORS.primary,
    width: "90%",
    alignItems: 'center',
    borderRadius: 50,
    elevation: 5,
  },
  btnText: {
    color: COLORS.secondary, 
    fontSize: SIZES.xl, 
    fontFamily: FONT.medium,
  },
  registerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 20
  },
  registerText: {
    fontSize: SIZES.md,
    fontFamily: FONT.medium,
  },
  form: {
    paddingHorizontal: "5%",
    marginTop: 30,
    display: 'flex',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
  }
  ,
  input: {
    flex: 1,
    height: 32,
    marginLeft: 10,
    borderBottomWidth: 1.7,
    fontSize: SIZES.md,
    fontFamily: FONT.regular,
    paddingLeft: 5,
    borderColor: COLORS.darkColor,
  },
  reset: {
    fontSize: SIZES.md,
    fontFamily: FONT.medium,
    textAlign: 'right',
    color: COLORS.primary,
    marginTop: 5
  }
});

export default styles;
