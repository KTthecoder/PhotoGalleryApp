import { useEffect, useState } from "react"
import GetCookie from "../components/GetCookie";

const useFetch = (url, method) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const csrftoken = GetCookie('csrftoken');
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
        })
        .then(res => res.json())
        .then((data) => {
            setData(data)
            console.log(data)
        })
        .catch(err => console.log("Error, ", err))
    }, [])

    return [data]
}

export default useFetch