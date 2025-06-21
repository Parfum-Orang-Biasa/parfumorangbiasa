'use client';

import React, { useEffect, useRef, useState } from "react";
import { getBestMatchingPerfume } from "../../../lib/getmatchingperfume";
import { Perfume } from "../../../data/type";
import { getPerfumeData } from "../../../lib/perfumedata";
import { getQuestionData } from "../../../lib/questiondata";
import { Button, LinearProgress, Box } from "@mui/material";
import Image from 'next/image'
import { SiShopee } from "react-icons/si";
import confetti from "canvas-confetti";

const Recommendation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userAnswers, setUserAnswers] = useState<string[][]>([]);
  const [showResult, setShowResult] = useState(false);
  const [progressAnimation, setProgressAnimation] = useState(0);
  const [resultAnimation, setResultAnimation] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const [resultPerfume, setResultPerfume] = useState<(Perfume & { matchedTags: string[] }) | null>(null);
  const resultSectionRef = useRef<HTMLDivElement>(null); 
  const perfumes = getPerfumeData();
  const questions = getQuestionData();

  useEffect(() => {
    const animateProgress = () => {
      setProgressAnimation(0);
      
      setTimeout(() => {
        setProgressAnimation(0.5);
      }, 100);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateProgress();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(progressRef.current);
      }
    };
  }, [currentStep]); 

  useEffect(() => {
    if (showResult && userAnswers.length === questions.length) {
      const result = getBestMatchingPerfume(userAnswers, perfumes);
      setResultPerfume(result);
      
      setTimeout(() => {
        setResultAnimation(true);
        triggerConfetti(result);
        resultSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  }, [showResult, userAnswers]);


  const handleAnswer = (selectedValue: string[]) => {
    const newAnswers = [...userAnswers, selectedValue];
    setUserAnswers(newAnswers);
  
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Jangan hitung langsung di sini
      setShowResult(true);
    }
  };

    const triggerConfetti = (result: Perfume) => {
      const colors = Array.isArray(result.wavecolor) && result.wavecolor.length > 0
        ? result.wavecolor
        : ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"];
    
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors });
      setTimeout(() => confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 }, colors }), 250);
      setTimeout(() => confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 }, colors }), 400);
    };


  const resetQuiz = () => {
    setCurrentStep(1);
    setUserAnswers([]);
    setShowResult(false);
    setResultAnimation(false);
  };
  
  const progress = ((currentStep - 1 + progressAnimation) / questions.length) * 100;
  
  if (showResult && resultPerfume) {
    const result = resultPerfume;
    return (
      <div ref={resultSectionRef} className="w-full h-[944px] tablet:h-[900px] flex flex-col items-center justify-center gap-[80px] tablet:gap-[128px]">
        <div
          className={`w-full h-auto tablet:w-[457px] flex flex-col items-center gap-[32px] transition-all duration-1000 ease-out ${
            resultAnimation
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div
            className={`text-[20px] leading-[20px] text-center tablet:text-[24px] tablet:leading-[28px] w-full transition-all duration-700 delay-200 ${
              resultAnimation
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Kami yakin ini cocok buat kamu.
          </div>
          <div
            className={`w-full tablet:w-[386px] h-auto flex flex-col items-center justify-center gap-[28px] transition-all duration-700 delay-400 ${
              resultAnimation
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-full h-auto flex flex-col gap-[32px] items-center justify-center tablet:w-[361px] tablet:gap-[64px]">
              <div
                className={`w-[290px] h-[250px] tablet:w-[348px] tablet:h-[295.4px] flex items-center justify-center transition-all duration-700 delay-600 ${
                  resultAnimation
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-90 rotate-2"
                }`}
              >
                <Image
                  src="https://placehold.co/560x530?text=recommendation"
                  alt="recom"
                  width={290}
                  height={250}
                  unoptimized
                  className="object-cover tablet:w-full tablet:h-[295.4px] tablet:w-[348px]"
                />
              </div>
              <div
                className={`w-full h-auto flex flex-col items-center gap-[32px] transition-all duration-700 delay-800 ${
                  resultAnimation
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="font-nordique text-[52px] leading-[28px] tablet:text-[64px]">
                  {result.name}
                </div>
                <div className="text-[14px] leading-[14px] tablet:text-[16px] tablet:leading-[30px] text-center">
                  {result.subtitle}
                </div>
              </div>
            </div>
          
          </div>
          <div
            className={`w-full h-auto flex flex-col items-center gap-[16px] tablet:gap-[24px] tablet:flex-row transition-all duration-700 delay-1200 ${
              resultAnimation
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              type="button"
              variant="outlined"
              href={result.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[300px] h-[48px] tablet:h-[54px] items-center justify-center flex flex-rows gap-[8px]"
              sx={{
                borderColor: "#B6270A",
                backgroundColor: "#EE4D2D",
                borderWidth: "1.79px",
                borderRadius: "15px",
                py: "12px",
                px: "24px",
                textTransform: "none",
                fontSize: "16px",
                lineHeight: "28px",
                "@media (min-width: 768px)": {
                  borderWidth: "1.79px",
                  borderRadius: "17.95px",
                  py: "8px",
                  px: "20px",
                },
                "&:hover": {
                  borderColor: "#8E1E06",
                  backgroundColor: "#C13B1A",
                },
              }}
            >
              <SiShopee color="#f8f8f8" size={28} />
              <div className="text-[16px] leading-[28px] text-[#f8f8f8] text-center">
                Coba aroma ini
              </div>
            </Button>
            <Button
              type="button"
              onClick={resetQuiz}
              variant="outlined"
              className="w-[300px] h-[48px] tablet:h-[54px] items-center justify-center flex flex-rows"
              sx={{
                borderColor: "var(--obsidian-300)",
                color: "var(--obsidian-700)",
                borderWidth: "1.79px",
                borderRadius: "15px",
                py: "12px",
                px: "24px",
                textTransform: "none",
                fontSize: "16px",
                lineHeight: "28px",
                "&:hover": {
                  borderColor: "var(--obsidian-700)",
                  color: "var(--obsidian-800)",
                  backgroundColor: "rgba(199,199,199,0.08)",
                },
              }}
            >
              <div className="text-[16px] leading-[28px] text-center">
                Coba aroma lain
              </div>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[944px] flex flex-col items-center justify-center gap-[80px] tablet:gap-[128px]">
      <div className="w-auto h-auto flex flex-col items-center gap-[16px]">
        <div className="w-auto h-auto flex flex-col items-center gap-[22px]">
          <div className="flex items-center">
            <div className="font-nordique text-[36px] leading-[36px] text-center tablet:text-[48px] tablet:leading-[48px]">
              bingung pilih varian yang mana
              <span className="font-bold font-work-sans">?</span>
            </div>
          </div>
          <div className="text-obsidian-700 text-[14px] leading-[20px] text-center tablet:text-[16px] tablet:leading-[24px]">
            Jawab {questions.length} pertanyaan singkat ini untuk tahu parfum yang paling pas
            buat kamu!
          </div>
        </div>

        <div className="w-full h-auto flex flex-col items-center justify-center gap-[8px]">
          <div className="w-full h-auto flex items-center justify-between">
              <div className="text-[14px] tablet:text-[16px]"><span className="font-bold">step {currentStep}</span> of {questions.length}</div>
          </div>
          <Box sx={{ width: '100%' }} ref={progressRef}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 8,
                borderRadius: 20,
                backgroundColor: 'var(--obsidian-300)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: 'var(--obsidian-800)', 
                  borderRadius: 4,
                  transition: 'transform 1s ease-in-out',
                },
              }}
            />
          </Box>
        </div>
      </div>

      {questions.map((questionData) => {
        if (questionData.step === currentStep) {
          return (
            <div key={questionData.step} className="text-center w-[342px] h-auto flex flex-col items-center gap-[36px] tablet:w-[866px]">
              <div className="w-[318px] phone:w-full phone:h-auto text-[16px] leading-[20px] text-center tablet:text-[24px] tablet:leading-[36px]">
                {questionData.question}
              </div>

              <div className="w-full h-auto flex flex-col gap-[16px] items-center justify-center tablet:flex-row tablet:gap-[32px]">
                {questionData.options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    className="w-[318px] phone:w-full phone:h-auto gap-[8px] flex items-center justify-center tablet:w-[236px] tablet:h-[137px] tablet:flex-col tablet:gap-[24px]"
                    onClick={() => handleAnswer(option.value)}
                    sx={{
                      borderColor: 'var(--obsidian-300)',
                      color: 'var(--obsidian-700)',
                      textTransform: 'none',
                      py: '16px', 
                      borderWidth: '0.37px',
                      borderRadius: '7.2px',
                      '@media (min-width: 768px)': {
                          p: '16px', 
                          borderWidth: '0.81px',
                          borderRadius: '16px',
                          gap: '16px',
                        },
                      '&:hover': {
                        borderColor: 'var(--obsidian-700)',
                        color: 'var(--obsidian-800)',
                        backgroundColor: 'rgba(199,199,199,0.08)', 
                      },
                    }}
                  >
                    <div className="text-[20px] flex items-center justify-center tablet:text-[24px]">
                      {option.emoji}
                    </div>
                    <div className="text-center text-[14px] leading-[14px] tablet:text-[16px] tablet:leading-[23.1px]">{option.text}</div>
                  </Button>
                ))}
              </div>
            </div>
          )
        }
        return null
      })}

    </div>
  );
};

export default Recommendation;