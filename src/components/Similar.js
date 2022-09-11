import { MapPinIcon } from "@heroicons/react/24/outline"
export default function Similar(props){
    return(
        <div className="flex flex-col w-1/4 gap-2 bg-lightpurple rounded-md p-4">
            <img className="rounded-md" src={props.img}/>
            <h3 className="text-white">{props.title}</h3>
            <div className="flex justify-between">
                <span className="flex">
                <MapPinIcon className="fill-white h-6 w-6"/>
                <h4 className="text-white">{props.loc}</h4>
                </span>

                <h4 className="text-white">Rs{props.price}</h4>
            </div>
            <button className="bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Contact Now</button>
            <button className="bg-white hover:bg-purple-700 text-black font-bold py-2 px-4 rounded"> Learn more</button>
        </div>
    )
}