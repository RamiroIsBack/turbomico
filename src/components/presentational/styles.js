export default {
  // the margin top here at universal is for the navbar
  universal:{
    marginTop:20,
  },
  carroProduct : {
    texto:{
      //fontFamily: 'monospace',
      //fontWeight: 'bold',
      fontSize: '20px',
    },
    btnPedido:{
      textAlign :'center',
      fontSize: '13px',
      fontWeight: 'bold',
      backgroundColor: 'black',
      width : '100%',
      marginRight: '5px',

    },

  },
  product:{
    borderRadius:'10px',
  },
  foto:{
    container:{
      display : 'inline-block',
      padding: '2px',
      border: 'none',
      borderRadius:'10px'
    },
    panel:{
      display : 'inline-block',
      padding: '0px',
      border: '1px solid #2C6549',
      borderRadius:'10px'
    },
    cover: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderRadius:'10px'
    },
  },
  navbar:{
    container:{
      //#e3f2fd, #C4F4D0
      //backgroundColor: '#e3f2fd',
      background: 'rgba(0,0,0,0.7)'

    },
    comprarButtonContainer :{
      float : 'right',
      marginRight: '15px',
    },
    comprarButtonStyle :{
      backgroundColor: 'black',
      borderRadius:'15px',
      border : 'none'
    }
  },
  sidebar:{
    container:{
      marginTop : 80,
      background: 'none'

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
