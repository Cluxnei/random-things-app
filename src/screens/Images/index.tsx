import React, { useState, useEffect, createRef } from 'react';
import * as S from '../Numbers/styles';
import * as Hs from '../Home/styles';
import SubmitButton from '../../components/SubmitButton';
import { generate } from './random';
import Loading from '../../components/Loading';
import { metrics, colors } from '../../../services/constants';
import { ScrollView } from 'react-native';

const srollRef = createRef<ScrollView>();

export default function Atoms() {

    const [loading, setLoading] = useState(false);
    const [howMany, setHowMany] = useState(1);
    const [randomSize, setRandomSize] = useState(false);
    const [uris, setUris] = useState<string[]>([]);

    useEffect(() => {
        setUris([]);
    }, [howMany]);

    async function handleSubmit() {
        setLoading(true);
        const urls = await generate(howMany, randomSize);
        setUris(urls);
        setLoading(false);
        await new Promise((r) => setTimeout(r, 300));
        srollRef.current?.scrollTo({ y: metrics.screenHeight, animated: true });
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <S.Container ref={srollRef}>
            <S.Header>
                <S.HeaderTitle>Random image</S.HeaderTitle>
            </S.Header>
            <Hs.Cards>
                <S.Card bg={colors.cardColors[0]} column fStart>
                    <Hs.CardTitle>How many?</Hs.CardTitle>
                    <S.RangeSlider
                        onValueChange={setHowMany}
                        minimumValue={1}
                        step={1}
                        value={howMany}
                        maximumValue={20}
                        minimumTrackTintColor={colors.cardColors[1]}
                        maximumTrackTintColor={colors.cardColors[2]}
                        thumbTintColor={colors.cardColors[3]}
                    />
                    <Hs.CardTitle>{howMany}</Hs.CardTitle>
                </S.Card>
                <Hs.Card bg={colors.cardColors[1]} onPress={() => setRandomSize((old) => !old)}>
                    <Hs.CardTitle>Random size?</Hs.CardTitle>
                    <Hs.CardTitle>{randomSize ? 'yes' : 'no'}</Hs.CardTitle>
                </Hs.Card>
            </Hs.Cards>
            <SubmitButton onPress={handleSubmit} />
            {!loading && uris.length > 0 && (
                uris.map((url: string, index: number) => (
                    <S.Image source={{ uri: url }} key={`${index.toString()}-${url}`} />
                ))
            )}
        </S.Container>
    );
};