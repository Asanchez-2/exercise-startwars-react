import React, { Component, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

export const Card = () => {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    const urls = [
        {
            name: "people",
            url: "https://swapi.dev/api/people/"
        },
        {
            name: "planets",
            url: "https://swapi.dev/api/planets/"
        },
        {
            name: "vehicles",
            url: "https://swapi.dev/api/vehicles/"
        }
    ];
        async function fetchAll() {
            for (let url of urls) {
                fetch(url, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                })
                    .then(res => res.json())
                    .then(resJson => {
                        if (url.name == "people") {
                            setPeople(resJson.results);
                        } else if (url.name == "planets") {
                            setPlanets(resJson.results);
                        } else {
                            setVehicles(resJson.results);
                        }
                ;)
            }
        }
    }
}

export default Card;
// Card.propTypes = {
//     type: PropTypes.string,
// }
