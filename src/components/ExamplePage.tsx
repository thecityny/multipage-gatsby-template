import React from "react";
import { PageLayout } from "./PageLayout";
import { Helmet } from "react-helmet";

const ExamplePage: React.FC<{ pageContext: any }> = ({ pageContext }) => (
  <PageLayout>
    <Helmet title={pageContext.title} defer={false} />
    <div>
      <div className="container">
        <h1 className="headline">{pageContext.title}</h1>
        <div className="attribution">
          <p className="byline">This is manually-created additional page!</p>
        </div>
      </div>
    </div>
  </PageLayout>
);

export default ExamplePage;
