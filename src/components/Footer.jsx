export default function Footer() {
  return (
    <footer className="bg-purple-gradient text-white font-bold md:p-16 p-4 ">
      <h1 className="md:text-6xl text-4xl pb-8 md:text-left text-center">
        IETE CHENNAI
      </h1>
      <p>
        IETE Chennai centre, No: 37, Conran Smith Road Entrance Peters
        Road,Gopalapuram, Chennai, Tamil Nadu 600086
      </p>
      <div className="bg-white mt-8 p-2 rounded-md max-w-sm">
        <input
          type="email"
          placeholder="Enter email"
          className="rounded-sm text-black focus:outline-none p-2"
        />
        <button className="rounded-lg bg-black p-3 md:ml-8 ml-4">
          Subscribe
        </button>
      </div>
    </footer>
  );
}
