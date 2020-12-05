import styled from 'styled-components/native';
import { colors, metrics } from '../../services/constants';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

export const Container = styled.View`
    padding-top: ${Platform.OS === 'android' ? Constants.statusBarHeight : 0}px;
    flex: 1;
    background-color: ${colors.backgroundColor};
    padding-left: ${metrics.baseMargin / 2}px;
`;

export const Scroll = styled.ScrollView``;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${metrics.baseMargin * 2}px;
    margin-bottom: ${metrics.baseMargin}px;
`;

export const Title = styled.Text`
    color: white;
    font-size: 40px;
    font-weight: bold;
`;

export const SearchButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: flex-end;
    flex: 1;
`;

export const SearchIcon = styled.Image.attrs({
    resizeMode: 'contain',
    tintColor: 'white',
})`
    width: 45px;
    height: 45px;
    margin-right: ${metrics.baseMargin}px;
    tint-color: white;
`;

export const Cards = styled.View`
    flex: 1;
`;

export const Card = styled.TouchableOpacity`
    background-color: ${(props: { bg: string }) => props.bg || 'black'};
    margin: ${metrics.baseMargin / 6}px 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${metrics.basePadding * 2}px;
    flex-direction: row;
    justify-content: space-between;
`;

export const CardTitle = styled.Text`
    font-size: 30px;
    color: white;
    padding: ${metrics.basePadding}px;
`;

export const CardImage = styled.Image.attrs({
    resizeMode: 'contain',
    tintColor: 'white',
})`
    width: 60px;
    height: 60px;
    tint-color: white;
`;