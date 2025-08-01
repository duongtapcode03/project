
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

export function getDynamicIcon(iconName: string) {
  const Icon = (Icons as any)[iconName] as React.FC<LucideProps>;
  return Icon || Icons.HelpCircle; // fallback
}

