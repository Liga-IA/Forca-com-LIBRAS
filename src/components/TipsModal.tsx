
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface TipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const availableLetters = [
  "A", "B", "C", "D", "E", "F", "G", "I", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
];

export function TipsModal({ isOpen, onClose }: TipsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Dicas de Sinais em LIBRAS</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          {availableLetters.map((letter) => (
            <div key={letter} className="flex flex-col items-center justify-center p-2 border rounded-md">
              <Image
                src={`/training_signs/${letter}.jpg`}
                alt={`Sinal da letra ${letter} em LIBRAS`}
                width={250}
                height={250}
                className="object-contain rounded-md"
              />
              <p className="mt-2 text-lg font-bold">{letter}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
