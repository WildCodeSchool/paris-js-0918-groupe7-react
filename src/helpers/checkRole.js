import axios from 'axios';

 const checkRole = () => {
    const token = localStorage.getItem("token");
    
    const role =  axios({
        method: 'POST',
        url: 'http://localhost:3002/users/getrole/',
        headers: {
          authorization: `Bearer ${token}`
        }
    }).then(res => res.data.role);

    return role;
}

export default checkRole;