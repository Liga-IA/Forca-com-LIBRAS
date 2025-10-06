import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Camera, LoaderIcon } from "lucide-react";

interface AdviseModalProps {
  isOpen: boolean;
}

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export const AdviseModal = ({ isOpen }: AdviseModalProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogOverlay className="fixed inset-0 bg-black/30 backdrop-blur-md" />
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <Spinner />
            </div>
            <p className="text-center">Inicializando câmera...</p>
          </DialogTitle>
          <DialogDescription className="flex items-center">
            <Camera className="mr-2" />
            <p>Certifique-se de que a câmera esteja funcionando corretamente</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
