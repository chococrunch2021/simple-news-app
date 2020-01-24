import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Title,
  TabHeading,
  Text,
  Icon,
} from 'native-base';

import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#cc5de8'}} hasTabs>
          <Left />
          <Body>
            <Title style={{color: '#fff'}}>오늘의 톡톡 News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Icon name="home" />
                <Text>General</Text>
              </TabHeading>
            }
            tabStyle={{backgroundColor: '#845ef7'}}
            activeTabStyle={{backgroundColor: '#6741d9'}}
            textStyle={{color: '#fff'}}>
            <Tab1 />
          </Tab>
          <Tab
            heading="Business"
            tabStyle={{backgroundColor: '#845ef7'}}
            activeTabStyle={{backgroundColor: '#6741d9'}}
            textStyle={{color: '#fff'}}>
            <Tab2 />
          </Tab>
          <Tab
            heading="Technolgy"
            tabStyle={{backgroundColor: '#845ef7'}}
            activeTabStyle={{backgroundColor: '#6741d9'}}
            textStyle={{color: '#fff'}}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
