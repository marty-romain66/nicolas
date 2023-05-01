import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const Contact = () => {
  const containerStyle = {
  
    height: "50vh",
  };

  const center = {
    lat: 42.54605229072233,
    lng: 3.023982959835525,
  };
  return (
    <div className="h-80vh flex flex-col gap-10%">
      <div className="h-10%">
        <h2 className="text-center text-4xl">Nous contacter</h2>
      </div>
      <div className="text-2xl">
        <p className="text-center">06 00 00 00 00</p>
        <p className="text-center">
          {" "}
          1 rue de la libération <br /> 66380, Argelès-sur-mer
        </p>
      </div>
      <div className=" md:w-1/2 md:m-auto">
        <LoadScript googleMapsApiKey="AIzaSyBqGGctJYKkQZF7DVJ-bagX9SelHlhq2yo">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            className="w-4"
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Contact;
