import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
      <Image
        className=""
        src="/logo.svg"
        alt="Solvro Logo"
        style={{ objectFit: "cover" }}
        width={400}
        height={400}
        priority
      />
      <h1 className="font-sans text-4xl text-white">
        Twoja aplikacja NEXT.JS się odpala
      </h1>
      <footer className="absolute right-0 bottom-0 left-0 p-4 text-center text-white">
        <p className="text-sm">Made with ❤️ by Solvro </p>
      </footer>
    </div>
  );
}
