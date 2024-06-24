import { useParams, Navigate } from "react-router-dom";

function Color({ colors }) {
    const { color } = useParams();
    const colorDetails = colors.filter(val => val.name === color);

    if (colorDetails.length === 0) {
        return <Navigate to='/colors'/>
    }
    return (
        <>
            <p style={{backgroundColor: `${colorDetails[0].hexColor}`, height: '300px', fontSize: '2rem'}}>{color}</p>
        </>
    )
}

export default Color;