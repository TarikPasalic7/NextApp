import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RegistracijaCard from './RegistracijaCard';





function Section2() {
  return (
    <>
    <CssBaseline />
   <Container maxWidth={false}   >
   <Container  maxWidth="lg"  display="flex"
     >
  
   <Typography  align='center' variant='h5' component="h3" marginTop={20}  sx={{color:"#25AAA0"}}>
     Prije nego obavite uplatu, potrebno je da se prethodno registrujete, prateći sljedeće korake:
      </Typography>
      <Grid container spacing={4} paddingY={20}>
  <Grid item md={4}>
    <RegistracijaCard  image={"https://uplata.islamskazajednica.ba/images/korak1.png"} title={"REGISTRACIJA"} text={'Ukoliko niste registrovani za uslugu uplate putem ovog kanala, potrebno je da se registrujete, odabirom opcije "Registracija"'} />
  </Grid>
  <Grid item  md={4}>
  <RegistracijaCard  image={"https://uplata.islamskazajednica.ba/images/korak2.png"} title={"PRIJAVA"} text={'Nakon obavljene registracija potrebno da se autentificirate sa svojim korisničkim imenom i lozinkom.'} />
  </Grid>
  <Grid item  md={4}>
  <RegistracijaCard  image={"https://uplata.islamskazajednica.ba/images/korak3.png"} title={"UPLATA"} text={'Nakon autentifikacije i ulaska na stranicu, obavite uplatu odabirom opcije "Uplata".'} />
  </Grid>

</Grid>
  
  
   </Container>
   </Container>
 </>
  )
}

export default Section2