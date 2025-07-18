import Image from "next/image";

export function AboutGoals() {
  return (
    <div className="relative flex items-start justify-start p-10 shadow-xl lg:p-20">
      <div className="mb-80 flex flex-col lg:mb-2 lg:ml-20 lg:w-1/2">
        <h1 className="text-primary text-start text-4xl">Cele wydarzenia</h1>
        <p className="mt-4 mr-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
          euismod libero ac malesuada. Proin tempor ipsum non tellus vehicula
          pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec egestas euismod libero ac malesuada. Proin temegestas euismod
          libero ac malesuada. Proin tempor ipsum non tellus vehicula
          pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec egestas euismod libero ac malesuada. Proin tempor ipsum non
          tellus vehicula pellentesqueLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec egestas euismod libero ac malesuada. Proin
          tempor ipsum non tellus vehicula pellentesque
        </p>
      </div>
      <Image
        src="/pressure.png"
        alt="Pressure example"
        width={700}
        height={700}
        className="absolute right-0 bottom-0 z-10 h-[400px] w-[400px] object-contain lg:-top-20 lg:-right-40 lg:h-[700px] lg:w-[700px]"
      />
    </div>
  );
}
