// import React, { useReducer, dispatch } from 'react'
// import PageTitle from '../../components/layout/PageTitle'

// import { initialState, reducer } from '../../store'

// const UseReducer = (props) => {

//     //const [state, exec] = useReducer(reducer, initialState)

//     return (
//         <div className="UseReducer">
//             <PageTitle
//                 title="Hook UseReducer"
//                 subtitle="Uma outra forma de ter estado em componentes funcionais!"
//             />

//             <div className="center">
//                 {state.user ? 
//                 <span className="text">{state.user.name}</span> :
//                 <span className="text">Sem Usuário</span> }
                
//                 <span className="text">{state.number}</span>
//                 <div>
//                     <button className="btn" onClick={() => exec({type: 'login', payload: 'Maria'})}>Login</button>
//                     <button className="btn" onClick={() => exec({type: 'numberAdd2'})}>+2</button>
//                     <button className="btn" onClick={() => exec({type: 'numberMulti7'})}>*7</button>
//                     <button className="btn" onClick={() => exec({type: 'numberDiv25'})}>/25</button>
//                     <button className="btn" onClick={() => exec({type: 'numberInt'})}>Int</button>
//                     <button className="btn" onClick={() => exec({type: 'numberAddN', payload:-9})}>N</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UseReducer
