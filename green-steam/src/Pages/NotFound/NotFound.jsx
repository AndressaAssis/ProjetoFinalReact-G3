import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
    const navigate = useNavigate();
    const handleNavigation = () => navigate("/home");

    return (
        <>
            <h1>Página não encontrada</h1>
            <h1>Error 404: Not Found</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>

            <button onClick={handleNavigation}>Voltar para a Página Inicial</button>
        </>
    );
}
