import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import Link from "next/link";

export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center my-6">Loja de Bebês</h1>
            <p className="text-center">Bem-vindo à melhor loja para seu bebê! 🌟</p>
            <div className="flex justify-center mt-4">
                <Link href="/produtos">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                        Ver Produtos
                    </button>
                </Link>
            </div>
        </div>
    );
}



