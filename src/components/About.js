import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return(
        <div>
            <h1>Swiggy food delivery app</h1>
            <h2>Welcome to about page</h2>
            <ul>
                <li>Online orders</li>
                <li>Cuisines</li>
                <li>Location</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <User name={"Manjari"} location={"Jhansi"}/>
            <UserClass name={"Manjari Class"} location={"Jhansi Class"}/>
        </div>
    )
}

export default About;