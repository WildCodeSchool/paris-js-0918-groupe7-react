import axios from 'axios';

const checkRole = async () => {
    const token = localStorage.getItem("token");

    const role = await axios({
        method: 'POST',
        url: 'https://exton-back.herokuapp.com/users/getrole/',
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then(res => res.data.role);

    let hasRole = role === "client" || role === "admin" || role === "super_admin"

    return hasRole ? role : "visitor";
}

export default checkRole;
