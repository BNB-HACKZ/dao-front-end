import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Input from "@/components/common/Input";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ContributeModal = ({ isOpen, closeModal }: Props) => {
  const [amount, setAmount] = React.useState(0);
  const [currency, setCurrency] = React.useState("ETH");
  const [memo, setMemo] = React.useState("");
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#5d5d5e] bg-opacity-40 backdrop-blur" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto sat-norm">
          <div className="flex mt-20 items-center justify-center p-4 text-center gap-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full flex flex-col gap-2 min-h-[300px] max-w-xl transform overflow-hidden rounded-2xl bg-[#101524] px-6 py-6 lg:py-10 text-left align-middle shadow-xl transition-all">
                <div className="w-full flex items-start justify-between">
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="text-lg lg:text-3xl font-medium leading-6 text-lime"
                    >
                      Contribute
                    </Dialog.Title>
                    <p className="text-[#8E8F94]">
                      You are about to donate to this campaign
                    </p>
                  </div>

                  <button
                    type="button"
                    className="rounded-full p-2 focus:outline-none"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="w-6 text-lime" />
                  </button>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-4 mt-4">
                  {/* Amount */}
                  <Input
                    label="Amount"
                    type="number"
                    name="amount"
                    placeholder="0.0"
                    value={amount.toString()}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                  {/* Currency */}
                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-medium text-white">Currency</label>
                    <select
                      className="w-full bg-transparent text-white border border-[#363E5B] rounded-md px-3 py-2 focus:ring-0 focus:border-none"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <option value="ETH">ETH</option>
                      <option value="BTC">BTC</option>
                      <option value="USDT">USDT</option>
                      <option value="USDC">USDC</option>
                    </select>
                  </div>

                  {/* Short Message */}
                  <Input
                    label="Short Message"
                    type="text"
                    name="memo"
                    placeholder="Leave a short message"
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                  />

                  {/* Button */}
                  <button
                    type="submit"
                    className="w-full bg-lime text-black rounded-md py-3 font-medium my-6"
                  >
                    Contribute
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContributeModal;
