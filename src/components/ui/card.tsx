import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-sm p-6 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`mb-4 border-b border-gray-100 pb-2 ${className ?? ""}`}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className,
}) => {
  return (
    <h2 className={`text-lg font-semibold text-gray-900 ${className ?? ""}`}>
      {children}
    </h2>
  );
};

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
}) => {
  return <div className={`mb-4 ${className ?? ""}`}>{children}</div>;
};

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`pt-2 border-t border-gray-100 text-sm text-gray-500 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};
