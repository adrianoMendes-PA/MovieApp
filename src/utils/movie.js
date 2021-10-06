// Gera uma lista de filmes com o tamanho que desejar
export function getListMovies(size, movies) {
    let popularMovies = [];

    for (let i = 0, l = size; i < l; i++) {
        popularMovies.push(movies[i]);
    }

    return popularMovies;
}

// Gera uma lista de filmes aleatório
export function randomBanner(movies) {
    return Math.floor(Math.random() * movies.length);
}