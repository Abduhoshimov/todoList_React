import React from 'react'

export const TodoList = ({ addDate }) => {
    try {
        const [input, setInput] = React.useState({ name: '', age: '' })
        
        const submit = (e) => {
            e.preventDefault()
            if (input.name != "" || input.age != "") {
                addDate((p) => [...p, { ...input, id: Date.now() }])
                setInput({ name: '', age: '' })
            } else {
                alert('false')
            }
        }
        const change = (e) => {
            setInput((obj) => ({ ...obj, [e.target.name]: e.target.value }))
        }
        return (<>
            <form className='form' onSubmit={submit}>
                <input onChange={change} className='name' value={input.name} name="name" type="text" placeholder='Full Name' />
                <input onChange={change} className='age' value={input.age} name="age" type="text" placeholder='age' />
                <button className='submitBtn' type='submit'>Send</button>
            </form>
            <div className="error d-block d-nane"></div>
        </>
        )
    } catch (e) { console.log(e); }
}
