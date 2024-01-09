import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../../utils/themes';

let textColor = '';
let bgBase = '';
let bgShadow = '';
let borderColor = '';

let hoverTextColor = '';
let bgHoverColor = '';
let bgHoverColorShadow = '';
let hoverBorderColor = '';

export function StyleButton({ color, children, fontWeight }) {
  let weight = fontWeight || 500;

  switch (color) {
    case 'primary':
    case 'green':
      {
        textColor = theme.colors.white;
        bgBase = theme.colors.green400;
        bgShadow = theme.colors.green600;
        borderColor = theme.colors.green400;

        hoverTextColor = theme.colors.white;
        bgHoverColor = theme.colors.green600;
      }
      break;
    // case 'lightgreen':
    //   {
    //     textColor = theme.colors.green800;
    //     bgBase = theme.colors.green25;
    //     bgShadow = theme.colors.green100;
    //     borderColor = theme.colors.green200;
    //
    //     hoverTextColor = theme.colors.green800;
    //     bgHoverColor = theme.colors.green200;
    //     hoverBorderColor = theme.colors.green200;
    //   }
    //   break;
    case 'white':
      {
        textColor = theme.colors.green800;
        bgBase = 'white';
        bgShadow = '#BFBFBF';
        borderColor = '#BFBFBF';

        hoverTextColor = theme.colors.green800;
        bgHoverColor = '#efefef';
        hoverBorderColor = theme.colors.green800;
      }
      break;
    case 'outlineWhite':
      {
        textColor = theme.colors.white;
        bgBase = 'transparent';
        bgShadow = 'hsla(100, 100%, 100%, 0.5)';
        borderColor = theme.colors.white;

        hoverTextColor = theme.colors.white;
        bgHoverColor = 'hsla(100, 100%, 100%, 0.5)';
      }
      break;
    case 'outlineWhitePrimary':
      {
        textColor = theme.colors.white;
        bgBase = 'hsla(100, 100%, 100%, 0.2)';
        bgShadow = 'hsla(100, 100%, 100%, 0.5)';
        borderColor = theme.colors.white;

        hoverTextColor = theme.colors.white;
        bgHoverColor = 'hsla(100, 100%, 100%, 0.5)';
      }
      break;
    default:
      textColor = theme.colors.green800;
      bgBase = 'transparent';
      bgShadow = 'transparent';
      borderColor = '#BFBFBF';

      hoverTextColor = theme.colors.green400;
      bgHoverColor = theme.colors.green600;
      bgHoverColorShadow = theme.colors.green;
      hoverBorderColor = theme.colors.green800;
  }

  const StyledButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 0.25rem 1rem;
    border-radius: 7px;
    margin-top: 3px;
    margin-bottom: 3px;
    box-shadow: 0 3px 0 0 ${bgShadow};
    -moz-box-shadow: 0 3px 0 0 ${bgShadow};
    -webkit-box-shadow: 0 3px 0 0 ${bgShadow};
    color: ${textColor};
    background-color: ${bgBase};
    border: 1px solid ${borderColor};
    text-decoration: none;
    font-weight: ${weight};

    transition: background 0.1s, box-shadow 0.1s, margin 0.1s;
    -moz-transition: background 0.1s, box-shadow 0.1s, margin 0.1s; /* Firefox 4 */
    -webkit-transition: background 0.1s, box-shadow 0.1s, margin 0.1s; /* Safari and Chrome */
    -o-transition: background 0.1s, box-shadow 0.1s, margin 0.1s; /* Opera */

    &:hover {
      color: ${hoverTextColor};
      background-color: ${bgHoverColor};

      margin-top: 6px;
      margin-bottom: 0px;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
    }

    &:focus {
      outline: 0;
    }
  `;

  return <StyledButton>{children}</StyledButton>;
}
