import axios from 'axios'

export async function getData() {
    try{
        const response = await axios.get('http://localhost:3000')
        return response.data
    } catch(err) {
        console.log(err)
    }
    
}