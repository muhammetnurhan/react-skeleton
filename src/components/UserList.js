import { useHistory } from "react-router-dom"
import axios from "../axios"
import React, { useEffect, useState } from "react"
export const UserList = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const history = useHistory()
    const clickHandler = (id) => {
        history.push(`/user/${id}`)

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }
    const getUsers = () => {
        axios.get("tracker/all").then(res => {

            setUsers(res.data.documents)

        })
    }
    useEffect(() => {
        getUsers()
    }, [])

    const searctedUser = () => {
        if (search)
            return users.filter(user => {
                if (user.name !== null)
                    return user.name.toLowerCase().includes(search.toLowerCase());
            });
        else {
            return users
        }
    }

    return (
        <ul className="nav nav-treeview">
        <div className="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search..."/>
        </div>
                  {searctedUser().map(user => (
                <li key={user.id} onClick={() => clickHandler(user.id)} className="nav-item">
                    <a  className="nav-link">
                        <i className="far fa-user-circle nav-icon"></i>
                        {user.name ? <p>user.name.toLowerCase()</p> : <p></p>} 
                    </a>
                </li>
            ))}
        </ul>
    )
}