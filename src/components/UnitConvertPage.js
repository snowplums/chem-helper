import { render } from '@testing-library/react';
import { useRef, useState } from 'react';
import ConvertUnits from "../scripts/ConvertUnits";
import styles from './UnitConvertPage.module.css';

var ans;

function UnitConvertPage(){
  const [outputValue, setOutputValue] = useState("Output here");
   
    const inputValueRef = useRef();
    const inputUnitRef = useRef();
    const targetUnitRef = useRef();
    

    function submitHandler(event){
      event.preventDefault();

      var inputValue = inputValueRef.current.value;
      var inputUnit = inputUnitRef.current.value;
      var targetUnit = targetUnitRef.current.value;

      inputUnit = inputUnit.toLowerCase();
      targetUnit = targetUnit.toLowerCase();

      const data = {
        CurrentUnit : inputUnit,
        CurrentValue : inputValue,
        TargetUnit : targetUnit       
      };
      
      ans = ConvertUnits(data);

      setOutputValue(ans);


      console.log(data);


    }


    return (
        <form onSubmit={submitHandler}>
          <div classname = "inputText">
            <label>Enter the number you would like to convert:
                <input
                    type="text"
                    required id = 'inputValue'
                    ref = {inputValueRef}
                />
                <input
                    type="text"
                    required id = 'unitInput'
                    ref = {inputUnitRef}
                    />
            </label>
          </div>
          
          <div>
            <label>Enter the type of unit you would like out:
                <input
                    type="text"
                    required id = 'targetUnit'
                    ref = {targetUnitRef}
                />
            </label>
          </div>
          
          
          <button className= {styles.button}>Submit</button>

          <div>
              <h1>{outputValue}</h1>
          </div>
        </form>
        
      )
}

export default UnitConvertPage;