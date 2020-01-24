import React, {Component} from 'react';
import Modal from '../../component/modal';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import {Alert, View, ActivityIndicator, FlatList} from 'react-native';
import {getArticles} from '../../service/news';
import {DataItem} from '../../component/dataItem';

export default class ListThumbnailExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {},
    };
  }

  handleItemDataOnPress = articleData => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData,
    });
  };
  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {},
    });
  };

  componentDidMount() {
    getArticles('technology').then(
      data => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      error => {
        Alert.alert('Error', 'Something went wrong!');
      },
    );
  }

  render() {
    // console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
        }}>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{marginTop: 10}}>Please Wait...</Text>
      </View>
    ) : (
      <FlatList
        data={this.state.data}
        renderItem={({item}) => (
          <DataItem data={item} onPress={this.handleItemDataOnPress} />
        )}
        keyExtractor={item => item.url}
      />
    );

    return (
      <Container>
        {/* 위에 뜨는 부분 없애기 <Header /> */}
        <Content>{view}</Content>
        <Modal
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}
