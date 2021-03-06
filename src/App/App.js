import React from 'react'

import { DataStoreProvider } from '@dhis2/app-service-datastore'

import { AppContextProvider } from './AppContext'
import AppRouter from './AppRouter'
import { ADMIN_AUTHORITIES } from '../config'
import useAppDataQuery from '../hooks/useAppDataQuery'

const App = () => {
    const { loading, error, data } = useAppDataQuery(ADMIN_AUTHORITIES)

    if (loading) {
        //TODO: add loading component when we implemented the deferred loading spinner with 700ms delay in @dhis2/ui
        return null
    }

    if (error) {
        //TODO: improve error handling
        return <span>{error.message}</span>
    }

    const currentUserIsAdmin = data.userAuthorities.some(auth =>
        ADMIN_AUTHORITIES.includes(auth)
    )

    return (
        <AppContextProvider value={{ ...data, currentUserIsAdmin }}>
            <DataStoreProvider namespace="dataQualityTool">
                <AppRouter />
            </DataStoreProvider>
        </AppContextProvider>
    )
}

export default App
