import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { isIos, metrics } from '../../../services/constants';

export const Container = styled.View`
    background-color: rgb(34, 34, 34);
    position: absolute;
    z-index: 10;
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Main = styled(LottieView)``;

export const LodingText = styled.Text`
    color: white;
    top: ${metrics.baseMargin * (isIos ? 8 : 4)}px;
    font-size: 18px;
`;
