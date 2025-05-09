import { Section } from "@/components/section/section";
import LoginForm from "./loginForm";

export default function LoginLayout() {
  return (
    <div className="w-full px-5 md:w-[480px]">
      <Section title="Login">
        <LoginForm />
      </Section>
    </div>
  );
}
