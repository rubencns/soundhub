import { createGlobalStyle } from 'styled-components';
import HindMaduraiBold from './hind-madurai-bold.woff';
import HindMaduraiSemiBold from './hind-madurai-semibold.woff';
import HindMaduraiMedium from './hind-madurai-medium.woff';
import HindMaduraiRegular from './hind-madurai-regular.woff';
import HindMaduraiLight from './hind-madurai-light.woff';
import OpenSansBold from './open-sans-bold.woff';
import OpenSansExtraBold from './open-sans-extrabold.woff';
import OpenSansSemiBold from './open-sans-semibold.woff';
import OpenSansRegular from './open-sans-regular.woff';
import OpenSansLight from './open-sans-light.woff';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Hind Madurai';
    src: url(${HindMaduraiBold}) format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Hind Madurai';
    src: url(${HindMaduraiSemiBold}) format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Hind Madurai';
    src: url(${HindMaduraiMedium}) format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Hind Madurai';
    src: url(${HindMaduraiRegular}) format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Hind Madurai';
    src: url(${HindMaduraiLight}) format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansLight}) format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegular}) format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansSemiBold}) format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansBold}) format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansExtraBold}) format("woff");
    font-weight: 800;
    font-style: normal;
    font-display: fallback;
  }
`;

export default Fonts;
