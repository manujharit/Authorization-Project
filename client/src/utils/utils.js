import axios from 'axios'


export const login = async (body) => {
    const res = await axios.post('http://localhost:3000/login', body).then((res) => {
        return res
    }).catch((err) => {
        return err.response
    })
    return res
}

export const signup = async ({name,emailId,pin,password}) => {
    const body = {
        email:emailId,
        name,
        pin,
        password
    }
    const res = await axios.post('http://localhost:3000/signup', body).then((res) => {
        return res
    }).catch((err) => {
        return err.response
    })
    return res
}

export const checkEmail = async (email) => {
    const res = await axios.post('http://localhost:3000/checkemail', { email }).then(res => res.data.checkEmail).catch(err => err.response)
    return res
}