import React from "react";

import { Container, BannerItem, Title, RateContainer, Rate } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

function SliderItem({ data }) {
    return (
        <Container activeOpacity={0.7} onPress={() => alert('TESTEE')}>
            <BannerItem
                resizeMethod="resize"
                source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}
            />
            <Title numberOfLines={1}>{data.title}</Title>
            <RateContainer>
                <Icon name="md-star" size={12} color="#E7A74e" />
                <Rate>{data.vote_average} / 10</Rate>
            </RateContainer>
        </Container>
    )
}

export default SliderItem;