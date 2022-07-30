import {NavLink} from "react-router-dom";

function About() {
    return (
        <>
            <div className='container-fluid'>
                <div className='about-block'>
                    <p>What About Messenger App Technology?</p>
                    <p>Messenger apps are now commonplace, with many brands employing the technology to connect their
                        customers with customer service agents.</p>

                    <p>The technology behind messaging apps has been in widespread use since the early 90s, but it
                        really
                        rose in popularity in the early 2000s with the advent of messaging apps like AOL Messenger. By
                        2013,
                        the number of messages being sent via these apps surpassed that of SMS messages.</p>

                    <p>Now, messaging apps attract billions of users, and they’re in use all over the world. WhatsApp
                        currently has 1.6 billion users, while Facebook messenger has 1.3 billion and popular messaging
                        platform WeChat has 1.1 billion users.</p>
                </div>
                <div style={{margin: '0 auto', width: 'max-content'}}>
                    <p>
                        <button className='btn btn-primary'><NavLink style={{color: "inherit", textDecoration: 'none'}}
                                                                     to='/create'>Let's create a note:)</NavLink>
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;