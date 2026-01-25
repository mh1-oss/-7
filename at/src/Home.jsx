import { useState } from 'react'
import './App.css'
import List from './List.jsx'

const Home = () => {
    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem('items');
        return saved ? JSON.parse(saved) : [];
    })
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        if (text === '') return
        e.preventDefault()
        const newItems = [...items, text]
        setItems(newItems)
        localStorage.setItem('items', JSON.stringify(newItems))
        setText('')
    }
    const handleDelete = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
    }

    return (
        <>
            <div className="hero container">
                <h1>Simple ToDo App</h1>
                <p>This todo app for test design.</p>
            </div>
            <form className="form-items container" onSubmit={handleSubmit}>
                <input placeholder='Write Text here . . .' className='i4' type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit" className='b1'>+ Add New</button>
            </form>
            <div className="line container"></div>
            {items.map((item, index) => (
                <List key={index} Text={item} onDelete={handleDelete} />
            ))}
            <div className="total container">
                <p>Total List : <span>{items.length}</span></p>
            </div>
        </>
    )
}

export default Home
