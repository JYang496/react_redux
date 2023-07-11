import './Home.scss'
import axios from "axios";
import {APIURL} from "../Helper";
import {useEffect, useState} from "react";
import AllList from "./AllList";
import FavList from "./FavList";
import PlayList from "./PlayList";
import actions from "../actions";
import {useDispatch} from "react-redux";


const Home = () =>{
    const [rawSongList, setRawSongList] = useState([])

    const dispatch = useDispatch()



    return <section>
        <div className="container">
            <button onClick={()=>dispatch(actions.songAction.fetchAllSongs())}>Fetch song</button>
            <AllList/>
            <FavList/>
            <PlayList/>
        </div>
    </section>
}

export default Home
