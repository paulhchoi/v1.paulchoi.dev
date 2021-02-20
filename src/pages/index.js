import React from 'react';
import SEO from '../components/seo';
import App from '../components/app';
import PaginateNavigate from '../components/PaginateNavigate';

const HomePage = () => (
  <App>
    <SEO title="" />
    <Intro />
    <PaginateNavigate
      prevText={'Uses'}
      prevLink={'/uses'}
      nextText={'Projects'}
      nextLink={'/projects'}
    />
  </App>
);

export default HomePage;

const Intro = () => {
  return (
    <div className="max-w-xl text-lg text-gray-800 leading-8">
      <h2 className="mb-6 font-semibold text-2xl">👋 Hey there, I'm Paul!</h2>
      <p className="mb-6">
        I'm a Software Engineer born and raised in Philadelphia.
      </p>
      <p className="mb-6">
        I've graduated from{' '}
        <BaseLink to={'https://temple.edu'}>Temple University</BaseLink> in 2019
        with a BS in Computer Science and a minor in Data Science, and I'm
        currently working as a Software Engineer for{' '}
        <BaseLink to={'https://www.qurateretailgroup.com/'}>
          {' '}
          Qurate Retail Group
        </BaseLink>{' '}
        (QVC and HSN's parent company) on their Android and iOS apps.
      </p>
      <p className="mb-6">
        Since 2016, I've been the Director of Digital Technologies for{' '}
        <BaseLink to={'https://metrophilly.org'}>Metro Church</BaseLink>, based
        in Philadelphia, PA where I work with a great team to help advance our
        digital strategies, tools, and experiences through data-driven
        approaches.
      </p>
      <p className="mb-6">
        Every August, you can find me volunteering on the operations and tech
        team for <BaseLink to={'https://pfc.us'}>Pioneers For Christ</BaseLink>,
        a 2-week long summer camp for elementary-to-high school students.
      </p>
      <p>
        Learn more about me by checking out my{' '}
        <BaseLink to={'https://www.linkedin.com/in/paulhchoi'}>
          LinkedIn
        </BaseLink>
        , or by sending me an{' '}
        <BaseLink to={'mailto:paul@paulchoi.dev'}>email</BaseLink>.
      </p>
    </div>
  );
};

export const BaseLink = ({ to, children, ...other }) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="underline font-bold hover:opacity-75 transition duration-150 "
    >
      <span {...other}>{children}</span>
    </a>
  );
};
