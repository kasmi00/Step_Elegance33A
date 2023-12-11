import "./home.css";

function home() {
  return (
    <>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Registration Page</title>
        </head>
            <body>

        <header>
            {/*<img src="C:\Users\Suyogya\Desktop\React train\IMAGES\shoe.jpg">*/}
            <h1>Step Elegance</h1>
        </header>

        <nav>
            <a href="mens">Mens</a>
            <a href="womens">Womens</a>
            <a href="kids">Kids</a>
            <a href="sales">Sales</a>
            <div id="search-container">
                {/*<input type="text" id="search-box" placeholder="Search..." >*/}
                {/*    <button id="search-button"> Search</button>*/}
            </div>


        </nav>



        </body>


    </>
  );
}
export default home;
