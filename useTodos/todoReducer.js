

export const todoReducer = (initialState, action) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
            // throw new Error('Action.type = ABC no está implementada');
            // consejo en caso de no tener un switch no implementado aun
        
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if( todo.id === action.payload ){
                    return{
                        ...todo,
                        done: !todo.done,
                    }
                }

                return todo;
            });

        default:
            return initialState;
            // por default siempre devolver initialState
    }
}