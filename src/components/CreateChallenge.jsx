import { useState } from 'react'

function CreateChallenge(props) {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        if (!title.trim() || !category || !description.trim()) {
            alert('Please fill in all fields.')
            return
        }

        props.onCreate({
            title,
            category,
            description
        })

        setTitle('')
        setCategory('')
        setDescription('')
    }

    return (
        <section id='create-challenge' className='create-challenge'>
            <h2>Create a Challenge</h2>
            
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Challenge Title'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value=''>Choose a Category</option>
                    <option value='Fitness'>Fitness</option>
                    <option value='Technology'>Technology</option>
                    <option value='Creative'>Creative</option>
                </select>

                <textarea
                    placeholder='Challenge Description'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <button type='submit'>Create Challenge</button>
            </form>
        </section>
    )
}

export default CreateChallenge