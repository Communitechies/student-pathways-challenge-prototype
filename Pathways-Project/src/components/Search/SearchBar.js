import React, { PureComponent } from 'react'
import Search from 'grommet/components/Search'

export default class SearchBar extends PureComponent {
    render() {
        return (
            <Search
                fill
                inline
                placeHolder='Search within items'
                size='large'
                iconAlign='start'/>
        )
    }
}