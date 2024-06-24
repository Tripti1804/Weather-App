// // app/layout.js
// import './globals.css';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         {children}
//       </body>
//     </html>
//   );
// }


// app/layout.js

import './globals.css';

export const metadata = {
  title: 'Weather App',
  description: 'Get current weather information',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
