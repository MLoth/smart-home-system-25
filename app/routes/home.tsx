import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - Smart Home System" },
    { name: "description", content: "This is your home dashboard!" },
  ];
}

export default function Home() {
  const name: string = "Marty";

  return <p>This is fun...</p>;
}
