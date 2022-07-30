import {NavLink} from "react-router-dom";

function Error() {
    return (
        <div>
            <p style={{marginTop: '50px', fontSize: '40px'}}><b>Page not found</b></p>
            <p>
                <img style={{width: '300px'}} src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000' alt=""/>
            </p>
            <div>
                <button className='btn btn-primary'><NavLink style={{color:"inherit", textDecoration: 'none'}} to='/create'>Return to Create</NavLink></button>
            </div>
        </div>
    );
}

export default Error;