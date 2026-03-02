import { Feature, getFeatures, getHeroContent } from "@/lib/content";

export default function Home() {
  const hero = getHeroContent();
  const features = getFeatures();

  return (
    <>
      <h1>{hero.title}</h1>
      {features.map((f: Feature, index) => {
        return <h2 key={index}>{f.title}</h2>;
      })}
    </>
  );
}
