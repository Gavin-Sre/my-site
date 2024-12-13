import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";

export default function ProjectOverlay() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <span
        className="cursor-pointer underline underline-offset-2 text-blue-600"
        onClick={open}
      >
        Click here for more details
      </span>

      <Dialog open={isOpen} as="div" onClose={close}>
        <DialogPanel
          transition
          className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] lg:w-[60vw] h-[200px] bg-black yoyoyoyoyo"
        >
          <DialogTitle as="h3" className="text-base/7 font-medium text-white">
            Payment successful
          </DialogTitle>
          <p className="mt-2 text-sm/6 text-white/50">
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
          </p>
          <div className="mt-4">
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
              onClick={close}
            >
              Got it, thanks!
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
