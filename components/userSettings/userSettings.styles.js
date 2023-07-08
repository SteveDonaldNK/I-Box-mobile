import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  iconButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  returnText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.md
  },
  heading: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxl
  },
  tabText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xl + 2,
    marginLeft: 10,
  },
  tab: {
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1.8
  },
  iconButtonContainer: {
    display: 'flex',
    gap: 30,
    marginTop: 50
  },
  disconnectBtn: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.redColor,
    marginTop: 50,
    textAlign: 'center'
  },
  btnText: {
    color: COLORS.redColor,
    fontFamily: FONT.medium,
    fontSize: SIZES.xl,
    textAlign: 'center'
  }
});

export default styles;
