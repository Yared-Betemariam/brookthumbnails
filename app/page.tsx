import TSwipe from "@/components/TSwipe";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";

export default function Home() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "#link",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "#link",
    },
    {
      name: "Telegram",
      icon: <FaTelegram />,
      link: "#link",
    },
  ];

  return (
    <main className="flex flex-col">
      <section className="wrapper flex gap-8 py-8 flex-col lg:flex-row">
        <div className="flex-1 mx-auto lg:mx-0 text-center">
          <span className="text-sm font-mono">Hey, I am</span>
          <h1 className="text-5xl font-bold flex flex-col">
            <span>
              <span className="text-gray-900">Brook</span>, A Passionate
            </span>
            <span className="bg-white mx-auto text-amber-700 p-2 px-4 m-1 mr-auto">
              Thumbnail
            </span>
            <span>Designer</span>
          </h1>
          <span className="text-sm opacity-80">Worked with +20 clients</span>
        </div>
        <Image
          alt="Thumbnails"
          src={"/hero.png"}
          width={1920}
          height={1105}
          className="w-[70%] lg:w-[50%] h-auto mx-auto lg:mx-0"
        />
      </section>
      <section className="wrapper py-12 flex flex-col gap-12">
        <h1 className="text-2xl font-semibold text-center">
          Some of My Past Works
        </h1>
        <span>I</span>
        <TSwipe />
        <div>
          <h2 className="opacity-80 text-center text-xl font-semibold mb-4">
            All The above thumbnails
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {images.map((item) => (
              <Image
                key={item}
                alt="Thumbnail"
                src={item}
                width={1280}
                height={720}
                className="m-2 lg:m-3 border-orange-100 border-[3px] hover:border-4 hover:scale-110 rounded-md shadow-md mx-auto transition-all duration-500 w-[80%] lg:w-full"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="wrapper py-8 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-center">Contact Me</h2>
        <div className="flex gap-8 items-center mx-auto">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-gray-900 text-4xl"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
