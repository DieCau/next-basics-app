export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2> Rutas relativas a la Cuenta del Usuario </h2>
      {children}
    </>
  );
}
