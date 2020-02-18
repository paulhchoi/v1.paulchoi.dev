import React from 'react';
import { StyleButton } from '../components/Button/Button';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <MainHeader />
      <Body />
    </Wrapper>
  </Layout>
);

export default IndexPage;

const Wrapper = ({ children }) => {
  return (
    <div className="flex flex-col max-w-lg h-full mx-auto items-center justify-center">
      {children}
    </div>
  );
};

const MainHeader = () => {
  return (
    <div className="flex flex-col w-full sm:flex-row items-center">
      <div className="w-full h-full sm:w-2/3 text-center sm:text-left">
        <h1 className="text-4xl font-medium">Paul Choi</h1>
        <h2 className="text-2xl font-normal opacity-50">
          Software Engineer in Philadelphia
        </h2>
      </div>
      <div className="w-1/2 mt-8 rounded-full overflow-hidden">
        <Image />
      </div>
    </div>
  );
};

const Body = () => {
  const links = [
    { text: 'linkedin', slug: 'https://www.linkedin.com/in/paulhchoi' },
    { text: 'github', slug: 'https://github.com/paulhchoi' },
    { text: 'email', slug: 'mailto:pchoi789@gmail.com' },
    { text: 'metrophilly.org', slug: 'https://metrophilly.org' },
  ];

  const linksGen = [];

  links.map((link) =>
    linksGen.push(
      <ButtonGen key={link.text} text={link.text} slug={link.slug} />,
    ),
  );

  return <div className="w-full py-8">{linksGen}</div>;
};

const ButtonGen = ({ text, slug }) => {
  const mText = text || '';
  const mSlug = slug || '';

  return (
    <a href={mSlug}>
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
