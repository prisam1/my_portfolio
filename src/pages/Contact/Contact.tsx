import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Check, Copy, Loader2, Mail, MapPin, Send } from "lucide-react";
import { CURRENT_ROLE, PROFILE } from "../../constants";
import { ScrollAnimation } from "../../components/ScrollAnimation";
import { SectionHeading } from "../../components/SectionHeading";
import { SocialLinks } from "../../components/SocialLinks";
import { cn } from "../../lib/utils";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** honeypot: real users never see or fill this */
  company: string;
}

const EMAILJS = {
  serviceId: "service_5gvfxpi",
  templateId: "template_t03iyof",
  publicKey: "MJYnYNVAmxQAxfPL4",
};

const MESSAGE_MAX = 2000;

const inputClass =
  "w-full rounded-xl border border-purple-500 bg-transparent p-4 text-white placeholder-gray-500 transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500";

const FieldError = ({ id, message }: { id: string; message?: string }) =>
  message ? (
    <p id={id} role="alert" className="mt-1.5 text-sm text-red-400">
      {message}
    </p>
  ) : null;

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    mode: "onTouched",
    defaultValues: { name: "", email: "", subject: "", message: "", company: "" },
  });

  const messageLength = watch("message")?.length ?? 0;

  const onSubmit = async ({ company, ...formData }: ContactForm) => {
    if (company) return; // bot
    try {
      // EmailJS SDK is loaded on demand so it isn't in the initial bundle
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, formData, { publicKey: EMAILJS.publicKey });
      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Failed to send the message. Please try again or email me directly.");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
      <SectionHeading
        eyebrow="Let's talk"
        title={<>Get In <span className="text-purple-500">Touch</span></>}
        subtitle="Whether you want to discuss a role, talk about a project collaboration, or just say hi, I'd love to hear from you."
      />

      <ScrollAnimation>
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-purple-500 bg-[#030014]/85 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          {/* Info panel */}
          <aside className="flex flex-col gap-6 border-b border-purple-500/40 bg-gradient-to-br from-purple-900/30 to-transparent p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div>
              <h3 className="border-b-2 border-purple-700 pb-2 text-2xl font-bold text-white">Contact Info</h3>
              <p className="mt-4 leading-relaxed text-gray-300">
                Simply fill the form and send me a message, or reach out on any of the platforms below.
              </p>
            </div>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-600 text-purple-400">
                  <Mail size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wider text-gray-400">Email</p>
                  <a href={`mailto:${PROFILE.email}`} className="block truncate text-white transition-colors hover:text-purple-400">
                    {PROFILE.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple-500/40 text-purple-300 transition-colors hover:border-purple-400 hover:text-white"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-600 text-purple-400">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">Location</p>
                  <p className="text-white">{PROFILE.location}</p>
                </div>
              </li>
            </ul>

            {CURRENT_ROLE && (
              <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-4">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-green-400">
                  <span className="h-2 w-2 rounded-full bg-[#1D874F] shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                  Currently
                </p>
                <p className="mt-2 text-sm text-gray-300">
                  {CURRENT_ROLE.role} at <span className="font-semibold text-white">{CURRENT_ROLE.company}</span>
                </p>
              </div>
            )}

            <div className="mt-auto">
              <p className="mb-3 text-xs uppercase tracking-wider text-gray-400">Find me on</p>
              <SocialLinks size="sm" />
            </div>
          </aside>

          {/* Form */}
          <form className="p-6 sm:p-8 lg:p-10" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h3 className="mb-6 text-2xl font-bold text-white">Send A Message</h3>

            {/* Honeypot (visually hidden, skipped by keyboard & screen readers) */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
              {...register("company")}
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  id="contact-name"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={cn(inputClass, errors.name && "border-red-500")}
                  {...register("name", {
                    required: "Name is required",
                    validate: (v) => v.trim().length >= 2 || "Please enter at least 2 characters",
                    maxLength: { value: 80, message: "Name is too long" },
                  })}
                />
                <FieldError id="contact-name-error" message={errors.name?.message} />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={cn(inputClass, errors.email && "border-red-500")}
                  {...register("email", {
                    required: "Email is required",
                    setValueAs: (v: string) => v.trim(),
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: "Enter a valid email" },
                  })}
                />
                <FieldError id="contact-email-error" message={errors.email?.message} />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-gray-300">
                Subject
              </label>
              <input
                id="contact-subject"
                placeholder="What's this about?"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                className={cn(inputClass, errors.subject && "border-red-500")}
                {...register("subject", {
                  required: "Subject is required",
                  validate: (v) => v.trim().length > 0 || "Subject is required",
                  maxLength: { value: 150, message: "Subject is too long" },
                })}
              />
              <FieldError id="contact-subject-error" message={errors.subject?.message} />
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <span className={cn("text-xs", messageLength > MESSAGE_MAX ? "text-red-400" : "text-gray-500")}>
                  {messageLength}/{MESSAGE_MAX}
                </span>
              </div>
              <textarea
                id="contact-message"
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={cn(inputClass, "min-h-[10rem] resize-y", errors.message && "border-red-500")}
                {...register("message", {
                  required: "Message is required",
                  validate: (v) => v.trim().length >= 10 || "Minimum 10 characters required",
                  maxLength: { value: MESSAGE_MAX, message: `Maximum ${MESSAGE_MAX} characters` },
                })}
              />
              <FieldError id="contact-message-error" message={errors.message?.message} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg border border-purple-500/50 bg-purple-800/10 px-5 py-4 text-sm font-semibold text-white shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={16} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="absolute inset-0 bg-purple-600 opacity-0 transition-opacity group-hover:opacity-20" />
            </button>
          </form>
        </div>
      </ScrollAnimation>
    </div>
  );
};
