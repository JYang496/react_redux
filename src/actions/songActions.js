import {actionType} from "../Helper";


const songs = [
    {id:1, name:'name1',artist:"art1", length:3.34},
    {id:2, name:'name2',artist:"art2", length:3.34},
    {id:3, name:'name3',artist:"art3", length:3.34},
    {id:4, name:'name4',artist:"art4", length:3.34}
]

const fetchAllSongs = () =>{
    console.log('action')
    return {
        type: actionType.FETCH_ALL_SONGS,
        payload: songs
    }
}

const selectSong = (id) =>{

    return {
        type: actionType.SELECT_SONG,
        payload: id
    }
}

export default {
    fetchAllSongs,
    selectSong
}