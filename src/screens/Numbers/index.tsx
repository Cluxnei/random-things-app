import React, { useState, createRef, useEffect } from 'react';
import * as S from './styles';
import * as Hs from '../Home/styles';
import { colors, metrics } from '../../../services/constants';
import SubmitButton from '../../components/SubmitButton';
import { generate } from './random';
import Loading from '../../components/Loading';
import { ScrollView } from 'react-native-gesture-handler';

function randomCardColor() {
    const max = colors.cardColors.length;
    return colors.cardColors[Math.floor(Math.random() * max)];
}

const scrollRef = createRef<ScrollView>();

export default function Numbers() {

    const [howMany, setHowMany] = useState(1);
    const [real, setReal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [min, setMin] = useState('0');
    const [max, setMax] = useState('1');
    const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
    const [resultLayout, setResultLayout] = useState({ y: 0 });

    useEffect(() => {
        setRandomNumbers([]);
    }, [howMany, real, min, max]);

    function normalize(text: string): string {
        const number = Number(text.replace(/\,/g, '.'));
        return isNaN(number) ? '0' : number.toString();
    }

    async function handleSubmit() {
        setLoading(true);
        setRandomNumbers(generate(howMany, real, Number(min), Number(max)));
        await new Promise((r) => setTimeout(r, 500));
        setLoading(false);
        await new Promise((r) => setTimeout(r, 500));
        scrollRef.current && scrollRef.current.scrollTo({ y: metrics.screenHeight - 80, animated: true });
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <S.Container ref={scrollRef}>
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
                    <S.InputNumber value={min} onChangeText={setMin} onBlur={() => setMin((old) => normalize(old))} />
                </S.Card>
                <S.Card bg={colors.cardColors[3]} >
                    <Hs.CardTitle>Max:</Hs.CardTitle>
                    <S.InputNumber value={max} onChangeText={setMax} onBlur={() => setMax((old) => normalize(old))} />
                </S.Card>
            </Hs.Cards>
            <SubmitButton onPress={handleSubmit} />
            {!loading && randomNumbers.length > 0 && (
                <Hs.Cards onLayout={(event) => setResultLayout(event.nativeEvent.layout)}>
                    {randomNumbers.map((number: number, index: number) => (
                        <S.Card key={`${index.toString()}-${number}`} bg={randomCardColor()}>
                            <Hs.CardTitle>{number.toString()}</Hs.CardTitle>
                        </S.Card>
                    ))}
                </Hs.Cards>
            )}
        </S.Container>
    );
};