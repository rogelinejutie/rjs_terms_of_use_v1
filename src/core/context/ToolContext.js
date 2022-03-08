import { createContext } from 'react';
import { ToolStates } from './ToolStates';
import { HomeStates } from './HomeStates';
import { NavigationStates } from './NavigationStates';
import { InstallState } from './InstallState';
import { StatisticsState } from './StatisticsState';

export const ToolContext = createContext();

export const ToolProvider = ({ children }) => {
    let states = {
        install_state: InstallState(),
        tool_state: ToolStates(),
        home_state: HomeStates(),
        navigation_state: NavigationStates(),
        statistics_state: StatisticsState()
    }

    return (
        <ToolContext.Provider value={{...states}}>
            {children}
        </ToolContext.Provider>
    )
}