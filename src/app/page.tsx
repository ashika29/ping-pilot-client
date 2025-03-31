"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  let loading = false;

  const navigateToMonitorPage = () => {
    // router.push("/monitor");
    loading = true;
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div
        className="gradient-wrapper"
        style={{
          background:
            "linear-gradient(180deg, #000000c4, #1B9AAA, #bec1c8)",
          opacity: 0.5
        }}
      />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-semibold text-center mb-6 drop-shadow-lg">
            Welcome to Ping Pilot!
          </h1>
          <p className="text-xl mb-4">
            Monitor endpoints, schedule checks, and get real-time alerts on
            downtime and performance.
          </p>
          <div className="text-center">
            <Button
              onClick={navigateToMonitorPage}
              variant="outline"
              loading
            >
              Start Monitoring
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
