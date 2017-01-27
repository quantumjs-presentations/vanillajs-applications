// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  basicReactTypescript: require("../images/basic-react-typescript.png"),
  basicAngular: require("../images/basic-angular.png"),
  confusion: require("../images/confusion.png"),
  logo: require("../images/qi.png"),
  usageStats: require("../images/usage.png"),
  ts: require("../images/ts.png"),
}, v => v.replace('/', ''));

preloader(images);

const theme = createTheme({
  primary: "black",
  secondary: "white",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} >
            <Heading size={1} fit  lineHeight={1} textColor="tertiary">
              Vanilla TypeScript
            </Heading>
            <Image src={images.ts} margin="40px auto" height="324px"/>
          </Slide>

          <Slide transition={slideTransition}>
            <Image src={images.confusion} width={1000}/>
          </Slide>
          <Slide transition={slideTransition}>
            <Appear fid="1">
              <Heading size={2} caps fit>
                Superset of JavaScript
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                Not a clean break, like Dart
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit>
                Keeps syntax of Js vs Coffeescript
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="tertiary">
                Optional Types
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="tertiary">
                <Link href="http://kangax.github.io/compat-table/es6/">Ecmascript compatibility</Link>
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>Vanilla TypeScript is applying typing to well structure Vanilla JavaScript applications.</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition}>
            <Link href="https://www.youtube.com/channel/UC0XiDgtbFR8ohoGlstuFgGQ">
              <Heading size={4}>
                Quantum Information
              </Heading>
            </Link>
            <Image src={images.logo} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made in London by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Nikos Katsikanis
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
