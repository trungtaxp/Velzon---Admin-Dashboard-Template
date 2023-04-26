import React from 'react';
import { Card, CardBody, Col, Container, Row, } from 'reactstrap';

// Import Content
import UiContent from '../../../Components/Common/UiContent';
//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import Slide from './CarouselTypes/slide';
import Slidewithcontrol from './CarouselTypes/slidewithcontrol';
import Slidewithindicator from './CarouselTypes/slidewithindicator';
import Slidewithcaption from './CarouselTypes/slidewithcaption';
import CrossfadeAnimation from './CarouselTypes/crossfadeAnimation';
import IndividualInterval from './CarouselTypes/individualInterval';
import DisableTouch from './CarouselTypes/disableTouch';
import SlideDark from './CarouselTypes/slideDark';
import { SlideOnlyExample, WithControlExample, WithIndicatorExample, WithCaptionExample, CrossFadeExample, InduvidualIntervalExample, DisableTouchExample, DarkVariantExample } from './UiCarouselCode';


const UiCarousel = () => {
    document.title="Carousel | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <UiContent />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Carousel" pageTitle="Base UI" />
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="Slides Only" />
                                <CardBody>
                                <p className="text-muted">Use<code> slide</code> class to set carousel with slides. Note the presence of the <code>d-block</code> and <code>w-100</code> class on carousel images to prevent browser default image alignment.</p>
                                    <div className="live-preview">
                                        <Slide />
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <SlideOnlyExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="With Controls" />
                                <CardBody>
                                <p className="text-muted">Use <code>carousel-control-prev</code> and <code>carousel-control-next</code> class with &lt;button&gt; or &lt;a&gt; tag element to show carousel with control navigation.</p>
                                    <div className="live-preview">
                                        <Slidewithcontrol />
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ height: "375px" }}>
                                            <code>
                                                <WithControlExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="with Indicators" />

                                <CardBody>
                                <p className="text-muted">Use <code>carousel-indicators</code> class with &lt;ol&gt; element to show carousel with indicators.</p>
                                    <div className="live-preview">
                                        <Slidewithindicator />
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ height: "375px" }}>
                                            <code>
                                                <WithIndicatorExample />
                                            </code>
                                        </pre>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="with Captions" />
                                <CardBody>
                                <p className="text-muted">Use <code>carousel-caption</code> class to add captions to the carousel.</p>
                                    <div className="live-preview" >
                                        <Slidewithcaption />
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <WithCaptionExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="Crossfade Animation" />
                                <CardBody>
                                <p className="text-muted">Use <code>carousel-fade</code> class to the carousel to animate slides with a fade transition instead of a slide.</p>
                                    <div className="live-preview">
                                        <CrossfadeAnimation />
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <CrossFadeExample />
                                            </code>
                                        </pre>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="Individual carousel-item Interval" />

                                <CardBody>
                                <p className="text-muted">Use <code>data-bs-interval=" "</code> to a carousel-item to change the amount of time to delay between automatically cycling to the next item.</p>
                                    <div className="live-preview">
                                        <IndividualInterval />
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <InduvidualIntervalExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="Disable Touch Swiping" />
                                <CardBody>
                                <p className="text-muted">Carousels support swiping left/right on touchscreen devices to move between slides.
                                        This can be disabled using the <code>data-bs-touch</code> attribute. The example below also does not include the
                                        <code>data-bs-ride attribute</code> and has <code>data-bs-interval="false"</code> so it doesn’t autoplay.
                                    </p>
                                    <div className="live-preview">
                                        <DisableTouch />
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <DisableTouchExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="Dark Variant" />
                                <CardBody>
                                <p className="text-muted">Use <code>carousel-dark</code> class to the carousel for darker controls, indicators, and captions.</p>
                                    <div className="live-preview">
                                        <SlideDark />
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <DarkVariantExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default UiCarousel;
