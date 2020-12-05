import { Dimensions } from 'react-native';

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
};

export default { colors, metrics };
