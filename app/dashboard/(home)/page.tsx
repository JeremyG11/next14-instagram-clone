import { Suspense } from "react";
import Posts from "@/components/Posts/Posts";
import { IGHistory } from "./_Components/IGHistory";
import { PostsSkeleton } from "@/components/Skeletons";

function DashboardPage() {
  return (
    <main className="flex w-full flex-grow overflow-hidden">
      <div className="flex flex-col flex-1 gap-y-8 w-full px-8 lg:p-0 lg:max-w-2xl mx-auto pb-20">
        <IGHistory />
        <Suspense fallback={<PostsSkeleton />}>
          <Posts />
        </Suspense>
      </div>
    </main>
  );
}

export default DashboardPage;
