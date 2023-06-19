import { useContext } from 'react';
import ChildCntx from './../../context/context';

function ListItem() {
    const childContext = useContext(ChildCntx);

    return (<div>
        List Item: {childContext}
    </div>);
}

export default ListItem;