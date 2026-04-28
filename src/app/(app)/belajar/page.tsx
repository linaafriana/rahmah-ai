import { BelajarHub } from "@/components/belajar/BelajarHub";
import { seedBelajar } from "@/data/seed-belajar";

export default function BelajarPage() {
  return <BelajarHub topics={seedBelajar} />;
}
