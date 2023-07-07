import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: 'center',
    marginTop: '10%',
    paddingHorizontal: '5%',
  }, 
  boxStateContainer: {
    alignItems: 'center',
    width: '100%',
  },
  boxStateText: {
    fontSize: 18,
    fontFamily: FONT.medium,
    marginTop: 20
  },
  boxState: {
    color: COLORS.primary,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 20
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
    fontSize: 18, 
    fontFamily: FONT.medium,
}
});

export default styles;