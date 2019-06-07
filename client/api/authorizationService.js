export const signin = (email, password) => {
    return fetch('/signin', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(response => {
            if (response.status === 200) {
                return response.json().then(data => data.username)
            } else {
                throw response.status
            }
        })
};

export const signup = (email, password, username) => {
    return fetch('/signup', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, username })
    })
        .then(response => {
            if (response.status === 200) {
                return response.json().then(data => data.username)
            } else {
                throw response.status
            }
        })
};

export const signout = () => {
    return fetch('/signout', {
        method: 'GET',
        credentials: 'include'
    })
        .then(response => {
            if (response.status === 200) {
                return true
            } else {
                throw response.status
            }
        })
};