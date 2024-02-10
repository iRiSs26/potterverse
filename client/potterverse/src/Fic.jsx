


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './assets/th1.jpg';
import logo1 from './rec15.jpg';
import './Fic.css';
import { NavLink } from 'react-router-dom';

function Fic() {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        text: ''
    });

    const [chats, setChats] = useState([]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/developer/chats', formData);
            console.log('Chat created:', response.data);
            alert('Chat created successfully!');
            
            setFormData({
                title: '',
                author: '',
                text: ''
            });
            fetchChats();
        } catch (error) {
            console.error('Error creating chat:', error);
            // alert('Error creating chat. Please try again.');
        }
    };

// -------------------


// const handleDeleteRecentChat = async () => {
//     try {
//         const response = await axios.delete('http://localhost:5000/api/developer/chats/recent');
//         console.log('Recent chat deleted:', response.data);
//         alert('Recent chat deleted successfully!');
//         fetchChats();
//     } catch (error) {
//         console.error('Error deleting recent chat:', error);
//         alert('Error deleting recent chat. Please try again.');
//     }
// };
    
    // ----------------------------

    useEffect(() => {
        async function fetchChats() {
            try {
                const response = await axios.get('http://localhost:5000/api/developer/chats');
                setChats(response.data);
            } catch (error) {
                console.error('Error fetching chats:', error);
            }
        }
        fetchChats();
    }, []);

    return (
        <>
            <div className='header'>
                <div className="left-side">Potter</div>
                <div className="center-logo">
                    <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto', borderRadius: '15px' }} />
                </div>
                <div className="right-side">Verse</div>
            </div>

           
            <div className='navigation-bar'>
                <NavLink to="/quiz">Quiz</NavLink>
                <NavLink to="/info">Character Quotient</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/fic">FicFathom</NavLink>
                <NavLink to="#">Chamber of Chat</NavLink>
                <NavLink to="/latest">Patronus</NavLink>
            </div>
            <div className="text-overlay">
                <h1>Welcome</h1>
                <p>Embark on a journey through the hallowed halls of Hogwarts as you delve into the lives of your favorite characters. From the courageous Harry Potter himself to the clever Hermione Granger and the loyal Ron Weasley, each character has a tale as captivating as a spell cast by Professor Dumbledore.</p>
                <NavLink to='#' className="btn">Read more...</NavLink>
            </div>

            <div className='logo1'>
                <img src={logo1} alt="Logo" />
            </div>

            <div className="input-form">
                <h2>Upload New Fanfic</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label><br/>
                        <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} /><br/>
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label><br/>
                        <input type="text" id="author" name="author" value={formData.author} onChange={handleInputChange} /><br/>
                    </div>
                    <div>
                        <label htmlFor="text">Text:</label><br/>
                        <textarea id="text" name="text" value={formData.text} onChange={handleInputChange}></textarea><br/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className="previous-chats">
                <h2>Previous FanFics</h2>
                <ul>
                    {chats.map((chat, index) => (
                        <li key={index}>
                            <h3>{chat.title}</h3>
                            <p>Author: {chat.author.join(', ')}</p>
                            <p>{chat.text}</p>
                            {/* <button onClick={() => handleDelete(chat._id)}>Delete</button> */}
                        </li>
                    ))}
                </ul>
                {/* <button onClick={handleDeleteRecentChat}>Delete Recent Chat</button> */}

            </div>
        </>
    );
}

export default Fic;

