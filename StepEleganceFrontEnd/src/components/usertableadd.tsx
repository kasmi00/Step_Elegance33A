import React, { useState } from 'react';
import "./usertableadd.css";

interface TableRow {
    id: number;
    role: string;
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
    gender: string;
    dateOfBirth: Date;
}

interface UserTableProps {
    data: TableRow[];
}

const calculateAge = (dateOfBirth: Date): number => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
};

const UserTable: React.FC<UserTableProps> = ({ data }) => {
    const [newUser, setNewUser] = useState({
        id: 0,
        role: '',
        firstName: '',
        lastName: '',
        phone: 0,
        email: '',
        password: '',
        gender: '',
        dateOfBirth: new Date(),
    });
    const [tableData, setTableData] = useState(data);

    const handleAddUser = () => {
        // Validate the new user data if needed

        // Update the table data with the new user
        setTableData((prevData) => [...prevData, { ...newUser, id: prevData.length + 1 }]);

        // Clear the new user form
        setNewUser({
            id: 0,
            role: '',
            firstName: '',
            lastName: '',
            phone: 0,
            email: '',
            password: '',
            gender: '',
            dateOfBirth: new Date(),
        });
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>
                            <td>{row.phone}</td>
                            <td>{row.gender}</td>
                            <td>{row.email}</td>
                            <td>{calculateAge(row.dateOfBirth)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Form to add a new user */}
            <div>
                <h2 className="adduserheader">Add User</h2>
                <label>First Name:</label>
                <input className='labelbox'
                    type="text"
                    value={newUser.firstName}
                    onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                />
                <label>Last Name:</label>
                <input  className='labelbox' type="text" value={newUser.lastName}
                    onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                />
                <label>Phone Number:</label>
                <input  className='labelbox' type="number" value={newUser.phone}
                    onChange={(e) => setNewUser({ ...newUser, phone: parseInt(e.target.value, 10) })}
                />
                <label>Gender:</label>
                <input  className='labelbox'  type="text" value={newUser.gender}
                    onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
                />
                <label>Email:</label>
                <input  className='labelbox' type="text" value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <label>Date of Birth:</label>
                <input  className='labelbox' type="date" value={newUser.dateOfBirth.toISOString().split('T')[0]}
                    onChange={(e) => setNewUser({ ...newUser, dateOfBirth: new Date(e.target.value) })}
                />
                <button onClick={handleAddUser}>Add User</button>
            </div>
        </div>
    );
};

export default UserTable;
