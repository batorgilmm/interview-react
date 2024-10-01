type HeaderProps = {
  bgColor: string;
  setBgColor: (color: string) => void;
};

export const Header = ({ bgColor, setBgColor }: HeaderProps) => {
  return (
    <div className="h-16">
      <div className="h-16 w-screen fixed top-0 left-0 bg-black z-50 flex items-center px-10">
        <input
          type="color"
          value={bgColor}
          onChange={(e) => {
            setBgColor(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
