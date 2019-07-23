// https://storybook.js.org/docs/addons/writing-addons/
import React from 'react';
import addons from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';

class MyPanel extends React.Component {
  onSomeAction = text => {
      console.log(text)
    // do something with the passed data
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

    return active ? <div className="lundiak-version" /> : null;
  }
}

// Register the addon with a unique name.
addons.register('VERSION', api => {
  // Also need to set a unique name to the panel.
  addons.addPanel('VERSION/panel', {
    title: 'My Version Addon',
    render: ({ active, key }) => <MyPanel key={key} api={api} active={active} />,
  });
});