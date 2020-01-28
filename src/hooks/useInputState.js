import {useState} from 'react'

export default () => {
    const [formValues, setValue] = useState({})
    const handleChange = (event) => setValue(
            {...formValues, [event.target.name]: event.target.value}
        )
    return {formValues, handleChange}
}