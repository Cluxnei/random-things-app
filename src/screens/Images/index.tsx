import React, { useState, useEffect } from 'react';
import * as S from '../Numbers/styles';
import SubmitButton from '../../components/SubmitButton';
import { generate } from './random';
import Loading from '../../components/Loading';


export default function Atoms() {

    const [loading, setLoading] = useState(true);
    const [uri, setUri] = useState('');

    async function handleSubmit() {
        setLoading(true);
        const url = await generate();
        setUri(url);
        setLoading(false);
    }

    useEffect(() => {
        handleSubmit().then();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <S.Container>
            <S.Header>
                <S.HeaderTitle>Random image</S.HeaderTitle>
            </S.Header>
            <S.Image source={{ uri }} />
            <SubmitButton onPress={handleSubmit} />
        </S.Container>
    );
};