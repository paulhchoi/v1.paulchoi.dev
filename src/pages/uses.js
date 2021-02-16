import React from 'react';
import SEO from '../components/seo';
import App from '../components/app';
import styled from '@emotion/styled';
import PaginateNavigate from '../components/PaginateNavigate';

const UsesPage = () => (
  <App>
    <SEO title="Uses" />
    <h2 className="mb-6 font-semibold text-2xl">Uses</h2>

    <div className="text-lg text-gray-800 leading-8">
      <p className="max-w-xl mb-16">
        Inspired by <a href="https://wesbos.com/uses">wesbos.com</a> and{' '}
        <a href="https://uses.tech/">uses.tech</a>, this is a quick list of
        daily drivers and things that make my life just a bit easier. If you
        have any questions, suggestions, or just want to geek out with me,{' '}
        <a href="mailto:paul@paulchoi.dev">send me a message</a>!
      </p>

      <div className={'max-w-6xl grid xl:grid-cols-2 gap-4'}>
        <div className={'mb-8'}>
          <h3 className="mb-2">Desktop Apps</h3>
          <ul className={'pl-4'}>
            <ListItem>iTerm 2 w/ oh-my-zsh</ListItem>
            <ListItem>Sublime 3</ListItem>
            <ListItem>IntelliJ & Android Studio</ListItem>
          </ul>
        </div>

        <div className={'mb-8'}>
          <h3 className="mb-2">Helper Apps</h3>
          <ul className={'pl-4'}>
            <ListItem>Homebrew</ListItem>
            <ListItem>Alfred</ListItem>
            <ListItem>BetterTouchTools</ListItem>
            <ListItem>NextDNS</ListItem>
            <ListItem>Rocket</ListItem>
            <ListItem>Amphetamine</ListItem>
            <ListItem>iStats Menus</ListItem>
          </ul>
        </div>

        <div className={'mb-8'}>
          <h3 className="mb-2">Productivity</h3>
          <ul className={'pl-4'}>
            <ListItem>OmniFocus, for personal GTD</ListItem>
            <ListItem>Trello, for team project management</ListItem>
            <ListItem>Notion, for 2nd-brain / persistent notes</ListItem>
            <ListItem>30-min & 5-min hour glasses (analog pomodoro)</ListItem>
            <ListItem>Too many sketchpads & post-its</ListItem>
          </ul>
        </div>

        <div className={'mb-8'}>
          <h3 className="mb-2">Privacy</h3>
          <ul className={'pl-4'}>
            <ListItem>1Password</ListItem>
            <ListItem>YubiKeys</ListItem>
            <ListItem>Firefox w/ DuckDuckGo</ListItem>
            <ListItem>ProtonMail & AnonAddy</ListItem>
            <ListItem>Signal</ListItem>
          </ul>
        </div>

        <div className={'mb-8'}>
          <h3 className="mb-2">Desk Setup</h3>
          <ul className={'pl-4'}>
            <ListItem>2015 15" MacBook Pro (2.3 GHz i7, 16GB DDR3)</ListItem>
            <ListItem>27" Apple Thunderbolt Display</ListItem>
            <ListItem>27" Asus Monitor</ListItem>
            <ListItem>IKEA Jerker desk (thanks Kev!)</ListItem>
            <ListItem>
              Lily58 split mechanical keyboard w/ Zelios V2 switches
            </ListItem>
            <ListItem>Plants on plants on plants</ListItem>
          </ul>
        </div>

        <div className={'mb-8'}>
          <h3 className="mb-2">Extra Accessories</h3>
          <ul className={'pl-4'}>
            <ListItem>Sony h.ear noise-cancelling headphones</ListItem>
            <ListItem>Blue Yeti microphone</ListItem>
            <ListItem>Samsung T5 1TB external</ListItem>
            <ListItem>Creality Ender 3 3D Printer</ListItem>
          </ul>
        </div>

        <div className={'mb-8'}>
          <h3 className="mb-2">Currently Playing</h3>
          <ul className={'pl-4'}>
            <ListItem>Animal Crossing: New Horizons</ListItem>
            <ListItem>Chess.com</ListItem>
            <ListItem>"Really Bad Chess" by Zach Gage</ListItem>
          </ul>
        </div>

        <div className={'mb-8'}>
          <h3 className="mb-2">Currently Reading</h3>
          <ul className={'pl-4'}>
            <ListItem>The Innovators by Walter Isaacson</ListItem>
          </ul>
        </div>
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
