import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const Grafica = ({datos}) => {
    
    const getBarColor = (value) =>{
        if (value == "3" ){
            return "#728870";  
        }else{
            if (value == "2"){
                return "#8AA987";
            }else{
                if (value == "1"){
                    return "#B3C5A7"
                }
            }
        }  
    }
    


    return (
        <ResponsiveContainer width="100%" height={"100%"}>
            <BarChart 
            data={datos}
            >
            <XAxis dataKey="name"/>
            <XAxis />
            <Tooltip />
            <Bar
            dataKey="value" 
            >
               {datos.map(
                (entry)=>(<Cell Key={entry.name} fill={getBarColor(entry.value)}/>)
               )} 
            </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Grafica