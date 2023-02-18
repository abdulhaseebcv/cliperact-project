import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Epsiode({ data }) {
    const [episode, setEpisode] = useState('')
    const sendReq =() =>{
        axios.get(data).then((res) => {
            console.log('res: ', res.data);
            setEpisode(res.data.name)
        })
    }
    useEffect(() => {
        sendReq()
    }, [])
    return (
        <div>
            <span>{episode}</span>
        </div>
    )
}

export default Epsiode