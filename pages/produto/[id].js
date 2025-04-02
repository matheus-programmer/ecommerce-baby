import { useRouter } from "next/router";

export default function Produto() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="container p-4">
            <h1 className="h2 fw-bold text-center my-4">Detalhes do Produto {id}</h1>
            <p className="text-center">Aqui estarão as informações do produto.</p>
        </div>
    );
}