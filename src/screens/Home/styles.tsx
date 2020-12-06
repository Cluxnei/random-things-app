import { ReactNode } from 'react';
import styled from 'styled-components/native';
import { colors, metrics, isAndroid } from '../../../services/constants';

export const Container = styled.View`
    padding-top: ${isAndroid ? metrics.statusBarHeight : 0}px;
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

export interface CardProps {
    children?: ReactNode;
    bg?: string,
    halfWidth?: boolean,
    column?: boolean,
    fStart?: boolean,
    onPress?: () => void,
    centered?: boolean,
}

export const Card = styled.TouchableOpacity`
    background-color: ${(props: CardProps) => props.bg || 'black'};
    margin: ${metrics.baseMargin / 6}px 0;
    justify-content: center;
    align-items: ${(props: CardProps) => props.fStart ? 'flex-start' : 'center'};
    width: ${(props: CardProps) => props.halfWidth ? 50 : 100}%;
    padding: ${metrics.basePadding * 2}px;
    flex-direction: ${(props: CardProps) => props.column ? 'column' : 'row'};
    justify-content: ${(props: CardProps) => props.centered ? 'center' : 'space-between'};
`;

export const CardTitle = styled.Text`
    font-size: 30px;
    color: ${(props: { color?: string | undefined }) => props.color || 'white'};
    padding: ${metrics.basePadding}px;
    font-weight: 300;
`;

export const CardImage = styled.Image.attrs({
    resizeMode: 'contain',
    tintColor: 'white',
})`
    width: 60px;
    height: 60px;
    tint-color: white;
`;