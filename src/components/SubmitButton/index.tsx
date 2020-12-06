import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';
import buttonAnimation from '../../../assets/animations/button.json';

export default function SubmitButton(props: TouchableOpacityProps) {
    return (
        <S.Button {...props}>
            <S.Animation source={buttonAnimation} autoPlay loop />
            <S.Text>GO RANDOM</S.Text>
        </S.Button>
    );
}