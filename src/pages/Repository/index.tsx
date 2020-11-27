import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParms {
    repository: string;
}

const Repository: React.FC = () =>{

    const { params } = useRouteMatch<RepositoryParms>();

    return <h1>Repository:{params.repository}</h1>
};

export default Repository;