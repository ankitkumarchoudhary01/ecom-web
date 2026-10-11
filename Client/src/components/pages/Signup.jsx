import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Package,
  Phone,
  ShieldCheck,
  Truck,
  UserRound,
  Sparkles,
} from "lucide-react";

const COLORS = {
  navy: "#173F67",
  blue: "#245783",
  gold: "#F3A928",
};

const inputBase =
  "w-full rounded-xl border border-[#DCE8F2] bg-[#F9FBFE] py-3.5 pl-10 pr-4 text-sm text-[#173F67] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-[#B7CEE2] focus:border-[#6D9DC5] focus:bg-white focus:ring-4 focus:ring-[#DCEAF7]/70";

function Logo() {
  return (
    <a href="/" className="group inline-flex items-center gap-3">
      <div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-[#E3EFF9] text-xl font-black text-[#173F67] transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105">
        P
        <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#F9D99B]" />
      </div>

      <div>
        <div className="text-[22px] font-black leading-none tracking-tight text-[#173F67]">
          prowrrap
        </div>
        <div className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#D99A28]">
          packaging solutions
        </div>
      </div>
    </a>
  );
}

function InputField({
  label,
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
}) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="min-w-0">
      <label className="mb-2 block text-xs font-bold tracking-wide text-[#234664]">
        {label}
      </label>

      <div className="group relative">
        <Icon
          size={17}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#92A8BC] transition-colors duration-300 group-focus-within:text-[#245783]"
        />

        <input
          type={isPassword ? (visible ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          className={`${inputBase} ${
            isPassword ? "pr-11" : ""
          } ${error ? "!border-red-300 !ring-2 !ring-red-50" : ""}`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((current) => !current)}
            aria-label={visible ? "Hide password" : "Show password"}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition-colors hover:text-[#173F67] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9CC2E3]"
          >
            {visible ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        )}
      </div>

      {error && (
        <p role="alert" className="mt-1.5 animate-fade-in text-[11px] font-semibold text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

function Feature({ icon: Icon, title, text, delay = "" }) {
  return (
    <div
      className={`group flex gap-4 animate-fade-up ${delay}`}
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#DFEAF4] bg-white text-[#245783] shadow-[0_4px_14px_rgba(36,87,131,0.04)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#C7DDF0] group-hover:bg-[#F0F7FD] group-hover:shadow-md">
        <Icon size={19} strokeWidth={1.8} />
      </div>

      <div className="pt-0.5">
        <h3 className="text-sm font-extrabold text-[#173F67]">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-[#8295A8]">{text}</p>
      </div>
    </div>
  );
}

function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (event) => {
    const value = event.target.value;

    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "", submit: "" }));
    setSubmitted(false);
  };

  const submit = (event) => {
    event.preventDefault();

    const next = {};

    if (!form.firstName.trim()) {
      next.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      next.lastName = "Last name is required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      next.phone = "Phone number is required";
    }

    if (form.password.length < 8) {
      next.password = "Use at least 8 characters";
    }

    if (form.password !== form.confirmPassword) {
      next.confirmPassword = "Passwords do not match";
    }

    if (!terms) {
      next.terms = "Please accept the terms and privacy policy";
    }

    setErrors(next);

    if (Object.keys(next).length === 0) {
      // Connect your MERN registration API here.
      setSubmitted(true);
    }
  };

  return (
    <div className="signup-page relative min-h-screen overflow-hidden bg-[#F5F9FD] text-[#173F67]">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }

        @keyframes floatReverse {
          0%, 100% { transform: translateY(0) rotate(5deg); }
          50% { transform: translateY(10px) rotate(-2deg); }
        }

        @keyframes shimmer {
          0% { background-position: 180% 0; }
          100% { background-position: -180% 0; }
        }

        .animate-fade-up {
          animation: fadeUp .65s cubic-bezier(.2,.7,.2,1) both;
        }

        .animate-fade-in {
          animation: fadeIn .3s ease-out both;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }

        .float-box { animation: float 6s ease-in-out infinite; }
        .float-box-reverse { animation: floatReverse 7s ease-in-out infinite; }

        .signup-page button,
        .signup-page a {
          -webkit-tap-highlight-color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          .signup-page *,
          .signup-page *::before,
          .signup-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 -top-36 h-[420px] w-[420px] rounded-full bg-[#E4F0FB]/80 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-36 h-[480px] w-[480px] rounded-full bg-[#FBEED5]/50 blur-3xl" />


      {/* Main */}
      <main className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-12 pt-5 sm:px-8 md:pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:pb-20 lg:pt-8">
        {/* Hero */}
        <section className="hidden lg:block">
          <div className="max-w-lg">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#E1EAF3] bg-white/80 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#245783] shadow-sm">
              <Sparkles size={14} className="text-[#E5A52F]" />
              Packaging made simpler
            </div>

            <h1 className="animate-fade-up delay-100 mt-7 text-5xl font-black leading-[1.12] tracking-[-0.045em] text-[#173F67] xl:text-[58px]">
              Your next big idea
              <span className="relative mt-1 block text-[#5283B0]">
                starts with a
                <span className="relative ml-3 inline-block">
                  package.
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 180 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8C42 2 116 1 176 7"
                      stroke="#F3A928"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="animate-fade-up delay-200 mt-7 max-w-md text-sm leading-7 text-[#7D91A5]">
              Create your Prowrrap account and bring your packaging orders,
              purchases, and deliveries together in one simple place.
            </p>

            {/* Decorative illustration */}
            <div className="relative mt-8 flex h-48 max-w-md items-center justify-center overflow-hidden rounded-[28px] border border-white/90 bg-gradient-to-br from-[#EAF4FD] via-[#F5F9FE] to-[#FDF5E7]">
              <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-white/60 blur-xl" />
              <div className="absolute bottom-5 right-12 h-24 w-24 rounded-full bg-[#F8E4B8]/50 blur-xl" />

              <div className="float-box relative z-10 grid h-28 w-32 place-items-center rounded-2xl border border-[#D4E2EF] bg-white shadow-[0_18px_38px_rgba(36,87,131,0.12)]">
                <div className="absolute inset-x-0 top-0 h-3 rounded-t-2xl bg-[#DDEBF8]" />
                <Package size={48} strokeWidth={1.25} className="text-[#5283B0]" />
                <div className="absolute bottom-3 text-[8px] font-black uppercase tracking-[0.2em] text-[#A6B9CA]">
                  Prowrrap
                </div>
              </div>

              <div className="float-box-reverse absolute right-10 top-6 grid h-14 w-14 place-items-center rounded-2xl border border-white bg-[#FFF9EF] text-[#D89A29] shadow-[0_10px_25px_rgba(36,87,131,0.07)]">
                <Truck size={24} strokeWidth={1.5} />
              </div>

              <div className="float-box absolute bottom-5 left-10 grid h-12 w-12 place-items-center rounded-xl border border-white bg-white text-[#6B9B85] shadow-md">
                <Check size={22} />
              </div>

              <div className="absolute bottom-4 right-5 rounded-full border border-white bg-white/80 px-3 py-1.5 text-[9px] font-bold text-[#8295A8]">
                Packed with care
              </div>
            </div>

            <div className="mt-9 space-y-6">
              <Feature
                icon={Truck}
                title="Know where your orders are"
                text="Stay in the loop from dispatch to delivery."
                delay="delay-200"
              />

              <Feature
                icon={Package}
                title="Everything in one place"
                text="Revisit your purchases and keep orders organised."
                delay="delay-300"
              />

              <Feature
                icon={ShieldCheck}
                title="Your account, protected"
                text="A straightforward and secure account experience."
                delay="delay-400"
              />
            </div>

            <div className="animate-fade-up delay-500 mt-9 flex items-center gap-3 border-t border-[#E3EBF3] pt-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#E6F1FA] text-[#245783]">
                <LockKeyhole size={18} />
              </div>
              <div>
                <p className="text-xs font-extrabold text-[#234664]">
                  Made for growing businesses
                </p>
                <p className="mt-1 text-[11px] text-[#8B9DAF]">
                  A smoother way to manage packaging purchases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Signup form */}
        <section className="mx-auto w-full max-w-[570px] animate-fade-up lg:ml-auto">
          <div className="relative overflow-hidden rounded-[30px] border border-white bg-white/95 p-6 shadow-[0_24px_80px_rgba(35,75,112,0.09)] backdrop-blur-xl sm:p-9 md:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D6E8F8] via-[#F3A928] to-[#B8D7F0]" />

            <div className="mb-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDF5FC] text-[#245783] lg:hidden">
                <Package size={23} />
              </div>

              <div className="mb-2 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#D39A34]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F3A928]" />
                Get started for free
              </div>

              <h2 className="text-[29px] font-black tracking-[-0.04em] text-[#173F67] sm:text-[32px]">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#899BAD]">
                Just a few details to get you started.
              </p>
            </div>

            {submitted ? (
              <div
                role="status"
                className="animate-fade-up rounded-2xl border border-[#D5EBDD] bg-[#F2FAF5] px-5 py-10 text-center"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#DDF2E4] text-[#39815A]">
                  <Check size={28} />
                </div>
                <h3 className="mt-5 text-xl font-black text-[#173F67]">
                  Details validated!
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[#718D7B]">
                  Your form is ready. Connect your registration API to finish
                  creating your Prowrrap account.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-xl border border-[#CBE5D4] bg-white px-5 py-3 text-sm font-bold text-[#347B53] transition hover:bg-[#EAF7EF]"
                >
                  Back to form
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <InputField
                    label="First name"
                    icon={UserRound}
                    placeholder="e.g. Rahul"
                    value={form.firstName}
                    onChange={set("firstName")}
                    error={errors.firstName}
                    autoComplete="given-name"
                  />

                  <InputField
                    label="Last name"
                    icon={UserRound}
                    placeholder="e.g. Sharma"
                    value={form.lastName}
                    onChange={set("lastName")}
                    error={errors.lastName}
                    autoComplete="family-name"
                  />
                </div>

                <InputField
                  label="Work email address"
                  icon={Mail}
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={set("email")}
                  error={errors.email}
                  autoComplete="email"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <InputField
                    label="Phone number"
                    icon={Phone}
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={set("phone")}
                    error={errors.phone}
                    autoComplete="tel"
                  />

                  <InputField
                    label="Company name"
                    icon={Building2}
                    placeholder="Your company"
                    value={form.company}
                    onChange={set("company")}
                    autoComplete="organization"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <InputField
                    label="Password"
                    icon={LockKeyhole}
                    type="password"
                    placeholder="At least 8 characters"
                    value={form.password}
                    onChange={set("password")}
                    error={errors.password}
                    autoComplete="new-password"
                  />

                  <InputField
                    label="Confirm password"
                    icon={LockKeyhole}
                    type="password"
                    placeholder="Re-enter password"
                    value={form.confirmPassword}
                    onChange={set("confirmPassword")}
                    error={errors.confirmPassword}
                    autoComplete="new-password"
                  />
                </div>

                <div className="pt-1">
                  <label className="group flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={terms}
                      onChange={(event) => {
                        setTerms(event.target.checked);
                        setErrors((current) => ({
                          ...current,
                          terms: "",
                        }));
                      }}
                      className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-[#CCDCEB] accent-[#245783] focus-visible:ring-2 focus-visible:ring-[#9CC2E3]"
                    />

                    <span className="text-xs leading-5 text-[#8799AA] transition-colors group-hover:text-[#627C94]">
                      I agree to Prowrrap&apos;s{" "}
                      <a
                        href="/terms"
                        className="font-bold text-[#245783] underline decoration-[#C4D9EC] underline-offset-2 hover:decoration-[#245783]"
                      >
                        Terms &amp; Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        className="font-bold text-[#245783] underline decoration-[#C4D9EC] underline-offset-2 hover:decoration-[#245783]"
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>

                  {errors.terms && (
                    <p role="alert" className="mt-2 animate-fade-in text-[11px] font-semibold text-red-500">
                      {errors.terms}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#245783] px-5 py-4 text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(36,87,131,0.17)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1B496F] hover:shadow-[0_12px_26px_rgba(36,87,131,0.23)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D6E8F8] active:translate-y-0"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Create account</span>
                  <ArrowRight
                    size={17}
                    className="relative transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                {errors.submit && (
                  <p role="alert" className="text-xs text-red-500">
                    {errors.submit}
                  </p>
                )}
              </form>
            )}

            {!submitted && (
              <>
                <div className="my-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-[#EAF0F5]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A0AFBD]">
                    or continue with
                  </span>
                  <div className="h-px flex-1 bg-[#EAF0F5]" />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    // Connect Google OAuth here.
                  }}
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#DDE7F0] bg-white px-5 py-3.5 text-sm font-bold text-[#36566F] transition-all duration-300 hover:border-[#C4D8E9] hover:bg-[#F8FBFE] hover:shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#DCEAF7]"
                >
                  <svg
                    viewBox="0 0 48 48"
                    className="h-[18px] w-[18px]"
                    aria-hidden="true"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      transform="translate(0 4)"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.72 7.18l7.62 5.91c4.45-4.11 7.14-10.17 7.14-17.56z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a23.9 23.9 0 0 0 0 21.56l7.98-6.19z"
                      transform="translate(0 0)"
                    />
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.91-5.79l-7.62-5.91c-2.11 1.41-4.81 2.25-8.29 2.25-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      transform="translate(0 -2)"
                    />
                  </svg>
                  Continue with Google
                </button>
              </>
            )}

            <p className="mt-7 text-center text-xs text-[#91A1B0]">
              Already have an account?
              <a
                href="/login"
                className="ml-1.5 font-extrabold text-[#245783] underline decoration-[#C4D9EC] underline-offset-2 transition-colors hover:text-[#173F67]"
              >
                Sign in
              </a>
            </p>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-medium tracking-wide text-[#95A5B4]">
            <ShieldCheck size={14} className="text-[#78A48B]" />
            Your information is protected and never sold.
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#E5EDF5]/80 px-5 py-5 text-center text-[10px] tracking-wide text-[#9AAAB8]">
        © {new Date().getFullYear()} Prowrrap Packaging Solutions
      </footer>
    </div>
  );
}

export default Signup;