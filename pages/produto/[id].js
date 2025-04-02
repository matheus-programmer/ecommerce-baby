import { useRouter } from "next/router";

export default function Produto() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center my-6">Detalhes do Produto {id}</h1>
            <p className="text-center">Aqui estarão as informações do produto.</p>
        </div>
    );
}
