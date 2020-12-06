import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { metrics, isIos } from '../../../services/constants';

export const Button = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;
    height: 150px;
    overflow: hidden;
`;

export const Animation = styled(LottieView).attrs({
    pointerEvents: 'none',
    resizeMode: 'cover',
})`
    width: 300px;
`;

export const Text = styled.Text`
    color: white;
    font-size: 30px;
    font-weight: 200;
    letter-spacing: 8px;
    position: absolute;
    top: 58px;
`;