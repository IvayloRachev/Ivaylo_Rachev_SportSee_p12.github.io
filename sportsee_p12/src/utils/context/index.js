import { createContext } from "react";
import PropTypes from 'prop-types';
import MockService from '../services/MockService';
import ApiService from '../services/ApiService';

const source = {
    mock: new MockService(),
    api: new ApiService(),
}

export const SourceContext = createContext();

function SourceProvider({ children }) {
    return (
        <SourceContext.Provider value={{ source: source.mock }}>
            {children}
        </SourceContext.Provider>
    )
}

SourceProvider.propTypes = {
    children: PropTypes.object,
}

export default SourceProvider;