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
  const filePath = path.join(process.cwd(), "content/features.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}