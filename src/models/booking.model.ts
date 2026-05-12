export type Booking = {
  id: string;
  businessType: "sports_court" | "dental_clinic";
  customerName: string;
  serviceName: string;
  startsAt: string;
  status: "pending" | "confirmed" | "cancelled" | "no_show";
  createdAt: string;
};



