import React, { useState } from 'react';
const Profile = ({ user }) => {
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [avatar, setAvatar] = useState(user.avatar);
    const [tickets,setTickets] = useState(user.tickets); // This can be fetched from the DB

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
                src={avatar} 
                alt="User Avatar" 
                style={{ 
                    width: '100px', 
                    height: '100px', 
                    borderRadius: '50%', 
                    objectFit: 'cover', 
                    border: '2px solid #ccc' 
                }} 
            />
            <input type="file" accept="image/*" onChange={handleAvatarChange} />
            <p>{tickets} Tickets</p>

            {/* Profile Form */}
            <form onSubmit={handleSubmit} style={{ flex: 1 }}>
                <div>
                    <label>Email:
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </label>
                </div>
                <div>
                    <label>Password:
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </label>
                </div>
                <div>
                    <label>Phone Number:
                        <input 
                            type="tel" 
                            value={phoneNumber} 
                            onChange={(e) => setPhoneNumber(e.target.value)} 
                            required 
                        />
                    </label>
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;

