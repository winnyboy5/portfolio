"use client";
import React, { useRef, useState } from "react";
import BorderButton from "./BorderButton";
import Lottie from "react-lottie";
import * as copyIconData from "@/assets/lottie/copy.json";
import * as downloadIconData from "@/assets/lottie/download.json";

interface ButtonState {
    active: boolean;
    ref: React.RefObject<any>;
}

interface ButtonStates {
    copy: ButtonState;
    download: ButtonState;
}

const HeroClient: React.FC = () => {
    const [buttonStates, setButtonStates] = useState<ButtonStates>({
        copy: { active: false, ref: useRef<any>(null) },
        download: { active: false, ref: useRef<any>(null) }
    });

    const createLottieOptions = (animationData: any) => ({
        loop: false,
        autoplay: false,
        animationData,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' as const }
    });

    const handleButtonAction = (action: keyof ButtonStates, duration: number): void => {
        setButtonStates(prev => ({
            ...prev,
            [action]: { ...prev[action], active: true }
        }));

        const ref = buttonStates[action].ref.current;
        if (ref && ref.anim) {
            ref.anim.autoplay = true;
            ref.anim.loop = true;
        }

        setTimeout(() => {
            setButtonStates(prev => ({
                ...prev,
                [action]: { ...prev[action], active: false }
            }));

            if (ref && ref.anim) {
                ref.anim.autoplay = false;
                ref.anim.loop = false;
            }
        }, duration);
    };

    const handleCopy = (): void => {
        navigator.clipboard.writeText("winnyboy5@gmail.com")
            .then(() => handleButtonAction('copy', 3000))
            .catch(err => console.error('Failed to copy: ', err));
    };

    const handleDownload = (url: string): void => {
        handleButtonAction('download', 4000);
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'AswinKrishnamoorthy.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Download failed:', error));
    };

    return (
        <div className="flex gap-2 justify-center">
            <BorderButton
                title={buttonStates.copy.active ? "Copied!" : "Copy Email"}
                icon={
                    <Lottie
                        options={createLottieOptions(copyIconData)}
                        height={24}
                        width={24}
                        ref={buttonStates.copy.ref}
                    />
                }
                iconPos="left"
                handleClick={handleCopy}
            />
            <BorderButton
                title={buttonStates.download.active ? "Downloading..." : "Get My Resume!"}
                icon={
                    <Lottie
                        options={createLottieOptions(downloadIconData)}
                        height={24}
                        width={24}
                        ref={buttonStates.download.ref}
                    />
                }
                handleClick={() => handleDownload('/pdf/AswinResume.pdf')}
                iconPos="left"
            />
        </div>
    );
};

export default HeroClient;