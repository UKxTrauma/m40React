const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
    try {
        if (req.body.title && req.body.actor){
            await Movie.create({title: req.body.title, actor: req.body.actor});
            res.status(201).send({title: req.body.title, actor: req.body.actor});
        }
        else {
            res.status(400).send({error: "no title or actor found"})
        }
    } catch (error) {
        res.status(500).send({error:"internal server error"})
        console.log(error)

    }
}

exports.listMovies = async (req, res) => {
    try {
        let movieList = await Movie.find({});
        if (movieList.length > 0){
            res.status(200).send({movieList});
        }
        else {
            res.status(400).send({error: "request failed, no movies to display"})
        }
    } catch (error) {
        res.status(500).send({error:"internal server error"})
        console.log(error)
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        let movieList = await Movie.find({})
        if ((req.body.title && req.body.actor) && movieList.length > 0){
            await Movie.deleteOne({ title: req.body.title, actor: req.body.actor })
            res.status(200).send(await Movie.find({}))
        }
        else {
            res.status(400).send({error: "request failed"})
        }
    } catch (error) {
        res.status(500).send({error:"internal server error"})
        console.log(error)
    }
}

exports.deleteMovies = async (req, res) => {
    try {
        let movieList = await Movie.find({})
        if (movieList.length > 0){
            await Movie.deleteMany({movieList})
            res.status(200).send("Contents deleted")
        }
        else {
            res.status(400).send({error: "request failed"})
        }
    } catch (error) {
        res.status(500).send({error:"internal server error"})
        console.log(error)
    }
}

// exports.editMovie = async (req, res) =>
// {
//     try
//     {
//         await Movie.updateOne({ title: req.body.title, actor: req.body.actor }, { title: req.body.newT, actor: req.body.newA })
//         res.status(200).send(await Movie.find({}))
//     } catch (error)
//     {
//         res.status(400).send(console.log("Failed to list items"))
//         console.log(error)
//     }
// }

exports.editTitle = async (req, res) =>
{
    try
    {
        await Movie.updateOne({ title: req.body.title }, { title: req.body.newT })
        res.status(200).send(await Movie.find({}))
    } catch (error)
    {
        res.status(400).send(console.log("Failed to list items"))
        console.log(error)
    }
}
exports.editActor = async (req, res) =>
{
    try
    {
        await Movie.updateOne({ actor: req.body.actor }, { actor: req.body.newA })
        res.status(200).send(await Movie.find({}))
    } catch (error)
    {
        res.status(400).send(console.log("Failed to list items"))
        console.log(error)
    }
}
