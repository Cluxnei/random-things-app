import React from 'react';
import loadingAnimation from '../../../assets/animations/loading.json';
import * as S from './styles';

export default function Loading() {
    return <S.Main source={loadingAnimation} autoPlay loop />;
}