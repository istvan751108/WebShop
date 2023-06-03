import React from "react";

interface IconProps {
  width: number;
  onClick?: () => void;
}

const DownIcon: React.FC<IconProps> = ({ width, onClick }) => (
  <svg width={width} onClick={onClick} fill="currentColor" viewBox="0 0 20 20">
    <path
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
  </svg>
);

export default DownIcon;
