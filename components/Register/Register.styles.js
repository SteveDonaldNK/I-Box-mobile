import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10
  },
  logo: {
    resizeMode: 'contain',
    height: 100
  },
  heading: {
    fontFamily: FONT.bold,
    marginTop: 5,
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
    marginTop: 40,
    marginBottom: 50
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
    marginTop: 20,
    display: 'flex',
    gap: 20,
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
    height: 40,
    marginLeft: 10,
    borderBottomWidth: 1.7,
    fontSize: SIZES.xl,
    fontFamily: FONT.regular,
    paddingLeft: 5,
    borderColor: COLORS.darkColor,
  },
  reset: {
    fontSize: SIZES.md,
    fontFamily: FONT.medium,
    textAlign: 'right',
    color: COLORS.primary
  }
});

export default styles;
