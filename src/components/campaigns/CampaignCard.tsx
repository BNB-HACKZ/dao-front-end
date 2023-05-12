import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CampaignCardProps {
  campaign: {
    title: string;
    image: any;
    amount: string;
    currency: string;
  };
}

const CampaignCard = ({ campaign }: CampaignCardProps) => {
  return (
    <div className="cursor-pointer flex flex-col items-center justify-start w-full h-full p-4 rounded-2xl shadow-md border-2 border-[#161a28]">
      <div className="w-full h-[250px] rounded-lg overflow-hidden">
        <Image
          src={campaign.image}
          alt={campaign.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full">
        <h3 className="text-lg font-medium text-white max-w-[300px] py-6">{campaign.title}</h3>
        <span>Raising</span>
        <div className="flex gap-1 items-center justify-start w-full h-8 text-lime">
          <span className="font-semibold">{campaign.amount}</span>
          <span className="font-semibold">{campaign.currency}</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
