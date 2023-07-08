import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    heading: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xxl + 5,
        color: COLORS.secondary,
    },
    period: {
        fontFamily: FONT.medium,
        color: COLORS.grayColor,
        fontSize: SIZES.sm - 1,
    },
    subHeading: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xl,
        color: COLORS.secondary,
    },
    flexBox: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: 50,
        marginRight: 10,
        width: 270,
        elevation: 5,
        paddingVertical: 30,
        borderRadius: 30,
        backgroundColor: COLORS.cardColor,
    },
    cardBtn: {
        backgroundColor: COLORS.primary,
        width: '60%',
        borderRadius: 50,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 20,
    },
    cardBtnText: {
        color: COLORS.secondary,
        fontFamily: FONT.medium,
        fontSize: SIZES.md,
    },
    listItem: {
        color: COLORS.secondary,
        fontFamily: FONT.medium,
        fontSize: SIZES.md,
        marginVertical: 10
    }
});

export default styles;
