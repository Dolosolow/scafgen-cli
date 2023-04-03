import Logo from "public/bonfire.png";

export function Homepage() {
  return (
    <div className="w-screen h-screen">
      <main className="w-screen h-screen flex justify-center items-center bg-black">
        <img alt="logo" src={Logo} height={180} width={180} />
      </main>
    </div>
  );
}
