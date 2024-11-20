declare module 'hamburger-react' {
  export interface HamburgerProps {
    size?: number;
    duration?: number;
    distance?: string;
    color?: string;
    toggled?: boolean;
    toggle?: (toggled: boolean) => void;
    onToggle?: (toggled: boolean) => void;
    easing?: string;
    rounded?: boolean;
    hideOutline?: boolean;
    label?: string;
    direction?: 'left' | 'right';
  }

  export const Spiral: React.FC<HamburgerProps>;
  export const Squeeze: React.FC<HamburgerProps>;
  export const Turn: React.FC<HamburgerProps>;
  export const Fade: React.FC<HamburgerProps>;
  export const Slant: React.FC<HamburgerProps>;
} 