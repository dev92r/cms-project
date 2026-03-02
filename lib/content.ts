import fs from "fs";
import path from "path";
import matter from "gray-matter";
export interface Feature {
  title: string;
  description: string;
}
export function getHeroContent() {
  const filePath = path.join(process.cwd(), "content/homepage/hero.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return data;
}

export interface Feature {
  slug: string;
  title: string;
  description: string;
}

export function getFeatures(): Feature[] {
  const featuresDir = path.join(
    process.cwd(),
    "content/homepage/features"
  );

  const files = fs.readdirSync(featuresDir);

  return files.map((file) => {
    const slug = file.replace(".md", "");
    const filePath = path.join(featuresDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title,
      description: content.trim(),
    };
  });
}