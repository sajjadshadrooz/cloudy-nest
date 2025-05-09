import { Section } from "@/components/section/section";
import RegisterForm from "./registerForm";

export default function RegisterLayout() {
  return (
    <div className="w-full px-5 md:w-[480px]">
      <Section title="Sign up">
        <RegisterForm />
      </Section>
    </div>
  );
}
