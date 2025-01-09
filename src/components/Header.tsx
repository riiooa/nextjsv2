export default function Header() {
    return (
            <div  className="flex justify-between w-screen p-8 bg-[#10375C] items-center"  >
                <div>
                <p className="font-bold text-white text-2xl">Rio Al Fandi</p>
                </div>            
                <div >
                <ul className="flex space-x-8 font-semibold">
                    <li className="text-white text-lg">Home</li>
                    <li className="text-white text-lg">Teach</li>
                    <li className="text-white text-lg">Biography</li>
                    <li className="text-white text-lg">Contacts</li>
                </ul>
            </div>
            
            </div>
            
    );
}