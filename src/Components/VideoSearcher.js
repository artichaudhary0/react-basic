import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Grid } from "@mui/material";
import axios from "axios";
import SearchBox from "./SearchBox";

export default function VideoSearcher(props) {
  const [videos, setVideos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [debounceTimer, setDebounceTimer] = useState(0);

  const fetchVideos = async (searchTerm = "") => {
    let url = "https://content-xflix-backend.azurewebsites.net/v1/videos";
    if (searchTerm) {
      url = `https://content-xflix-backend.azurewebsites.net/v1/videos?title=${searchTerm}`;
    }
    const response = await axios.get(url);
    const videosReceived = response.data.videos;
    console.log("API CALL MADE");
    setVideos(videosReceived);
  };

  useEffect(() => {
    // fetchVideos(searchText);
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timer = setTimeout(() => fetchVideos(searchText), 2000);
    setDebounceTimer(timer);

    return () => clearTimeout(timer);
  }, [searchText]);

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <SearchBox handleInput={handleInput} searchText={searchText} />
      <Grid container spacing={2}>
        {videos.map((video) => {
          const { id, previewImage, genre, title, releaseDate } = video;

          return (
            <Grid item lg={3} md={4} sm={6} xs={12} key={id}>
              <VideoCard
                imgLink={previewImage}
                genre={genre}
                title={title}
                releaseDate={releaseDate}
                key={id}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
