import React from 'react';
import loadingAnimation from '../../../assets/animations/loading.json';
import * as S from './styles';

export default function Loading() {
    return (
        <S.Container>
            <S.Main
                source={loadingAnimation}
                autoPlay
                loop
                resizeMode="contain"
            />
            <S.LodingText>loading</S.LodingText>
        </S.Container>
    );
}