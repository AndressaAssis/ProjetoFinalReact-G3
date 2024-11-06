import React, { useEffect, useState } from "react";
import styles from "./NossosClientes.module.css";

export function NossosClientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await fetch('http://localhost:8080/clientes');
                const data = await response.json();
                console.log("Dados recebidos:", data); // Adicione este log para depuração
                setClientes(data);
            } catch (error) {
                console.error("Erro ao buscar clientes:", error);
            }
        };

        fetchClientes();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Nossos Clientes</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
