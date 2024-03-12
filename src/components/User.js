const User = (props)=>{
    const {name, location} = props;
    return(
        <div className="user">
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h3>Contact:</h3>
        </div>
    )
}

export default User;