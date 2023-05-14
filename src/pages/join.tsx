import Layout from "@/components/common/Layout";
import React, { useState } from "react";
import Input from "@/components/common/Input";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const JoinForm = () => {
  const [username, setUsername] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [pfp, setPfp] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handlePfp = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPfp(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <Layout>
      <div className="flex flex-col items-start w-full max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-semibold text-center text-lime">
          Welcome
        </h1>
        <p className="lg:text-lg py-2 text-center text-[#8E8F94]">
          Please fill in the form below to join DAOvation, you&apos;d get your
          own NFT as a proof of membership and be able to vote on proposals.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-8 w-full px-4 py-8 mt-6 lg:mt-10 max-w-2xl min-h-[300px]">
          <Input
            type="text"
            label="Username"
            placeholder="Enter your username, this would be used to identify you on the platform"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="text"
            label="Bio"
            placeholder="Enter your bio, nothing too long, keep it short and simple"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          {/* Label for upload */}
          <div className="pt-2">
            <label htmlFor="" className="font-medium text-white">
              Set a Profile photo
              <span className="text-[#8E8F94] text-sm">
                {" "}
                (Optional, we&apos;d generate one for you if you don&apos;t
                upload one)
              </span>
            </label>
          </div>
          {/* Image Input */}
          <div className="flex flex-col items-start gap-10">
            {/* Upload Image Icon */}
            <div>
              <label
                htmlFor="profile-image"
                className="flex flex-col items-center justify-center text-sm w-16 square aspect-square rounded-full bg-slate-200 dark:bg-slate-400 cursor-pointer"
              >
                <ArrowUpTrayIcon className="text-ld h-6 w-6" />
                <span className="text-ld text-[10px] cursor-pointer">
                  Upload
                </span>
              </label>
              <input
                type="file"
                id="profile-image"
                className="text-ld hidden"
                accept="image/*"
                onChange={handlePfp}
              />
            </div>
            {/* Preview */}
            {imageUrl && (
              <div className="flex flex-col justify-center items-center gap-6">
                <div className=" w-32 square aspect-square overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt="Preview"
                    className="w-full h-full object-center object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-white font-medium">Preview</p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button className="long-btn w-full py-4 my-6">
            <span className="text-black uppercase">Join</span>
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default JoinForm;
