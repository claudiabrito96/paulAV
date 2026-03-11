import '../styles/globals.css';

export const metadata = {
  title: "Paul AV Solutions | Audio Visual Installation",
  description:
    "Professional audio visual installation services including home theaters, corporate AV systems, and event production.",
  keywords: [
    "audio visual installation",
    "AV services",
    "home theater installation",
    "conference room AV",
    "event AV services"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header>
          {/* Your Navbar component or code */}
        </header>

        <main>{children}</main>

        <footer className="text-center p-6 border-t">
          © {new Date().getFullYear()} Paul AV Solutions
        </footer>
      </body>
    </html>
  );
}