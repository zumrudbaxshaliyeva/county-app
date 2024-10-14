// // import React, { useEffect } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { getCountries } from '../actions/Actions'

// // const CountryComponents = () => {

// // const {alma}=useSelector(state=>state.country)
// // const dispatch=useDispatch()
// // // useEffect(()=>{
// // // dispatch(getCountries())
// // // },[dispatch])
// // console.log(alma);

// //   return (
// //     <div>
    
// //     </div>
// //   )
// // }

// // export default CountryComponents



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCountries } from '../actions/Actions';

// const CountryComponents = () => {
//     const dispatch = useDispatch();
    
//     // Use optional chaining or provide a fallback for safety
//     const { alma } = useSelector(state => state.country || {});

//     useEffect(() => {
//         dispatch(getCountries());
//     }, [dispatch]);

//     console.log(alma);

//     return (
//         <div>
//             {alma ? (
//                 <ul>
//                     {alma.map((country, index) => (
//                         <li key={index}>{country.name}</li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default CountryComponents;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions/Actions';

const CountryComponents = () => {
    const dispatch = useDispatch();
    
    // Ensure optional chaining or provide a fallback for safety
    const {alma} = useSelector(state => state.country );

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    console.log(alma);

    return (
        <div>
            {alma.length > 0 ? (
                <ul>
                    {alma.map((country, index) => (
                        <li key={index}>{country.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CountryComponents;
