// Exercise 18 - Accessing item of an object inside the array

var cars = {
    forSale: [
        {
            name: "Ferrari",
            color: "red",
            year: "2013"
        },
        {
            name: "Lamborghini",
            color: "black",
            year: "2017"
        }
    ]
};

console.log("All items of the array: ");
console.log(cars.forSale);
console.log("A specific place inside the object of the array: " + cars.forSale[1].name);


// Exercise 18 - MovieDB

var movies = [
    {
        title: "Interestellar",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Avengers",
        hasWatched: true,
        rating: 4.8
    },
    {
        title: "Titanic",
        hasWatched: false,
        rating: 4
    }
];

console.log("HAVE YOU SEEN?")
function moviesDB(movie){
    var result = "You have ";
    if (movie.hasWatched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

movies.forEach(function(movie){
    console.log(moviesDB(movie));
})