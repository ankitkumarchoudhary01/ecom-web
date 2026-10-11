import React, { useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  Link,
  Outlet,
} from "react-router-dom";

import {
  LayoutDashboard,
  Package,
  Heart,
  UserRound,
  MapPin,
  ShieldCheck,
  LifeBuoy,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ChevronRight,
  ArrowUpRight,
  Truck,
  Clock3,
  CheckCircle2,
  ShoppingBag,
  Pencil,
  Plus,
  MoreHorizontal,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const orders = [
  {
    id: "#PR-10482",
    date: "08 Oct 2026",
    items: "3 items",
    amount: "₹4,850",
    status: "Delivered",
  },
  {
    id: "#PR-10457",
    date: "02 Oct 2026",
    items: "1 item",
    amount: "₹1,299",
    status: "In Transit",
  },
  {
    id: "#PR-10391",
    date: "25 Sep 2026",
    items: "5 items",
    amount: "₹8,420",
    status: "Delivered",
  },
  {
    id: "#PR-10344",
    date: "16 Sep 2026",
    items: "2 items",
    amount: "₹2,180",
    status: "Processing",
  },
];

const allOrders = [
  ...orders,
  {
    id: "#PR-10288",
    date: "08 Sep 2026",
    items: "4 items",
    amount: "₹6,720",
    status: "Delivered",
  },
];

const menu = [
  {
    to: "/account",
    label: "Overview",
    icon: LayoutDashboard,
    end: true,
  },
  {
    to: "/account/orders",
    label: "My Orders",
    icon: Package,
  },
  {
    to: "/account/wishlist",
    label: "Wishlist",
    icon: Heart,
  },
  {
    to: "/account/profile",
    label: "Profile Details",
    icon: UserRound,
  },
  {
    to: "/account/addresses",
    label: "Addresses",
    icon: MapPin,
  },
  {
    to: "/account/security",
    label: "Security",
    icon: ShieldCheck,
  },
];

const wishlistProducts = [
  {
    name: "Premium Product A",
    price: 1299,
  },
  {
    name: "Everyday Essential B",
    price: 1899,
  },
  {
    name: "Business Pack C",
    price: 2499,
  },
  {
    name: "Signature Product D",
    price: 3299,
  },
];

/* -------------------------------------------------------------------------- */
/* Sidebar                                                                    */
/* -------------------------------------------------------------------------- */

function Sidebar({ open, setOpen }) {
  return (
    <>
      {open && (
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/30 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[272px] h-screen flex-col border-r border-slate-200 bg-white px-5 py-6 transition-transform lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-4 flex items-center justify-between px-1">
          

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[.16em] text-slate-400">
          Your Account
        </div>

        <nav className="space-y-1">
          {menu.map(
            ({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#173F67] text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-[#173F67]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={18}
                      className={
                        isActive
                          ? "text-[#F3A928]"
                          : "text-slate-400 group-hover:text-[#245783]"
                      }
                    />

                    <span>{label}</span>

                    {isActive && (
                      <ChevronRight
                        size={16}
                        className="ml-auto opacity-70"
                      />
                    )}
                  </>
                )}
              </NavLink>
            )
          )}
        </nav>

        <div className="mt-auto border-t border-slate-100 pt-5">
          <button className="group flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-[#173F67]">
            <LifeBuoy
              size={18}
              className="text-slate-400 group-hover:text-[#245783]"
            />
            <span>Help & Support</span>
          </button>

          <button className="group flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold text-red-500 hover:bg-red-50">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Layout                                                                     */
/* -------------------------------------------------------------------------- */

function AccountLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F8FB] lg:flex lg:sticky lg:top-0 lg:h-screen">
      <Sidebar
        open={open}
        setOpen={setOpen}
      />

      <div className="min-w-0 flex-1">
        
        <Outlet />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Shared Components                                                          */
/* -------------------------------------------------------------------------- */

function Status({ children }) {
  const styles = {
    Delivered:
      "bg-emerald-50 text-emerald-700",
    "In Transit":
      "bg-blue-50 text-blue-700",
    Processing:
      "bg-amber-50 text-amber-700",
  };

  const icons = {
    Delivered: CheckCircle2,
    "In Transit": Truck,
    Processing: Clock3,
  };

  const Icon = icons[children] || Clock3;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${
        styles[children] ||
        "bg-slate-100 text-slate-600"
      }`}
    >
      <Icon size={12} />
      {children}
    </span>
  );
}

function Page({
  title,
  subtitle,
  children,
}) {
  return (
    <main className="mx-auto max-w-[1380px] p-4 md:p-8">
      <div className="mb-7">
        <h1 className="text-2xl font-extrabold tracking-tight text-[#173F67] md:text-3xl">
          {title}
        </h1>

        <p className="mt-1.5 text-sm text-slate-500">
          {subtitle}
        </p>
      </div>

      {children}
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Dashboard                                                                  */
/* -------------------------------------------------------------------------- */

function Dashboard() {
  const statistics = [
    {
      icon: Package,
      label: "Total Orders",
      value: "24",
      note: "+3 this month",
      color:
        "bg-[#245783]/10 text-[#245783]",
    },
    {
      icon: Truck,
      label: "In Transit",
      value: "02",
      note: "Arriving soon",
      color:
        "bg-[#245783]/10 text-[#245783]",
    },
    {
      icon: Heart,
      label: "Wishlist",
      value: "08",
      note: "Saved products",
      color:
        "bg-[#F3A928]/10 text-[#F3A928]",
    },
    {
      icon: ShoppingBag,
      label: "Total Spent",
      value: "₹48,290",
      note: "This year",
      color:
        "bg-[#173F67]/10 text-[#173F67]",
    },
  ];

  return (
    <Page
      title="Good morning, Ankit 👋"
      subtitle="Here’s what’s happening with your Prowrrap account."
    >
      <div className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statistics.map(
          ({
            icon: Icon,
            label,
            value,
            note,
            color,
          }) => (
            <div
              className="card p-5"
              key={label}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`grid h-10 w-10 place-items-center rounded-xl ${color}`}
                >
                  <Icon size={19} />
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-slate-300"
                />
              </div>

              <div className="mt-5 text-2xl font-extrabold text-[#173F67]">
                {value}
              </div>

              <div className="mt-1 text-xs font-semibold text-slate-500">
                {label}

                <span className="ml-1 text-slate-300">
                  •
                </span>

                <span className="ml-1">
                  {note}
                </span>
              </div>
            </div>
          )
        )}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.45fr_.75fr]">
        <RecentOrders />

        <AccountProfile />
      </div>
    </Page>
  );
}

function RecentOrders() {
  return (
    <section className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 md:px-6">
        <div>
          <h2 className="font-extrabold text-[#173F67]">
            Recent Orders
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Your latest purchases
          </p>
        </div>

        <Link
          to="/account/orders"
          className="text-xs font-bold text-[#245783] hover:underline"
        >
          View all
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">
          <thead className="bg-slate-50/70 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-6 py-3">
                Order
              </th>
              <th className="px-4 py-3">
                Date
              </th>
              <th className="px-4 py-3">
                Items
              </th>
              <th className="px-4 py-3">
                Amount
              </th>
              <th className="px-4 py-3">
                Status
              </th>
              <th className="px-4 py-3" />
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-slate-100 text-sm"
              >
                <td className="px-6 py-4 font-bold text-[#173F67]">
                  {order.id}
                </td>

                <td className="px-4 py-4 text-slate-500">
                  {order.date}
                </td>

                <td className="px-4 py-4 text-slate-500">
                  {order.items}
                </td>

                <td className="px-4 py-4 font-bold text-slate-700">
                  {order.amount}
                </td>

                <td className="px-4 py-4">
                  <Status>
                    {order.status}
                  </Status>
                </td>

                <td className="px-4 py-4 text-right">
                  <button
                    className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                    aria-label={`More options for ${order.id}`}
                  >
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function AccountProfile() {
  return (
    <section className="card p-5 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-extrabold text-[#173F67]">
            Account Profile
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Your personal information
          </p>
        </div>

        <Link
          to="/account/profile"
          className="rounded-lg p-2 text-[#245783] hover:bg-blue-50"
          aria-label="Edit profile"
        >
          <Pencil size={16} />
        </Link>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#173F67] text-lg font-extrabold text-white">
          AK
        </div>

        <div>
          <div className="font-bold text-[#173F67]">
            Ankit Kumar
          </div>

          <div className="mt-1 text-xs text-slate-400">
            ankit@example.com
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4 border-t border-slate-100 pt-5">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Phone
          </div>

          <div className="mt-1 text-sm font-semibold text-slate-700">
            +91 98XXX XXXXX
          </div>
        </div>

        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Default Address
          </div>

          <div className="mt-1 text-sm leading-5 text-slate-600">
            Jaipur, Rajasthan, India
          </div>
        </div>
      </div>

      <Link
        to="/account/profile"
        className="btn-secondary mt-6 w-full"
      >
        Manage profile
        <ChevronRight size={16} />
      </Link>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Orders                                                                     */
/* -------------------------------------------------------------------------- */

function Orders() {
  return (
    <Page
      title="My Orders"
      subtitle="Track and manage all your Prowrrap purchases."
    >
      <div className="mb-5 flex flex-wrap gap-2">
        <button className="rounded-xl bg-[#173F67] px-4 py-2 text-xs font-bold text-white">
          All orders
        </button>

        <button className="rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-500 ring-1 ring-slate-200">
          Processing
        </button>

        <button className="rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-500 ring-1 ring-slate-200">
          In Transit
        </button>

        <button className="rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-500 ring-1 ring-slate-200">
          Delivered
        </button>
      </div>

      <section className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-6 py-4">
                  Order ID
                </th>

                <th className="px-4 py-4">
                  Date
                </th>

                <th className="px-4 py-4">
                  Items
                </th>

                <th className="px-4 py-4">
                  Total
                </th>

                <th className="px-4 py-4">
                  Status
                </th>

                <th className="px-4 py-4">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-slate-100 text-sm"
                >
                  <td className="px-6 py-5 font-bold text-[#173F67]">
                    {order.id}
                  </td>

                  <td className="px-4 py-5 text-slate-500">
                    {order.date}
                  </td>

                  <td className="px-4 py-5 text-slate-500">
                    {order.items}
                  </td>

                  <td className="px-4 py-5 font-bold text-slate-700">
                    {order.amount}
                  </td>

                  <td className="px-4 py-5">
                    <Status>
                      {order.status}
                    </Status>
                  </td>

                  <td className="px-4 py-5">
                    <button className="font-bold text-[#245783] hover:underline">
                      View order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Page>
  );
}

/* -------------------------------------------------------------------------- */
/* Profile                                                                    */
/* -------------------------------------------------------------------------- */

function Profile() {
  return (
    <Page
      title="Profile Details"
      subtitle="Manage the personal information associated with your account."
    >
      <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr]">
        <section className="card p-6">
          <div className="flex items-center gap-4">
            <div className="grid h-20 w-20 place-items-center rounded-3xl bg-[#173F67] text-2xl font-extrabold text-white">
              AK
            </div>

            <div>
              <h2 className="font-extrabold text-[#173F67]">
                Ankit Kumar
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Prowrrap customer
              </p>

              <button className="mt-3 text-xs font-bold text-[#245783]">
                Change photo
              </button>
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-[#F5F8FB] p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#173F67]">
              <ShieldCheck size={17} />
              Profile verified
            </div>

            <p className="mt-1.5 text-xs leading-5 text-slate-500">
              Your email and phone details are securely
              associated with this account.
            </p>
          </div>
        </section>

        <section className="card p-6 md:p-7">
          <div className="mb-6">
            <h2 className="font-extrabold text-[#173F67]">
              Personal information
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Update your details below.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs font-bold text-slate-600">
              First name
              <input
                className="input mt-2"
                defaultValue="Ankit"
              />
            </label>

            <label className="text-xs font-bold text-slate-600">
              Last name
              <input
                className="input mt-2"
                defaultValue="Kumar"
              />
            </label>

            <label className="text-xs font-bold text-slate-600 sm:col-span-2">
              Email address
              <input
                className="input mt-2"
                defaultValue="ankit@example.com"
                type="email"
              />
            </label>

            <label className="text-xs font-bold text-slate-600">
              Phone number
              <input
                className="input mt-2"
                defaultValue="+91 98XXX XXXXX"
              />
            </label>

            <label className="text-xs font-bold text-slate-600">
              Company
              <input
                className="input mt-2"
                defaultValue="Prowrrap Customer"
              />
            </label>
          </div>

          <div className="mt-7 flex justify-end gap-3 border-t border-slate-100 pt-5">
            <button className="btn-secondary">
              Cancel
            </button>

            <button className="btn-primary">
              Save changes
            </button>
          </div>
        </section>
      </div>
    </Page>
  );
}

/* -------------------------------------------------------------------------- */
/* Addresses                                                                  */
/* -------------------------------------------------------------------------- */

function Addresses() {
  return (
    <Page
      title="Addresses"
      subtitle="Manage delivery and billing addresses."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <section className="card bg-[#F3A928]/10 p-6">
          <div className="flex items-start justify-between">
            <div>
              <span className="rounded-full bg-[#F3A928]/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700">
                Default
              </span>

              <h2 className="mt-4 font-extrabold text-[#173F67]">
                Office Address
              </h2>
            </div>

            <button
              className="rounded-lg p-2 text-slate-400 hover:bg-white"
              aria-label="Edit address"
            >
              <Pencil size={16} />
            </button>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Ankit Kumar
            <br />
            Prowrrap Office
            <br />
            Jaipur, Rajasthan 302001
            <br />
            India
          </p>

          <div className="mt-5 text-xs font-bold text-slate-400">
            Phone: +91 98XXX XXXXX
          </div>
        </section>

        <button className="card flex min-h-[220px] flex-col items-center justify-center border-dashed p-6 text-center transition hover:bg-blue-50/30">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#245783]/10 text-[#245783]">
            <Plus />
          </div>

          <div className="mt-4 font-bold text-[#173F67]">
            Add new address
          </div>

          <div className="mt-1 text-xs text-slate-400">
            Add another delivery or billing address
          </div>
        </button>
      </div>
    </Page>
  );
}

/* -------------------------------------------------------------------------- */
/* Wishlist                                                                   */
/* -------------------------------------------------------------------------- */

function Wishlist() {
  return (
    <Page
      title="Wishlist"
      subtitle="Products you've saved for later."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {wishlistProducts.map((product) => (
          <div
            className="card overflow-hidden"
            key={product.name}
          >
            <div className="relative flex h-48 items-center justify-center bg-slate-100">
              <Heart
                size={24}
                className="absolute right-4 top-4 fill-white text-slate-300"
              />

              <div className="grid h-24 w-24 place-items-center rounded-2xl bg-white text-2xl font-black text-[#173F67] shadow-sm">
                P
              </div>
            </div>

            <div className="p-5">
              <div className="text-sm font-bold text-[#173F67]">
                {product.name}
              </div>

              <div className="mt-2 font-extrabold text-[#173F67]">
                ₹
                {product.price.toLocaleString(
                  "en-IN"
                )}
              </div>

              <button className="btn-primary mt-4 w-full">
                <ShoppingBag size={15} />
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}

/* -------------------------------------------------------------------------- */
/* Security                                                                   */
/* -------------------------------------------------------------------------- */

function Security() {
  return (
    <Page
      title="Security"
      subtitle="Protect your Prowrrap account and manage sign-in preferences."
    >
      <div className="space-y-5">
        <section className="card p-6">
          <div className="flex items-center gap-4">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#245783]/10 text-[#245783]">
              <ShieldCheck />
            </div>

            <div>
              <h2 className="font-extrabold text-[#173F67]">
                Password
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Last changed 42 days ago
              </p>
            </div>

            <button className="btn-secondary ml-auto hidden sm:inline-flex">
              Change password
            </button>
          </div>

          <button className="btn-secondary mt-4 w-full sm:hidden">
            Change password
          </button>
        </section>

        <section className="card p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-extrabold text-[#173F67]">
                Two-factor authentication
              </h2>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Add an extra layer of protection when
                signing in.
              </p>
            </div>

            <button
              type="button"
              aria-label="Toggle two-factor authentication"
              className="h-6 w-11 rounded-full bg-slate-200 p-1"
            >
              <div className="h-4 w-4 rounded-full bg-white shadow-sm" />
            </button>
          </div>
        </section>

        <section className="card p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-extrabold text-[#173F67]">
                Login notifications
              </h2>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Get notified when a new device signs into
                your account.
              </p>
            </div>

            <button
              type="button"
              aria-label="Toggle login notifications"
              className="h-6 w-11 rounded-full bg-[#173F67] p-1"
            >
              <div className="ml-5 h-4 w-4 rounded-full bg-white shadow-sm" />
            </button>
          </div>
        </section>
      </div>
    </Page>
  );
}

/* -------------------------------------------------------------------------- */
/* Account Routes                                                             */
/* -------------------------------------------------------------------------- */

function AccountPage() {
  return (
    <Routes>
      <Route element={<AccountLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addresses" element={<Addresses />} />
        <Route path="security" element={<Security />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default AccountPage;
