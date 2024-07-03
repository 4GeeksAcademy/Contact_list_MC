import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { CardContact } from "../component/CardContact";
import { Context } from "../store/appContext";



export const Home = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate();



    const EditContact = (id) => {
        actions.singleContact(id)
        navigate('/edit_contact')
    }




	return (
	<div className="mt-5 container">
		<Link to="/add_contact">
			<button className="btn btn-success btn-lg mb-3">Agregar contacto</button>
		</Link>
		{store.contacts.length > 0 ? (
                store.contacts.map((contacto, index) => (
                    <CardContact
                        key={index}
                        contactName={contacto.name}
                        email={contacto.email}
                        phone={contacto.phone}
                        address={contacto.address}
						remove={() => actions.fetchDeleteContact(contacto.id)}
                        edit={() => EditContact(contacto.id)}
                    />
                ))
            ) : (
                <p>No hay contactos disponibles</p>
            )}
	</div>
	)
};
