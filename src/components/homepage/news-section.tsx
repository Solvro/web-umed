import { NewsContainer } from "../news-container";

export function NewsSection() {
  return (
    <div className="bg-primary relative flex items-center justify-center shadow-xl lg:p-20 lg:pt-30">
      <svg
        viewBox="0 0 1536 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0"
      >
        <path
          fill="white"
          d="M 0 200 C 309.20000000000005 200 463.79999999999995 70 773 70 L 773 70 L 773 0 L 0 0 Z"
        ></path>{" "}
        <path
          fill="white"
          d="M 772 70 C 1073.6 70 1224.4 200 1526 200 L 1526 200 L 1526 0 L 772 0 Z"
        ></path>{" "}
      </svg>
      <div className="flex w-full flex-col">
        <h1 className="text-primary-foreground mb-20 text-center text-4xl">
          Aktualności
        </h1>
        <NewsContainer />
      </div>
    </div>
  );
}
