import { Page } from "@/components";
import { ShellLayout } from "@/layouts/Shell/ShellLayout";

export default function AppPage() {
  return (
    <Page title="Kvadra - App">
      <h1>App Page</h1>
    </Page>
  );
}

AppPage.getLayout = ShellLayout;
