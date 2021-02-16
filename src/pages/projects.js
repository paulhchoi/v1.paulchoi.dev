import React from 'react';
import SEO from '../components/seo';
import App from '../components/app';
import { Link } from 'gatsby';
import PaginateNavigate from "../components/PaginateNavigate";

const ProjectsPage = () => (
  <App>
    <SEO title="Projects" />
    <h2 className="mb-6 font-semibold text-2xl">Projects</h2>

    <div className="max-w-xl text-lg text-gray-800 leading-8">
      <p className="mb-16">
        These are few of the projects I've worked on over the years. Most of
        them are closed-source, but if you'd like any clarification, feel free
        to <a href="mailto:paul@paulchoi.dev">send me a message</a>.
      </p>
      <ProjectBlock
        title={'Metrophilly.org'}
        desc={
          'A static site built for the non-profit Metro using React & Gatsby,\n' +
          '        Tailwind CSS, and Sanity CMS. Initially developed in mid-2019.'
        }
        link={'https://www.metrophilly.org'}
      />
      <ProjectBlock
        title={'Metro City Hall'}
        desc={
          'An admin dashboard built for\n' +
          '      Metro, including features for expense management, departmental budget tracking, and\n' +
          '      event registration. Initially developed in early 2020.'
        }
        link={'https://app.metrophilly.org'}
      />
      <ProjectBlock
        title={'QVC mobile application'}
        desc={
          'The flagship Android application for QVC, spanning their US, UK, and DE build variants. Development contributions included building for the Content Experience team and the Marketing and Analytics team.'
        }
        link={
          'https://play.google.com/store/apps/details?id=com.qvc&hl=en_US&gl=US'
        }
      />
      <ProjectBlock
        title={'PFC Obershel'}
        desc={
          'The admin platform built for Genesis Youth Ministries,\n' +
          '      initially developed in PHP by Ezra Kwak. Development contributions\n' +
          '      included overhauling the event registration system to accept PayPal\n' +
          '      payments using their Instant Payment Notification API'
        }
        link={'https://pfc.us/obershel'}
      />
      <ProjectBlock
        title={'paulchoi.dev'}
        desc={"You're here!"}
        noLink={true}
      />
    </div>
    <PaginateNavigate
      prevText={'About'}
      prevLink={'/'}
      nextText={'Resume'}
      nextLink={'/resume'}
    />
  </App>
);

export default ProjectsPage;

const ProjectBlock = ({ title, desc, link }) => {
  return (
    <div className={'mb-12'}>
      {link ? (
        <Link className={'text-sm font-medium no-underline'} to={link}>
          <h3 className="mb-4">{title}</h3>
        </Link>
      ) : (
        <h3 className="mb-4">{title}</h3>
      )}

      <p className="mb-2">{desc}</p>
      {link && (
        <Link className={'text-sm font-medium'} to={link}>
          Visit site →
        </Link>
      )}
    </div>
  );
};
