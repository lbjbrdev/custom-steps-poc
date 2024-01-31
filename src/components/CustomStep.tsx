import React from 'react'

interface IProps {
    steps: Array<string>;
    activeSteps: Array<string>;
    onChangeActiveSteps: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function CustomStep({ 
    steps,
    activeSteps,
    onChangeActiveSteps
}: IProps) {
    const handleChangeActiveStep = (currentStep: string) => {
        if (currentStep === 'Passo 1') {
            onChangeActiveSteps(['Passo 1']);
            return
        }

        if (currentStep === 'Passo 2' && activeSteps.includes('Passo 1')) {
            onChangeActiveSteps(['Passo 1', 'Passo 2']);
            return
        }

        if (currentStep === 'Passo 3' && activeSteps.includes('Passo 1') || activeSteps.includes('Passo 2')) {
            onChangeActiveSteps(['Passo 1', 'Passo 2', 'Passo 3']);
            return
        }
    };
    return (
        <main className='flex items-center justify-center gap-20 mt-10'>
            {steps.map(step => (
                <div className='cursor-pointer' key={step} onClick={() => handleChangeActiveStep(step)}>
                    <div className={`w-[2rem] h-[2rem] ${activeSteps.includes(step) ? 'bg-black' : 'bg-red-600'} rounded-full`} />
                    <p>{step}</p>
                </div>
            ))}
        </main>
    )
}
