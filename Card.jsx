import { Library, Medal } from "lucide-react"
import Grafica from "./Grafica"

const Card = ({datos, categoria}) => {

    return (
        <div className="w-100 h-100 bg-slate-90 rounded shadow-lg p-10">
            <h1 className="text-zinc-700 font-bold text-xl text-center" >{categoria}</h1>
            <div className="w-full  h-2/3 mt-3">
                <Grafica datos={datos} />
            </div>
            <ul>
                <li className="flex gap-3 items-center">
                    #1 <Medal color="#FFC300"/> {datos[0].name}
                </li>
                <li className="flex gap-3 items-center">
                #2 <Medal color="#B7B7B7  "/> {datos[1].name}
                </li>
                <li className="flex gap-3 items-center">
                #3 <Medal color="#AB5E0C"/> {datos[2].name}
                </li>
            </ul>
        </div>


    )
}

export default Card