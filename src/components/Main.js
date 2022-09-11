import Similar from "./Similar"
import data from "./data"
export default function Main(){
    const similarCard = data.map(item =>{
        return(
            <Similar 
            key = {item.id}
            img = {item.img}
            loc = {item.loc}
            title = {item.title}
            price = {item.price}
            />
        )
    })
    return(
        <>
        <div className="flex flex-col items-start m-4">
            <button className="bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            For Rent
            </button>
            <h2>2BHK Apartment for Sale in Newtown,Kolkata,West Bengal</h2>
            <div className="flex gap-2">
                <img src="02C.jpg" className="rounded" alt="Properties"/>
                <div className="grid grid-cols-2 gap-3">
                    <img src="02C.jpg" className="rounded" alt="Properties"/>
                    <img src="02C.jpg" className="rounded" alt="Properties"/>
                    <img src="02C.jpg" className="rounded" alt="Properties"/>
                    <img src="02C.jpg" className="rounded" alt="Properties"/>
                </div>
            </div>
            <div className="flex justify-between m-4 self-stretch">
                <div className="rate--address">
                    <h2 className="text-purple">Rs 25000</h2>
                    <h3 className="text-xs">SP Sukhobrishti Ln, Action Area III, Newtown, Kolkata, West Bengal 700135, India</h3>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <img src="share.png" alt="share"/>
                        <img src="like.png" alt="like"/>
                        <img src="swap.png" alt="swap"/>
                    </div>
                    <div className="flex">
                        <img src="whatsapp.png" alt="whatsapp" />
                        <button className="bg-purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Contact Owner
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex flex-col items-start m-4 gap-5">
            <div className="flex self-center gap-10">
                <h3 className="border-b-2 border-b-white hover:border-b-2 hover:border-b-purple hover:text-purple">Overview</h3>
                <h3 className="border-b-2 border-b-white hover:border-b-2 hover:border-b-purple hover:text-purple">Details</h3>
                <h3 className="border-b-2 border-b-white hover:border-b-2 hover:border-b-purple hover:text-purple">Features & Amenities</h3>
                <h3 className="border-b-2 border-b-white hover:border-b-2 hover:border-b-purple hover:text-purple">Nearby</h3>
            </div>

            <h2 className="text-purple text-xl">Overview</h2>
            <p className="w-2/3">Property taxes are charged by local government entities, such as KMC, and are due by 
            the owner of the property. The amount of KMC property tax that must be paid may 
            vary. Thus, it depends on the location and a number of other criteria. KMC approved 
            the new Unit Area Assessment (UAA) mechanism for calculating property taxes in 
            March 2017.</p>

            <h2 className="text-purple text-xl">Details</h2>
            <div className="flex m-4 self-stretch gap-4">
                <div className="border-2 border-purple rounded p-2 w-1/6">
                    <img src="bed.png" />
                    <h4 className="text-purple">BHK</h4>
                    <p>3BHK</p>
                </div>
                <div className="border-2 border-purple rounded  p-2 w-1/6">
                    <img src="bath.png" />
                    <h4 className="text-purple">Bathroom</h4>
                    <p>2</p>
                </div>
                <div className="border-2 border-purple rounded  p-2 w-1/6">
                    <img src="bed-double.png" />
                    <h4 className="text-purple">Furnishing Status</h4>
                    <p>Semi-Furnished</p>
                </div>
                <div className="border-2 border-purple rounded p-2 w-1/6">
                    <img src="expand.png" />
                    <h4 className="text-purple">Super Build Area</h4>
                    <p>1418 Sq.ft</p>
                </div>
            </div>

            <h2 className="text-purple text-xl">Features & Amenities</h2>
            <div className="flex gap-5">
                <h4>CCTV</h4>
                <h4>Security</h4>
                <h4>Life</h4>
            </div>

            <h2 className="text-purple text-xl">Nearby</h2>
            <div className="flex">
                <img src="Frame 12069.png"/>
                <img src="Frame 12070.png"/>
                <img src="Frame 12071.png"/>
                <img src="Frame 12072.png"/>
                <img src="Frame 12073.png"/>
            </div>

            <h2 className="text-purple text-xl">Similar Properties</h2>
            <div className="flex gap-4 overflow-x-auto">
                {similarCard}
            </div>
        </div>
        </>
    )
}