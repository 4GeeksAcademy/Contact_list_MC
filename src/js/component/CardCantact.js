import React from "react";
import '../../styles/home.css'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const CardContact = ({ contactName, email, phone, address, edit, remove}) => {
    return (
        <div className="row border p-3 mb-5">
            <div className="col-3">
                <img src="https://media.licdn.com/dms/image/C4E03AQHLO54DdH3cpQ/profile-displayphoto-shrink_800_800/0/1568739717500?e=1724889600&v=beta&t=OJB6bAw2bJa1YNFUd18U8jH-oDkXC9hifQVR3bvaQ9s" alt="Javier Diez" className="rounded-circle w-50" />
            </div>
            <div className="col-8">
                <p className="fs-3">{contactName}</p>
                <div className="d-flex align-items-center mt-2"><i className="fa-solid fa-envelope"></i><p className="fs-5 ms-4 text-secondary">{email}</p></div>
                <div className="d-flex align-items-center mt-2"><i className="fa-solid fa-phone"></i><p className="ms-4 text-secondary">{phone}</p></div>
                <div className="d-flex align-items-center mt-2"><i className="fa-solid fa-location-dot"></i><p className="ms-4 text-secondary">{address}</p></div>
            </div>
            <div className="col-1 text-end">
            <Link to="/edit_contact"><button className="btn" onClick={edit}><i className="fa-solid fa-pencil"></i></button></Link>
            <button className="btn" onClick={remove}><i className="fa-solid fa-trash-can"></i></button>
            </div>

        </div>
    )
}