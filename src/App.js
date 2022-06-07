import './App.css';
import {motion} from "framer-motion";
import {AiOutlineSearch} from "react-icons/ai";
import {MdOutlineSegment} from "react-icons/md";
import Headline from "./Headline";
import {BsThreeDots} from "react-icons/bs";
import Clock from 'react-live-clock';
import Story from "./Story";
import {useEffect, useState} from "react";
import axios from "axios";
import {BarLoader} from "react-spinners";
function App() {
    const axios = require("axios");
    const [topStories, setTopStories] = useState([]);
    const [loading, setLoading] = useState(true);

    const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q: 'latest', lang: 'en'},
        headers: {
            'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
            'X-RapidAPI-Key': '97fbcc9719mshce84a37b466d972p11be6ajsn5abd524b8eb1'
        }
    };

    useEffect(() => {
        axios.request(options).then((response) => {
            setTopStories(response.data.articles);
            setLoading(false);
            console.log(response.data);
        })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div style={{backgroundColor: "#FDFDFD"}}>
            <div style={{
                height: 50,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <div style={{alignItems: "center", display: "flex", flexDirection: "row", marginLeft: 70}}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        height: 40,
                        width: 80,
                        borderRadius: 10,
                        backgroundColor: "#000000"
                    }}>
                        <motion.div intial={{x:-60}} transition={{delay:0.5, type:"tween"}} animate={{x:20}} style={{ fontFamily: "Times", fontSize: 20, fontWeight: 700}}>News</motion.div>
                    </div>
                    <div style={{marginLeft: 15, fontFamily: "Times", fontSize: 20, fontWeight: 700}}>Portal</div>
                </div>
                <Clock style={{fontFamily: "Roboto", color: "grey"}} format={'ddd h:mm:ss a'} ticking={true}
                       timezone={'US/Pacific'}/>
                <div>
                    <AiOutlineSearch size={30} className="icons"/>
                    <MdOutlineSegment style={{marginLeft: 50, marginRight: 100}} className="icons" size={30}/>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", height: 100, marginLeft: 70, alignItems: "end"}}>
                <div style={{fontFamily: "Roboto", fontSize: 48, fontWeight: 700, color: "#121221"}}>Hot Topics</div>
            </div>
            <Headline/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                height: 50,
                alignItems: "center",
                justifyContent: "center"
            }}>
                <BsThreeDots size={50} color="gray"/>
                <div style={{height: 1, backgroundColor: "#949494", width: "95%",}}></div>
            </div>
            <div style={{
                height: 50,
                fontFamily: "Roboto",
                fontSize: 26,
                fontWeight: 700,
                marginLeft: 70,
                marginTop: 30
            }}>
                Latest News
            </div >
         <div style={{marginLeft: 70 ,display:"grid", width:"90%", gridTemplateColumns:"1fr 1fr 1fr 1fr" }}>
                {topStories.filter((story)=>story.media!=="" ||story.media!=null).map((story,i)=><Story key={i} title={story.title} media={story.media}/>)}
            </div>
        </div>
    );
}

export default App;
