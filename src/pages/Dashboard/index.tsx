import React from 'react';
import { FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} />
            <Title>Explore repositórios no Github.</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
            <a href="teste">
                    <img 
                        src="https://avatars0.githubusercontent.com/u/4626113?s=460&u=81dbf8de7266957c288e3fe969e054bfb8ca3e25&v=4" 
                        alt="Flório R. Neto"
                    />
                    <div>
                        <strong>nome do repositório</strong>
                        <p>descricão do repositório</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img 
                        src="https://avatars0.githubusercontent.com/u/4626113?s=460&u=81dbf8de7266957c288e3fe969e054bfb8ca3e25&v=4" 
                        alt="Flório R. Neto"
                    />
                    <div>
                        <strong>nome do repositório</strong>
                        <p>descricão do repositório</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img 
                        src="https://avatars0.githubusercontent.com/u/4626113?s=460&u=81dbf8de7266957c288e3fe969e054bfb8ca3e25&v=4" 
                        alt="Flório R. Neto"
                    />
                    <div>
                        <strong>nome do repositório</strong>
                        <p>descricão do repositório</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )
};

export default Dashboard;