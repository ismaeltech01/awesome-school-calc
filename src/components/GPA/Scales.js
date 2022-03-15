import react from "react";
import CalcHeader from "../CalcForm/CalcHeader";
import Container from "../CalcForm/Container";

export const weightedGPAScale = [
  ['5.0', '100'],
  ['4.9', '99'],
  ['4.8', '98'],
  ['4.7', '97'],
  ['4.6', '96'],
  ['4.5', '95'],
  ['4.4', '94'],
  ['4.3', '93'],
  ['4.2', '92'],
  ['4.1', '91'],
  ['4.0', '90'],
  ['3.9', '89'],
  ['3.8', '88'],
  ['3.7', '87'],
  ['3.6', '86'],
  ['3.5', '85'],
  ['3.4', '84'],
  ['3.3', '83'],
  ['3.2', '82'],
  ['3.1', '81'],
  ['3.0', '80'],
  ['2.9', '79'],
  ['2.8', '78'],
  ['2.7', '77'],
  ['2.6', '76'],
  ['2.5', '75'],
  ['2.4', '74'],
  ['2.3', '73'],
  ['2.2', '72'],
  ['2.1', '71'],
  ['2.0', '70']
];

export const unWeightedGPAScale = [
  ['4.0', '100'],
  ['3.9', '97-99'],
  ['3.8', '94.0-96'], 
  ['3.6', '90.0-93'],  
  ['3.4', '87.0-89'],  
  ['3.2', '84.0-86'], 
  ['3.0', '80.0-83'], 
  ['2.8', '77.0-79'], 
  ['2.6', '74.0-76'], 
  ['2.4', '71.0-73'], 
  ['2.2', '70']
];

const Scales = ({}) => {
  return (
    <Container id="gpa-scales">
      <Container id="weighted-scale">
        <CalcHeader txt={'Weighted Scale'}/>
        {weightedGPAScale.map(([gpa, grade]) => (<p>{gpa} == {grade}</p>))}
      </Container>
      <Container id="unweighted-scale">
        <CalcHeader txt={'Un-Weighted Scale'}/>
        {unWeightedGPAScale.map(([gpa, grade]) => (<p>{gpa} == {grade}</p>))}
      </Container>
      
    </Container>      
  );
}

export default Scales;