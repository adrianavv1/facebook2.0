import Image from "next/image";

function Header() {
  return (
    <div>
      <h1>Header</h1>

      {/* Left */}
      <div>
        <Image
          src="https://links.papareacr.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
      </div>

      {/* Center */}

      {/* Right */}
    </div>
  );
}

export default Header;
