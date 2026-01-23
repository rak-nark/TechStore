import React from "react";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import {
  BreadcrumbsContainer,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbCurrent,
} from "./Styled.Breadcrumbs";

const Breadcrumbs = ({ items = [] }) => {
  const defaultItems = [{ label: "Home", path: "/" }, ...items];

  return (
    <BreadcrumbsContainer>
      {defaultItems.map((item, index) => {
        const isLast = index === defaultItems.length - 1;

        return (
          <BreadcrumbItem key={index}>
            {!isLast ? (
              <>
                <BreadcrumbLink as={Link} to={item.path}>
                  {item.label}
                </BreadcrumbLink>
                <BreadcrumbSeparator>
                  <MdChevronRight />
                </BreadcrumbSeparator>
              </>
            ) : (
              <BreadcrumbCurrent>{item.label}</BreadcrumbCurrent>
            )}
          </BreadcrumbItem>
        );
      })}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
