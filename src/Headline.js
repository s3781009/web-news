import React from 'react';
import "@fontsource/playfair-display"
import {motion} from "framer-motion";
const Headline = () => {
    return (
        <div style={{display: "flex", flexDirection: "row", marginLeft: 70, marginTop: 40}}>
            <img style={{maxHeight: 300, borderRadius: 5}}
                 src="https://live-production.wcms.abc-cdn.net.au/f78bc4814318c19021cfce0c6ba5d506?impolicy=wcms_crop_resize&cropH=2450&cropW=4356&xPos=0&yPos=227&width=862&height=485"
                 alt={""}>
            </img>
            <div style={{
                position: "absolute",
                width: 400,
                height: 150,
                top: 340,
                left: 80,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
            }}>
                <div style={{color: "white", fontFamily: "Playfair Display", fontSize: 32}}> Some story ....</div>
                <div style={{fontFamily: "Roboto", fontSize: 12, color: "white"}}>2 Hours Ago CNN</div>
            </div>
            <motion.div initial={{opacity:0}} transition={{delay:1}} animate={{opacity:1}} style={{marginLeft: 40, width: 500, fontFamily: "Playfair Display", color: "#444444"}}>Nisi, sagittis
                aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida
                pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa
                tortor nibh nulla condimentum imperdiet scelerisque... read more
            </motion.div>
        </div>
    );
};

export default Headline;
