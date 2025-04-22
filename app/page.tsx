import Hero from "@/components/Hero";
import CountdownTimer from "@/components/Countdown";
import MemoryGallery from "@/components/Gallery";
import Fireworks from "@/components/Fireworks";
import MusicPlayer from "@/components/MusicPlayer";
import Wishes from "@/components/Wishes";
import ThemeSwitch from "@/components/Themeswitch";
import BirthdayCard from "@/components/BirthdayCard";

export const metadata = {
  title: "Happy Birthday 🎂",
  description: "A birthday surprise site",
};

export default function Home() {
  const today = new Date();
  const birthday = new Date("2025-04-24T00:00:00");
  
  const isBirthday = today.toDateString() === birthday.toDateString();
  
  return (
    <>
      {!isBirthday ? (
      <CountdownTimer birthday={birthday.toISOString()} />
      ) : (
      < div className="flex flex-col items-center justify-center min-h-screen">
        <Fireworks />
        <ThemeSwitch />
        <MusicPlayer />
        <Hero />
        <Wishes />
        {/* <BirthdayCard /> */}
        <MemoryGallery />
      </div>
      )}
    </>
  );
}
