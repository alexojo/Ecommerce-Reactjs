import React, { useRef, useState, Component} from "react"

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';

import jumpTo from '../../../modules/Navigation';

import styles from '../stylesheets/Modal.sass'


// A exportar
var Pregunta1=[];
var Pregunta2=[];






const outStyle={
  width:'80%',
  height:'30px',
  marginBottom:'10px',
  marginTop:'20px'
}
const btnStyle={
  width:'100%',
  height:'100%',
  borderRadius:'7px',
  background:'#680d0f',
  color:'white',
  fontFamily:'Roboto sans-serif',
  fontSize:'15px'
}

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));


function Boton({ button_title,onClick, indice1, indice2}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('xl');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const aux = () =>{
    onClick();
  }
  const handleClose = () => {
    setOpen(false);
    aux();
    jumpTo('/dashboard')
  };
  
  //const P1 = getRandomArbitrary(0,6);
  //const P2 = getRandomArbitrary(0,6);
  //const P3 = getRandomArbitrary(6,14);
  //const P4 = getRandomArbitrary(6,14);
  //const P5 = getRandomArbitrary(14,17);
  //const P6 = getRandomArbitrary(14,17);

    const Preguntas = [
      {
        Id: 'G_01',
        encabezado: 'Mientras usaba el producto...',    
        preguntaI: '...actué deliberadamente',
        preguntaF: '...actué impulsivamente'
    
      },
      {
        Id: 'E_01',
        encabezado: 'Mientras usaba el producto...', 
        preguntaI: '...me tomó demasiado esfuerzo alcanzar mi objetivo',
        preguntaF: '...alcancé mi objetivo sin esfuerzo',
      },
      {
        Id: 'G_02',
        encabezado: 'Mientras usaba el producto...', 
        preguntaI: '...inconscientemente realicé pasos sin que estos reflejen individualidad',
        preguntaF: '...conscientemente realicé un paso a la vez',
      },
      {
        Id: 'G_03',
        encabezado: 'Mientras usaba el producto...', 
        preguntaI: '...fui guiado por la razón',
        preguntaF: '...fui guiado por los sentimientos',
      },
      {
        Id: 'E_02',
        encabezado: 'Mientras usaba el producto...', 
        preguntaI: '...me sentí perdido',
        preguntaF: '...fácilmente supe qué hacer',
      },
      {
        Id: 'G_04',
        encabezado: 'Mientras usaba el producto...', 
        preguntaI: '...actué sin pensar',
        preguntaF: '...fui capaz de explicar cada paso individual',
      },
      {
        Id: 'E_03',
        encabezado: 'Usar el producto...', 
        preguntaI: '...requirió usar toda mi atención',
        preguntaF: '...corrió sin problemas',
      },
      {
        Id: 'P X_01',
        encabezado: 'Usar el producto...', 
        preguntaI: '...fue inspirador',
        preguntaF: '...fue insignificante',
      },
      {
        Id: 'P E_04',
        encabezado: 'Usar el producto...', 
        preguntaI: '...fue fácil',
        preguntaF: '...fue difícil',
      },
      {
        Id: 'X_02',
        encabezado: 'Usar el producto...', 
        preguntaI: '...no tuvo nada de especial',
        preguntaF: '...fue una experiencia mágica',
      },
      {
        Id: 'P INT_01',
        encabezado: 'Usar el producto...', 
        preguntaI: '...fue muy intuitivo',
        preguntaF: '...no fue lo suficientemente intuitivo',
      },
      {
        Id: 'X_03',
        encabezado: 'Usar el producto...', 
        preguntaI: '...fue trivial',
        preguntaF: '...me llevó lejos',
      },
      {
        Id: 'P E_05',
        encabezado: 'Usar el producto...', 
        preguntaI: '...fue natural',
        preguntaF: '...fue arduo',
      },
      {
        Id: 'P X_04',
        encabezado: 'Usar el producto...', 
        preguntaI: '...fue fascinante',
        preguntaF: '...fue aburrido',
      },
      {
        Id: 'V_01',
        encabezado: 'En retrospectiva...', 
        preguntaI: '...es difícil para mí describir las operaciones paso a paso',
        preguntaF: '...no tengo problemas al describir las operaciones paso a paso',
      },
      {
        Id: 'P V_02',
        encabezado: 'En retrospectiva...', 
        preguntaI: '...puedo recordar los pasos de las operaciones',
        preguntaF: '...es difícil para mí recordar los pasos de las operaciones',
      },
      {
        Id: 'V_03',
        encabezado: 'En retrospectiva...', 
        preguntaI: '...soy incapaz de expresar de qué manera usé el producto',
        preguntaF: '...puedo decir exactamente de qué manera usé el producto',
      },
  ]
  

  const numeros = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 6,
      label: '6',
    },
    {
      value: 7,
      label: '7',
    },
  ];
  /*const auxiliar = Math.round(Math.random() * (16 - 0) + 0);

  const indice1 = auxiliar;
  const indice2 = auxiliar==16? 0 : (auxiliar+1);*/

  function valuetext(value) {
    return `${value}°C`;
  }


  
  const [valor, setValor]=useState(0)
  const handleValor =(event, newValue)=>{
    setValor(newValue);
    
  }
  const [valor2, setValor2]=useState(0)

  const handleValor2 =(event, newValue)=>{
    setValor2(newValue);
  }
  Pregunta1[0]=valor;
  Pregunta2[0]=valor2;
  Pregunta1[1]=Preguntas[indice1].Id;
  Pregunta2[1]=Preguntas[indice2].Id;
 

  return (
    <div className="forminput_button" style={outStyle}>
      <input type="button" value={button_title} style={btnStyle} onClick={()=>{handleClickOpen(); }}/>

      <Dialog    
        open={open}
        onClose={handleClose}
        fullWidth = {fullWidth}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: '##ffffff',
            boxShadow: 'none',
          },
        }}
      >
        <DialogTitle style={{color:'#773435'}} align='center' id="dialog-title">¡AYÚDENOS CON SU OPINIÓN!</DialogTitle>
        <div className={styles.contenido} >
          
          <Typography align='justify' id="discrete-slider" variant="h6" gutterBottom>
            {Preguntas[indice1].encabezado}
          </Typography>
          
          <div style={{display: 'flex',justifyContent: "space-evenly",flexDirection: 'row', minWidth: 600+'px'}}>
            <Typography style={{width:400+'px'}}>{Preguntas[indice1].preguntaI}</Typography>
            <Slider style={{width:200+'px',color:'#773435'}}
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleValor}
              step={1}
              marks = {numeros}
              min={0}
              max={7}
            />
            <Typography style={{width:400+'px'}}>{Preguntas[indice1].preguntaF}</Typography>
          </div>

          <Typography align='justify' id="discrete-slider" variant="h6" gutterBottom>
            {Preguntas[indice2].encabezado}
          </Typography>

          <div style={{display: 'flex',justifyContent: "space-evenly", flexDirection: 'row', minWidth: 600+'px'}}>
            <Typography style={{width:400+'px'}}>{Preguntas[indice2].preguntaI}</Typography>
            <Slider style={{width:200+'px',color:'#773435'}}
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleValor2}
              step={1}
              marks = {numeros}
              min={0}
              max={7}
            />
            <Typography style={{width:400+'px'}}>{Preguntas[indice2].preguntaF}</Typography>
          </div>

          
          
          <DialogActions>
            <Button style={{color:"#773435"}} variant="contained" onClick={handleClose} color="inherit" autoFocus>
              CONTINUAR
            </Button>
          </DialogActions>
          
        </div>
        
      </Dialog>

    </div>
    
  )
}
export {Boton, Pregunta1, Pregunta2}