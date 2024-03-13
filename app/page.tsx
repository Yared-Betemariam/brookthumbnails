import TSwipe from "@/components/TSwipe";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "@yvng_bura",
    },
    {
      name: "Telegram",
      icon: <FaTelegram />,
      link: "@BuraVibes",
    },
  ];

  return (
    <main className="flex flex-col my-12">
      <section className="wrapper flex gap-8 py-12 flex-col lg:flex-row">
        <div className="flex-1 text-center lg:text-start">
          <span
            className={cn(roboto.className, "text-base font-mono font-normal")}
          >
            Hey, I am
          </span>
          <h1 className="text-5xl font-bold flex flex-col">
            <span>
              <span className="text-gray-900/80">Brook</span>, A Passionate
            </span>
            <span className="bg-white mx-auto lg:mr-auto lg:ml-0 text-emerald-700 p-2 px-4 m-1 mr-auto">
              Thumbnail
            </span>
            <span>Designer</span>
          </h1>
          <span className="text-base opacity-85">Worked with +20 clients</span>
        </div>
        <Image
          alt="Thumbnails"
          src={"/hero.png"}
          width={1920}
          height={1105}
          className="w-[80%] lg:w-[55%] h-auto my-auto mx-auto"
        />
      </section>
      <section className="wrapper py-12 flex flex-col" id="works">
        <h1 className="text-2xl font-semibold text-center">
          Some of My Past Works
        </h1>
        <span className="mx-auto mb-8 opacity-80 -z-10 max-w-md lg:max-w-xl text-center">
          I have created different Thubnails for different clients, You can look
          at them here
        </span>
        <TSwipe />
        <div className="mt-6 -z-10">
          <h2 className="opacity-80 text-center text-xl font-semibold mb-4">
            All The above thumbnails
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {images.map((item) => (
              <div key={item}>
                <Image
                  alt="Thumbnail"
                  src={item}
                  width={1280}
                  height={720}
                  className="m-2 lg:m-3 border-orange-100 border-[3px] hover:border-4 hover:scale-110 rounded-md shadow-md mx-auto transition-all duration-500 w-[80%] hover:z-10 lg:w-full z-10"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrapper py-8 flex flex-col gap-2" id="contact">
        <h2 className="text-2xl font-semibold text-center">Contact Me</h2>
        <div className="flex gap-8 items-center mx-auto">
          {socialLinks.map((item) => (
            <div
              key={item.name}
              className="text-gray-900/90 text-4xl hover:scale-105 transition flex space-x-2 items-center"
            >
              {item.icon}
              <span className=" text-lg">{item.link}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
