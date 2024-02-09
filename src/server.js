// import { renderToString } from 'react-dom/server';
// import { BrowserRouter,Routes,Route,} from 'react-router-dom';
// import express from 'express';
// import React from 'react';
// import Home from './component/Home.jsx';
// const app =express();
// const port = 3000;
// app.use(express.static('dist'));
// app.get('*',(req,res)=>{
//     const context={};
//     const appMarkup= renderToString(
     
//         <BrowserRouter>
//           <Routes>
//             {/* Define your routes here */}
//             <Route path="/" element={<Home />} />
//             {/* Add more routes as needed */}
//           </Routes>
//         </BrowserRouter>
   
//     )
//     res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Isomorphic React App</title>
//       </head>
//       <body>
//         <div id="app">${appMarkup}</div>
//         <script type="module" src="/dist/main.js"></script>
//       </body>
//     </html>
//   `);
// })
// app.listen(port,()=>{console.log(`server is listining on port ${port}`)})