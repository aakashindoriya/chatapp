import { Debounce } from "./customfunc/debounce"

export default function Check(){
    function makeapicall(){
       
        console.log("api is called")
    }
    return(<>
    <button onClick={Debounce(makeapicall,2000)}>click me</button>
    </>)
}