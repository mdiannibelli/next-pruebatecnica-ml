import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getCategories } from "@/services/get-categories";
import { getProducts } from "@/services/get-req";
import ListOfCategories from "@/components/categories/ListOfCategories";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Migrado Libre",
  description: "Prueba técnica de NextJs de GoncyJs llamda Migrado Libre.",
};

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const productos = await getProducts();
  const categorias = await getCategories(productos);


  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href='/'><h1 className="m-4 font-bold text-xl">Migrado Libre</h1></Link>
        <div className="grid grid-cols-[300px_1fr] p-10">
        <aside>
          <ListOfCategories categories={categorias}/>
        </aside>
        <main className="py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
