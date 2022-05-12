import {getSavedValue} from "../../CustomHooks/useLocalStorage";
import {render} from "@testing-library/react"

it("returning initial value",()=>{
  const savedValue=getSavedValue("test","initialVal");
  expect(savedValue).toBe("initialVal");

})