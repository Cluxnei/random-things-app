import React from 'react';
import { colors } from '../../../services/constants';
import * as S from './styles';
import Icons from './icons';
import { handleNumbersPress } from './handlers';

export default function Home() {

    function randomCardColor() {
        const max = colors.cardColors.length;
        return colors.cardColors[Math.floor(Math.random() * max)];
    }

    return (
        <S.Container>
            <S.Scroll>
                <S.Header>
                    <S.Title>Random Things</S.Title>
                    <S.SearchButton>
                        <S.SearchIcon source={Icons.search} />
                    </S.SearchButton>
                </S.Header>
                <S.Cards>
                    <S.Card bg={randomCardColor()} onPress={handleNumbersPress}>
                        <S.CardTitle>Numbers</S.CardTitle>
                        <S.CardImage source={Icons.numbers} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Animals</S.CardTitle>
                        <S.CardImage source={Icons.animal} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Atoms</S.CardTitle>
                        <S.CardImage source={Icons.atom} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Calendar dates</S.CardTitle>
                        <S.CardImage source={Icons.calendar} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Images</S.CardTitle>
                        <S.CardImage source={Icons.camera} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Commands</S.CardTitle>
                        <S.CardImage source={Icons.command} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Food</S.CardTitle>
                        <S.CardImage source={Icons.food} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Genetic Sequence</S.CardTitle>
                        <S.CardImage source={Icons.geneticSequence} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Musical Instruments</S.CardTitle>
                        <S.CardImage source={Icons.guitar} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Ideas</S.CardTitle>
                        <S.CardImage source={Icons.idea} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Locations</S.CardTitle>
                        <S.CardImage source={Icons.location} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Monsters</S.CardTitle>
                        <S.CardImage source={Icons.monster} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Peoples names</S.CardTitle>
                        <S.CardImage source={Icons.peoples} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Planets</S.CardTitle>
                        <S.CardImage source={Icons.planet} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Questions</S.CardTitle>
                        <S.CardImage source={Icons.question} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Web sites</S.CardTitle>
                        <S.CardImage source={Icons.www} />
                    </S.Card>
                    <S.Card bg={randomCardColor()}>
                        <S.CardTitle>Settings</S.CardTitle>
                        <S.CardImage source={Icons.settings} />
                    </S.Card>
                </S.Cards>
            </S.Scroll>
        </S.Container>
    );
}
