import React from 'react';
import { StyleButton } from '../components/Button/Button';

import Layout from '../components/layout';
import HeadshotImage from '../components/headshotImage';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <MainHeader />

      <Intro />

      <Works />
    </Wrapper>
  </Layout>
);

export default IndexPage;

const Wrapper = ({ children }) => {
  return (
    <div className="flex flex-col max-w-screen-md h-full mx-auto items-center justify-center">
      {children}
    </div>
  );
};

const MainHeader = () => {
  return (
    <div className="flex flex-col w-full sm:flex-row items-center">
      <div className="w-full h-full sm:w-2/3 text-center sm:text-left pr-0 sm:pr-12">
        <h1 className="text-5xl md:text-6xl serif tracking-tight font-bold">
          Hi I'm Paul!
        </h1>
        <h2 className="text-2xl tracking-wider text-gray-600">
          I'm a Software Engineer born and raised in Philadelphia
        </h2>
      </div>
      <div className="w-1/2 mt-8 rounded-full overflow-hidden">
        <HeadshotImage />
      </div>
    </div>
  );
};

const Works = () => {
  const links = [
    { text: 'metrophilly.org', slug: 'https://metrophilly.org' },
    { text: 'pfc.us', slug: 'https://pfc.us' },
    {
      text: 'QVC app (Android)',
      slug: 'https://play.google.com/store/apps/details?id=com.qvc',
    },
    {
      text: 'QVC app (iOS)',
      slug: 'https://apps.apple.com/us/app/qvc-mobile-shopping-us/id340021813',
    },
    // { text: 'hackermd.cc', slug: 'https://hackermd.netlify.app' }, // on hold
  ];

  const linksGen = [];

  links.map((link) =>
    linksGen.push(
      <ButtonGen key={link.text} text={link.text} slug={link.slug} />,
    ),
  );

  return (
    <div className="mt-8 text-left w-full max-screen-md">
      <h4 className="font-medium tracking-wide text-gray-500 mb-2 ">
        Stuff I'm working on
      </h4>
      <div>{linksGen}</div>
    </div>
  );
};

const ButtonGen = ({ text, slug }) => {
  const mText = text || '';
  const mSlug = slug || '';

  return (
    <a href={mSlug} target="_blank" rel="noopener noreferrer">
      <StyleButton color="green">
        <div className="flex flex-row justify-center items-center p-1">
          <span className="inline-block">{mText}</span>
          {/*<span className="inline-block ml-1">*/}
          {/*    <IoMdArrowDropdown />*/}
          {/*  </span>*/}
        </div>
      </StyleButton>
    </a>
  );
};

const Intro = () => {
  return (
    <div className="py-12 text-left w-full max-screen-md text-lg text-gray-800 leading-8">
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
