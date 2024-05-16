import './global.css'

export const metadata = {
  title: 'Mi Primera App',
  description: 'Generado por Diego',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
