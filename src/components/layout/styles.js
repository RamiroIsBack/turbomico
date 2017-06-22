import feria from '../../../assets/images/feria-1.jpg'
import taller from '../../../assets/images/foto-taller-1.jpg'
export default {
  // the margin top here at universal is for the navbar
  universal:{
    marginTop:20,

  },
  home:{
    navlinkBtn:{
      padding: '0px',
      borderRadius:'15px'
    },
    imageContainerFeria:{
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(' + feria + ')',
      height: '500px',
      borderRadius:'15px'

    },
    imageContainerDesign:{
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(' + taller + ')',
      height: '500px',
      borderRadius:'15px'

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
