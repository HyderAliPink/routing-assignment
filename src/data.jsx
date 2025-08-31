// export default function Data({ data }) {
//   return (
//     <div>
//       {data.map((word, i) => (
//         <p key={i}>{word}</p>
//       ))}
//     </div>
//   );
// }

export default function Data({data}){
    return (
        <div>
            {data.map((word, i)=> {
                <p key={i}>{word}</p>
            })}
        </div>
    )
}