import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavBar } from "@/modules/home/ui/components/home-navbar/index";
import { HomeSidebar } from "../components/home-sidebar";
interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavBar />
        <div className="flex min-h-screen pt-[6rem] ">
          <HomeSidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
