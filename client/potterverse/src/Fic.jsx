


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import logo from './assets/th1.jpg';
// import logo1 from './assets/rec15.jpg';
// import './Fic.css';
// import { NavLink } from 'react-router-dom';

// //  const baseURL = "https://irisapi.onrender.com";
//   const baseURL = "http://localhost:3100"

// function Fic() {
//     const [formData, setFormData] = useState({
//         title: '',
//         author: '',
//         text: ''
//     });

//     const [chats, setChats] = useState([]);

//     const handleInputChange = event => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async event => {
//         event.preventDefault();
//         try {
//             const response = await axios.post(`${baseURL}/api/developer/chats`, formData);
//             console.log('Chat created:', response.data);
//             alert('Chat created successfully!');
            
//             setFormData({
//                 title: '',
//                 author: '',
//                 text: ''
//             });
//             fetchChats();
//         } catch (error) {
//             console.error('Error creating chat:', error);
        
//         }
//     };



//     useEffect(() => {
//         async function fetchChats() {
//             try {
//                 const response = await axios.get(`${baseURL}/api/developer/chats`);
//                 setChats(response.data);
//             } catch (error) {
//                 console.error('Error fetching chats:', error);
//             }
//         }
//         fetchChats();
//     }, []);

//     return (
//         <>
//             <div className='header'>
//                 <div className="left-side">Potter</div>
//                 <div className="center-logo">
//                     <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto', borderRadius: '15px' }} />
//                 </div>
//                 <div className="right-side">Verse</div>
//             </div>

           
//             <div className='navigation-bar'>
//                 <NavLink to="/quiz">Quiz</NavLink>
//                 <NavLink to="/about">Character Quotient</NavLink>
//                 <NavLink to="/news">News</NavLink>
//                 <NavLink to="/fic">FicFathom</NavLink>
//                 <NavLink to="#">Chamber of Chat</NavLink>
//                 <NavLink to="/latest">Patronus</NavLink>
//             </div>
//             <div className="text-overlay">
//                 <h1>Welcome</h1>
//                 <p>Welcome to our enchanted Fanfiction Hub! Here, you can weave your own spells and share your unique tales set in the mystical world of Harry Potter. Whether you're a seasoned wordsmith or just beginning your journey, this is your chance to let your imagination soar..</p>
//                 <NavLink to='#' className="btn">Read more...</NavLink>
//             </div>

//             <div className='logo1'>
//                 <img src={logo1} alt="Logo" />
//             </div>

//             <div className="input-form">
//                 <h2>Upload New Fanfic</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="title">Title:</label><br/>
//                         <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} /><br/>
//                     </div>
//                     <div>
//                         <label htmlFor="author">Author:</label><br/>
//                         <input type="text" id="author" name="author" value={formData.author} onChange={handleInputChange} /><br/>
//                     </div>
//                     <div>
//                         <label htmlFor="text">Text:</label><br/>
//                         <textarea id="text" name="text" value={formData.text} onChange={handleInputChange}></textarea><br/>
//                     </div>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>

//             <div className="previous-chats">
//                 <h2>Previous FanFics</h2>
//                 <ul>
//                     {chats.map((chat, index) => (
//                         <li key={index}>
//                             <h3>{chat.title}</h3>
//                             <p>Author: {chat.author.join(', ')}</p>
//                             <p>{chat.text}</p>
//                             {/* <button onClick={() => handleDelete(chat._id)}>Delete</button> */}
//                         </li>
//                     ))}
//                 </ul>
//                 {/* <button onClick={handleDeleteRecentChat}>Delete Recent Chat</button> */}

//             </div>
//             <footer className='footer'>
//             <div className='containerf'>
//                 <div className='row'>
//                     <div className='footer-col'>
//                         <h4>ABOUT US</h4>
//                         <ul>
//                             <li><NavLink to='#'>OUR SERVICES</NavLink></li>
//                             <li><NavLink to='#'>PRIVACY POLICY</NavLink></li>
//                         </ul>
//                     </div>
//                     <div className='footer-col'>
//                         <h4>GET HELP</h4>
//                         <ul>
//                             <li><NavLink to='#'>FAQ</NavLink></li>
//                             <li><NavLink to='#'>KNOW MORE</NavLink></li>
//                         </ul>
//                     </div>
//                     <div className='footer-col'>
//                         <h4>CONTACT US</h4>
//                         <ul>
//                             <li><NavLink to='#'>INSTAGRAM</NavLink></li>
//                             <li><NavLink to='#'>TELEGRAM</NavLink></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </footer>
        
//         </>
//     );
// }

// export default Fic;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './assets/th1.jpg';
import logo1 from './assets/rec15.jpg';
import './Fic.css';
import { NavLink } from 'react-router-dom';

const baseURL = "http://localhost:3100";

function Fic() {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        text: ''
    });

    const [chats, setChats] = useState([]);

    useEffect(() => {
        fetchChats();
    }, []);

    const fetchChats = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/developer/chats`);
            setChats(response.data);
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

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
            const response = await axios.post(`${baseURL}/api/developer/chats`, formData);
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
        }
    };

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
                <NavLink to="/about">Character Quotient</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/fic">FicFathom</NavLink>
                <NavLink to="/ChatBox">Chamber of Chat</NavLink>
                <NavLink to="/latest">Patronus</NavLink>
            </div>

            <div className="text-overlay">
                <h1>Welcome</h1>
                <p>Welcome to our enchanted Fanfiction Hub! Here, you can weave your own spells and share your unique tales set in the mystical world of Harry Potter. Whether you're a seasoned wordsmith or just beginning your journey, this is your chance to let your imagination soar..</p>
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
                        </li>
                    ))}
                </ul>
            </div>

            <footer className='footer'>
                <div className='containerf'>
                    <div className='row'>
                        <div className='footer-col'>
                            <h4>ABOUT US</h4>
                            <ul>
                                <li><NavLink to='#'>OUR SERVICES</NavLink></li>
                                <li><NavLink to='#'>PRIVACY POLICY</NavLink></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4>GET HELP</h4>
                            <ul>
                                <li><NavLink to='#'>FAQ</NavLink></li>
                                <li><NavLink to='#'>KNOW MORE</NavLink></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4>CONTACT US</h4>
                            <ul>
                                <li><NavLink to='#'>INSTAGRAM</NavLink></li>
                                <li><NavLink to='#'>TELEGRAM</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Fic;
