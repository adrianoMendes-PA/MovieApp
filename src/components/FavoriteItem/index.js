import React from "react";

import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Title, RateContainer, Rate, ActionContainer, DetailButton, DeleteButton } from './styles';

function FavoriteItem({ data, deleteMovie, navigatePage }) {
    return (
        <Container>
            <Title size={22}>{data.title}</Title>

            <RateContainer>
                <Icon name="md-star" size={12} color="#E7A74e" />
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>

            <ActionContainer>
                <DetailButton onPress={() => navigatePage(data)}>
                    <Title size={14}>Ver detalhes do filme</Title>
                </DetailButton>

                <DeleteButton onPress={() => deleteMovie(data.id)}>
                    <Icon name="trash-outline" size={24} color="#FFF" />
                </DeleteButton>
            </ActionContainer>
        </Container>
    )
}

export default FavoriteItem;