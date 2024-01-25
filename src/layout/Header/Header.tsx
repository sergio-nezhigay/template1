import Logo from "@/components/ui/Logo";

const Header = () => {
  return (
    <>
      <header className="flex-between w-full">
        <div className="flex-between container w-full">
          <Logo />
          <span>header</span>
        </div>
      </header>
    </>
  );
};

export default Header;
