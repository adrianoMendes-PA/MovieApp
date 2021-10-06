import React, { useState, useEffect } from "react";
import { ScrollView, Modal } from 'react-native';
import { Container, Header, HeaderButton, Banner, ButtonLink, Title, ContentArea, Rate, LitsGenres, Description } from './style';

import Icon from 'react-native-vector-icons/Feather';
import Star from 'react-native-vector-icons/Ionicons';

import { useNavigation, useRoute } from '@react-navigation/native';
import api, { key } from '../../services/api';

import Stars from 'react-native-stars';
import Genres from "../../components/Genres";
import ModalLink from "../../components/ModalLink";


function Detail() {

    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState({});
    const [openLink, setOpenLink] = useState(false);

    useEffect(() => {
        let isActive = true;

        async function getMovies() {
            try {
                const response = await api.get(`/movie/${route.params?.id}`, {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                })

                if (isActive) {
                    setMovie(response.data);
                    // console.log(response.data);
                }
            } catch (error) {
                console.log(error)
            }
        }

        if (isActive) {
            getMovies();
        }

        return () => {
            isActive = false;
        }

    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Container>
                <Header>
                    <HeaderButton onPress={() => navigation.goBack()}>
                        <Icon
                            name="arrow-left"
                            size={28}
                            color="#FFF"
                        />
                    </HeaderButton>
                    <HeaderButton>
                        <Icon
                            name="bookmark"
                            size={28}
                            color="#FFF"
                        />
                    </HeaderButton>
                </Header>
                <Banner
                    resizeMethod="resize"
                    source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
                />

                <ButtonLink onPress={() => setOpenLink(true)}>
                    <Icon
                        name="link"
                        size={24}
                        color="#FFF"
                    />
                </ButtonLink>

                <Title numberOfLines={1}>{movie.title}</Title>

                <ContentArea>
                    <Stars
                        default={movie.vote_average}
                        count={10}
                        half={true}
                        starSize={20}
                        fullStar={<Star name="md-star" size={20} color="#E7A74e" />}
                        emptyStar={<Star name="md-star-outline" size={20} color="#E7A74e" />}
                        halfStar={<Star name="md-star-half" size={20} color="#E7A74e" />}
                        disable={true}
                    />
                    <Rate>{movie.vote_average}/10</Rate>
                </ContentArea>

                <LitsGenres
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={movie?.genres}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <Genres data={item} />}
                />

                <Title>Sinopse</Title>
                <Description>
                    {movie?.overview}
                </Description>
            </Container>

            <Modal animationType="slide" transparent={true} visible={openLink}>
                <ModalLink
                    link={movie?.homepage}
                    title={movie?.title}
                    closeModal={() => setOpenLink(false)}
                />
            </Modal>
        </ScrollView>
    )
}

export default Detail;