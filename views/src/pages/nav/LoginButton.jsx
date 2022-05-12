import { useEffect } from "react";

const LoginButton = () => {
    
    // useefect axios post login
    const login = () => {
        axios.post('/login', {
            username: 'test',
            password: 'test'
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        login();
    }, [])


    return ( 
        <div className="login-button">
            <button className="bg-transparent hover:bg-green-cyan text-green-cyan font-semibold hover:text-white py-2 px-4 border border-green-cyan hover:border-transparent rounded">
                Login
            </button>
        </div>

     );
}
 
export default LoginButton;