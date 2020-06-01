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
				let results = [];
				let url = "https://swapi.dev/api/" + name + "/";
				do {
					const res = await fetch(url);
					const data = await res.json();
					if (data.next != null) {
						url = data.next.replace("http", "https");
					} else {
						url = data.next;
					}
					console.log("this is response data: ", data);
					for (let result of data.results) {
						results.push(result);
					}
				} while (url != null);
				console.log("this is results: ", results);
				setStore({ [name]: results });
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
