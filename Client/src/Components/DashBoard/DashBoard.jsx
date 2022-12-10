import React, { useState } from "react";
import axios from "axios";

const DashBoard = () => {
    const [inputs, setInputs] = useState({});


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)

        axios.post('http://localhost/skin-care/Server/User.php', inputs);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    return (
        <div>
            <h1>List Users</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name:</label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Surname:</label>
                            </th>
                            <td>
                                <input type="text" name="surname" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email:</label>
                            </th>
                            <td>
                                <input type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Phone:</label>
                            </th>
                            <td>
                                <input type="text" name="phone" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td align="right" colSpan="2">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
};

export default DashBoard;
