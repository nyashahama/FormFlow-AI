import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FormFlow AI — Sign in",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Auth pages get no topbar/sidebar — just the full-screen shell
  return <>{children}</>;
}
