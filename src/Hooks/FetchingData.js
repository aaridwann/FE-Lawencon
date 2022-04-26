import axios from 'axios'

export const fetchingData = async (url, key, search, page, setDispatch, movie) => {
    try {
        await axios({
            method: 'GET',
            url: url,
            params: { 'apikey': key, s: search, page: page }
        })
            .then(async (res) => {
                let size = 4
                let data = res.data.Search.slice(0, size)
                setDispatch([...movie, ...data])
            })
    } catch (error) {
        console.log(error);
    }

}