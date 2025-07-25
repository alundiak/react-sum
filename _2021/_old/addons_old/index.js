// https://storybook.js.org/docs/addons/api/#makedecorator-api
import React from 'react';
import addons, { makeDecorator } from '@storybook/addons';

export default makeDecorator({
    name: 'withVersion',
    parameterName: 'version',
    // This means don't run this decorator if the notes decorator is not set
    skipIfNoParametersOrOptions: true,
    wrapper: (getStory, context, { parameters }) => {
        console.log('wrapper');
        // goes 2 times !!!
        const channel = addons.getChannel();

        console.log(context, parameters)

        // HACK
        const { kind } =  context;
        console.log(kind)
        context.kind = `${kind} v${parameters}`
        //  then it inject in Info panel, but strange (because of 2 times concat)

        // Our simple API above simply sets the notes parameter to a string,
        // which we send to the channel
        channel.emit('version/injectVersion', parameters);
        // we can also add subscriptions here using channel.on('eventName', callback);

        return getStory(context);
    }
})