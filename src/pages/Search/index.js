import React, { useEffect, useState } from "react";

import { Container, ListsMovies, ContainerLoading, Loading } from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';

import api, { key } from "../../services/api";

import SearchItem from "../../components/SearchItem";

function Search() {

    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isActive = true;

        async function getSearchMovies() {
            try {
                const response = await api.get('/search/movie', {
                    params: {
                        query: route?.params?.name,
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                })
                if (isActive) {
                    setMovie(response.data.results);
                    // console.log(response.data.results);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }

        if (isActive) {
            getSearchMovies();
        }

        return () => {
            isActive = false;
        }

    }, []);

    function navigateDetailsPage(item) {
        navigation.navigate('Detail', { id: item.id })
    }

    if (loading) {
        return (
            <ContainerLoading>
                <Loading size="large" color="#FFF" />
            </ContainerLoading>
        )
    }

    return (
        <Container>
            <ListsMovies
                data={movie}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <SearchItem data={item} navigatePage={() => navigateDetailsPage(item)} />}
            />
        </Container>
    )
}

export default Search;