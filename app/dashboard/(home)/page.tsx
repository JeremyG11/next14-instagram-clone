import { Suspense } from "react";
import Posts from "@/components/Posts";
import { PostsSkeleton } from "@/components/Skeletons";
import { IGHistory } from "./_Components/IGHistory";

function DashboardPage() {
  return (
    <main className="flex w-full flex-grow">
      <div className="flex flex-col flex-1 gap-y-8 max-w-2xl mx-auto pb-20">
        <IGHistory />
        <Suspense fallback={<PostsSkeleton />}>
          <Posts />
        </Suspense>
      </div>
    </main>
  );
}

export default DashboardPage;
