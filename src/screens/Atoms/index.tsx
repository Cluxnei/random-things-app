import React, { useState, createRef, useEffect } from 'react';
import * as S from '../Numbers/styles';
import * as Hs from '../Home/styles';
import { colors, metrics } from '../../../services/constants';
import SubmitButton from '../../components/SubmitButton';
import { generate, IAtom } from './random';
import Loading from '../../components/Loading';
import { ScrollView } from 'react-native-gesture-handler';

function randomCardColor() {
    const max = colors.cardColors.length;
    return colors.cardColors[Math.floor(Math.random() * max)];
}

const scrollRef = createRef<ScrollView>();

export default function Atoms() {

    const [howMany, setHowMany] = useState(1);
    const [sortByAtomicNumber, setSortByAtomicNumber] = useState(false);
    const [loading, setLoading] = useState(false);
    const [randomAtoms, setRandomAtoms] = useState<number[]>([]);
    const [unique, setUnique] = useState(false);

    useEffect(() => {
        setRandomAtoms([]);
    }, [howMany, sortByAtomicNumber]);

    function handleUniqueChange() {
        setUnique((old) => !old);
        if (!unique && howMany > 118) {
            setHowMany(118);
        }
    }

    function needBlackText(slug: string): boolean {
        return ['Ag', 'Po', 'Ca', 'Zr', 'Cs', 'At', 'Rn', 'Ra', 'U', 'Fm', 'Fl', 'No', 'La', 'Ts'].includes(slug);
    }

    async function handleSubmit() {
        setLoading(true);
        setRandomAtoms(generate(howMany, sortByAtomicNumber, unique));
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
                <S.HeaderTitle>Random atoms</S.HeaderTitle>
            </S.Header>
            <Hs.Cards>
                <S.Card bg={colors.cardColors[0]} column fStart>
                    <Hs.CardTitle>How many?</Hs.CardTitle>
                    <S.RangeSlider
                        onValueChange={setHowMany}
                        minimumValue={1}
                        step={1}
                        value={howMany}
                        maximumValue={unique ? 118 : 300}
                        minimumTrackTintColor={colors.cardColors[1]}
                        maximumTrackTintColor={colors.cardColors[2]}
                        thumbTintColor={colors.cardColors[3]}
                    />
                    <Hs.CardTitle>{howMany}</Hs.CardTitle>
                </S.Card>
                <Hs.Card bg={colors.cardColors[1]} onPress={() => setSortByAtomicNumber((old) => !old)} column>
                    <Hs.CardTitle>Sort by atomic number?</Hs.CardTitle>
                    <Hs.CardTitle>{sortByAtomicNumber ? 'yes' : 'no'}</Hs.CardTitle>
                </Hs.Card>
                <Hs.Card bg={colors.cardColors[1]} onPress={handleUniqueChange}>
                    <Hs.CardTitle>Unique?</Hs.CardTitle>
                    <Hs.CardTitle>{unique ? 'yes' : 'no'}</Hs.CardTitle>
                </Hs.Card>
            </Hs.Cards>
            <SubmitButton onPress={handleSubmit} />
            {!loading && randomAtoms.length > 0 && (
                <Hs.Cards>
                    {randomAtoms.map((atom: IAtom, index: number) => (
                        <S.Card key={`${index.toString()}-${atom.slug}`} bg={atom.color}>
                            <Hs.CardTitle color={needBlackText(atom.slug) ? 'black' : undefined}>{atom.name}, {atom.slug}</Hs.CardTitle>
                            <S.Tiny color={needBlackText(atom.slug) ? 'black' : undefined}>{atom.atomicNumber}</S.Tiny>
                        </S.Card>
                    ))}
                </Hs.Cards>
            )}
        </S.Container>
    );
};