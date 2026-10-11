import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Package,
  Truck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const C = {
  navy: "#123451",
  blue: "#205778",
  gold: "#F5B544",
  cream: "#F7F5EF",
};

function Logo() {
  return (
    <a href="/" className="flex items-center gap-3">
      <div
        className="grid h-11 w-11 place-items-center rounded-2xl shadow-lg transition-transform duration-300 hover:-rotate-6 hover:scale-105"
        style={{ background: C.navy, color: C.gold }}
      >
        <Package size={23} />
      </div>
      <div>
        <div className="text-xl font-black tracking-tight" style={{ color: C.navy }}>
          prowrrap
        </div>
        <div
          className="mt-0.5 text-[9px] font-bold uppercase tracking-[.24em]"
          style={{ color: "#B78125" }}
        >
          Packaging solutions
        </div>
      </div>
    </a>
  );
}

function FloatingTag({ icon: Icon, children, className = "" }) {
  return (
    <div
      className={`absolute z-20 flex animate-[float_4s_ease-in-out_infinite] items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-3.5 py-3 text-[11px] font-bold text-white shadow-xl backdrop-blur-xl ${className}`}
    >
      <Icon size={17} style={{ color: C.gold }} />
      {children}
    </div>
  );
}

function PackageBox({ className = "", delay = "0s" }) {
  return (
    <div
      className={`absolute h-36 w-[150px] animate-[float_5s_ease-in-out_infinite] ${className}`}
      style={{ animationDelay: delay }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[70px]"
        style={{
          background: "#E7B765",
          clipPath: "polygon(50% 0, 100% 35%, 50% 70%, 0 35%)",
        }}
      />
      <div
        className="absolute left-0 top-[49px] flex h-[91px] w-[75px] items-center justify-center"
        style={{
          background: "#D59B45",
          clipPath: "polygon(0 0, 100% 35%, 100% 100%, 0 65%)",
          color: C.navy,
        }}
      >
        <Package size={30} />
      </div>
      <div
        className="absolute left-[75px] top-[49px] h-[91px] w-[75px]"
        style={{
          background: "#B87C31",
          clipPath: "polygon(0 35%, 100% 0, 100% 65%, 0 100%)",
        }}
      />
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});

  function submit(e) {
    e.preventDefault();

    const next = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email";
    }

    if (!password) {
      next.password = "Enter your password";
    }

    setErrors(next);

    if (Object.keys(next).length === 0) {
      // Connect your MERN authentication API here.
      alert("Connect this form to your authentication API.");
    }
  }

  return (
    <main
      className="min-h-screen overflow-hidden p-0 font-sans sm:p-4 lg:px-8 lg:py-5"
      style={{ background: C.cream }}
    >
      

      <div className="mx-auto grid min-h-[calc(100vh-120px)] max-w-[1440px] overflow-hidden bg-white shadow-[0_24px_90px_rgba(18,52,81,0.08)] sm:rounded-[28px] lg:grid-cols-[1.05fr_.95fr]">
        {/* Animated panel */}
        <section
          className="relative isolate min-h-[260px] overflow-hidden sm:min-h-[340px] lg:min-h-[680px]"
          style={{ background: C.navy }}
        >
          {/* Ambient background */}
          <div
            className="absolute -left-20 top-1/3 -z-10 h-[400px] w-[400px] animate-[pulse_7s_ease-in-out_infinite] rounded-full blur-[100px]"
            style={{ background: C.blue }}
          />

          <div
            className="absolute inset-0 -z-10 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff25 1px,transparent 1px),linear-gradient(90deg,#ffffff25 1px,transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <div className="absolute left-[10%] top-[10%] z-10 animate-[fadeUp_.8s_ease-out_both] sm:top-[12%]">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-[8px] font-extrabold tracking-[.16em] sm:text-[9px]"
              style={{ color: C.gold }}
            >
              <Sparkles size={13} />
              PACKAGING MADE SIMPLE
            </div>

            <h1 className="mt-5 text-[32px] font-black leading-[1.12] tracking-[-.055em] text-white sm:text-4xl lg:text-5xl xl:text-[58px]">
              Your business.
              <br />
              <span style={{ color: C.gold }}>Your packaging.</span>
            </h1>

            <p className="mt-3 text-xs text-white/60 sm:text-sm">
              Everything in its right place.
            </p>
          </div>

          {/* Orbit animation */}
          <div className="absolute left-[50%] top-[72%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[330px] sm:w-[330px] lg:h-[390px] lg:w-[390px]" />

          <div
            className="absolute left-[50%] top-[72%] h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 animate-[spin_35s_linear_infinite] rounded-full border border-dashed sm:h-[280px] sm:w-[280px] lg:h-[310px] lg:w-[310px]"
            style={{ borderColor: `${C.gold}55` }}
          />

          {/* Floating boxes */}
          <PackageBox className="left-[45%] top-[58%] scale-[.65] sm:left-[48%] sm:top-[58%] sm:scale-75 lg:left-[48%] lg:top-[57%] lg:scale-100" />
          <PackageBox className="left-[18%] top-[72%] scale-[.42] opacity-70 sm:left-[24%] sm:top-[72%] sm:scale-50 lg:left-[22%] lg:top-[64%] lg:scale-[.65]" delay="-2s" />

          <FloatingTag
            icon={Truck}
            className="right-[5%] top-[56%] scale-[.85] sm:right-[7%] sm:top-[51%] sm:scale-100"
          >
            On the move
          </FloatingTag>

          <FloatingTag
            icon={ShieldCheck}
            className="bottom-[8%] left-[5%] scale-[.85] sm:bottom-[12%] sm:left-[9%] sm:scale-100"
          >
            Secure access
          </FloatingTag>

          <div className="absolute bottom-5 left-[10%] right-[10%] hidden items-center gap-3 text-[8px] font-extrabold tracking-[.17em] text-white/50 lg:flex">
            <span>PACK SMARTER</span>
            <div className="h-px flex-1 bg-white/20" />
            <span>MOVE FORWARD</span>
          </div>
        </section>

        {/* Login panel */}
        <section className="relative flex items-center justify-center overflow-hidden bg-white px-6 py-10 sm:px-10 lg:px-12 xl:px-20">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full border"
            style={{ borderColor: `${C.gold}30` }}
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-28 h-60 w-60 rounded-full border"
            style={{ borderColor: `${C.gold}25` }}
          />

          <div className="relative z-10 w-full max-w-[390px] animate-[fadeUp_.8s_.1s_ease-out_both]">
            <div
              className="mb-6 grid h-12 w-12 place-items-center rounded-2xl"
              style={{ background: "#EEF4F6", color: C.blue }}
            >
              <LockKeyhole size={22} />
            </div>

            <h2
              className="text-3xl font-black tracking-[-.055em] sm:text-4xl"
              style={{ color: C.navy }}
            >
              Welcome back<span style={{ color: C.gold }}>.</span>
            </h2>
            <p className="mb-8 mt-2 text-sm text-slate-400">
              Sign in to continue.
            </p>

            <form onSubmit={submit} noValidate className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-extrabold"
                  style={{ color: C.navy }}
                >
                  Email address
                </label>

                <div
                  className={`flex h-[53px] items-center gap-3 rounded-xl border bg-slate-50/60 px-4 transition-all focus-within:bg-white focus-within:ring-4 ${
                    errors.email
                      ? "border-red-300"
                      : "border-slate-200 focus-within:border-[#205778] focus-within:ring-[#205778]/10"
                  }`}
                >
                  <Mail size={18} className="shrink-0 text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((prev) => ({ ...prev, email: "" }));
                    }}
                    className="h-full w-full min-w-0 bg-transparent text-xs text-[#123451] outline-none placeholder:text-slate-400"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-[10px] font-semibold text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-[11px] font-extrabold"
                    style={{ color: C.navy }}
                  >
                    Password
                  </label>
                  <a
                    href="/forgot-password"
                    className="text-[10px] font-extrabold hover:underline"
                    style={{ color: C.blue }}
                  >
                    Forgot password?
                  </a>
                </div>

                <div
                  className={`flex h-[53px] items-center gap-3 rounded-xl border bg-slate-50/60 px-4 transition-all focus-within:bg-white focus-within:ring-4 ${
                    errors.password
                      ? "border-red-300"
                      : "border-slate-200 focus-within:border-[#205778] focus-within:ring-[#205778]/10"
                  }`}
                >
                  <LockKeyhole size={18} className="shrink-0 text-slate-400" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrors((prev) => ({ ...prev, password: "" }));
                    }}
                    className="h-full w-full min-w-0 bg-transparent text-xs text-[#123451] outline-none placeholder:text-slate-400"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="grid place-items-center text-slate-400 transition-colors hover:text-[#123451]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1.5 text-[10px] font-semibold text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              <label className="flex cursor-pointer items-center gap-2.5 pt-1 text-[11px] text-slate-500">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 cursor-pointer accent-[#123451]"
                />
                Remember me
              </label>

              <button
                type="submit"
                className="group flex h-[54px] w-full items-center justify-between rounded-xl pl-5 pr-1.5 text-xs font-extrabold text-white shadow-lg shadow-[#123451]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                style={{ background: C.navy }}
              >
                <span>Sign in</span>
                <span
                  className="grid h-10 w-10 place-items-center rounded-lg transition-transform duration-300 group-hover:translate-x-0.5"
                  style={{ background: C.gold, color: C.navy }}
                >
                  <ArrowRight size={18} />
                </span>
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-slate-400">
              <ShieldCheck size={15} className="text-emerald-600" />
              Protected account access
            </div>

            <p className="mt-6 text-center text-[11px] text-slate-400 sm:hidden">
              New to Prowrrap?{" "}
              <a
                href="/signup"
                className="font-extrabold"
                style={{ color: C.blue }}
              >
                Create account
              </a>
            </p>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -12px; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}

export default Login;