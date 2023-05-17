import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/common/Layout";
import { ThreeAnysImg } from "../../../public";
import Image from "next/image";
import ContributeModal from "@/components/modals/ContributeModal";
import { useContractRead } from "wagmi";
import { ABI } from "@/constants/abi";
import { getJSONFromFileinCID } from "@/utils/storage";

const obj = {
  title: "Building a plant powered Blockchain",
  goal: 1000,
  currentDonatedAmount: 500,
  currency: "USD",
  about:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in illum facilis laudantium explicabo possimus quibusdam distinctio libero! Ea quidem eum maxime omnis, quisquam placeat distinctio iure magnam pariatur! Deserunt ipsum eum nam ex, earum optio reiciendis necessitatibus provident explicabo dolorem magni temporibus, accusamus iste, porro omnis. Vel natus officiis perferendis? Incidunt molestias sit, similique, dolor, esse sapiente rerum quaerat quae blanditiis natus distinctio aliquid dolorem et! Ea, repellat tempora voluptatibus totam nemo dolor maiores, sed cum vero iusto, delectus perspiciatis mollitia quae. Optio laboriosam autem tempore quasi magnam veniam quae laudantium commodi beatae quia quam, ex nisi! Repellendus pariatur deserunt eaque placeat, voluptate temporibus corrupti fuga minus nulla, autem, ab cumque doloremque. Enim excepturi unde iste minus voluptates dolore ut perferendis? Dignissimos vitae voluptas earum obcaecati, delectus, impedit quae voluptatum tempore non rem in! Ullam at quia molestias consequuntur perspiciatis autem eos tempora earum, harum, quas reiciendis beatae. Ducimus, veniam autem ipsum quaerat minima ipsam tempore ullam necessitatibus error, possimus laborum aliquid exercitationem recusandae minus unde aspernatur nihil perspiciatis tenetur ab mollitia dignissimos obcaecati quos. Distinctio quos ratione odit amet quae in minus, consectetur doloribus pariatur, soluta modi ipsa architecto! Sapiente natus dolores illum earum, saepe dicta eum enim",
  proposer: "0x123456789",
  date: "2021-09-01",
  from: "Argentina",
};

const Campaign = () => {
  const router = useRouter();
  const { id } = router.query;
  const [showModal, setShowModal] = React.useState(false);
  const [theData, setTheData] = useState<any>(null);
  const { data, isError, isLoading } = useContractRead({
    address: id as `0x${string}`,
    abi: ABI.campaign,
    functionName: "campaignCID",
  });
  const { data: raising } = useContractRead({
    address: id as `0x${string}`,
    abi: ABI.campaign,
    functionName: "target",
  });
  const { data: raisedAmount } = useContractRead({
    address: id as `0x${string}`,
    abi: ABI.campaign,
    functionName: "raisedFunds",
  });
  const { data: DONORS } = useContractRead({
    address: id as `0x${string}`,
    abi: ABI.campaign,
    functionName: "_ALL_DONORS",
  });

  useEffect(() => {
    async function getData() {
      if (data) {
        const _data = await getJSONFromFileinCID(data);
        console.log(_data?.coverImage);
        setTheData(_data);
      }
    }
    getData();
  }, [data]);

  if (!theData) return null;
  return (
    <>
      <ContributeModal
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
      />
      <Layout>
        <div>
          <div className="w-full flex flex-col lg:flex-row max-w-7xl mx-auto lg:py-8">
            <div className="w-full lg:w-1/2">
              {/* Image */}
              <div className="w-full h-[250px] lg:h-[400px] px-8 rounded-xl overflow-hidden">
        <img
          src={`https://dweb.link/ipfs/${theData?.coverImage}`}
          alt={theData?.title}
          className="object-cover w-full h-full"
        />
              </div>
            </div>

            <div className="w-full lg:w-1/2 h-full">
              {/* About */}
              <div className="flex flex-col w-full">
                {/* Title */}
                <h1 className="text-3xl font-bold text-white">
                  {theData?.campaignName}
                </h1>
                <p className="text-[#8E8F94] py-4">{theData?.projectDetails}</p>

                {/* Goal and ranger */}
                <div className="py-4 lg:py-8">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <h2 className="text-2xl font-bold text-lime">
                        {obj.currentDonatedAmount} {obj.currency}
                      </h2>
                      <span className="text-[#8E8F94] px-2">raised</span>
                    </div>
                    <div className="flex items-center">
                      <h2 className="text-2xl font-bold text-lime">
                        {obj.goal} {obj.currency}
                      </h2>
                      <span className="text-[#8E8F94] px-2">goal</span>
                    </div>
                  </div>
                  {/* Ranger */}
                  <div className="w-full h-2 bg-[#353D5A] rounded-full mt-4">
                    <div
                      className="h-full bg-lime rounded-full"
                      style={{
                        width: `${
                          (obj.currentDonatedAmount / obj.goal) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                {/* Proposed by and proposal date */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <h2 className="text-xl font-bold text-white">
                      Proposed by
                    </h2>
                    <span className="text-[#8E8F94] px-2">{obj.proposer}</span>
                  </div>
                  <div className="flex items-center">
                    <h2 className="text-xl font-bold text-white">
                      Proposed on:
                    </h2>
                    <span className="text-[#8E8F94] px-2">{obj.date}</span>
                  </div>
                </div>
                {/* Contribute Button */}
                <div className="flex items-center justify-center w-full mt-10">
                  <button
                    onClick={() => setShowModal(true)}
                    className="long-btn w-full py-3 uppercase"
                  >
                    <span className="text-black">Contribute</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Campaign;

const donors = [
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
  {
    name: "John Doe",
    amount: 100,
    currency: "USD",
    memo: "For the rent",
  },
];
