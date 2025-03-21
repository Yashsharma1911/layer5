import React from "react";
import { Container, Col, Row } from "../../../../reusecore/Layout";
// import MesheryImage1 from "../images/cloud-native-journey.webp";
// import MesheryImage2 from "../images/meshery-configuration-management.webp";
import GreenBubble from "../images/green-bubble.svg";
import YellowBubble from "../images/yellow-bubble.svg";
import DataCard from "./data-card";
import VintageBox from "../../../../reusecore/VintageBox";
import Button from "../../../../reusecore/Button";

import SpecsWrapper from "./specs.style";

const HowMesheryWorksSpecs = () => {
  return (
    <SpecsWrapper>
      <div className="management-plane">
        <Container>
          <Row $Vcenter>
            <Col className="text" $xs={12} $lg={6}>
              <h2>Meshery is the cloud native management plane</h2>
              <p>Adopt and operate cloud native infrastructure with confidence using Meshery's intuitive management features</p>
            </Col>
            <Col className="card" $xs={12} $lg={6}>
              <DataCard />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        {/* <Row className="cloud-native" Vcenter>
          <Col xs={12} lg={6}>
            <h3>Service meshes will be commonplace cloud native and edge infrastructure</h3>
            <p>Today: Over 40% of the enterprises run cloud native technologies in production; Over 80% of those enterprises running Kubernetes</p>
          </Col>
          <Col $xs={12} $lg={6}>
            <img src={MesheryImage1} alt="Meshery Img" />
          </Col>
        </Row>
        <Row className="cloud-native" $Vcenter>
          <Col $xs={12} $lg={6}>
            <img src={MesheryImage2} alt="Meshery Img" />
          </Col>
          <Col $xs={12} $lg={6}>
            <h3>Begin Your Cloud Native Journey</h3>
            <p>Tomorrow: 70% of cloud native environments running a service mesh in three years</p>
          </Col>
        </Row> */}
        <div className="find-kubernetes">
          <img className="green-bubble" src={GreenBubble} alt="bubble" />
          <img className="yellow-bubble" src={YellowBubble} alt="bubble" />
          <div className="content">
            <h3>Assess the Performance and Manage your cloud native infrastructure</h3>
            <p>Ensuring optimal functionality and seamless operations is crucial for all infrastructure.</p>
            <VintageBox left={true} vintageTwo={true} >
              <Button $primary $url="/cloud-native-management/meshery/getting-started" title="Install Meshery" />
            </VintageBox>
          </div>
        </div>
      </Container>
    </SpecsWrapper>
  );
};

export default HowMesheryWorksSpecs;
