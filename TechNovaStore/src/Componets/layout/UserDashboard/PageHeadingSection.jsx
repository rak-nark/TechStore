import React from "react";
import {
  PageHeading,
  HeadingContent,
  RegisterButton,
} from "../../../Pages/Styled.TechStoreUserAccountDashboard";
import { MdAddCircle } from "react-icons/md";

const PageHeadingSection = ({ userName }) => {
  return (
    <PageHeading>
      <HeadingContent>
        <h2
          style={{
            margin: 0,
            fontSize: "2.25rem",
            fontWeight: 900,
            lineHeight: 1.1,
          }}
        >
          Welcome back, {userName}
        </h2>
        <p style={{ margin: 0, fontSize: "1rem", marginTop: "0.25rem" }}>
          Manage your hardware fleet and recent tech acquisitions.
        </p>
      </HeadingContent>
      <RegisterButton>
        <MdAddCircle size={20} />
        <span>Register New Product</span>
      </RegisterButton>
    </PageHeading>
  );
};

export default PageHeadingSection;
