Quick React Demo

A quick React demo and test. To run from the command line (in this root folder):

##1. Install the Node Modules

```shell
npm install
```

##2. Run the Webpack Server

```shell
npm start
```

##3. Build the public files ("dist")

Only required when publishing live online.

```shell
npm run build
```

Testing git commit

<!-- Original HTML code as of 2 April 2020

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Convo Chat App">
    <meta name="author" content="Reynaldo Sia Jr.">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="/css/styles.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <title>Convo</title>
</head>
<body>
    <header class="headerbar" id="headerbar">
        <img class="conlogo" src="/img/Convo Logo.jpg" id="conlogo">
        <input type="search" placeholder="Search Convo" class="searchconvo" id="searchconvo">
    </header>
    <main>
        <div class="sidenav" id="sidenave">
            <section class="mainsec">
                <article  class="userdetails">
                    <img class="profilepic" src="/img/userphoto.jpg" id="username">
                    <h1 class="username" id="username">Anna</h1>
                    <input type="button" class="createnew" id="createnew" value="NEW MESSAGE">
                </article>
                <nav class="mainnav" id="mainnav">
                    <ul class="navbuttons" id="navbuttons">
                        <input type="search" placeholder="Search Contacts" class="searchcontacts" id="searchcontacts">
                        <li class="sections recent" id="recent">RECENT</li>
                        <li class="sections messages" id="messages">MESSAGES</li>
                        <li class="sections contactlist" id="contactlist">CONTACTS</li>
                    </ul>
                </nav>
            </section>
        </div>
        <article class="topofconvo" id="topofconvo">
                <img class="contactpic" src="/img/Profile Pic.jpg" id="contactpic">
                <h1 class="contactname" id="contactname">Don Corleogne</h1>
            <div class="contactcontainer"></div>
            <div class="messagebody" id="messagebody">
                <h2 id="mainmessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ratione enim dignissimos aliquam quis. Eligendi aliquid dolorem autem ratione cum dignissimos ullam voluptates excepturi itaque, harum totam cupiditate necessitatibus. Fuga?</h2>
            </div>
        </article>
        <div class="messagediv" id="messagediv">
            <input type="text" placeholder="Enter message here..." class="entermessage" id="entermessage">
            <input type="button" value="Send" class="sendmessage" id="sendmessage">
        </div>
    </main>
</body>
</html>


Original CSS code as of 2 April 2020

html { 
    background: url("/img/background.jpg") no-repeat center center fixed; 
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', Helvetica, sans-serif;
}

:root {
    --col-blue: steelblue;
    --col-teal: teal;
    --col-gray: slategray;
    --col-smoke: whitesmoke;
    --col-mid:  midnightblue;
    --col-dodge: dodgerblue;
    --col-royal:  royalblue;
    --col-prussian: #003554;
    --col-error: tomato;
    --font-body: Roboto;
    --font-heading: sans-serif;
    --animations: 0.3s;
}


.sidenav {
  height: 100%; 
  width: 12em; 
  position: fixed; 
  z-index: 1; 
  top: 0;
  left: 0;
  background-color: var(--col-prussian); 
  overflow-x: hidden;
  padding-top: 2em;
  color: var(--col-smoke);
}

.sidenav a {
  padding: .375em .5em .375em 1em;
  text-decoration: none;
  font-size: 1.5625em;
  color: #818181;
  display: block;
} -->