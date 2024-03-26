const AuthNavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-white w-full px-12 py-12">
        <img
          src="/assets/logo/migDarkLogo.svg"
          alt="migDarkLogo"
          className="w-[250px] h-[48px]"
        />
        <img
          src="/assets/logo/flagLogo.svg"
          alt="flagLogo"
          className="w-[48px] h-[24px] max-[499px]:hidden"
        />
      </div>
    </>
  );
};

export default AuthNavBar;
