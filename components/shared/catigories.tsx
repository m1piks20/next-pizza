import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Container: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
        
    </div>
  );
};