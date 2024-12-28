import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar({ ref }) {
  const scrollToSection = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <div className="shrink-0 flex">
                <CpuChipIcon className="size-10 text-white" />
                <h3 className="text-white">GS</h3>
              </div>
            </Link>
            <div className="sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a
                  href="#projects"
                  className="rounded-md px-3 py-2 text-sm font-medium sm:text-xl text-gray-300 hover:bg-gray-700 hover:text-white"
                  ref={ref}
                  onClick={() => scrollToSection(ref)}
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
