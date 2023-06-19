import { useContext } from "react";
import ParentCntx from './../../context/context';
function Child() {

    const cntx = useContext(ParentCntx);

    return ( <div>Child Context: {cntx}</div> );
}

export default Child;