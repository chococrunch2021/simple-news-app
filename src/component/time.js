import React, {PureComponent} from 'react';
import {Text} from 'native-base';
import moment from 'moment';

class Time extends PureComponent {
  constructor(props) {
    super(props);
    this.date = props.time;
  }

  render() {
    // const time = moment(this.date || moment.now()).fromNow();

    return (
      <Text note style={{marginHorizontal: 10}}>
        {/* {time} */}
      </Text>
    );
  }
}

export default Time;
