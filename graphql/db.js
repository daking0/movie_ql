export let movies = [
    {
        id: 0,
        name: "Nivolas",
        score :1
    },{
        id: 1,
        name: "Star Wars - The new one",
        score : 8
    },{
        id: 2,
        name: "Avengers - the new one",
        score : 99
    },{
        id: 3,
        name: "The Godfather",
        score : 83
    },{
        id: 4,
        name: "Logan",
        score : 2
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const addMovie = (name, score) => {
    const newMovie = {
        id : movies.length + 1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanMovies.length){
        movies = cleanMovies;
        return true;
    }else {
        return false;
    }
}