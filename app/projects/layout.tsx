import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Button,
} from "@headlessui/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ProjectInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/">
              <Button className="flex justify-between gap-1">
                <ArrowLeftIcon className="size-6 text-white" />
                <span className="text-white underline">Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </Disclosure>
      <div className="mx-5">{children}</div>
    </div>
  );
}
