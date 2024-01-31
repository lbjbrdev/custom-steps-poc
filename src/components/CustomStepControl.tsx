import React from 'react'
import CustomStep from './CustomStep'
import Step1 from './Step1';

interface IProps {
    stepChildrens: Array<React.JSX.Element>;
}

export default function CustomStepControl({ stepChildrens }: IProps) {
    const [steps, setSteps] = React.useState<Array<string>>(['Passo 1', 'Passo 2', 'Passo 3']);
    const [activeSteps, setActiveSteps] = React.useState<Array<string>>(['Passo 1']);
    const [formIsValid, setFormIsValid] = React.useState<boolean>(true);

    const renderStepChildren = () => {
        switch (activeSteps.findLast(step => step)) {
            case 'Passo 1':
                return stepChildrens[0]
            case 'Passo 2':
                return stepChildrens[1]
            case 'Passo 3':
                return stepChildrens[2]
        }
    };

    const onNextStep = () => {
        if (!formIsValid) return;

        switch (activeSteps.findLast(step => step)) {
            case 'Passo 1':
                setActiveSteps(oldState => [...oldState, 'Passo 2']);
                return
            case 'Passo 2':
                setActiveSteps(oldState => [...oldState, 'Passo 3']);
                return
        }
    };

    const onPreviousStep = () => {
        switch (activeSteps.findLast(step => step)) {
            case 'Passo 2':
                setActiveSteps(['Passo 1']);
                return
            case 'Passo 3':
                setActiveSteps(['Passo 1', 'Passo 2']);
                return
        }
    };

    return (
        <div>
            <CustomStep
                steps={steps}
                activeSteps={activeSteps}
                onChangeActiveSteps={setActiveSteps}
            />

            {renderStepChildren()}

            <div className='flex items-center justify-center gap-10 mt-40'>
                <button className='bg-slate-500 text-white p-2 rounded-md' onClick={onPreviousStep}>Anterior</button>
                <button className='bg-slate-500 text-white p-2 rounded-md' onClick={onNextStep}>Proximo</button>
            </div>
        </div>
    )
}
