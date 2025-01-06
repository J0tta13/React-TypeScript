//import {FunctionComponent, FC} from 'react';


// export const Randomfox1 = () => {
//     return (
//         <img src="" alt="" />
//     );
// }

type Props = {
    img: string;
}
export const Randomfox = ({img}:Props): JSX.Element => {

    return (
        <img className=' rounded-xl' width= {320} height="auto" src={img} alt="Random Fox" />
    );
}


// export const Randomfox3:FC = () => {
// return (
//     <img src="" alt="" />
// );
// }

// export const Randomfox4:FunctionComponent = () => {
// return (
//     <img src="" alt="" />
// );
// }
