import './Home.scss'
const Home = () =>{
    return <section>
        <div className="container">
            <div className="listContainer">
                <div className="songList">
                    <div className="list">
                        <div className="listRow title">All List</div>
                        <div className="listRow">body</div>
                    </div>
                </div>
            </div>
            <div className="listContainer">
                <div className="songList">
                    <div className="list">
                        <div className="listRow title">Fav List</div>
                        <div className="listRow">body</div>
                    </div>
                </div>
            </div>
            <div className="listContainer">
                <div className="songList">
                    <div className="list">
                        <div className="listRow title">Play List</div>
                        <div className="listRow">body</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Home
