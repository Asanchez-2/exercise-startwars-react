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
				const actions = getActions();
				actions.getData("planets");
			},
			loadVehicles() {
				const actions = getActions();
				actions.getData("vehicles");
			}
		}
	};
};

export default getState;
