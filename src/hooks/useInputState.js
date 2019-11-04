import {useState} from 'react'

export default () => {
    const [value, setValue] = useState({})
    const handleChange = (event) => setValue({...value, [event.target.name]: event.target.value})
    return {value, handleChange}
}