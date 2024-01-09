import React from 'react';
import SEO from '../components/seo';
import App from '../components/app';
import PaginateNavigate from '../components/PaginateNavigate';
import PropTypes from 'prop-types';

const ProjectsPage = () => (
  <App>
    <SEO title="Projects" />
    <h2 className="mb-6 text-2xl font-semibold">Projects</h2>

    <div className="max-w-xl text-lg leading-8 text-primary">
      <p className="mb-16">
        These are few of the projects I&apos;ve worked on over the years. Most
        of them are closed-source, but if you&apos;d like any clarification,
        feel free to <a href="mailto:paul@paulchoi.dev">send me a message</a>.
      </p>
      <ProjectBlock
        title={'Metrophilly.org'}
        desc={
          'A static site built for the non-profit Metro using React/Next.js,\n' +
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
          '      payments using their Instant Payment Notification API.'
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
        <a
          className={`text-sm font-medium no-underline umami--click--/projects-${title}-header-link`}
          href={link}
        >
          <h3 className="mb-4">{title}</h3>
        </a>
      ) : (
        <h3 className="mb-4">{title}</h3>
      )}

      <p className="mb-2">{desc}</p>
      {link && (
        <a
          className={`text-sm font-medium umami--click--/projects-${title}-visit-site-link`}
          href={link}
        >
          Visit site →
        </a>
      )}
    </div>
  );
};

ProjectBlock.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
};
