import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
    people: Props['people']
}

const AddToList: React.FC<IProps> = ({ setPeople, people }) => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        img: '',
        note: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if (!input.name || !input.age) return

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                note: input.note
            }
        ]);

        setInput({
            name: "",
            age: "",
            img: "",
            note: ""
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                className="AddToList-input"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={input.name}
            />

            <input
                type="number"
                className="AddToList-input"
                name="age"
                placeholder="Age"
                onChange={handleChange}
                value={input.age}
            />

            <input
                type="text"
                className="AddToList-input"
                name="img"
                placeholder="Img url"
                onChange={handleChange}
                value={input.img}
            />

            <textarea
                className="AddToList-input"
                name="note"
                placeholder="Note"
                onChange={handleChange}
                value={input.note}
            />

            <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList