import Image from "next/image";

type TechCard={
    imageURL: string;
    techStack: string;
};

export default function TechCard({imageURL, techStack} : TechCard) {
    return(
    <div className="  flex justify-center items-center shadow-lg drop-shadow overflow-hidden rounded-3xl bg-[#72BF78] bg-opacity-10 backdrop-filter
    backdrop-blur-lg border-white bordedr-opacity-20 flex-col w-48 h-48">
        <div className="relative objek-cover w-40 h-40 ">
                    <Image src={imageURL} alt="a" fill={true} />
         </div>           
    <p className="text-white text-center text-base leading-4">
        {techStack}
        </p>
    </div>
    )
}