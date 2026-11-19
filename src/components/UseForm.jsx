import { useState } from 'react'
import Input from './Input'

function UseForm() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    const validateAge = (val) => val !== '' && Number(val) >= 0
    const validateName = (val) => val.length > 0

    const ageError = !validateAge(age)
    const error = {
        isError: ageError,
        message: ageError ? "Возраст не может быть отрицательным" : ""
    }

    function onSubmit(e) {
        e.preventDefault()

        if (ageError) {
            console.error(error.message)
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <Input
                    header="Имя"
                    validate={validateName}
                    type="text"
                    value={name}
                    setValue={setName}
                />
                <Input
                    header="Возраст"
                    validate={validateAge}
                    type="number"
                    value={age}
                    setValue={setAge}
                    error={error}
                />
                <button type="submit">Отправить</button>
            </form>

            <p>Name: {name}, age: {age}</p>
        </div>
    )
}

export default UseForm
