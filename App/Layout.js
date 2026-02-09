export const metadata = {

  title: "No Dairy Today",

  description: "One dairy-free recipe every day. No stress.",

};

 

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body style={{ margin: 0 }}>

        {children}

      </body>

    </html>

  );

}
