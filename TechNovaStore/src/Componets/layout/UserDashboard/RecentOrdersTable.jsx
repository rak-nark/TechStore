import React from "react";
import {
  RecentOrdersSection,
  SectionHeader,
  SectionTitle,
  ViewAllButton,
  TableWrapper,
  StyledTable,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  OrderImage,
  ImageWrapper,
  StatusBadge,
  TrackButton,
} from "../../../Pages/Styled.TechStoreUserAccountDashboard";

const RecentOrdersTable = ({ recentOrders }) => {
  return (
    <RecentOrdersSection>
      <SectionHeader>
        <SectionTitle>Recent Orders</SectionTitle>
        <ViewAllButton>View All Orders</ViewAllButton>
      </SectionHeader>
      <TableWrapper>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableHeader>Order ID</TableHeader>
              <TableHeader>Items</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Total</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentOrders.map((order, idx) => (
              <TableRow key={idx}>
                <TableCell style={{ fontWeight: 700 }}>{order.id}</TableCell>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <ImageWrapper>
                      <OrderImage src={order.image} alt={order.product} />
                    </ImageWrapper>
                    <span>{order.product}</span>
                  </div>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell style={{ fontWeight: 600 }}>{order.total}</TableCell>
                <TableCell>
                  <StatusBadge $color={order.statusColor}>
                    <span
                      style={{
                        width: "0.375rem",
                        height: "0.375rem",
                        borderRadius: "50%",
                        backgroundColor: "currentColor",
                      }}
                    ></span>
                    {order.status}
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  <TrackButton>{order.actionLabel}</TrackButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableWrapper>
    </RecentOrdersSection>
  );
};

export default RecentOrdersTable;
