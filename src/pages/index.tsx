import { HomeUI } from "@/ui/pages/Home/Home";
import { GuestLayout } from "@/layouts/Guest/GuestLayout";
import { Page } from "@/components";

export default function HomePage() {
  return (
    <Page title="Kvadra - Home">
      <HomeUI.Container />
    </Page>
  );
}

HomePage.getLayout = GuestLayout;
