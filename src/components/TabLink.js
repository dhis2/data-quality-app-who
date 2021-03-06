import React from 'react'
import propTypes from '@dhis2/prop-types'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Tab } from '@dhis2/ui'

const TabLink = ({ to, children }) => {
    const history = useHistory()
    const match = useRouteMatch(to)
    const onClick = () => history.push(to)

    return (
        <Tab selected={!!match} onClick={onClick}>
            {children}
        </Tab>
    )
}

TabLink.propTypes = {
    children: propTypes.node,
    to: propTypes.string,
}

export default TabLink
