import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="main bg-gray-100 w-screen h-screen flex items-center justify-center">
      <div className="login-form w-120 text-black flex flex-col gap-4 items-center">
        <div className="form-title flex flex-col gap-1 items-center">
          <h1 className="font-bold text-3xl">Barcode Registry System</h1>
          <p className="text-center">Internal System Access</p>

          <Image src="/logo.png" alt="Barcode Registry System" width={150} height={0}></Image>
        </div>

        {children}

        <footer className="mt-5">
          <h6 className="text-center text-sm text-gray-600">
            For system access issues, contact your administrator
          </h6>
        </footer>
      </div>
    </div>
  );
}
