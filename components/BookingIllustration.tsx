import type { CSSProperties, ReactNode } from "react";

type IconName = "clock" | "bay" | "link" | "wallet" | "card" | "check" | "chevron" | "dots" | "user";

function Icon({ name, size = 17, color = "currentColor" }: { name: IconName; size?: number; color?: string }) {
  const paths: Record<IconName, ReactNode> = {
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    bay: <><path d="M8 3h8v5a4 4 0 0 1-8 0V3ZM8 5H5v2a3 3 0 0 0 3 3m8-5h3v2a3 3 0 0 1-3 3M12 12v6m-4 3h8" /></>,
    link: <><path d="M13 5h6v6m0-6-8 8" /><path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" /></>,
    wallet: <><rect x="3" y="6" width="18" height="15" rx="2" /><path d="M3 9V5a2 2 0 0 1 2-2h12m0 10h4m-5 2h2" /></>,
    card: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20m-15 5h5" /></>,
    check: <path d="m5 12 5 5L20 7" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    dots: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function BookingCancelCard({ scale = 1 }: { scale?: number }) {
  return <div className="booking-card-stage" style={{ "--booking-scale": scale } as CSSProperties} aria-hidden="true">
    <div className="booking-cancel-card">
      <strong>Cancel booking</strong>
      <p>Are you sure you want to cancel this booking?</p>
      <div className="booking-cancel-details">
        <div><b>Date:</b> Saturday, September 20</div>
        <div><b>Time:</b> 12:00 PM – 1:30 PM</div>
        <div><b>Price:</b> $24.00</div>
      </div>
      <div className="booking-refund-rules">
        <div className="positive">- Over 24h notice → receive full refund</div>
        <div>- Less than 24h notice → partial refund</div>
        <div>- Less than 3h notice → no refund</div>
      </div>
      <div className="booking-cancel-actions"><span>Cancel</span><span>Confirm</span></div>
    </div>
  </div>;
}

export function BookingDetailsCard({ scale = 1 }: { scale?: number }) {
  return <div className="booking-card-stage" style={{ "--booking-scale": scale } as CSSProperties} aria-hidden="true">
    <div className="booking-details-card">
      <span className="booking-now"><Icon name="clock" size={13} /> Now</span>
      <strong>Wednesday, August 27</strong>
      <b className="booking-time">3:00 PM – 4:45 PM</b>
      <div className="booking-venue">Screen Golf Venue <Icon name="link" size={15} color="#078653" /></div>
      <div className="booking-bay"><Icon name="bay" size={16} color="#a4a8ad" /> Bay 21 (Standard)</div>
      <div className="booking-details-actions"><span><Icon name="clock" size={14} color="#078653" /> Extend time</span><span><Icon name="dots" size={14} /> More options</span></div>
      <div className="booking-details-rule" />
      <div className="booking-unlock">Unlock</div>
    </div>
  </div>;
}

export function BookingPhoneScreen({ scale = 1 }: { scale?: number }) {
  return <div className="booking-phone-stage" style={{ "--booking-scale": scale } as CSSProperties} aria-hidden="true">
    <div className="booking-phone-screen">
      <div className="booking-phone-green"><div className="booking-phone-brand"><span className="booking-phone-mark" /><span className="booking-phone-brand-title"><b>Screen Golf Venue</b><span className="booking-phone-header-icon"><Icon name="chevron" size={20} /></span></span><span className="booking-phone-user"><Icon name="user" size={20} color="#a8abb1" /></span></div></div>
      <div className="booking-phone-content">
        <h3>Extend time</h3><p>Select how many minutes to extend your booking.</p>
        <div className="booking-minute-picker"><span>−</span><b>15</b><span>+</span></div>
        <div className="booking-ends">Booking will end at <b>1:45 PM</b></div>
        <div className="booking-totals"><div>Subtotal <span>$12.00</span></div><div>Tax (13%) <span>$1.56</span></div><div>Total <b>$13.56</b></div></div>
        <div className="booking-payment"><span className="booking-payment-icon"><Icon name="wallet" size={20} /></span><span className="booking-payment-label">Credits: $10.45<small>Pay with your credits.</small></span></div>
        <div className="booking-payment"><span className="booking-payment-icon"><Icon name="card" size={20} /></span><span className="booking-payment-label">Visa ****4242<small>Expiry 12/2027</small></span><span className="booking-payment-check"><Icon name="check" size={14} color="white" /></span></div>
        <div className="booking-phone-actions"><span>Cancel</span><span>Confirm</span></div>
      </div>
    </div>
  </div>;
}
