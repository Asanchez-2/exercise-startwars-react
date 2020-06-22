import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const searchBar = () => {
    const { store, actions } = useContext(Context);
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCard, setFilteredCard] = useState([]);

}

