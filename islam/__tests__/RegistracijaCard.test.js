import { TextField } from "@mui/material";
import { render } from "@testing-library/react";
import RegistracijaCard from "../Components/RegistracijaCard";
const testData={
    id: '4',
      name: 'Fidja',
      fulltext:'Fidja - obavezna kompenzacija koju čovjek daje zbog propusta u nekom ibadetu. Fidja se može dati odjednom na početku ramazana ili u vremenu kada postane obavezna, tj. tokom ramazana, što znači da se može izdvojitii na kraju toga mjeseca. Fidja se može dati nakon što postane obavezna, ali se ne može dati ranije, tj. prije nego što postane obavezna. Više informacija o propisu fidje možete pročitati na https://zekat.ba/fidja/',
      image:'/fidja.jpg',
      text:"Fidja - obavezna kompenzacija koju čovjek daje zbog propusta u nekom ibadetu."
}
describe("Registracija component test",()=>{

    it("Rendered input ",()=>{
       
        const {getByTestId}= render(<RegistracijaCard image={testData.imaga} name={testData.name} text={testData.text}/>)
        const card =getByTestId("card")
        expect(card).toBeTruthy();

})
});