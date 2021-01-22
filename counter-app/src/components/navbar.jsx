//Este componente é statless, recebe todos os dados via props.
//Stateless Functional Component
//Ao invés de ter uma classe que se extende a Component, temos uma função que retorna um elemento React.
//Em functional components é preciso receber os props via atributo.
const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            {/* fazer destructuring do props recebido como atributo anteriormente (props) e pegar a propriedade totalCounters ({totalCounters}), simplificando o código*/}
            <a className="navbar-brand" href="#home">Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span></a>
        </nav>
    );
}

//para criar este componente use o código sfc (stateless functional component).

export default NavBar;

//Não se pode usar lifecycle hooks em componentes stateless porque neste caso existe apenas uma única função que retorna o output daquele componente. 