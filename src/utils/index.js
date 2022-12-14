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

export const editName = async (token, name) => {
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

export const editEmail = async (token, email) => {
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

export const editPassword = async (token, password) => {
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

export const deleteAccount = async (token) => {
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

export const listFilms = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_MOVIE_API}list`, {
          method: "GET",
          headers: {"Content-Type": "application/json"}
        })
        const data = await response.json()
        let array = [...data.movieList]
        
        const movieList = array.map((movie) =>
        {
            return {
                title: movie.title,
                actor: movie.actor
            }
        })
        return movieList
    } catch (error) {
        console.log(error)
    }
}

export const movieAdd = async (title, actor) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_MOVIE_API}add`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                'title': title,
                "actor": actor
            })
        });
        await response.json()
        // const data = await response.json()
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const movieDelete = async (token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_MOVIE_API}delete`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`}
        });
        await response.json()
        // const data = await response.json()
        // console.log(data)
    } catch (error)  {
        console.log(error)
    }
}

export const moviesDelete = async (token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_MOVIE_API}delete`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`}
        });
        await response.json()
        // const data = await response.json()
        // console.log(data)
    } catch (error)  {
        console.log(error)
    }
}

export const editTitle = async (token, title) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_MOVIE_API}edittitle`, {
            method: "PUT",
            headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
            body: JSON.stringify({"title": title})
        });
        await response.json()
        // const data = await response.json()
        // console.log(data)
    } catch (error)  {
        console.log(error)
    }
}

export const editActor = async (token, email) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_MOVIE_API}editemail`, {
            method: "PUT",
            headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
            body: JSON.stringify({"email": email})
        });
        await response.json()
        // const data = await response.json()
        // console.log(data)
    } catch (error)  {
        console.log(error)
    }
}