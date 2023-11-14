import jwtDecode from "jwt-decode"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function UpdateProfile(){
    const token = localStorage.getItem('token');
    const payload =  jwtDecode(token);
    const email = payload.user.email ;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        age: 0,
        profession: '',
        gender: '',
        phone: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };


    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/api/profile/profileupdate' , {email , formData},
            {
            headers: {'Content-Type': 'application/json'},
        });
            if(response.status === 200){
                console.log('Update Successful');
                navigate('/profile');
            }
            else{
                console.log('An Error Occurred')
            }
        }catch(error){
            console.log(error)
        }
    }
    return <>
            <div className="max-w-md mx-auto mt-4 p-4">
        <h2 className="text-2xl font-semibold mb-4">User Information Form</h2>
        <form onSubmit={handleSubmit} method="POST">
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                <input type="text" id="username" name="username" required
                    className="w-full px-3 py-2 leading-tight border rounded-lg focus:outline-none focus:shadow-outline" value={formData.username} onChange={handleChange}/>
            </div>

            <div className="mb-4">
                <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">Age:</label>
                <input type="number" id="age" name="age" required
                    className="w-full px-3 py-2 leading-tight border rounded-lg focus:outline-none focus:shadow-outline" value={formData.age} onChange={handleChange}/>
            </div>

            <div className="mb-4">
                <label htmlFor="profession" className="block text-gray-700 text-sm font-bold mb-2">Profession:</label>
                <input type="text" id="profession" name="profession" required
                    className="w-full px-3 py-2 leading-tight border rounded-lg focus:outline-none focus:shadow-outline" value={formData.profession} onChange={handleChange}/>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
                <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500"
                    required
                >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required
                    className="w-full px-3 py-2 leading-tight border rounded-lg focus:outline-none focus:shadow-outline" value={formData.phone} onChange={handleChange}/>
            </div>

            <div className="mt-6">
                <input type="submit" value="Submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"/>
            </div>
        </form>
    </div>
    </>
}