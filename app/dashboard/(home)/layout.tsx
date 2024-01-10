import Header from "@/components/Header";
import { SuggestionSidebar } from "./_Components/SuggestionSidebar";
import { auth } from "@/auth";

async function HomePageLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) {
    return;
  }
  return (
    <div className="flex">
      <Header />
      {children}
      <SuggestionSidebar user={session.user} />
    </div>
  );
}

export default HomePageLayout;
