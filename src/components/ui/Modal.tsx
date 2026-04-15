import { Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import { type ReactNode } from "react";
import { formInputsList } from "../../data";
import Input from "../Input";


interface IProps {
  title: string;
  isOpen: boolean;
  closeModel: () => void;
  children: ReactNode;
}
export default function Modal({ title, isOpen, children, closeModel }: IProps) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none "
        onClose={closeModel} 
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="py-8 w-full max-w-md rounded-xl p-6 bg-white border-2 border-gray-300 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {title && (
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-white"
                >
                  {title}
                </DialogTitle>
              )}
    
              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
