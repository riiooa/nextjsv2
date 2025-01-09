import TechCard from "./TechCard";

export default function Tech() {
    return (
        <div className="bg-slate-800 w-screen min-h-[300px] p-8">
            <h1 className="text-4xl text-white font-bold mb-4"> Techs</h1>
            <div className="w-32 border-2 mb-8 "/>
            <div className="flex justify-center items w-full gap-4 ">
                {/* /* <div className="bg-green-100 w-48 relative">
                    <Image src={"/img/123.jpg"} alt="a" fill={true} />

                </div> */ }
                <TechCard imageURL="/Img/pt.jpg" techStack="phyton" />
                <TechCard imageURL="/Img/php.jpg" techStack="php" />
                <TechCard imageURL="/Img/javas.jpg" techStack="Js" />
            </div>
        </div>
    )
}