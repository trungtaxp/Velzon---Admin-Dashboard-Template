import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Link } from 'react-router-dom';
import Masonry from "react-masonry-component";

import { gallery } from '../../../common/data';

//Lightbox
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
import 'react-image-lightbox'

const Gallery = () => {

  const [displayCategory, setCategory] = useState("All");

  // const [photoIndex, setphotoIndex] = useState(0);
  // const [isFits, setisFits] = useState(false);
  // const [isEffects, setisEffects] = useState(false);
  // const [isGallery, setisGallery] = useState(false);
  // const [isGalleryZoom, setisGalleryZoom] = useState(false);

  // const [isOpen, setisOpen] = useState(false);
  // const [isOpen1, setisOpen1] = useState(false);
  // const [modal, setmodal] = useState(false);

  document.title = "Gallery | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Gallery" pageTitle="Pages" />

          {/* <Breadcrumbs title="UI Elements" breadcrumbItem="Lightbox" /> */}

          {/* {isFits ? (
            <Lightbox
              mainSrc={images[photoIndex]}
              enableZoom={false}
              imageCaption={
                "Caption. Can be aligned it to any side and contain any HTML."
              }
              onCloseRequest={() => {
                setisFits(!isFits);
              }}
            />
          ) : null}

          {isEffects ? (
            <Lightbox
              mainSrc={images[2]}
              enableZoom={false}
              onCloseRequest={() => {
                setisEffects(!isEffects);
              }}
            />
          ) : null}

          {isGallery ? (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              enableZoom={true}
              onCloseRequest={() => {
                setisGallery(false);
              }}
              onMovePrevRequest={() => {
                setphotoIndex((photoIndex + images.length - 1) % images.length);
              }}
              onMoveNextRequest={() => {
                setphotoIndex((photoIndex + 1) % images.length);
              }}
              imageCaption={"Project " + parseFloat(photoIndex + 1)}
            />
          ) : null}

          {isGalleryZoom ? (
            <Lightbox
              mainSrc={imageZoom[photoIndex]}
              nextSrc={imageZoom[(photoIndex + 1) % imageZoom.length]}
              prevSrc={imageZoom[(photoIndex + imageZoom.length - 1) % imageZoom.length]}
              onCloseRequest={() => {
                setisGalleryZoom(false);
              }}
              onMovePrevRequest={() => {
                setphotoIndex((photoIndex + imageZoom.length - 1) % imageZoom.length);
              }}
              onMoveNextRequest={() => {
                setphotoIndex((photoIndex + 1) % imageZoom.length);
              }}
            />
          ) : null} */}

          <Row>
            <Col lg={12}>
              <div className="">
                <CardBody>
                  <Row>
                    <Col lg={12}>
                      <div className="text-center">
                        <ul className="list-inline categories-filter animation-nav" id="filter">
                          <li className="list-inline-item">
                            <Link to="#" onClick={() => setCategory("All")} className={displayCategory === "All" ? "categories active" : "categories"} data-filter="*">All</Link></li>
                          <li className="list-inline-item"><Link to="#" onClick={() => setCategory("Project")} className={displayCategory === "Project" ? "categories active" : "categories"} data-filter=".project">Project</Link></li>
                          <li className="list-inline-item"><Link to="#" onClick={() => setCategory("Designing")} className={displayCategory === "Designing" ? "categories active" : "categories"} data-filter=".designing">Designing</Link></li>
                          <li className="list-inline-item"><Link to="#" onClick={() => setCategory("Photography")} className={displayCategory === "Photography" ? "categories active" : "categories"} data-filter=".photography">Photography</Link></li>
                          <li className="list-inline-item"><Link to="#" onClick={() => setCategory("Development")} className={displayCategory === "Development" ? "categories active" : "categories"} data-filter=".development">Development</Link></li>
                        </ul>
                      </div>

                      <Masonry className="row gallery-wrapper">
                        {(gallery.filter(({ category }) => displayCategory === category || displayCategory === "All")).map(({ img, title, auther, likes, comments }, key) => (
                          <Col xxl={3} xl={4} sm={6} className="element-item project designing development" key={key}>
                            <Card className="gallery-box card-border-effect-none">
                              <div className="gallery-container">
                                <Link className="image-popup" to="#" title="">
                                  <img className="gallery-img img-fluid mx-auto" src={img} alt="" />
                                  {/* <img
                                    src={img}
                                    onClick={() => {
                                      setisGallery(true);
                                      setphotoIndex(0);
                                    }}
                                    alt=""
                                    width="120"
                                    className="gallery-img img-fluid mx-auto"
                                  /> */}
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">{title}</h5>
                                  </div>
                                </Link>
                              </div>

                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">by <Link to='#' className="text-body text-truncate">{auther}</Link></div>
                                  <div className="flex-shrink-0">
                                    <div className="d-flex gap-3">
                                      <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> {likes}
                                      </button>
                                      <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                        <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> {comments}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </Col>
                        ))}

                      </Masonry>
                      <div className="text-center my-2">
                        <Link to="#" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load More </Link>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </div>
            </Col>
          </Row>

        </Container>

      </div>
    </React.Fragment>
  );
};

export default Gallery;
