export const getName = () => {
    return fetch('/student', {
        method: 'GET',
        credentials: 'include'
    })
        .then(response => {
            if (response.status === 200) {
                return response.json().then(data => data.name)
            } else {
                throw response.status
            }
        })
};

export const getWorkdaysForMonth = (_id) => {
    return fetch('/workdays', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id })
    })
        .then(response => response.json())
};

export const getDetailedWorkdaysForMonth = (_id) => {
    return fetch('/detailedWorkdays', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id })
    })
        .then(response => response.json())
};