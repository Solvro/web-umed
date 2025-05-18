import Image from "next/image";

export function AboutEvent() {
  return (
    <div className="relative flex items-start justify-start p-10 shadow-xl lg:p-20">
      <div className="flex flex-col lg:ml-20 lg:w-1/2">
        <h1 className="text-primary text-start text-4xl">O wydarzeniu</h1>
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
        src="/violin.png"
        alt="Violin example"
        width={800}
        height={800}
        className="absolute -top-30 -right-40 object-contain"
      />
    </div>
  );
}
