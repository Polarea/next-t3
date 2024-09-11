import { SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { api } from "~/utils/api";


export default function Instructors() {
    const user = useUser();
    const instructors = api.instructors.getAll.useQuery();
    if (user.isSignedIn)
    return (
        <> 
        <div className="w-screen mb-5 flex justify-between">  
        <Link href="/" className="text-xl font-serif m-2">Home</Link> 
        <button className="text-xl font-serif m-2"><SignOutButton/></button>   
        </div>
        <div className="flex text-center"> 
            <form className="mb-5 mt-5">
                <input placeholder="Enter name" className="bg-orange-700 text-white text-center font-serif min-w-40 text-2xl p-2 float-none rounded-s-md"></input>
                <input placeholder="Enter qualification" className="bg-amber-950 text-white text-center font-serif min-w-40 text-2xl p-2 rounded-e-md"></input>
            </form>
            <table className="ms-80">
                {instructors.data?.map(instructor => {
                    return (
                        <tr key={instructor.id} >
                  <td className="bg-orange-700 text-white text-center font-serif min-w-80 max-w-80 text-2xl p-2 float-none">
                    {instructor.name}
                    </td>
                    <td className="bg-amber-950 text-white text-center font-serif min-w-80 max-w-80 text-2xl p-2">
                    {instructor.qualifications?.map(qualification => qualification.name + ', ')}
                  </td>
                  </tr>
                    );
                 })}
            </table>            
        </div>
        </>
    )
}