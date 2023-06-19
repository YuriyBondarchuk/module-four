import ParentCntx from './../../context/context';

function List({children}:{children: any}) {
    const Parent = ParentCntx;
    return ( 
        <Parent.Provider value='huy_2'>
            {children}
        </Parent.Provider>
    );
}

export default List;