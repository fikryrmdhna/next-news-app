import { ReactNode } from "react";

interface ArticleCardTypeTwoWrapperProps {
  children: ReactNode;
}

export default function ArticleCardTypeTwoWrapper({ children }: ArticleCardTypeTwoWrapperProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {children}
    </div>
  );
}
