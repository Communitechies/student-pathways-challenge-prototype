import React, { PureComponent } from 'react'

import Search from 'grommet/components/Search'

class Searchbar extends PureComponent {
// constructor() {
//     super();
//     this.state = {
//         search:'Search'
//     };
// }

// updateSearch(event) {
//     this.setState({search:event.target.value});
// }

  render () {
    return (
      <Search
        fill
        inline
        placeHolder='Search within items'
        size='large'
        iconAlign='start' />
    )
  }
}

export default Searchbar
