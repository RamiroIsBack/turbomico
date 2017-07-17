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
      //display : 'block',
      padding: '2px',
      border: 'none',
      borderRadius:'10px',
      //verticalAlign: 'top',
      //margin: 'auto',
      //a una mala hago esto pa dejarlo fijo
      //width:'330px',
      //height: '230px',
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
      //padding: 16,

      //marginTop:6,
      //borderBottom: '1px solid'
    },
    btnlink:{
      textAlign :'center',
      fontSize: '13px',
      //fontWeight: 'bold',
      backgroundColor: 'black',
      width : '100%',
      margin: 'auto',
      //marginRight: '4px',

    },
    header:{
      marginTop:0,
      marginBottom:0
    },
    title:{
      //textDecoration:'none',
      //color:'red'
      fontWeight: 400,
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
