import React, {useState} from 'react';

const Story = (props) => {
    const [imgErr, setImgErr] = useState(false);
    return (
         <div style={{
            height: 250,
            width: 240,
            display: "flex",
            flexDirection: "column",
            borderRadius: 5,
            alignItems: "center"
        }}>
            <img style={{maxWidth:180,borderRadius: 5, maxHeight: 100, objectFit: "contain"}}
                 src={props.media}
                 alt={""}/>
            <div style={{
                marginLeft: 5,
                width: "80%",
                height: 90,
                fontFamily: "Playfair Display",
                fontSize: 16,
                fontWeight: 700,
                overflow: "hidden"
            }}> {props.title}
            </div>
            <div style={{
                marginLeft: 50,
                alignSelf: "start",
                justifyContent: "start",
                height: 20,
                fontFamily: 'Roboto',
                fontSize: 12,
                color: "#949494",
                marginTop: 20
            }}> 1 Hour
            </div>
        </div>
    );
};

export default Story;
