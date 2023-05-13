import Layout from "@/components/common/Layout";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

type ImageState = {
  file: File | null
  previewUrl: string | null
}

const CreateCampaign = () => {
  const [tab1, setTab1] = useState<boolean>(true);
  const [tab2, setTab2] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [campaignName, setCampaignName] = useState("");
  const [link, setLink] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [coverImage, setCoverImage] = useState<ImageState>({
    file: null,
    previewUrl: null,
  })
  const [coverImageUrl, setCoverImageUrl] = useState('');

  const handleCoverImageChange = (e: any) => {
    setCoverImage(e.target.files[0])
    toast.success('Successfully added!');
    setCoverImageUrl(URL.createObjectURL(e.target.files[0]))
  }

  const handleTabChange = () => {
    if (!name) {
      toast.error('please fill in your name')
    }
    if (!campaignName) {
      toast.error('please fill in the Campaign name')
    }
    else {
       setTab1(false);
       setTab2(true);

    }
  
   
  }


  const CreateCampaign = async (e: any) => {
    e.preventDefault();
    try {

      
      
    } catch (error) {

      console.log(error);
      
    }
  }

  return (
    <>
      <Layout>
        <div>
        <Toaster />
          <div>
            <h1 className="startC font-bold">Start a Campaign</h1>
          </div>

          <h2 className="text-xl text-[#89D472] pl-20 pt-5">
            Campaign Info{" "}
            <span
              className={`${
                tab1 ? "p-14 text-gray-400" : "p-14 text-[#89D472]"
              }`}
            >
              More details
            </span>
          </h2>

          {/* <div className="position-indicator">
            
          </div> */}

          {/* add radio button & line to next tab */}

          {tab1 && (
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 ml-11">
              <div className="mb-7">
                <label className="block text-white font-bold mb-2">Name</label>
                <input
                  onChange={(e)=>{setName(e.target.value)}}
                  className=" bg-gradient-to-r from-gray-900 to-gray-900 border-gray-900 text-white border rounded w-4/12 h-12 py-2 px-3  leading-tight "
                  placeholder="Fullname"
                />
              </div>
              <div className="mb-7">
                <label className="block text-white font-bold mb-2">
                  Name of your Campaign
                </label>
                <input
                 onChange={(e)=>{setCampaignName(e.target.value)}}
                  className=" bg-gradient-to-r from-gray-900 to-gray-900 text-white border  border-gray-900  rounded w-4/12 h-12 py-2 px-3  leading-tight "
                  placeholder="E.g. Grant to build a Solar powered shoe"
                />
              </div>
              <div className="mb-7">
                <label className="block text-white font-bold mb-2">
                  Relevant Links
                </label>
                <input
                 onChange={(e)=>{setLink(e.target.value)}}
                  className=" bg-gradient-to-r from-gray-900 to-gray-900 text-white  border  border-gray-900  rounded w-4/12 h-12 py-2 px-3  leading-tight "
                  placeholder="www.xyz.com"
                />
              </div>
              <div className=" justify-center">
                <button
                  onClick={handleTabChange}
                  className="bfpe hover:bg-green-400 w-4/12 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Next
                </button>
              </div>
            </form>
          )}

          {tab2 && (
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 ml-11">
              <div className="mb-7">
                <label className="block text-white font-bold mb-2">
                  Project Details
                </label>
                <textarea
                  onChange={(e)=>{setProjectDetails(e.target.value)}}
                  className=" bg-gradient-to-r from-gray-900 to-gray-900 text-white border border-gray-900 rounded w-4/12 h-48 py-2 px-3  leading-tight "
                  placeholder="Brief description of your project"
                />
              </div>

              <div className="mb-7 relative ">
                <label className="block text-white font-bold mb-2">
                  Cover Image
                </label>
                
                <input
                  type="file"
                  onChange={handleCoverImageChange}
                  className="file-input bg-gradient-to-r from-gray-900 to-gray-900 text-white border-dashed rounded-r-xl border-2 border-gray-600 rounded w-4/14 h-48 py-2 px-3  leading-tight "
                  
                />
              </div>

              


              <div className=" justify-center">
                <button
                  className="bfpe hover:bg-green-700 w-4/12 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Publish
                </button>
              </div>
            </form>
          )}
        </div>
      </Layout>
    </>
  );
};
export default CreateCampaign;
