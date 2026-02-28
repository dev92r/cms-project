import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getHeroContent() {
  const filePath = path.join(process.cwd(), "content/homepage/hero.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return data;
}

export function getFeatures() {
  const dir = path.join(process.cwd(), "content/homepage/features");
  const files = fs.readdirSync(dir);

  return files.map((file) => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content);
  });
}