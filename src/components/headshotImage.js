import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import FadeIn from '../utils/fadeIn';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const HeadshotImage = () => {
  const data = useStaticQuery(graphql`
    query {
      hs1: file(relativePath: { eq: "2018_audio_sq.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hs2: file(relativePath: { eq: "2018_qvc_sq.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hs3: file(relativePath: { eq: "2019_metro_sq.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hs4: file(relativePath: { eq: "2020_memoji_sq.png" }) {
        childImageSharp {
          fluid(maxWidth: 96, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  // TODO set up randomly rotating images later
  // const [image, setImage] = useState(
  //   <Img fluid={data.hs1.childImageSharp.fluid} />,
  // );

  // const updateImageDuration = 2;
  // let images = 1;

  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setImage(randPhrase(randInt(4))),
  //     updateImageDuration * 1000,
  //   );

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // function randPhrase(int) {
  //   switch (int) {
  //     case 1:
  //       return <Img fluid={data.hs1.childImageSharp.fluid} />;
  //     case 2:
  //       return <Img fluid={data.hs2.childImageSharp.fluid} />;
  //     case 3:
  //       return <Img fluid={data.hs3.childImageSharp.fluid} />;
  //     case 4:
  //       return <Img fluid={data.hs4.childImageSharp.fluid} />;
  //     default:
  //       return <Img fluid={data.hs1.childImageSharp.fluid} />;
  //   }
  // }

  // function randInt(int = 0) {
  //   return Math.floor(1 + Math.random() * int);
  // }

  return (
    <div>
      {/*<FadeIn delay={250} duration={450}>*/}
      {/*{image}*/}
      <Img
        fluid={data.hs4.childImageSharp.fluid}
        alt={'A memoji of Paul in thinking-mode'}
      />
      {/*</FadeIn>*/}
    </div>
  );
};

export default HeadshotImage;
