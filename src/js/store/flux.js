const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			peopleNext: [],
			vehiclesNext: [],
			planetsNext: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getData: (name, pageNumber = 1) => {
				let url = "https://swapi.dev/api/" + name + "/?page=" + pageNumber;
				const currentStore = getStore();
				let nameNext = name + "Next";
				fetch(url)
					.then(res => res.json())
					.then(result => {
						let itemList = [];
						if (name in currentStore) {
							itemList = currentStore[name];
							//console.log(itemList);
						}
						for (let item of result.results) {
							itemList.push(item);
							//console.log(item);
						}
						setStore({
							[name]: itemList,
							[nameNext]: result.next.split("=")[1]
						});
					})
					.catch(e => console.error(e));
			},
			singleCard: (name, id) => {
				let url = "https://swapi.dev/api/" + name + "/" + id + "/";
				const currentStore = getStore();
				fetch(url)
					.then(res => res.json())
					.then(result => {
						let itemSingle = [];
						if (name in currentStore) {
							itemSingle = currentStore[name];
							console.log(itemSingle);
						}
						for (let single of result.results) {
							itemSingle.push(single);
							console.log(single);
						}
						setStore({
							[name]: itemSingle
						});
					})
					.catch(e => console.error(e));
			},
			loadSingleCard: () => {
				const actions = getActions();
				actions.singleCard("people", "1");
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
			},

			addToFavourite(name) {
				const store = getStore();
				if (store.favorites.includes(name)) {
					alert("Item already exist in your list");
				} else {
					//console.log(`Hello, you are adding ${name}`);
					setStore({ favorites: [...store.favorites, name] });
				}
				//console.log(store.favorites);
			},
			deleteFavourite: i => {
				const store = getStore();
				const favorites = store.favorites.filter((item, index) => {
					return i !== index;
				});
				setStore({ favorites: [...favorites] });
			}
		}
	};
};

export default getState;
