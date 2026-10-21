import Card from '../../Components/Card/Card';
function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Card titulo="Tarjeta 1" valor="Valor 50%" descripcion="Descripción de la tarjeta" />
            <Card titulo="Tarjeta 2" valor="Valor 75%" descripcion="Descripción de la tarjeta 2" />
        </div>
    );
}

export default Dashboard;