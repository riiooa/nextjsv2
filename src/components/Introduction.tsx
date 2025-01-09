import Image from "next/image";

export default function Introduction() {
   return ( 
        <div className="w-screen has-[500px]:  bg-[#F6F6F6] p-8">
            <div className="flex justify-between items-center">
                <div>
                <div>
                <p className="text-[#86A788] pt-5 text-2xl font-bold  ">Teknik Informatika</p>
                <h2 className="text-[#D39D55] pt-5 text-6xl  font-bold">Hello, I'm </h2>
                <h1 className="text-[#161D6F] pt-5 text-9xl  font-extrabold ">Rio Al Fandi </h1>
                
                </div>
                <div className="my-8">
                    <p className="text-[#86A788] max-w-lg  font-semibold">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Doloribus sunt eaque est itaque veritatis perferendis, deserunt fugit, 
                        possimus cupiditate dolor delectus non quibusdam dolorem sed culpa! 
                        Vero neque vitae sapiente!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Pariatur ab laborum necessitatibus assumenda doloremque modi ut sed,
                         iure est minus veritatis nam repellat, voluptate debitis officia. 
                         Assumenda, praesentium laboriosam! Consequatur.
                    </p>
                </div>
                </div>
                <div className="relative w-96 h-96 ">
                    <Image src={"/Img/user.jpg"} 
                    alt="Rio Al Fandi" 
                    fill={true}
                    priority={true}
                    className=" object-cover rounded-3xl"
                    />
                        
                   
                </div>
            </div>
            
        </div>
   );
}