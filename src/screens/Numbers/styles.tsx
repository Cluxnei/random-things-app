import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';
import LottieView from 'lottie-react-native';
import { isIos, metrics } from '../../../services/constants';
import { CardProps } from '../Home/styles';

export const Container = styled.ScrollView`
    background-color: black;
    flex: 1;
`;

export const Header = styled.View`
    margin-top: ${metrics.statusBarHeight + metrics.baseMargin / 2}px;
    padding-left: ${metrics.basePadding}px;
`;

export const HeaderTitle = styled.Text`
    font-size: 30px;
    color: white;
`;

export const RangeSlider = styled(Slider)`
    flex: 1;
    width: 100%;
`;

export const Card = styled.View`
    background-color: ${(props: CardProps) => props.bg || 'black'};
    margin: ${metrics.baseMargin / 6}px 0;
    justify-content: center;
    align-items: ${(props: CardProps) => props.fStart ? 'flex-start' : 'center'};
    width: ${(props: CardProps) => props.halfWidth ? 50 : 100}%;
    padding: ${metrics.basePadding * 2}px;
    flex-direction: ${(props: CardProps) => props.column ? 'column' : 'row'};
    justify-content: space-between;
`;


export const InputNumber = styled.TextInput.attrs({
    keyboardType: isIos ? 'numbers-and-punctuation' : 'number-pad'
})`
    width: 100%;
    font-size: 30px;
    color: white;
`;

export const SubmitAnimation = styled(LottieView)`
    width: 100%;
`;
