export const start = (_id) => {
    return fetch('/start', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id })
    })
};

export const finish = (_id) => {
    return fetch('/finish', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id })
    })
};