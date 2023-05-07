import { Navbar } from "@/components"
import Layout from "@/components/common/Layout";
import { useState } from "react";


const CreateCampaign  = () => {
    const [tab1, setTab1] = useState<boolean>(true);
    const [tab2, setTab2] = useState<boolean>(false);
    const [name, setName] = useState('');
    const [campaignName, setCampaignName] = useState('');
    const [link, setLink] = useState('');

    return (
        <>
       
       <Layout>

        <div className="">

            <div>
                <h1 className="startC font-bold">Start a Campaign</h1>
            </div>
           
            <h2 className="text-xl text-green-400 pl-20 pt-5">Campaign Info <span className={`${tab1 ? 'p-14 text-gray-400': 'p-14 text-green-400'}`}>More details</span></h2> 
            

            {/* add radio button & line to next tab */}

  {tab1 && (

<form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 ml-11">
<div className="mb-7">
  <label className="block text-white font-bold mb-2">
    Name
  </label>
  <input className=" bg-gradient-to-r from-gray-800 to-gray-700 text-gray-800 border rounded w-4/12 h-12 py-2 px-3  leading-tight "  placeholder="Fullname" />
</div>
<div className="mb-7">
  <label className="block text-white font-bold mb-2">
    Name of your Campaign
  </label>
  <input className=" bg-gradient-to-r from-gray-800 to-gray-700 text-gray-800 border rounded w-4/12 h-12 py-2 px-3  leading-tight "  placeholder="E.g. Grant to build a Solar powered shoe" />
</div>
<div className="mb-7">
  <label className="block text-white font-bold mb-2">
    Relevant Links
  </label>
  <input className=" bg-gradient-to-r from-gray-800 to-gray-700 text-gray-800 border rounded w-4/12 h-12 py-2 px-3  leading-tight "  placeholder="www.xyz.com" />
</div>
<div className=" justify-center">
  <button onClick={() => {setTab1(false); setTab2(true)}} className="bg-green-400 hover:bg-green-700 w-4/12 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    Next
  </button>
</div>
</form>

  )}



{ tab2 && (
    <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 ml-11">
    <div className="mb-7">
      <label className="block text-white font-bold mb-2">
        Project Details
      </label>
      <textarea className=" bg-gradient-to-r from-gray-800 to-gray-700 text-gray-800 border rounded w-4/12 h-48 py-2 px-3  leading-tight "  placeholder="Brief description of your project" />
    </div>

    <div className="mb-7">
      <label className="block text-white font-bold mb-2">
        Cover Image
      </label>
      <input type="file" className=" bg-gradient-to-r from-gray-800 to-gray-700 text-gray-800 border border-dashed rounded-r-xl border-4 border-grey-500 rounded w-4/14 h-48 py-2 px-3  leading-tight "  placeholder="Brief description of your project" />
    </div>


    
    <div className=" justify-center">
      <button className="bg-green-400 hover:bg-green-700 w-4/12 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Save
      </button>
    </div>
  </form>
)}




        </div>

        
       </Layout>

        
        </>
    )
}
export default CreateCampaign;
