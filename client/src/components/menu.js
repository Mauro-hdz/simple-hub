import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';

class Layout extends Component {
  state = { activeItem: 'Contacts' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='Contacts'
              active={activeItem === 'Contacts'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Meetings'
              active={activeItem === 'Meetings'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Tasks'
              active={activeItem === 'Tasks'}
              onClick={this.handleItemClick}
            />
            {/* <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            /> */}
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Layout;