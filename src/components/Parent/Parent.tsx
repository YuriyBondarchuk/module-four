import ParentCntx from './../../context/context';

function Parent({ children }: {children: any}) {
    const ParentContext = ParentCntx;

    return (
        <ParentContext.Provider value={'huy'}>
            {children}
        </ParentContext.Provider>
    );
}

export default Parent;