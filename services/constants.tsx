import { Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('screen');

export const colors = {
    backgroundColor: '#000000',
    cardColors: ['#6b77ff', '#ff6b9f', '#f9ad09', '#01d2b8'],
};

export const metrics = {
    baseMargin: 15,
    basePadding: 10,
    screenWidth: width,
    screenHeight: height,
    statusBarHeight: Constants.statusBarHeight,
};

export const isAndroid = Platform.OS === 'android';

export const isIos = Platform.OS === 'ios';

export default { colors, metrics };
