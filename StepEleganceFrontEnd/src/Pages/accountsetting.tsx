import React, { useState } from 'react';
import './accountsetting.css';

interface AccountSettingsProps {
    // You can define any props needed for your component
}

const AccountSettings: React.FC<AccountSettingsProps> = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [dob, setDOB] = useState<string>(''); // Assuming date of birth is a string for simplicity

    const handleUpdateSettings = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implement logic to update settings (e.g., make API request)
        console.log('Updating settings...');
    };

    return (
        <div className="accountsettingcontainer">
            <h2 className='accountsettingheader'>Account Settings</h2>

            <form onSubmit={handleUpdateSettings}>
                <div className="formofaccountsetting">
                    <label className="accountsettinglabel">First Name:</label>
                    <input
                        type="text"
                        className="accountsettinginput"
                        placeholder="Your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label className="accountsettinglabel">Last Name:</label>
                    <input
                        type="text"
                        className="accountsettinginput"
                        placeholder="Your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

                    <label className="accountsettinglabel">Password:</label>
                    <input
                        type="text"
                        className="accountsettinginput"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label className="accountsettinglabel">Email:</label>
                    <input
                        type="email"
                        className="accountsettinginput"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label className="accountsettinglabel">Phone Number:</label>
                    <input
                        type="tel"
                        className="accountsettinginput"
                        placeholder="Your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />

                    <label className="accountsettinglabel">Date of Birth:</label>
                    <input
                        type="date" // Consider using a date picker for a better user experience
                        className="accountsettinginput"
                        placeholder="Your date of birth"
                        value={dob}
                        onChange={(e) => setDOB(e.target.value)}
                        required
                    />

                    <button className=" acountsetingbttn"
                        type="submit">   Update  </button>

                </div>
            </form>
            <div className="accountsettingpara">
            <p className='paraofaccountsetting'>Change your password? <a href="#">Click here</a></p>
            <p className='paraofaccountsetting'>Logout? <a href="#">Click here</a></p>
            </div>
            
        </div>
    );
};

export default AccountSettings;