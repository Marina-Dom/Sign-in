import './Signin.css';


export default function Signin(){
    return (
    <div className = "Form">
        <h1>Have an account? Sign in</h1>
        <form>
        <input className= "username" type="username" placeholder="Username"/>
        <input className= "password" type="password" placeholder="Password"/>
        <button className="LogIn">LOGIN</button>
        <input className="Remember" type="checkbox"/> Remember Me
        </form>
    </div>
    );
}