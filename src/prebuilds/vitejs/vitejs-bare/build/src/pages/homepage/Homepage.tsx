import Logo from "public/3a.png";

export function Homepage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <main
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}>
        <img alt="logo" src={Logo} height={180} width={180} />
      </main>
    </div>
  );
}
