import feria from '../../../assets/images/feria-1.jpg'
import telaBack from '../../../assets/images/drone-1.jpg'
import taller from '../../../assets/images/foto-taller-1.jpg'
export default {
  // the margin top here at universal.containerDiv is for the navbar
  universal:{
    containerDiv:{
      marginTop:'60px',
    },
    backgroundDiv:{
      //si pones fixed ocupa toda la pantalla pero no se mueve
      //no hace ni scroll , para una pantalla 'unica esta way
      position:'fixed',
      padding:0,
      margin:0,

      top:0,
      left:0,

      width: '100%' ,
      height: '100%' ,
      backgroundImage: 'url(' + telaBack + ')',
    },

  },
  home:{
    navlinkBtn:{
      padding: '0px',
      border: 'none',
      borderRadius:'10px'
    },
    imageContainerFeria:{
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(' + feria + ')',
      height: '500px',
      borderRadius:'10px'

    },
    imageContainerDesign:{
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(' + taller + ')',
      height: '500px',
      borderRadius:'10px'

    }
  },
  explanation:{
    container:{
      padding: 16,
      background: '#C4F4D0',
      marginTop:12,
      border:'2px solid #73FA95'
    },
  },
  feria:{
    container:{
      padding: 16,
      background: '#F6CEF5',
      marginTop:12,
      border:'2px solid #F6CEE3'
    },
    header:{
      marginTop:0,
      marginBottom:0
    },
    title:{
      textDecoration:'none',
      color:'red'
    },
    texto:{
      fontStyle: 'italic',
      fontWeight: 300,

    },
    textoSecundario:{
      font: '12px Georgia',
      fontWeight: 200
    }
  }
}
