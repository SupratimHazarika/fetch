import React,{useEffect} from 'react';
import "./Search.css"

function Search({search_user, setSearch_user, setUsers, users}) {
    function handleChange(e){
        setSearch_user(e.target.value)
    }
    function handleClick(){
        setUsers(users.filter(user=>user.first_name.toLowerCase().includes(search_user.toLowerCase())))
    }
    function handlesubmit(e){
        e.preventDefault();
    }
    useEffect(() => {
        
    },)
    return (
        <form className="search_container" onSubmit={handlesubmit}>
            <input className="input" onChange={handleChange}/>
            <button onClick={()=>handleClick()}>Search</button>
        </form>
    )
}

export default Search
