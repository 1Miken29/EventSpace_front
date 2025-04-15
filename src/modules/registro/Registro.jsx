import { useState } from "react";
import LayoutForm from "../components/LayoutForm";
import RegisterP from "../registro/components/RegisterP"
import RegisterP2 from "../registro/components/RegisterP2"
import { motion, AnimatePresence } from "motion/react";

export default function Registro() {
  const [step, setStep] = useState(1);

  return (
    <LayoutForm>
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md"
          >
            <RegisterP onNext={() => setStep(2)} />
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md"
          >
            <RegisterP2 onBack={() => setStep(1)} />
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutForm>
  );
}
