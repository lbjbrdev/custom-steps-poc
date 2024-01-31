import CustomStepControl from "@/components/CustomStepControl";
import Step1 from "@/components/Step1";

export default function Home() {
  return (
    <CustomStepControl 
      stepChildrens={[<Step1 /> ,<p>Step 2</p>, <p>Step 3</p>]} 
    />
  )
}
