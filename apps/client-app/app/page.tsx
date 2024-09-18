import { PrismaClient } from "@payswift/database/client";
import Test from "../components/Test";

export default function Home() {
  return (
    <div className="text-xl">
      <Test />
    </div>
  );
}
