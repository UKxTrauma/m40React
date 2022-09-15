export const register = async (name, email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_USER_API}signup`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                'name': name,
                "email": email,
                "password": password
            })
        });
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const login = async (email, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_USER_API}login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        });
        const data = await response.json()
        console.log(data.token)
        setter(data.user)
        return data.token

    } catch (error) {
        console.log(error)
    }
}

export const displayUsers = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_USER_API}list`, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        });
        const data = await response.json()
        const usernames = data.map(users => users.name)
        console.log(usernames)
        return usernames
    } catch (error)  {
        console.log(error)
    }
}

export const editname = async (token, name) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_USER_API}editname`, {
            method: "PUT",
            headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
            body: JSON.stringify({"name": name})
        });
        const data = await response.json()
        console.log(data)
    } catch (error)  {
        console.log(error)
    }
}

export const editemail = async (token, email) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_USER_API}editemail`, {
            method: "PUT",
            headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
            body: JSON.stringify({"email": email})
        });
        const data = await response.json()
        console.log(data)
    } catch (error)  {
        console.log(error)
    }
}

export const editpassword = async (token, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_USER_API}editpassword`, {
            method: "PUT",
            headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
            body: JSON.stringify({"password": password})
        });
        const data = await response.json()
        console.log(data)
    } catch (error)  {
        console.log(error)
    }
}

export const deleteaccount = async (token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_USER_API}delete`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`}
        });
        const data = await response.json()
        console.log(data)
    } catch (error)  {
        console.log(error)
    }
}

export const searchFilms = async () => {
    try {
        console.log("inside search films")
        // const req = await fetch('http://localhost:9000/movie/list', {
        const req = await fetch(`${process.env.REACT_APP_MOVIE_API}list`, {
          method: "GET",
          headers: {"Content-Type": "application/json"}
        })
        const res = await req.json()
        const filmList = res.map(movie => movie)
        return filmList
    } catch (error) {
        console.log(error)
    }
}
// setMovies(res)