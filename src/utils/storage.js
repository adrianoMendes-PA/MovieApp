import AsyncStorage from '@react-native-async-storage/async-storage';

// Busca os filmes salvos
export async function getMoviesSave(key) {
    const myMovies = await AsyncStorage.getItem(key);
    let moviesSave = JSON.parse(myMovies) || [];
    return moviesSave;
}

// Salva um novo filme
export async function saveMovie(key, newMovie) {
    let moviesStored = await getMoviesSave(key);

    // Se tiver algum filme salvo com esse mesmo ID ou duplicado, vai ser ignorado
    const hasMovie = moviesStored.some(item => item.id === newMovie.id);

    if (hasMovie) {
        console.log("Esse filme já foi salvo");
        return;
    }

    moviesStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
    console.log("Filme salvo com sucesso!");
}

// Deleta um filme salvo
export async function deleteMovie(id) {
    let moviesStored = await getMoviesSave('@MovieApp');

    let myMovies = moviesStored.filter(item => {
        return (item.id != id)
    });

    await AsyncStorage.setItem('@MovieApp', JSON.stringify(myMovies));
    console.log('Filme deletado com sucesso!');
    return myMovies;
}

// Verifica se tem o mesmo filme salvo na lista
export async function hasMovie(movie) {
    let moviesStored = await getMoviesSave('@MovieApp');

    const hasMovie = moviesStored.find(item => item.id === movie.id);

    if (hasMovie) {
        return true;
    }

    return false;
}