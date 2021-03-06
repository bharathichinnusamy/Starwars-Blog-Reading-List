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
			planetss: [],
			peoplee: [],
			vehiclee: []
		},
		actions: {
			planetinfo: () => {
				fetch("https://swapi.co/api/planets")
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ planetss: data.results });
					});
			},
			peopleinfo: () => {
				fetch("https://swapi.co/api/people")
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ peoplee: data.results });
					});
			},
			vehicleinfo: () => {
				fetch("https://swapi.co/api/vehicles")
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ vehiclee: data.results });
					});
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
