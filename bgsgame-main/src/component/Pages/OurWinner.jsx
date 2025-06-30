'use client'

import { Card, CardContent } from "@/components/ui/card";


const OurWinner=()=>{
   
    return(
        <div className="w-full min-h-screen mt-10">
             <div className="flex justify-center items-center">
                <div className="space-y-3 text-black">
                    <h6 className="font-extralight text-xl">Our Winner</h6>
                    <p className="text-gray-500">A life-changing $1,020,000 win has just turned dreams into reality! Congrats to our lucky winner—proof that <br></br> big rewards are real, and you could be the next success story</p>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                       {data.map(da =>  <Card key={da.id} className='w-full max-w-sm'>
                            <img src={da.image} alt='' className="md:h-48  flex justify-center items-center rounded-md"></img>
                            
                               <div className='font-extralight bg-[#f1f1f1] flex justify-around text-xl md:p-3 '>
                                 <div>
                                    <h6>Name:</h6>
                                <p>Location:</p>
                                <p>Date:</p>
                                <p>Game:</p>
                                <p>Price:</p>
                                 </div>
                                 <div>
                                    <h6>{da.name}</h6>
                                <p>{da.location}</p>
                                <p>{da.date}</p>
                                <p>{da.game}</p>
                                <p>{da.price}</p>
                                 </div>
                               </div>
                           
                        </Card>)}
                    </div>
                </div>

             </div>
        </div>
    )
}
export default OurWinner;
const data=[
    {
        id:1,
        name:"Abu",
        location:"Dhaka",
        game:"Ludo",
        date:"3/4/28",
        price:"45.00",
        image:'https://res.cloudinary.com/dg1okcxsx/image/upload/v1750922725/1931a0b7b783fb007422645b1ccde00e1e3e1093_be14xc.png'
    },
    {
        id:2,
        name:"Abu",
        location:"Dhaka",
        game:"Ludo",
        date:"3/4/28",
        price:"45.00",
        image:'https://res.cloudinary.com/dg1okcxsx/image/upload/v1750922725/1931a0b7b783fb007422645b1ccde00e1e3e1093_be14xc.png'
    },
    {
        id:3,
        name:"Abu",
        location:"Dhaka",
        game:"Ludo",
        date:"3/4/28",
        price:"45.00",
        image:'https://res.cloudinary.com/dg1okcxsx/image/upload/v1750922725/1931a0b7b783fb007422645b1ccde00e1e3e1093_be14xc.png'
    },
]