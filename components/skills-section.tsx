"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillsRow1 = [
  "PYTHON",
  "PYTORCH",
  "NUMPY",
  "LORA",
  "QLORA",
  "QWEN",
  "LANGCHAIN",
  "RAG",
  "PROMPT ENGINEERING",
  "TTS/STT",
];

const skillsRow2 = [
  "UNREAL ENGINE 5",
  "BLENDER",
  "FASTER WHISPER",
  "ELEVENLABS",
  "CNN",
  "UNET",
  "RESNET",
  "DCGAN",
  "NEURAL STYLE TRANSFER",
  "MDP",
  "POLICY OPTIMIZATION",
];

const skillCategories = [
  {
    name: "Core ML & Deep Learning",
    skills:
      "PyTorch, NumPy, CNNs, UNet, ResNet, DCGAN, Neural Style Transfer, Image Segmentation",
  },
  {
    name: "LLM & NLP",
    skills:
      "LoRA, QLoRA, Qwen, LangChain, RAG, Prompt Engineering, Arabic NLP, Fine-tuning",
  },
  {
    name: "Real-Time AI Systems",
    skills:
      "Faster Whisper, ElevenLabs, TTS/STT, Live Link, ARKit, Sub-3s Latency Pipelines",
  },
  {
    name: "3D & Interactive",
    skills:
      "Unreal Engine 5, Blender, MetaHuman, Procedural Animation, Real-Time Rendering",
  },
  {
    name: "Reinforcement Learning",
    skills:
      "MDPs, Policy Optimization, Value Functions, Physics-Based RL, Custom Environments",
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full bg-white py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] text-[#333]">
            TECHNICAL ARSENAL
          </span>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4 mb-20">
        {/* Row 1 - Left */}
        <div className="relative overflow-hidden">
          <div className="marquee-left flex whitespace-nowrap">
            {[...skillsRow1, ...skillsRow1].map((skill, i) => (
              <span
                key={i}
                className="mx-8 text-[12px] tracking-[0.2em] text-[#bbb] hover:text-[#0a0a0a] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 - Right */}
        <div className="relative overflow-hidden">
          <div className="marquee-right flex whitespace-nowrap">
            {[...skillsRow2, ...skillsRow2].map((skill, i) => (
              <span
                key={i}
                className="mx-8 text-[12px] tracking-[0.2em] text-[#bbb] hover:text-[#0a0a0a] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Category blocks */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-[#111] p-5 hover:border-[#333] transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] text-[#444] uppercase block mb-4">
                {category.name}
              </span>
              <p className="text-[13px] text-[#555] leading-relaxed">
                {category.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
