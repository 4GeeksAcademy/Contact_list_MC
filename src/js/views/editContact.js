import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [id, setId] = useState('')

    useEffect(() =>{
        console.log('Log de store.selectedContact:',store.selectedContact[0].name);
       
        if(store.selectedContact){
            setName(store.selectedContact[0].name || '');
            setEmail(store.selectedContact[0].email || '');
            setPhone(store.selectedContact[0].phone || '');
            setAddress(store.selectedContact[0].address || '');
            setId(store.selectedContact[0].id || '');
        }
     

    },[store.selectedContact])

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleChangeAddress = (e) => {
        setAddress(e.target.value)
    }


    const navigate = useNavigate();

    const handleEdit = (e,id,name,email,phone,address) => {
        e.preventDefault();
        actions.fetchEditContact(id,name,email,phone,address);
        console.log('Datos del handelEdit:', name,email,phone,address);
        navigate("/home");
    }

    return (
        <div className="container">
            <h1 className="text-center mb-5 mt-5">Editar Contacto</h1>
            
            <form className="row g-3" onSubmit={(e) => handleEdit(e,id,name,email,phone,address)}>
                <div className="col-12">
                    <label htmlFor="fullName" className="form-label">Nombre completo</label>
                    <input type="text" className="form-control" name="fullNameContact" onChange={handleChangeName} id="fullName" value={name}/>
                </div>
                <div>
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" onChange={handleChangeEmail} value={email}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputPassword4" className="form-label">Teléfono</label>
                    <input type="phone" className="form-control" id="inputPassword4" onChange={handleChangePhone} value={phone}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={handleChangeAddress} value={address}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">ID</label>
                    <input type="text" className="form-control" id="inputId" placeholder="ID" value={id} disable/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg w-100">Guardar</button>
                </div>
            </form>
            <br />
            <Link to="/">
                <button className="btn btn-warning">Ver contactos</button>
            </Link>
        </div>
    );
};