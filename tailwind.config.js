/** @type {import('tailwindcss').Config} */

import { transformWithEsbuild } from 'vite';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Noto':['Noto Sans', 'sans-serif'],
      'binod': ['Staatliches', 'sans-serif']
    },
    extend: {
      keyframes:{
        little:{
          '0%':{visibility: 'hidden',opacity:0,transform:'scale(0) translateY(-200px)'},
          '100%' :{visibility: 'visible',opacity:1,transform:'scale(1) translateY(0px)'}
        },
        zoominout:{
          '0%':{transform:'scale(0)',opacity:0},
          '100%' : {transform:'scale(1)',opacity:1},
        },
        textani:{
          '0%':{opacity:0},
          '100%':{opacity:1}
        },
        blackanimi:{
          '0%':{opacity:0,transform:'translateX(500px)'},
          "100%":{opacity:1,transform:'translateX(0px)'}
        },
        bloganimi:{
          '0%':{transform:'translateX(100vw)'},
          '100%':{transform:'translateX(0vw)',opacity:1}
        },
        loader:{
          '0%':{transform:'scale(0.5)'},
          '100%':{transform:'scale(1)'}
        },
        spinner:{
          '0%':{transform:'rotate(0deg)'},
          '100%':{transform:'rotate(360deg)'}
        }
      },
      animation:{
        "spin":"spin 7s linear infinite",
        "bounce":"bounce 2s infinite alternate",
        "zoominout":"zoominout 1s 1 alternate",
        "little":"little 1s cubic-bezier(0, 0, 0.2, 1) 1 ",
        "textani":"textani 1s 1",
        "blackanimi":'blackanimi 1s 1',
        'bloganimi':'bloganimi 1s',
        'loader':'loader 0.5s linear infinite alternate',
        'spinner':' spinner 2s linear infinite alternate'
      },
      backgroundImage:{
        "contactbg":"url('/assets/image/contactpagebackgroundimage.jpg')"
      }
    },
  },
  plugins: [],
}

