import React from "react";
import Image from "next/image";

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
    <div className="flex flex-col items-center justify-start w-full h-full p-4 rounded-lg shadow-md">
      <div className="w-full h-[250px] rounded-lg overflow-hidden">
        <Image
          src={campaign.image}
          alt={campaign.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full h-32">
        <h3 className="text-lg font-medium text-white">{campaign.title}</h3>
        <span>Raising</span>
        <div className="flex gap-1 items-center justify-start w-full h-8 text-lime">
          <span className="font-semibold">{campaign.amount}</span>
          <span className="font-semibold">{campaign.currency}</span>
        </div>
      </div>
      {/* View Button */}
      <button className="long-btn w-full py-3 uppercase">View</button>
    </div>
  );
};

export default CampaignCard;
