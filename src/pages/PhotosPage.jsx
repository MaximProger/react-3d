import React from "react";
import { photos } from "../constants";
import { BallCanvas, SphereCanvas } from "../components";

const PhotosPage = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {photos.map((photo) => (
          <div className="w-28 h-28" key={photo.name}>
            <BallCanvas icon={photo.icon} />
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {photos.map((photo) => (
          <div className="w-28 h-28" key={photo.name}>
            <SphereCanvas icon={photo.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotosPage;
