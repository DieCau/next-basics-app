import './global.css'
import { Metadata } from 'next';
import Link from 'next/link';

// export const metadata = {
//   title: 'Mi Primera App',
//   description: 'Generado por Diego',
// }

export const metadata = {
  title: {
    default: 'Aprendiendo Next JS',
    absolute: '',
    template: '%s - Aprendiendo Next JS!'
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body>
        <header>
          <h2>Cabecera de la App</h2>
          <nav>
            <Link href="/"> Home </Link> -
            <Link href="acerca"> Acerca </Link> -
            <Link href="/contacto"> Contacto </Link> -
            <Link href="/login"> Login </Link> -
            <Link href="/password"> Recuperar Password </Link> -
            <Link href="/registro"> Registro </Link> 
          </nav>
        </header>
        <main>{children}</main>
        <footer>Pie de la App</footer>
      </body>
    </html>
  );
}
