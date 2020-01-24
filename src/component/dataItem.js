import React, {Component} from 'react';
import {View} from 'react-native';

import {
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Text,
  Button,
} from 'native-base';
import Time from './time';
import moment from 'moment';

export class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  handlePress = () => {
    const {url, title} = this.data;
    this.props.onPress({url, title});
  };

  render() {
    const time = moment(this.data.publishedAt || moment.now()).fromNow();
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri:
                'this.data.urlToImage' !== null
                  ? this.data.urlToImage
                  : 'https://source.unsplash.com/random',
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.data.title}</Text>
          <Text note numberOfLines={2}>
            {this.data.description}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 8,
              marginLeft: 0,
            }}>
            <Text note>{this.data.source.name}</Text>
            <Text note>{time}</Text>
            {/* <Time time={this.data.time} /> */}
          </View>
        </Body>
        <Right>
          <Button bordered onPress={this.handlePress}>
            <Text>전문 보기</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
