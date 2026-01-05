import { LucideIcon } from "lucide-react";

type IconProp = {
  icon: LucideIcon;
  className: string;
};

export const Icon = ({ icon: IconComponent, className }: IconProp) => {
  return <IconComponent className={className}></IconComponent>;
};
