import "./globals.css";

export const metadata = {
  title: "Jumbo Toggl",
  description: "The one Toggl Button to rule them all",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
