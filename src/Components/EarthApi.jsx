import axios from "axios";
import {useState} from "react";

const EarthApi = () => {
    const [earthPhoto, setEarthPhoto] = useState([]);

    const getEarthPhoto = () => {
        axios.get("https://epic.gsfc.nasa.gov/api/natural").then(response => {
            console.log(response.data)
            setEarthPhoto(response.data)
        })
        .catch(err => {
            console.log(err)
        });
    }


    return(
        <>
        <h4>EarthApi</h4>
        <button type="button" className="btn btn-outline-dark mt-2" onClick={getEarthPhoto}>Hello World</button>
        {
            earthPhoto.map((photo, p) => {
                return(
                    <div key={p}>
                        <img src={photo.image} alt="earth img" />
                        
                    </div>
                )
            })
        }
        </>
    )
}

export default EarthApi;
//photo.image not mapping 
