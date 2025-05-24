export const metadata = {
  title: "Game Shop Store",
  description: "Loja de jogos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
