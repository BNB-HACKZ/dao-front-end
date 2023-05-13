import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function Navbar() {
  return (
    <Popover className="relative bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-0">
        <div className="flex items-center justify-between py-8 md:space-x-10">
          <div className="flex">
            <Link href="/">
              <span className="sr-only">Your Company</span>
              <Logo />
            </Link>
          </div>
          <Popover.Group
            as="nav"
            className="hidden space-x-10 md:flex items-center"
          >
            <Link
              href="/campaigns"
              className="text-base font-medium text-gray-500"
            >
              CAMPAIGNS
            </Link>
            <Link
              href="/join-our-dao"
              className="text-base font-medium text-gray-500"
            >
              JOIN OUR DAO
            </Link>
            <ConnectButton />
          </Popover.Group>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5 w-full border border-white z-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <Logo />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6"></div>
            </div>
            <div className="space-y-6 py-6 px-5 w-full">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 ">
                <Link
                  href="/"
                  className="text-base font-medium text-gray-200 hover:text-gray-300"
                >
                  CAMPAIGNS
                </Link>
                <Link
                  href="/"
                  className="text-base font-medium text-gray-200 hover:text-gray-300"
                >
                  NEW CAMPAIGN
                </Link>
              </div>
              <div className="w-full">
                <div className="long-btn py-2 px-10 text-[#8E8F94] w-full">
                  LAUNCH APP
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

const Logo = () => (
  <svg
    width="205"
    height="46"
    viewBox="0 0 205 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.2956 0.88555C19.962 0.692935 19.551 0.692936 19.2174 0.88555L0.68562 11.5849C0.352002 11.7775 0.146484 12.1334 0.146484 12.5187V33.9173C0.146484 34.3025 0.352003 34.6585 0.685622 34.8511L19.2174 45.5504C19.551 45.743 19.962 45.743 20.2956 45.5504L38.8274 34.8511C39.161 34.6585 39.3665 34.3025 39.3665 33.9173V12.5187C39.3665 12.1334 39.161 11.7775 38.8274 11.5849L20.2956 0.88555ZM8.87172 15.817C8.18126 16.237 8.18126 17.2393 8.87172 17.6594L12.6831 19.9781L8.87172 22.2969C8.18126 22.7169 8.18126 23.7192 8.87172 24.1392L12.6663 26.4477L8.87172 28.7562C8.18126 29.1763 8.18126 30.1786 8.87172 30.5986L19.187 36.8741C19.5312 37.0836 19.9636 37.0836 20.3078 36.8741L30.6231 30.5986C31.3135 30.1786 31.3135 29.1763 30.6231 28.7562L26.8285 26.4477L30.6231 24.1392C31.3135 23.7192 31.3135 22.7169 30.6231 22.2969L26.8117 19.9781L30.6231 17.6594C31.3135 17.2393 31.3135 16.237 30.6231 15.817L20.3078 9.54146C19.9636 9.33202 19.5312 9.33202 19.187 9.54146L8.87172 15.817Z"
      fill="#89D472"
    />
    <path
      opacity="0.72"
      d="M48.704 34.718V32.2919H51.8741V14.5004H48.704V12.0743H57.535C60.511 12.0743 62.8078 12.8291 64.4252 14.3387C66.0641 15.8483 66.8836 18.1665 66.8836 21.2935V25.4988C66.8836 28.6473 66.0641 30.9764 64.4252 32.486C62.8078 33.974 60.511 34.718 57.535 34.718H48.704ZM54.5913 32.2596H57.535C59.7347 32.2596 61.3952 31.7204 62.5166 30.6421C63.638 29.5639 64.1987 27.8926 64.1987 25.6282V21.1965C64.1987 18.889 63.638 17.2069 62.5166 16.1502C61.3952 15.0935 59.7347 14.5651 57.535 14.5651H54.5913V32.2596ZM76.1703 35.1709C75.0705 35.1709 74.0677 34.9768 73.1619 34.5886C72.2562 34.2004 71.5445 33.6397 71.027 32.9065C70.5094 32.1733 70.2506 31.2783 70.2506 30.2216C70.2506 29.1434 70.5094 28.2592 71.027 27.5691C71.5445 26.8574 72.2562 26.3291 73.1619 25.984C74.0677 25.6174 75.0813 25.4341 76.2027 25.4341H81.5401V24.2696C81.5401 23.1482 81.2059 22.264 80.5373 21.617C79.8904 20.9701 78.9199 20.6466 77.626 20.6466C76.3536 20.6466 75.3616 20.9593 74.65 21.5847C73.9383 22.1885 73.4531 23.008 73.1943 24.0431L70.8005 23.2668C71.0593 22.3826 71.4691 21.5847 72.0298 20.873C72.5905 20.1398 73.3345 19.5575 74.2618 19.1262C75.2107 18.6733 76.3428 18.4469 77.6583 18.4469C79.6855 18.4469 81.2598 18.9752 82.3812 20.032C83.5026 21.0671 84.0633 22.5335 84.0633 24.4313V31.5802C84.0633 32.2272 84.3652 32.5507 84.969 32.5507H86.4247V34.718H84.1927C83.481 34.718 82.9095 34.5239 82.4782 34.1358C82.0469 33.726 81.8312 33.1869 81.8312 32.5183V32.3566H81.4431C81.2059 32.7663 80.8824 33.1977 80.4726 33.6505C80.0844 34.0818 79.5453 34.4377 78.8552 34.718C78.1651 35.0199 77.2702 35.1709 76.1703 35.1709ZM76.4615 32.9712C77.971 32.9712 79.1895 32.5291 80.1168 31.6449C81.0657 30.7392 81.5401 29.4776 81.5401 27.8602V27.5044H76.2997C75.2861 27.5044 74.4451 27.7308 73.7766 28.1837C73.1296 28.615 72.8061 29.2727 72.8061 30.1569C72.8061 31.0411 73.1404 31.7312 73.8089 32.2272C74.499 32.7232 75.3832 32.9712 76.4615 32.9712ZM96.793 35.1709C95.1972 35.1709 93.7846 34.8366 92.5554 34.1681C91.3478 33.4996 90.3989 32.5615 89.7088 31.3538C89.0403 30.1246 88.706 28.6797 88.706 27.0192V26.5986C88.706 24.9597 89.0403 23.5256 89.7088 22.2963C90.3989 21.0671 91.3478 20.1182 92.5554 19.4497C93.7846 18.7812 95.1972 18.4469 96.793 18.4469C98.3889 18.4469 99.7906 18.7812 100.998 19.4497C102.228 20.1182 103.176 21.0671 103.845 22.2963C104.535 23.5256 104.88 24.9597 104.88 26.5986V27.0192C104.88 28.6797 104.535 30.1246 103.845 31.3538C103.176 32.5615 102.228 33.4996 100.998 34.1681C99.7906 34.8366 98.3889 35.1709 96.793 35.1709ZM96.793 32.8742C98.4751 32.8742 99.8122 32.3458 100.804 31.2891C101.818 30.2108 102.325 28.766 102.325 26.9545V26.6633C102.325 24.8518 101.818 23.4177 100.804 22.361C99.8122 21.2827 98.4751 20.7436 96.793 20.7436C95.1325 20.7436 93.7954 21.2827 92.7819 22.361C91.7683 23.4177 91.2615 24.8518 91.2615 26.6633V26.9545C91.2615 28.766 91.7683 30.2108 92.7819 31.2891C93.7954 32.3458 95.1325 32.8742 96.793 32.8742ZM112.827 34.718L107.166 18.8998H109.883L114.638 32.8095H115.091L119.846 18.8998H122.563L116.902 34.718H112.827ZM130.6 35.1709C129.5 35.1709 128.497 34.9768 127.592 34.5886C126.686 34.2004 125.974 33.6397 125.457 32.9065C124.939 32.1733 124.68 31.2783 124.68 30.2216C124.68 29.1434 124.939 28.2592 125.457 27.5691C125.974 26.8574 126.686 26.3291 127.592 25.984C128.497 25.6174 129.511 25.4341 130.632 25.4341H135.97V24.2696C135.97 23.1482 135.635 22.264 134.967 21.617C134.32 20.9701 133.349 20.6466 132.056 20.6466C130.783 20.6466 129.791 20.9593 129.08 21.5847C128.368 22.1885 127.883 23.008 127.624 24.0431L125.23 23.2668C125.489 22.3826 125.899 21.5847 126.459 20.873C127.02 20.1398 127.764 19.5575 128.691 19.1262C129.64 18.6733 130.772 18.4469 132.088 18.4469C134.115 18.4469 135.689 18.9752 136.811 20.032C137.932 21.0671 138.493 22.5335 138.493 24.4313V31.5802C138.493 32.2272 138.795 32.5507 139.399 32.5507H140.854V34.718H138.622C137.911 34.718 137.339 34.5239 136.908 34.1358C136.476 33.726 136.261 33.1869 136.261 32.5183V32.3566H135.873C135.635 32.7663 135.312 33.1977 134.902 33.6505C134.514 34.0818 133.975 34.4377 133.285 34.718C132.595 35.0199 131.7 35.1709 130.6 35.1709ZM130.891 32.9712C132.401 32.9712 133.619 32.5291 134.546 31.6449C135.495 30.7392 135.97 29.4776 135.97 27.8602V27.5044H130.729C129.716 27.5044 128.875 27.7308 128.206 28.1837C127.559 28.615 127.236 29.2727 127.236 30.1569C127.236 31.0411 127.57 31.7312 128.238 32.2272C128.929 32.7232 129.813 32.9712 130.891 32.9712ZM149.134 34.718C148.229 34.718 147.528 34.47 147.032 33.974C146.557 33.478 146.32 32.7987 146.32 31.9361V21.1318H141.565V18.8998H146.32V13.2712H148.876V18.8998H154.051V21.1318H148.876V31.5479C148.876 32.1949 149.188 32.5183 149.814 32.5183H153.34V34.718H149.134ZM158.191 34.718V18.8998H160.746V34.718H158.191ZM159.485 16.4413C158.924 16.4413 158.449 16.258 158.061 15.8914C157.695 15.5248 157.511 15.0611 157.511 14.5004C157.511 13.9182 157.695 13.4437 158.061 13.0771C158.449 12.7105 158.924 12.5272 159.485 12.5272C160.045 12.5272 160.509 12.7105 160.875 13.0771C161.242 13.4437 161.425 13.9182 161.425 14.5004C161.425 15.0611 161.242 15.5248 160.875 15.8914C160.509 16.258 160.045 16.4413 159.485 16.4413ZM173.43 35.1709C171.835 35.1709 170.422 34.8366 169.193 34.1681C167.985 33.4996 167.036 32.5615 166.346 31.3538C165.678 30.1246 165.343 28.6797 165.343 27.0192V26.5986C165.343 24.9597 165.678 23.5256 166.346 22.2963C167.036 21.0671 167.985 20.1182 169.193 19.4497C170.422 18.7812 171.835 18.4469 173.43 18.4469C175.026 18.4469 176.428 18.7812 177.636 19.4497C178.865 20.1182 179.814 21.0671 180.482 22.2963C181.172 23.5256 181.517 24.9597 181.517 26.5986V27.0192C181.517 28.6797 181.172 30.1246 180.482 31.3538C179.814 32.5615 178.865 33.4996 177.636 34.1681C176.428 34.8366 175.026 35.1709 173.43 35.1709ZM173.43 32.8742C175.112 32.8742 176.45 32.3458 177.442 31.2891C178.455 30.2108 178.962 28.766 178.962 26.9545V26.6633C178.962 24.8518 178.455 23.4177 177.442 22.361C176.45 21.2827 175.112 20.7436 173.43 20.7436C171.77 20.7436 170.433 21.2827 169.419 22.361C168.406 23.4177 167.899 24.8518 167.899 26.6633V26.9545C167.899 28.766 168.406 30.2108 169.419 31.2891C170.433 32.3458 171.77 32.8742 173.43 32.8742ZM186.116 34.718V18.8998H188.607V21.5847H189.06C189.405 20.8299 189.987 20.1506 190.807 19.5467C191.648 18.9213 192.877 18.6086 194.494 18.6086C195.68 18.6086 196.737 18.8566 197.664 19.3526C198.613 19.8486 199.368 20.5819 199.929 21.5523C200.49 22.5228 200.77 23.7196 200.77 25.143V34.718H198.214V25.3371C198.214 23.7628 197.815 22.6198 197.017 21.9081C196.241 21.1965 195.184 20.8407 193.847 20.8407C192.316 20.8407 191.065 21.3367 190.095 22.3287C189.146 23.3207 188.672 24.7979 188.672 26.7604V34.718H186.116Z"
      fill="white"
    />
  </svg>
);
