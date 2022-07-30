import {NavLink} from "react-router-dom";


function Main() {
    return (<>
        <div className='container-fluid'>
            <div className='flex-button'>
                <div>
                    <NavLink to='/create' className='btn btn-primary'>Create a note</NavLink>
                </div>
                <div>
                    <NavLink to='/note' className='btn btn-primary'>Read note</NavLink>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='about-main'>
                <p><b>Share notes</b> &#10159; Who you talk to and what you share should be up to you. We’re
                    dedicated to making sure Messenger is a safe, private, and secure place for you to connect
                    with
                    the people who matter. To do this, we’ve built tools that allow you to stay in control,
                    secure
                    your account, and stay safe on the platform.</p>
                <p>How to do: </p>
                <ul className='to-top'>
                    <li>
                        Link with href
                    </li>
                    <li>
                        Paste a link and push Create
                    </li>
                    <li>
                        Send a generated link to your friend
                    </li>
                </ul>
                <div>
                    <p>How to read a note? Cross to url-link from a friend, or enter a link here</p>
                </div>
            </div>
        </div>

    </>);
}

export default Main;