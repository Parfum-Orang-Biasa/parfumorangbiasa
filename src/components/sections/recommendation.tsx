'use client';

import React, { useState } from "react";
import { getBestMatchingPerfume } from "../../../lib/getmatchingperfume";
import { Perfume } from "../../../data/type";
import { getPerfumeData } from "../../../lib/perfumedata";
import { getQuestionData } from "../../../lib/questiondata";
import { Button, LinearProgress, Box } from "@mui/material";
import Image from 'next/image'
import { SiShopee } from "react-icons/si";

const Recommendation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userAnswers, setUserAnswers] = useState<string[][]>([]);
  const [showResult, setShowResult] = useState(false);
  const perfumes = getPerfumeData();
  const questions = getQuestionData();

  const handleAnswer = (selectedValue: string[]) => {
    const newAnswers = [...userAnswers, selectedValue];
    setUserAnswers(newAnswers);
    
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };
  
  const getPerfumeResult = (): Perfume => {
    return getBestMatchingPerfume(userAnswers, perfumes);
  };
  
  const resetQuiz = () => {
    setCurrentStep(1);
    setUserAnswers([]);
    setShowResult(false);
  };
  
  const progress = ((currentStep - 1) / questions.length) * 100
  
  if (showResult) {
    const result = getPerfumeResult();
    return <div className="w-full h-[944px] tablet:h-[900px] flex flex-col items-center justify-center gap-[80px] tablet:gap-[128px]">
      <div className="w-full h-auto tablet:w-[457px] flex flex-col items-center gap-[32px]">
        <div className="text-[20px] leading-[20px] text-center tablet:text-[24px] tablet:leading-[28px] w-full">Kami yakin ini cocok buat kamu.</div>
        <div className="w-full tablet:w-[386px]  h-auto flex flex-col items-center justify-center gap-[28px]">
          <div className="w-full h-auto flex flex-col gap-[32px] items-center justify-center tablet:w-[361px] tablet:gap-[64px]">
            <div className="w-[290px] h-[250px] tablet:w-[348px] tablet:h-[295.4px] flex items-center justify-center">
              <Image src="https://placehold.co/560x530?text=recommendation" alt="recom" width={290} height={250} unoptimized className='object-cover tablet:w-full tablet:h-[295.4px] tablet:w-[348px]'/> 
            </div>
            <div className="w-full h-auto flex flex-col items-center gap-[32px]">
              <div className="font-nordique text-[52px] leading-[28px] tablet:text-[64px]">{result.name}</div>
              <div className="font-bold text-[16px] leading-[16px] tablet:text-[20px] tablet:leading-[30px] text-center">{result.subtitle}</div>
            </div>
          </div>
          <div className="flex flex-rows-3 items-center gap-[16px]">
            {result.tags.map((tag: string, idx: number) => (
              <div
                key={idx}
                className="w-full rounded-[1000px] border-obsidian-700 border-[1.79px] gap-[8px] text-center justify-center py-[4px] px-[16px] tablet:py-[8px] tablet:px-[24px] text-[14px] leading-[14px] tablet:text-[16px] tablet:leading-[16px]"
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-center gap-[16px] tablet:gap-[24px] tablet:flex-row">
          <Button
            type="button"
            variant="outlined"
            href={result.link}
            className="w-[300px] h-[48px] tablet:h-[54px] items-center justify-center flex flex-rows gap-[8px]"
            sx={{
              borderColor: '#B6270A',
              backgroundColor: '#EE4D2D', 
              borderWidth: '1.79px',
              borderRadius: '15px',
              py: '12px',
              px: '24px',
              textTransform: 'none',
              fontSize: '16px', 
              lineHeight: '28px',
              '@media (min-width: 768px)': {
                  borderWidth: '1.79px',
                  borderRadius: '17.95px',
                  py: '8px',
                  px: '20px',
                },
              '&:hover': {
                borderColor: '#8E1E06',
                backgroundColor: '#C13B1A',
              },
            }}
            >
            <SiShopee color="#f8f8f8" size={28} />
            <div className="text-[16px] leading-[28px] text-[#f8f8f8] text-center">Coba aroma ini</div>
          </Button>
          <Button
            type="button"
            onClick={resetQuiz}
            variant="outlined"
            className="w-[300px] h-[48px] tablet:h-[54px] items-center justify-center flex flex-rows"
            sx={{
              borderColor: 'var(--obsidian-300)',
              color: 'var(--obsidian-700)',
              borderWidth: '1.79px',
              borderRadius: '15px',
              py: '12px',
              px: '24px',
              textTransform: 'none',
              fontSize: '16px', 
              lineHeight: '28px',
              '&:hover': {
                borderColor: 'var(--obsidian-700)',
                color: 'var(--obsidian-800)',
                backgroundColor: 'rgba(199,199,199,0.08)',
              },
            }}
          >
            <div className="text-[16px] leading-[28px] text-center">Coba aroma lain</div>
          </Button>
        </div>
      </div>
    </div>
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
          <Box sx={{ width: '100%' }}>
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