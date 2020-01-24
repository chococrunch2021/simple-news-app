import React, {Component} from 'react';
import {Dimensions, Modal, Share} from 'react-native';
import {WebView, StatusBar} from 'react-native-webview';
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Icon,
  Right,
  Title,
  Button,
  Text,
} from 'native-base';

// const webViewHeight = Dimensions.get('window').height;

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    return this.props.onClose();
  };

  handleShare = () => {
    const {url, title} = this.props.articleData;
    const message = `${title}\n\nRead More @${url}\n\nShared via RN 톡톡 뉴스 App`;
    return Share.share(
      {
        title,
        message,
        url: message,
      },
      {
        dialogTitle: `공유 ${title}`,
      },
    );
  };

  render() {
    const {showModal, articleData} = this.props;
    const {url} = articleData;

    if (url !== undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}>
          {/* Container 속성에 margin을 없애주면 새로운 창처럼 보인다 */}
          <Container style={{marginBottom: 0, backgroundColor: '#fff'}}>
            <Header style={{backgroundColor: '#009387'}}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon
                    name="close"
                    style={{color: '#fff', fontSize: 12}}></Icon>
                </Button>
              </Left>
              <Body>
                <Title
                  children={articleData.title}
                  style={{color: '#fff'}}></Title>
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon
                    name="share"
                    style={{color: '#fff', fontSize: 12}}></Icon>
                </Button>
              </Right>
            </Header>
            {/* height대신 flex:1로 해결함 */}
            <Content contentContainerStyle={{flex: 1}}>
              <WebView
                source={{uri: url}}
                style={{flex: 1}}
                onError={this.handleClose}
                startInLoadingState
                scalesPageToFit
                style={{marginTop: 20}}
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      // return <Text>Page Not Found</Text>;
      // 위 return 문을 쓸 경우 모달이 안보일때 Page Not Found발생
      return null;
    }
  }
}
