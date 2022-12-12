import axios from "axios";
import {useState} from "react";

const NasaApiCall = () => {

    const [roverPhotos, setRoverPhotos] = useState([]);

    const getPhotos = () =>{
        console.log("Rover")
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY").then(response => {
            setRoverPhotos(response.data.photos);
            console.log("roverPhotos -->", roverPhotos);
        })
        .catch(err => {
            console.log(err);
        });
    }



    return(
        <>
        <h1>NASA CALL</h1>
        <button type='button' className='btn btn-outline-dark  mt-2' onClick={getPhotos}>get photos</button>
        {
            roverPhotos.map((photo, i) =>{
                return(
                    <div key={i}>
                        <img src={photo.img_src} alt="nasa photos" height="500px" width="500px" />
                    </div>
                )
            })
        }
        </>
    )
    
};  

export default NasaApiCall;
