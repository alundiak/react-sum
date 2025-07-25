// https://storybook.js.org/docs/addons/writing-addons/
import React from 'react';
import addons from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';

class MyPanel extends React.Component {
  state = { value: '' };

  onSomeAction = text => {
    this.setState({
      value: text
    });
  };
  onStoryChange = id => {
    console.log(id)
    // do something with the new selected storyId
  };

  componentDidMount() {
    const { api } = this.props;
    api.on('version/injectVersion', this.onSomeAction);
    api.on(STORY_CHANGED, this.onStoryChange);
  }
  componentWillUnmount() {
    const { api } = this.props;
    api.off('version/injectVersion', this.onSomeAction);
    api.off(STORY_CHANGED, this.onStoryChange);
  }

  render() {
    const { active } = this.props;
    const { value } = this.state;

    return active ? <div className="custom-addon-version" >v{value}</div> : null;
    // bright example how ReactJS code is slow. First shows "v", then number.
  }
}

// Register the addon with a unique name.
addons.register('VERSION', api => {
  // console.log(api)
  // Also need to set a unique name to the panel.
  addons.addPanel('VERSION/panel', {
    title: 'Version',
    render: ({ active, key }) => <MyPanel key={key} api={api} active={active} />,
  });
});