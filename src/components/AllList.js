import './List.scss'
import {useSelector} from "react-redux";
const AllList = () =>{

    let songs = useSelector(state => state.songReducer.rawSongList)
    return <div className="listContainer">
        <div className="songList">
            <div className="list">
                <div className="listRow title">All List</div>
                <div className="listRow">{JSON.stringify(songs)}</div>
            </div>
        </div>
    </div>
}

export default AllList