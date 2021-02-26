import React from 'react';
import App from '../components/app';
import SEO from '../components/seo';
import { getRandomYoutubeClipId } from '../utils/functions';

const QR4Page = () => {
  var randomYoutubeId = getRandomYoutubeClipId();

  function func(id) {
    const isClient = typeof window === 'object';
    isClient &&
      id &&
      window.location.replace(
        `https://youtu.be/${id}&list=PL6QfboqV0a06ZXmP29yfJgs90K1FxjzL8`,
      );
  }

  setInterval(() => func(randomYoutubeId), 334);

  return (
    <App>
      <SEO title="QR4" />

      <div>Redirecting...</div>
    </App>
  );
};

export default QR4Page;
