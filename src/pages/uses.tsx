import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import App from '../components/app';
import styled from '@emotion/styled';
import PaginateNavigate from '../components/PaginateNavigate';

const UsesPage = () => (
  <App>
    <SEO title="Uses" />
    <h2 className="mb-6 text-2xl font-semibold">Uses</h2>

    <div className="text-lg leading-8">
      <p className="max-w-xl mb-16">
        Inspired by <a href="https://wesbos.com/uses">wesbos.com</a> and{' '}
        <a href="https://uses.tech/">uses.tech</a>, this is a quick list of
        daily drivers and things that make my life just a bit easier. If you
        have any questions, suggestions, or just want to geek out with me,{' '}
        <a href="mailto:paul@paulchoi.dev">send me a message</a>!
      </p>
      <div className={'max-w-6xl grid xl:grid-cols-2 gap-4'}>
        <ListSection
          title={'Coding'}
          list={[
            'Editor: Visual Studio Code',
            'Theme: Monakai Pro',
            'Terminal: iTerm 2 (zsh & power10k)',
          ]}
        />

        <ListSection
          title={'Productivity'}
          list={[
            'Personal Tasks: OmniFocus',
            'Team Project Management: Trello',
            'Persistent Notes: Obsidian',
          ]}
        />

        <ListSection
          title={'Computer / Office'}
          list={[
            '16" MacBook Pro (2021)',
            'Lily58 split mechanical keyboard w/ Zelios V2 switches',
            'Logitech MX Master 3 Mouse',
            'IKEA Jerker desk',
            'Ergodriven Topo standing mat',
            'Plants on plants on plants',
          ]}
        />

        <ListSection
          title={'Privacy'}
          list={[
            '1Password & YubiKeys',
            'Firefox w/ DuckDuckGo',
            'ProtonMail & AnonAddy',
            'NextDNS & ProtonVPN',
            'Signal',
            <>
              <a href={'https://pchoi.me/pgp'}>PGP key</a>: 0xEFBACD149999D685
            </>,
          ]}
        />

        <ListSection
          title={'Other Software'}
          list={[
            'Alfred',
            'Rectangle',
            'Vimium',
            'Fantastical',
            <>
              <a href={'https://pchoi.me/spotify'}>Spotify</a>
            </>,
          ]}
        />
        <ListSection
          title={'Other Tech'}
          list={[
            'Sony h.ear noise-cancelling headphones',
            'Blue Yeti microphone',
            'Razor Kiyo webcam',
            'Samsung T5 1TB external SSD',
            'Creality Ender 3 3D printer',
          ]}
        />

        <ListSection
          title={'Browser Extensions'}
          list={[
            'Vimium',
            'Temporary Containers',
            'uBlock Origin',
            'Decentraleyes',
            'HTTPS Everywhere',
          ]}
        />

        <ListSection
          title={'Currently Playing / Reading'}
          list={[
            'Wordle',
            'Leetcode & Project Euler',
            'Cities & Skylines',
            'Kafka on the Shore by Haruki Murakami',
          ]}
        />
      </div>
    </div>
    <PaginateNavigate
      prevText={'Resume'}
      prevLink={'/resume'}
      nextText={'About'}
      nextLink={'/'}
    />
  </App>
);

export default UsesPage;

const ListItem = styled.li({
  listStyleType: 'disc',
  paddingLeft: '1rem',
});

const ListSection = ({ title, list }) => {
  var items = [];
  for (var item of list) {
    items.push(<ListItem key={item}>{item}</ListItem>);
  }

  return (
    <div className={'mb-8'}>
      <h3 className="mb-2">{title}</h3>
      <ul className={'pl-4'}>{items}</ul>
    </div>
  );
};

ListSection.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};
