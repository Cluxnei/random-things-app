import React, { useState } from 'react';
import * as S from './styles';
import * as Hs from '../Home/styles';
import { colors } from '../../../services/constants';
import SubmitButton from '../../components/SubmitButton';


export default function Numbers() {

    const [howMany, setHowMany] = useState(1);
    const [real, setReal] = useState(false);
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    function handleMinValueChange(text: string) {
        setMin(text);
    }

    function handleMaxValueChange(text: string) {
        setMax(text);
    }

    function normalize(text: string): string {
        const number = Number(text.replace(/\,/g, '.'));
        return isNaN(number) ? '0' : number.toString();
    }

    function handleSubmit() {

    }

    return (
        <S.Container>
            <S.Header>
                <S.HeaderTitle>Random numbers</S.HeaderTitle>
            </S.Header>
            <Hs.Cards>
                <S.Card bg={colors.cardColors[0]} column fStart>
                    <Hs.CardTitle>How many?</Hs.CardTitle>
                    <S.RangeSlider
                        onValueChange={setHowMany}
                        minimumValue={1}
                        step={1}
                        maximumValue={80}
                        minimumTrackTintColor={colors.cardColors[1]}
                        maximumTrackTintColor={colors.cardColors[2]}
                        thumbTintColor={colors.cardColors[3]}
                    />
                    <Hs.CardTitle>{howMany}</Hs.CardTitle>
                </S.Card>
                <Hs.Card bg={colors.cardColors[1]} onPress={() => setReal((old) => !old)}>
                    <Hs.CardTitle>Real?</Hs.CardTitle>
                    <Hs.CardTitle>{real ? 'yes' : 'no'}</Hs.CardTitle>
                </Hs.Card>
                <S.Card bg={colors.cardColors[2]}>
                    <Hs.CardTitle>Min:</Hs.CardTitle>
                    <S.InputNumber value={min} onChangeText={handleMinValueChange} onBlur={() => setMin((old) => normalize(old))} />
                </S.Card>
                <S.Card bg={colors.cardColors[3]} >
                    <Hs.CardTitle>Max:</Hs.CardTitle>
                    <S.InputNumber value={max} onChangeText={handleMaxValueChange} onBlur={() => setMax((old) => normalize(old))} />
                </S.Card>
            </Hs.Cards>
            <SubmitButton />
        </S.Container>
    );
};