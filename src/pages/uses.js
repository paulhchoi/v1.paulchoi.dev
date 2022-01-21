import React from 'react';
import { Link } from 'gatsby';
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
          title={'Desktop Apps'}
          list={[
            'iTerm 2 w/ ohmyzsh & power10k',
            'Visual Studio Code',
            'Sublime 3',
          ]}
        />

        <ListSection
          title={'Helper Utils'}
          list={[
            'Homebrew',
            'Alfred',
            'BetterTouchTools',
            'Bartender',
            'Amphetamine',
          ]}
        />

        <ListSection
          title={'Productivity'}
          list={[
            'OmniFocus, for personal GTD',
            'Trello, for team project management',
            'Obsidian, for 2nd-brain / persistent notes',
            '30-min & 5-min hour glasses, for analog pomodoro',
            'Too many sketchpads & post-its',
          ]}
        />

        <ListSection
          title={'Privacy'}
          list={[
            '1Password',
            'YubiKeys',
            'Firefox w/ DuckDuckGo',
            'ProtonMail & AnonAddy',
            'NextDNS & ProtonVPN',
            'Signal',
            <>
              <a href={'https://pchoi.me/gpg'}>PGP key</a>: 0xEFBACD149999D685
            </>,
          ]}
        />

        <ListSection
          title={'Desk Setup'}
          list={[
            '2021 16" MacBook Pro (M1 Max, 32GB DDR5)',
            'Two 27" Monitors',
            'IKEA Jerker desk (thanks Kev!)',
            'Lily58 split mechanical keyboard w/ Zelios V2 switches',
            'Plants on plants on plants',
          ]}
        />

        <ListSection
          title={'Extra Accessories'}
          list={[
            'Sony h.ear noise-cancelling headphones',
            'Blue Yeti microphone',
            'Samsung T5 1TB external',
            'Creality Ender 3 3D Printer',
          ]}
        />

        <ListSection
          title={'Currently Playing'}
          list={['Wordle', 'Leetcode & Project Euler', 'Cities & Skylines']}
        />

        <ListSection
          title={'Currently Reading'}
          list={['Kafka on the Shore by Haruki Murakami']}
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
