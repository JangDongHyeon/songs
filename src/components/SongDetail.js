import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title:{song.title}
        Duration:{song.duration}
      </p>
      {song.title}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
