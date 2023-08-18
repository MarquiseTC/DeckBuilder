// export const themeOptions = {
//     palette: {
//       mode: "dark",
//       primary: {
//         main: "#bd0707"
//       },
//       secondary: {
//         main: "#ffc510"}
//     },
//        background: {
//      default: "#4c69f6",
//        paper: "#4c94f6"
//      },
    
//     typography: {
//       body1: {
//         fontFamily: "Roboto"
//       },
//       fontFamily: "Bangers",
//       caption: {
//         fontFamily: "Do Hyeon"
//       },
//       overline: {
//         fontFamily: "Do Hyeon"
//       },
//       body2: {
//         fontFamily: "Roboto"
//       }
//     }
//   }
  
import { ThemeOptions, createTheme } from '@mui/material/styles';

const theme  =  createTheme( {
  palette: {
    mode: 'dark',
    primary: {
      main: '#161515',
      light: '#141313',
      dark: '#141313',
      contrastText: '#161515',
    },
    secondary: {
      main: '#29b6f6',
    },
    background: {
        paper: '#bccbde',
        default: '#bccbde',
      },
    text: {
        primary: '#1a1919',
      },
  },
  typography: {
    fontFamily: 'Bangers',
    caption: {
      fontFamily: 'Do Hyeon',
    },
    overline: {
      fontFamily: 'Do Hyeon',
    },
    body2: {
      fontFamily: 'Roboto',
    },
    // body1:{
    //   backgroundImage: 
    //   "url('https://1000logos.net/wp-content/uploads/2022/10/Magic-The-Gathering-logo.png')",
    //   backgroundPosition: "center",
    //   backgroundSize: "cover"
    // },
    subtitle1: {
      fontSize: '1rem',
      fontFamily: 'Droid Serif',
    },
  },
  components:{
            MuiButton:{
                styleOverrides:{
                    root:{
                       borderRadius: 20,
                   }
              }
          }
      }
});

export default theme

// import { createTheme, responsiveFontSizes } from "@mui/material"
// import { blue, green, red } from "@mui/material/colors"



// const theme = createTheme({
// 	palette: {
// 	  mode: 'light',
// 	  primary: {
// 		main: blue[900],
// 	  },
// 	  secondary: {
// 		main: green[500],
// 	  },
// 	  background: {
// 		default: red[50],
// 		paper: '#fcffff',
// 	  },
// 	},
// 	typography: {
// 	  h3: {
// 		fontSize: '2.8rem',
// 	 },
// 	},
//     components:{
//         MuiButton:{
//             styleOverrides:{
//                 root:{
//                     borderRadius: 20,
//                 }
//             }
//         }
//     }
//   })

//   export default responsiveFontSizes(theme)