import React, { useEffect, useState } from "react";
import Header from '../../components/Header';
import { Container, ListMovies } from './styles';
import { getMoviesSave, deleteMovie } from '../../utils/storage';
import FavoriteItem from '../../components/FavoriteItem';
import { useNavigation, useIsFocused } from '@react-navigation/native';

function Movies() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let isActive = true;

        async function getFavoriteMovies() {
            try {
                const result = await getMoviesSave('@MovieApp');

                if (isActive) {
                    setMovies(result);
                    // console.log(result);
                }
            } catch (error) {
                console.log(error)
            }
        }

        if (isActive) {
            getFavoriteMovies();
        }

        return () => {
            isActive = false;
        }
    }, [isFocused]);

    async function handleDelete(id) {
        const result = await deleteMovie(id);
        setMovies(result);
    }

    function navigateDetailPage(item) {
        navigation.navigate('Detail', { id: item.id })
    }

    return (
        <Container>
            <Header
                title="Meus filmes"
            />

            <ListMovies
                data={movies}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) =>
                    <FavoriteItem
                        data={item}
                        deleteMovie={handleDelete}
                        navigatePage={() => navigateDetailPage(item)}
                    />
                }
            />
        </Container>
    )
}

export default Movies;