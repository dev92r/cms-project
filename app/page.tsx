import { getFeatures, getHeroContent } from "@/lib/content";
import Image from "next/image";

export default function Home() {
  const hero = getHeroContent();
  const features = getFeatures();
  console.log(features);

  return (
    <>
      <h1>{hero.title}</h1>
      {features.map((f: any) => {
        return <h2>{f.title}</h2>;
      })}
    </>
  );
}
