import React from 'react';
import axios from 'axios';

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

/**
 * pull a random youtube clip from my personal "dumb" playlist, at https://youtube.com/playlist?list=PL6QfboqV0a06ZXmP29yfJgs90K1FxjzL8
 */
export function getRandomYoutubeClipId() {
  const [clips, setClips] = React.useState(null);

  React.useEffect(async () => {
    const fetchData = async () => {
      var urlBuilder = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=id%2CcontentDetails&maxResults=25&playlistId=PL6QfboqV0a06ZXmP29yfJgs90K1FxjzL8&key=${process.env.GATSBY_GOOGLE_API_KEY}`;
      const res = await axios(urlBuilder);

      setClips(res.data);
    };
    fetchData();
  }, []);

  return clips ? clips.items.random().contentDetails.videoId : null;
}
