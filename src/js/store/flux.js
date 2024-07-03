const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
			selectedContact: {}
		},
		

		actions: {
			

			fetchCreateAgenda: async () => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/javierdiez', {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						}
					});
					const data = await resp.json();
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},

			fetchCreateContact:  async (name,email,phone,address) => {
				const actions = getActions();
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/javierdiez/contacts', {
						method: "POST",
						body: JSON.stringify({name: name,email: email,phone: phone,address:address}),
						headers: {
							"Content-Type": "application/json"
						}
					});
					const data = await resp.json();
					console.log(data);
					actions.fetchGetContacts();
				} catch (error) {
					console.log(error);
				}
			},
			fetchGetContacts: async () => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/javierdiez/contacts', {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Datos recibidos de la API:", data); 
						setStore({ contacts: data.contacts}); 
				} catch (error) {
					console.log(error);
				}
			},
			fetchEditContact: async (id,name,email,phone,address) => {
				const actions = getActions();
				try {
					const resp = await fetch(`https://playground.4geeks.com/contact/agendas/javierdiez/contacts/${id}`, {
						method: "PUT",
						body: JSON.stringify({name: name,email: email,phone: phone,address:address}),
						headers: {
							"Content-Type": "application/json"
						}
					});
					const data = await resp.json();
					setStore({ selectedContact: data});
					console.log('Esta es la data de PUT:', data);
					actions.fetchGetContacts();
				} catch (error) {
					console.log(error);
				}
			},
			singleContact: (id) =>{
				const store = getStore();
				const contactoElegido = store.contacts.filter((contacto) => contacto.id === id)
				setStore({selectedContact: contactoElegido});
			},
			fetchDeleteContact: async (id) => {
				const actions = getActions();
				try {
					const resp = await fetch(`https://playground.4geeks.com/contact/agendas/javierdiez/contacts/${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (resp.ok) {
						await resp.text();
						actions.fetchGetContacts();
					}
					throw new Error("No se pudo borrar el contacto");
				} catch (error) {
					console.log(error);
				}
			},
		}
	};
};

export default getState;