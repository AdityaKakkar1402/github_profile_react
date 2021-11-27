import React from 'react'
import './../App.css'
import {useEffect,useState} from 'react'

const Card = () => {

    const [users,setUsers]=useState([]);
    let count=1;

    const getUsers= async () =>{
        const response= await fetch('https://api.github.com/users');
        
        setUsers(await response.json());
    }

    useEffect(() => {
        getUsers();
    },[]);

    return (
        <>
        {
            users.map((curElem)=>{
                return(
                    <div className="c_container">
                       <img className="card_image" src={curElem.avatar_url} alt="" srcset="" />
                       <div className="card_content">
                         <div className="name">{curElem.login}</div>
                         <div className="petname">Dorkboy Rex</div>
                         <div className="details">Article - {count++}</div>
                         <div className="details">Followers - 301</div>
                         <div className="details">Ratings - 8.9/10</div>
                        </div>
                    </div>

                      )
                                })
        }
        </> 
        
           )
}

export default Card
