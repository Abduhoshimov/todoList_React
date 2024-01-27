import React from 'react'

export const Card = ({ id, name, age, setUser }) => {
    const [bool, setBool] = React.useState(false);
    const [edit, setEdit] = React.useState({name, age});

    const deleteCard = () => {
        setUser((p)=> p.filter(item => item.id !== id))
    }

    const editCard = () => {
        setBool(!bool)
    }

    const saveData = () => {
        setUser((p) => 
            p.map((item) => item.id === id ? {...item, name: edit.name, age: edit.age} : item)
        )
        setBool(false)
    }

    const editChange = (e) => {
        setEdit((p) => ({ ...p, [e.target.name]: e.target.value}));
    }


    return (
        <div id={id} className='card_1'>
           {bool ? (
            <div className='card-btns'>
                <input className='EditName' onChange={editChange} name='name' value={edit.name} type="text" />
                <input className='EditAge' onChange={editChange} name='age' value={edit.age} type="text" />
                <button className='EditSave' onClick={saveData}>save</button>
            </div>
           ) : (
            <div className='card-btns'>
                <h3>{name}</h3>
                <h3>{age}</h3>
            </div>
           )}
            <div className="card-btns">
                <button onClick={editCard} className='edite'>Edit</button>
                <button onClick={deleteCard} className='delete'> <i class="fa-solid fa-trash-can"></i> </button>
            </div>
        </div>
    )
}
