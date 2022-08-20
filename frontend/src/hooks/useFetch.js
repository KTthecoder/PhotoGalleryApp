import { useEffect, useState } from 'react'

const useFetch = (url, method) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const csrftoken = GetCookie('csrftoken');
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
            .then(res => res.json())
            .then((data) => {
                setData(data)
            })
            .catch(err => {
                console.log('Error: ', err)
                setError(err)
            })
        })
    }, url)

    return [data, error]
}

export default useFetch