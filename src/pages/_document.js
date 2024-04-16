import { Html, Head, Main, NextScript } from "next/document";

/**
 * MyDocument is a custom Document used to augment the application's HTML <head> and <body> tags.
 * This custom Document is commonly used to implement server-rendered CSS-in-JS libraries,
 * set a language attribute, or add more <meta> tags.
 * 
 * This file is only rendered on the server, so event handlers like onClick won't work in this file.
 * 
 * @return {JSX.Element} A custom Document with the necessary HTML structure for a Next.js application.
 */
export default function MyDocument() {
  return (
    // Sets the language attribute for the document.
    <Html lang="en">
      {/* Head component for setting up the document's head tags */}
      <Head />
      <body>
        {/* Main component for the application's content */}
        <Main />
        {/* NextScript component for Next.js scripts */}
        <NextScript />
      </body>
    </Html>
  );
}
