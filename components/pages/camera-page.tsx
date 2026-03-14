"use client"

import { X, Camera, ImageIcon, Zap, RotateCcw, ScanLine } from "lucide-react"
import { useState } from "react"

interface CameraPageProps {
  onClose: () => void
}

export default function CameraPage({ onClose }: CameraPageProps) {
  const [flashOn, setFlashOn] = useState(false)

  return (
    <div className="absolute inset-0 z-40 flex flex-col bg-foreground">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-12 pb-4">
        <button onClick={onClose} className="rounded-full bg-card/20 p-2" aria-label="关闭">
          <X className="h-5 w-5 text-card" />
        </button>
        <h2 className="text-base font-bold text-card">AI 识肤拍照</h2>
        <button
          onClick={() => setFlashOn(!flashOn)}
          className={`rounded-full p-2 ${flashOn ? "bg-primary" : "bg-card/20"}`}
          aria-label="闪光灯"
        >
          <Zap className={`h-5 w-5 ${flashOn ? "text-primary-foreground" : "text-card"}`} />
        </button>
      </div>

      {/* Camera Viewfinder */}
      <div className="flex flex-1 flex-col items-center justify-center px-8">
        {/* Scan Frame */}
        <div className="relative aspect-square w-full max-w-[300px]">
          {/* Corner markers */}
          <div className="absolute left-0 top-0 h-8 w-8 rounded-tl-2xl border-l-3 border-t-3 border-primary" />
          <div className="absolute right-0 top-0 h-8 w-8 rounded-tr-2xl border-r-3 border-t-3 border-primary" />
          <div className="absolute bottom-0 left-0 h-8 w-8 rounded-bl-2xl border-b-3 border-l-3 border-primary" />
          <div className="absolute bottom-0 right-0 h-8 w-8 rounded-br-2xl border-b-3 border-r-3 border-primary" />

          {/* Center scan line animation */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2">
            <div className="flex items-center justify-center gap-2">
              <ScanLine className="h-6 w-6 animate-pulse text-primary" />
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-card/70">
          将皮肤患处对准取景框
        </p>
        <p className="mt-1 text-center text-xs text-card/50">
          确保光线充足，距离15-20cm拍摄效果最佳
        </p>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-around px-8 pb-12 pt-6">
        <button className="flex flex-col items-center gap-1.5" aria-label="相册">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card/20">
            <ImageIcon className="h-5 w-5 text-card" />
          </div>
          <span className="text-[10px] text-card/70">相册</span>
        </button>

        <button
          className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-card/30 bg-primary transition-transform active:scale-90"
          aria-label="拍照"
        >
          <Camera className="h-8 w-8 text-primary-foreground" />
        </button>

        <button className="flex flex-col items-center gap-1.5" aria-label="翻转">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card/20">
            <RotateCcw className="h-5 w-5 text-card" />
          </div>
          <span className="text-[10px] text-card/70">翻转</span>
        </button>
      </div>
    </div>
  )
}
