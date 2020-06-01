const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getData: async name => {
				const results = [];
				let url = "https://swapi.dev/api/${name}";
				do {
					const res = await fetch(url);
					const data = await res.json();
					url = data.next;
					results.push(data.results);
				} while (url);
				setStore({ [name]: data.results });
			},
			loadPeople: () => {
				const actions = getActions();
				actions.getData("people");
			},
			loadPlanets() {
				const url = "https://swapi.dev/api/planets/";
				fetch(url)
					.then(res => res.json())
					.then(result => {
						setStore({
							planets: result.results
						});
					})
					.catch(e => console.error(e));
			},
			loadVehicles() {
				const url = "https://swapi.dev/api/vehicles/";
				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("hola vehicles", result);
						setStore({
							vehicles: result.results
						});
					})
					.catch(e => console.error(e));
			}
		}
	};
};

export default getState;
