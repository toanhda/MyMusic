import React, { Component } from 'react';
import { Pie, Line, Doughnut } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Progress,
  Row,
  Jumbotron,
  Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem
} from 'reactstrap';
import avatar from '../../assets/img/brand/avatar.jpg'

import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';



//=============================//===================

const items = [
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
];





class Layout3 extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0, expanded: false
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
          <img className="d-block w-100" src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    const slides2 = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" style={{ margin: '10px auto', display: 'flex' }}>
            <Card style={{ width: '100%' }}>
              <CardBody>
                <Row>
                  <Col xs="6" sm="6" style={{ display: 'flex' }}>
                    <Jumbotron style={{ marginBottom: '0px', paddingTop: '50px', paddingBottom: "50px"}}>
                      <h1 style={{ fontSize: '70px'}}>Music trend</h1>
                      <h1 >in your hand</h1>
                      <p className="lead">Present many music feature of hit songs and predict if a song will be a hit vernus. That's so awesome!</p>
                      <Row  style={{ marginTop: '30px auto'}}>
                        <Col xs="5" sm="3">
                          <Button block color="primary" className="btn-pill">Let's start</Button>
                        </Col>
                        <Col xs="5" sm="3">
                          <Button block outline color="primary" className="btn-pill"> Sign in</Button>
                        </Col>
                      </Row>
                    </Jumbotron>
                  </Col>
                  <Col xs="6" sm="6" style={{ display: 'flex' }}>
                    
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className='list-audio' xs="12" sm="12">
            <Card style={{ width: '100%' }}>
              <CardBody>
                <Row>
                  <Col xs="3" sm="3" className='audio-item'>
                    <Card style={{ width: '100%' }}>
                      <CardHeader className='audio-item-header'>
                        <img style={{ width: '100%' }} src='/assets/img/song/beatifulinwhite.jpg' alt="Music" />
                      </CardHeader>
                      <CardBody className='audio-item-body'>
                        <Row>
                          <Col xs="3" sm="3" className='audio-item-body-avatar'>
                            <img src='/assets/img/singer/westlife.jpg' className="img-avatar" alt="avatar" />
                          </Col>
                          <Col xs="9" sm="9" className='audio-item-body-info' >
                            <div>
                              <span>
                                <b>Beatiful in white.</b>
                              </span>
                              <br />
                              <span>
                                West life
                            </span>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="3" sm="3" className='audio-item'>
                    <Card style={{ width: '100%' }}>
                      <CardHeader className='audio-item-header'>
                        <img style={{ width: '100%' }} src='/assets/img/song/nayemoi.jpg' alt="Music" />
                      </CardHeader>
                      <CardBody className='audio-item-body'>
                        <Row>
                          <Col xs="3" sm="3" className='audio-item-body-avatar'>
                            <img src='/assets/img/singer/tung.jpg' className="img-avatar" alt="avatar" />
                          </Col>
                          <Col xs="9" sm="9" className='audio-item-body-info' >
                            <div>
                              <span>
                                <b>Này em ơi</b>
                              </span>
                              <br />
                              <span>
                                Tùng
                            </span>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="3" sm="3" className='audio-item'>
                    <Card style={{ width: '100%' }}>
                      <CardHeader className='audio-item-header'>
                        <img style={{ width: '100%' }} src='/assets/img/song/attention.jpg' alt="Music" />
                      </CardHeader>
                      <CardBody className='audio-item-body'>
                        <Row>
                          <Col xs="3" sm="3" className='audio-item-body-avatar'>
                            <img src='/assets/img/singer/charlieputh.jpg' className="img-avatar" alt="avatar" />
                          </Col>
                          <Col xs="9" sm="9" className='audio-item-body-info' >
                            <div>
                              <span>
                                <b>Attention</b>
                              </span>
                              <br />
                              <span>
                              Charlie puth
                            </span>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="3" sm="3" className='audio-item'>
                    <Card style={{ width: '100%' }}>
                      <CardHeader className='audio-item-header'>
                        <img style={{ width: '100%' }} src='/assets/img/song/hongkong1.jpg' alt="Music" />
                      </CardHeader>
                      <CardBody className='audio-item-body'>
                        <Row>
                          <Col xs="3" sm="3" className='audio-item-body-avatar'>
                            <img src='/assets/img/singer/nguyentrongtai.jpg' className="img-avatar" alt="avatar" />
                          </Col>
                          <Col xs="9" sm="9" className='audio-item-body-info' >
                            <div>
                              <span>
                                <b>Hongkong1</b>
                              </span>
                              <br />
                              <span>
                                Nguyễn Trọng Tài
                            </span>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col xs="3" sm="3" className='audio-item'>
                    <Card style={{ width: '100%' }}>
                      <CardHeader className='audio-item-header'>
                        <img style={{ width: '100%' }} src='/assets/img/song/tancungnoinho.jpg' alt="Music" />
                      </CardHeader>
                      <CardBody className='audio-item-body'>
                        <Row>
                          <Col xs="3" sm="3" className='audio-item-body-avatar'>
                            <img src='/assets/img/singer/will.jpg' className="img-avatar" alt="avatar" />
                          </Col>
                          <Col xs="9" sm="9" className='audio-item-body-info' >
                            <div>
                              <span>
                                <b>Tận cùng nỗi nhớ</b>
                              </span>
                              <br />
                              <span>
                                Will
                            </span>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="3" sm="3" className='audio-item'>
                    <Card style={{ width: '100%' }}>
                      <CardHeader className='audio-item-header'>
                        <img style={{ width: '100%' }} src='/assets/img/song/buonkhongem.jpg' alt="Music" />
                      </CardHeader>
                      <CardBody className='audio-item-body'>
                        <Row>
                          <Col xs="3" sm="3" className='audio-item-body-avatar'>
                            <img src='/assets/img/singer/datg.jpg' className="img-avatar" alt="avatar" />
                          </Col>
                          <Col xs="9" sm="9" className='audio-item-body-info' >
                            <div>
                              <span>
                                <b>Buồn không em</b>
                              </span>
                              <br />
                              <span>
                                  Đat G
                            </span>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="3" sm="3" className='audio-item'>
                    <Card style={{ width: '100%' }}>
                      <CardHeader className='audio-item-header'>
                        <img style={{ width: '100%' }} src='/assets/img/song/tamma.jpg' alt="Music" />
                      </CardHeader>
                      <CardBody className='audio-item-body'>
                        <Row>
                          <Col xs="3" sm="3" className='audio-item-body-avatar'>
                            <img src='/assets/img/singer/blackbivodinhhieu.jpg' className="img-avatar" alt="avatar" />
                          </Col>
                          <Col xs="9" sm="9" className='audio-item-body-info' >
                            <div>
                              <span>
                                <b>Tâm ma</b>
                              </span>
                              <br />
                              <span>
                                Blackbi ft Võ Đình Hiếu
                            </span>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="3" sm="3" className='audio-item'>
                    <Card style={{ width: '100%' }}>
                      <CardHeader className='audio-item-header'>
                        <img style={{ width: '100%' }} src='/assets/img/song/phiasauem.jpg' alt="Music" />
                      </CardHeader>
                      <CardBody className='audio-item-body'>
                        <Row>
                          <Col xs="3" sm="3" className='audio-item-body-avatar'>
                            <img src='/assets/img/singer/kaytran.jpg' className="img-avatar" alt="avatar" />
                          </Col>
                          <Col xs="9" sm="9" className='audio-item-body-info' >
                            <div>
                              <span>
                                <b>Phía Sau Em</b>
                              </span>
                              <br />
                              <span>
                                Kay Trần
                            </span>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" style={{ margin: '10px auto', display: 'flex' }}>
            <Card style={{ width: '100%' }}>
              <CardBody>

                <Col xs="12" xl="12">

                  <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides2}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                  </Carousel>

                </Col>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Layout3;