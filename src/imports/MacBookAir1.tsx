import { useState, useRef, useEffect } from "react";
import svgPaths from "./svg-rk1y8kndsx";
import newSvgPaths from "./svg-a3j09sz84v";
import taskbarSvgPaths from "./svg-o9e52bhey8";
import imgUntitledArtwork1 from "figma:asset/6a2954ef7309b0be8ff53811c71d12ce5e7847c4.png";
import { aboutMeContent } from "./about-me-content";
import { resumeContent } from "./resume-content";
import { projectFolderData, type FolderFile } from "./project-folder-content";
import newSvgPaths from "./svg-723spx09d7";
import imgSystemAppIcon from "figma:asset/2ecfb3af6cab7cdf797f32f26226d3328600edc4.png";
import { toast } from "sonner@2.0.3";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";

interface WindowData {
  id: string;
  title: string;
  filename: string;
  content: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  state: 'normal' | 'minimized' | 'maximized' | 'closed';
  zIndex: number;
  previousState?: { position: { x: number; y: number }; size: { width: number; height: number } };
  previousWindowState?: 'normal' | 'maximized';
  type?: 'document' | 'folder';
  folderData?: typeof projectFolderData;
  selectedFileId?: string;
}

function Aboutme() {
  return (
    <div className="h-[25px] relative shrink-0 w-[22px]" data-name="aboutme">
      <div className="absolute inset-[-2%_-2.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
          <g id="aboutme">
            <path d="M17 2L22 6.5H17V2Z" fill="var(--fill-0, white)" id="Vector 4" stroke="var(--stroke-0, white)" />
            <g id="Vector 1">
              <path d="M23 26V6.5H17V1H1V26H23Z" fill="var(--fill-0, white)" />
              <path d={svgPaths.p92e5480} stroke="var(--stroke-0, black)" />
            </g>
            <path d="M5.5 17H18.5" id="Vector 2" stroke="var(--stroke-0, black)" />
            <path d="M5.5 20.5H18.5" id="Vector 3" stroke="var(--stroke-0, black)" />
            <rect fill="var(--fill-0, black)" height="1" id="Rectangle 1" width="1" x="17.5" y="1.5" />
            <rect fill="var(--fill-0, black)" height="1" id="Rectangle 2" width="1" x="18.5" y="2.5" />
            <rect fill="var(--fill-0, black)" height="1" id="Rectangle 3" width="1" x="19.5" y="3.5" />
            <rect fill="var(--fill-0, black)" height="1" id="Rectangle 4" width="1" x="20.5" y="4.5" />
            <rect fill="var(--fill-0, black)" height="1" id="Rectangle 5" width="1" x="21.5" y="5.5" />
            <rect fill="var(--fill-0, #E67979)" height="3" id="Rectangle 6" width="1" x="7.5" y="4.5" />
            <rect fill="var(--fill-0, #E67979)" height="3" id="Rectangle 7" width="1" x="10.5" y="4.5" />
            <rect fill="var(--fill-0, #E67979)" height="1" id="Rectangle 8" width="4" x="7.5" y="9.5" />
            <rect fill="var(--fill-0, #E67979)" height="1" id="Rectangle 9" width="1" x="6.5" y="8.5" />
            <rect fill="var(--fill-0, #E67979)" height="1" id="Rectangle 10" width="1" x="11.5" y="8.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1({ isSelected = false }: { isSelected?: boolean }) {
  return (
    <div className={`${isSelected ? 'bg-[#c2c5e1]' : 'bg-[#e1d7c2]'} content-stretch flex gap-[10px] h-[16px] items-center justify-center relative shrink-0 w-full no-select`}>
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">about_me.md</p>
    </div>
  );
}

function Frame3({ isSelected, onDoubleClick, onClick }: { isSelected: boolean; onDoubleClick: () => void; onClick?: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onDoubleClick();
  };

  return (
    <div 
      className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full cursor-pointer no-select"
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
    >
      <Aboutme />
      <Frame1 isSelected={isSelected} />
    </div>
  );
}

function Frame2({ isSelected = false }: { isSelected?: boolean }) {
  return (
    <div className={`${isSelected ? 'bg-[#c2c5e1]' : 'bg-[#e1d7c2]'} content-stretch flex gap-[10px] h-[16px] items-center justify-center relative shrink-0 w-full no-select`}>
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">resume.pdf</p>
    </div>
  );
}



function Aboutme1() {
  return (
    <div className="h-[25px] relative shrink-0 w-[22px]" data-name="aboutme">
      <div className="absolute inset-[-2%_-2.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
          <g id="aboutme">
            <path d="M17 2L22 6.5H17V2Z" fill="var(--fill-0, white)" id="Vector 4" stroke="var(--stroke-0, white)" />
            <g id="Vector 1">
              <path d="M23 26V6.5H17V1H1V26H23Z" fill="var(--fill-0, white)" />
              <path d={svgPaths.p92e5480} stroke="var(--stroke-0, black)" />
            </g>
            <path d="M5.5 17H18.5" id="Vector 2" stroke="var(--stroke-0, black)" />
            <path d="M5.5 20.5H18.5" id="Vector 3" stroke="var(--stroke-0, black)" />
            <rect fill="var(--fill-0, black)" height="1" id="Rectangle 1" width="1" x="17.5" y="1.5" />
            <rect fill="var(--fill-0, black)" height="1" id="Rectangle 2" width="1" x="18.5" y="2.5" />
            <rect fill="var(--fill-0, black)" height="1" id="Rectangle 3" width="1" x="19.5" y="3.5" />
            <rect fill="var(--fill-0, black)" height="1" id="Rectangle 4" width="1" x="20.5" y="4.5" />
            <rect fill="var(--fill-0, black)" height="1" id="Rectangle 5" width="1" x="21.5" y="5.5" />
            <rect fill="var(--fill-0, #E67979)" height="3" id="Rectangle 6" width="1" x="7.5" y="4.5" />
            <rect fill="var(--fill-0, #E67979)" height="3" id="Rectangle 7" width="1" x="10.5" y="4.5" />
            <rect fill="var(--fill-0, #E67979)" height="1" id="Rectangle 8" width="4" x="7.5" y="9.5" />
            <rect fill="var(--fill-0, #E67979)" height="1" id="Rectangle 9" width="1" x="6.5" y="8.5" />
            <rect fill="var(--fill-0, #E67979)" height="1" id="Rectangle 10" width="1" x="11.5" y="8.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}



function Frame4({ isSelected, onDoubleClick, onClick }: { isSelected: boolean; onDoubleClick: () => void; onClick?: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onDoubleClick();
  };

  return (
    <div 
      className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full cursor-pointer no-select"
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
    >
      <Aboutme1 />
      <Frame2 isSelected={isSelected} />
    </div>
  );
}

// Folder icon components
function FolderIcon() {
  return (
    <div className="h-[25px] relative shrink-0 w-[22px]" data-name="folder">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="folder" className="absolute left-0 max-w-none size-full top-0" src={imgSystemAppIcon} />
      </div>
    </div>
  );
}

function Frame2Folder({ isSelected = false }: { isSelected?: boolean }) {
  return (
    <div className={`${isSelected ? 'bg-[#c2c5e1]' : 'bg-[#e1d7c2]'} content-stretch flex gap-[10px] h-[16px] items-center justify-center relative shrink-0 w-full no-select`}>
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">project_1</p>
    </div>
  );
}

function FrameFolder({ isSelected, onDoubleClick, onClick }: { isSelected: boolean; onDoubleClick: () => void; onClick?: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onDoubleClick();
  };

  return (
    <div 
      className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full cursor-pointer no-select"
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
    >
      <FolderIcon />
      <Frame2Folder isSelected={isSelected} />
    </div>
  );
}

function Frame5({ windows, onOpenDocument, onActivateWindow }: { windows: WindowData[]; onOpenDocument: (docType: string) => void; onActivateWindow: (docType: string) => void }) {
  const aboutMeOpen = windows.some(w => w.id === 'about_me' && w.state !== 'closed');
  const resumeOpen = windows.some(w => w.id === 'resume' && w.state !== 'closed');
  const folderOpen = windows.some(w => w.id === 'project_1' && w.state !== 'closed');

  return (
    <div className="absolute content-stretch flex flex-col gap-[18px] items-start left-[16px] top-[75px] w-[80px] hidden lg:flex">
      <Frame3 
        isSelected={aboutMeOpen} 
        onDoubleClick={() => onOpenDocument('about_me')} 
        onClick={() => onActivateWindow('about_me')}
      />
      <Frame4 
        isSelected={resumeOpen} 
        onDoubleClick={() => onOpenDocument('resume')} 
        onClick={() => onActivateWindow('resume')}
      />
      <FrameFolder 
        isSelected={folderOpen} 
        onDoubleClick={() => onOpenDocument('project_1')} 
        onClick={() => onActivateWindow('project_1')}
      />
    </div>
  );
}

function Close() {
  return (
    <div className="bg-[#ff5f57] relative rounded-[100px] shrink-0 size-[12px]" data-name="Close">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Minimize() {
  return (
    <div className="bg-[#febc2e] relative rounded-[100px] shrink-0 size-[12px]" data-name="Minimize">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Zoom() {
  return (
    <div className="bg-[#28c840] relative rounded-[100px] shrink-0 size-[12px]" data-name="Zoom">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function DockTab({ window, onRestore }: { window: WindowData; onRestore: () => void }) {
  return (
    <div 
      className="bg-[rgba(234,234,234,0.9)] backdrop-blur-[20px] rounded-[10px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.3)] cursor-pointer hover:scale-105 transition-transform duration-200 no-select"
      onClick={onRestore}
    >
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="w-6 h-6">
          {window.type === 'folder' ? <FolderIcon /> : <Aboutme />}
        </div>
        <div className="flex flex-col">
          <p className="font-['IBM_Plex_Mono:SemiBold',_sans-serif] text-[11px] text-black leading-tight">{window.filename}</p>
          <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] text-[9px] text-gray-600 leading-tight">
            {window.type === 'folder' ? 'Folder' : 'Document'}
          </p>
        </div>
      </div>
    </div>
  );
}

function DockTabs({ windows, onRestore }: { windows: WindowData[]; onRestore: (windowId: string) => void }) {
  const minimizedWindows = windows.filter(w => w.state === 'minimized');
  
  if (minimizedWindows.length === 0) return null;
  
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      {minimizedWindows.map((window) => (
        <DockTab 
          key={window.id} 
          window={window} 
          onRestore={() => onRestore(window.id)} 
        />
      ))}
    </div>
  );
}

// New Taskbar Components based on Figma design
function TaskbarIcon({ docType }: { docType: string }) {
  // If it's a folder, show a simplified folder icon
  if (docType === 'project_1') {
    return (
      <div className="absolute contents inset-[3.7%_4.17%]" data-name="folder">
        <div className="absolute inset-[10%_10%_10%_10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
            <path d="M2 3H9L11 6H22V18H2V3Z" fill="#FFA500" stroke="black" strokeWidth="1"/>
            <path d="M2 6H22" stroke="black" strokeWidth="1"/>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute contents inset-[3.7%_4.17%]" data-name="aboutme">
      <div className="absolute inset-[7.41%_8.33%_75.93%_70.83%]">
        <div className="absolute inset-[-24.97%_-26.03%_-11.08%_-10.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
            <path d="M1 2L5.78813 6.33238H1V2Z" fill="var(--fill-0, white)" id="Vector 4" stroke="var(--stroke-0, white)" strokeWidth="0.960183" />
          </svg>
        </div>
      </div>
      <div className="absolute contents inset-[3.7%_4.17%]">
        <div className="absolute inset-[3.7%_4.17%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 25">
            <path d={taskbarSvgPaths.p299200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[3.7%_4.17%]" data-name="Vector">
          <div className="absolute inset-[-1.99%_-2.28%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 26">
              <path d={taskbarSvgPaths.p2008c300} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.960183" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[62.96%_22.92%_37.04%_22.92%]">
        <div className="absolute bottom-[-0.48px] left-0 right-0 top-[-0.48px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 2">
            <path d="M0 1H12.4491" id="Vector 2" stroke="var(--stroke-0, black)" strokeWidth="0.960183" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[75.93%_22.92%_24.07%_22.92%]">
        <div className="absolute bottom-[-0.48px] left-0 right-0 top-[-0.48px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 2">
            <path d="M0 1H12.4491" id="Vector 2" stroke="var(--stroke-0, black)" strokeWidth="0.960183" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[5.56%_22.92%_90.74%_72.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={taskbarSvgPaths.p25ce4240} fill="var(--fill-0, black)" id="Rectangle 1" />
        </svg>
      </div>
      <div className="absolute inset-[9.26%_18.75%_87.04%_77.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={taskbarSvgPaths.p25ce4240} fill="var(--fill-0, black)" id="Rectangle 1" />
        </svg>
      </div>
      <div className="absolute inset-[12.96%_14.58%_83.33%_81.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={taskbarSvgPaths.p25ce4240} fill="var(--fill-0, black)" id="Rectangle 1" />
        </svg>
      </div>
      <div className="absolute inset-[16.67%_10.42%_79.63%_85.42%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={taskbarSvgPaths.p25ce4240} fill="var(--fill-0, black)" id="Rectangle 1" />
        </svg>
      </div>
      <div className="absolute inset-[20.37%_6.25%_75.93%_89.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={taskbarSvgPaths.p25ce4240} fill="var(--fill-0, black)" id="Rectangle 1" />
        </svg>
      </div>
      {docType === 'about_me' && (
        <>
          <div className="absolute inset-[16.67%_64.58%_72.22%_31.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
              <path d={taskbarSvgPaths.p2ca887c0} fill="var(--fill-0, #E67979)" id="Rectangle 6" />
            </svg>
          </div>
          <div className="absolute inset-[16.67%_52.08%_72.22%_43.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
              <path d={taskbarSvgPaths.p2ca887c0} fill="var(--fill-0, #E67979)" id="Rectangle 6" />
            </svg>
          </div>
          <div className="absolute inset-[35.19%_52.08%_61.11%_31.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 1">
              <path d={taskbarSvgPaths.p3b9f1600} fill="var(--fill-0, #E67979)" id="Rectangle 8" />
            </svg>
          </div>
          <div className="absolute inset-[31.48%_68.75%_64.81%_27.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
              <path d={taskbarSvgPaths.p25ce4240} fill="var(--fill-0, #E67979)" id="Rectangle 9" />
            </svg>
          </div>
          <div className="absolute inset-[31.48%_47.92%_64.81%_47.92%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
              <path d={taskbarSvgPaths.p25ce4240} fill="var(--fill-0, #E67979)" id="Rectangle 9" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

function TaskbarItem({ 
  window, 
  isActive, 
  onClick 
}: { 
  window: WindowData; 
  isActive: boolean; 
  onClick: () => void; 
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="h-[60px] relative w-[50px] cursor-pointer hover:opacity-80 transition-opacity" onClick={onClick}>
          {/* Icon */}
          <div className="absolute content-stretch flex flex-col h-[35px] items-start left-[7.5px] top-[7.5px] w-[35px]">
            <div className="h-[35px] overflow-clip relative shrink-0 w-full">
              <TaskbarIcon docType={window.id} />
            </div>
          </div>
          
          {/* Active indicator */}
          {isActive && (
            <div className="absolute left-1/2 size-[6px] translate-x-[-50%] bottom-[2px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <circle cx="3" cy="3" fill="#808080" r="3" />
              </svg>
            </div>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{window.filename}</p>
      </TooltipContent>
    </Tooltip>
  );
}

function Taskbar({ 
  windows, 
  activeWindowId, 
  onWindowClick 
}: { 
  windows: WindowData[]; 
  activeWindowId: string | null; 
  onWindowClick: (windowId: string) => void; 
}) {
  // Show all open windows (not closed), including minimized ones
  const openWindows = windows.filter(w => w.state !== 'closed');

  return (
    <div className="absolute bottom-[29px] h-[70px] left-1/2 translate-x-[-50%] z-[9999] w-[480px]">
      {/* Background */}
      <div className="absolute backdrop-blur-[67.957px] backdrop-filter bg-[rgba(246,246,246,0.36)] bottom-[5px] left-0 mix-blend-luminosity right-0 rounded-[16px] top-0">
        <div className="absolute border border-[rgba(246,246,246,0.36)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]" />
      </div>
      
      {/* Taskbar Items */}
      <div className="absolute content-stretch flex gap-[6px] items-start left-[10px] top-[0px]">
        {openWindows.map((window) => (
          <TaskbarItem
            key={window.id}
            window={window}
            isActive={activeWindowId === window.id}
            onClick={() => onWindowClick(window.id)}
          />
        ))}
      </div>
    </div>
  );
}

function WindowControls({ onClose, onMinimize, onMaximize }: { onClose: () => void; onMinimize: () => void; onMaximize: () => void }) {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[12px] items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Window Controls">
      <div onClick={onClose} className="cursor-pointer no-select">
        <Close />
      </div>
      <div onClick={onMinimize} className="cursor-pointer no-select">
        <Minimize />
      </div>
      <div onClick={onMaximize} className="cursor-pointer no-select">
        <Zoom />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[10px] py-[3px] relative w-full">
          <div className="flex flex-col font-['IBM_Plex_Mono:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.85)] text-center text-nowrap">
            <p className="leading-[16px] whitespace-pre">about_me.md</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleAndSubtitle({ title, onToggleSidebar, isSidebarVisible }: { title: string; onToggleSidebar?: () => void; isSidebarVisible?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative min-w-0 overflow-hidden flex-1 no-select" data-name="Title and Subtitle">
      <div className="font-['SF_Pro:Semibold',_sans-serif] font-[590] leading-[20px] relative text-[15px] text-[rgba(0,0,0,0.85)] overflow-hidden text-ellipsis whitespace-nowrap min-w-0 block w-full no-select flex items-center gap-2" style={{ fontVariationSettings: "'wdth' 100" }}>
        {onToggleSidebar && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSidebar();
            }}
            className={`flex items-center justify-center size-[17.997px] rounded transition-colors cursor-pointer ${
              isSidebarVisible === false 
                ? 'bg-[rgba(0,0,0,0.15)] hover:bg-[rgba(0,0,0,0.2)]' 
                : 'hover:bg-[rgba(0,0,0,0.1)]'
            }`}
            title="Toggle Sidebar"
          >
            <span 
              className="text-[rgba(0,0,0,0.5)] leading-[0]"
              style={{ 
                fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: "12px",
                fontVariationSettings: "'wdth' 100"
              }}
            >
              􀏚
            </span>
          </button>
        )}
        {title}
      </div>
    </div>
  );
}

function TitleSidebarAndNavigation({ title, onToggleSidebar, isSidebarVisible }: { title: string; onToggleSidebar?: () => void; isSidebarVisible?: boolean }) {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-0 relative min-w-0 overflow-hidden flex-1 pt-[0px] pr-[0px] pb-[0px] pl-[8px] no-select" data-name="Title + Sidebar and Navigation">
      <TitleAndSubtitle title={title} onToggleSidebar={onToggleSidebar} isSidebarVisible={isSidebarVisible} />
    </div>
  );
}

function Leading({ onClose, onMinimize, onMaximize, title, onToggleSidebar, isSidebarVisible }: { onClose: () => void; onMinimize: () => void; onMaximize: () => void; title: string; onToggleSidebar?: () => void; isSidebarVisible?: boolean }) {
  return (
    <div className="content-stretch flex items-center relative flex-1 min-w-0 p-[0px]" data-name="Leading">
      <WindowControls onClose={onClose} onMinimize={onMinimize} onMaximize={onMaximize} />
      <TitleSidebarAndNavigation title={title} onToggleSidebar={onToggleSidebar} isSidebarVisible={isSidebarVisible} />
    </div>
  );
}

function Download02({ content, docType }: { content: string; docType?: string }) {
  return (
    <div 
      className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-70 transition-opacity -mr-2 no-select" 
      data-name="download-02"
      onClick={() => {
        // Determine file type and name based on docType
        let mimeType = 'text/markdown';
        let fileName = 'document.txt';
        
        if (docType === 'about_me') {
          mimeType = 'text/markdown';
          fileName = 'about_me.md';
        } else if (docType === 'resume') {
          mimeType = 'application/pdf';
          fileName = 'resume.pdf';
        } else {
          // Fallback: determine from content if docType not provided
          if (content === aboutMeContent) {
            mimeType = 'text/markdown';
            fileName = 'about_me.md';
          } else if (content === resumeContent) {
            mimeType = 'application/pdf';
            fileName = 'resume.pdf';
          }
        }
        
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="download-02">
          {/* Download arrow */}
          <path d="M9 3v8M9 11l-3-3M9 11l3-3" stroke="#747473" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Download tray/container */}
          <path d="M4 13h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" stroke="#747473" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Share03({ content, docType }: { content: string; docType?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  const handleCopyContent = () => {
    const textArea = document.createElement('textarea');
    textArea.value = content;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '-9999px';
    textArea.style.opacity = '0';
    textArea.setAttribute('readonly', '');
    
    document.body.appendChild(textArea);
    
    try {
      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, content.length);
      
      const successful = document.execCommand('copy');
      if (successful) {
        toast.success('Content copied to clipboard!');
      } else {
        navigator.clipboard?.writeText(content)
          .then(() => toast.success('Content copied to clipboard!'))
          .catch(() => {
            prompt('Copy this content:', content);
          });
      }
    } catch (error) {
      console.error('Copy failed:', error);
      prompt('Copy this content manually:', content);
    } finally {
      document.body.removeChild(textArea);
    }
    setIsOpen(false);
  };

  const handleCopyLink = () => {
    // Generate dynamic URLs based on the document type
    const baseUrl = 'https://eric-graham-portfolio.vercel.app';
    let url = baseUrl;
    
    console.log('docType:', docType); // Debug log
    
    if (docType === 'about_me') {
      url = `${baseUrl}/about`;
    } else if (docType === 'resume') {
      url = `${baseUrl}/resume`;
    }
    
    // If no docType provided, determine from content
    if (!docType) {
      if (content === aboutMeContent) {
        url = `${baseUrl}/about`;
      } else if (content === resumeContent) {
        url = `${baseUrl}/resume`;
      }
    }
    
    console.log('Generated URL:', url); // Debug log
    
    // Try modern clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(url)
        .then(() => {
          console.log('URL copied successfully:', url); // Debug log
          toast.success('Link copied to clipboard!');
        })
        .catch(() => {
          // Fallback method
          copyToClipboardFallback(url);
        });
    } else {
      // Fallback method for older browsers or non-secure contexts
      copyToClipboardFallback(url);
    }
    
    function copyToClipboardFallback(text: string) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '-9999px';
      textArea.style.opacity = '0';
      textArea.setAttribute('readonly', '');
      
      document.body.appendChild(textArea);
      
      try {
        textArea.focus();
        textArea.select();
        textArea.setSelectionRange(0, text.length);
        
        const successful = document.execCommand('copy');
        if (successful) {
          console.log('URL copied via fallback:', text); // Debug log
          toast.success('Link copied to clipboard!');
        } else {
          console.error('Copy command failed'); // Debug log
          toast.error('Unable to copy link. URL: ' + text);
        }
      } catch (error) {
        console.error('Copy failed:', error);
        toast.error('Unable to copy link. URL: ' + text);
      } finally {
        document.body.removeChild(textArea);
      }
    }
    
    setIsOpen(false);
  };

  const handleContact = () => {
    // Generate dynamic subject line based on document type
    let documentName = '';
    if (docType === 'about_me') {
      documentName = 'about_me.md';
    } else if (docType === 'resume') {
      documentName = 'resume.pdf';
    } else {
      // Fallback: determine from content if docType not provided
      if (content === aboutMeContent) {
        documentName = 'about_me.md';
      } else if (content === resumeContent) {
        documentName = 'resume.pdf';
      } else {
        documentName = 'portfolio';
      }
    }
    
    const subject = encodeURIComponent(`Contact from Portfolio about ${documentName}`);
    const body = encodeURIComponent('Hi! I found your portfolio and would like to get in touch.');
    const mailtoLink = `mailto:eric.graham@utexas.edu?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={shareRef}>
      <div 
        className="relative shrink-0 size-[18px] cursor-pointer hover:bg-gray-100 rounded transition-colors flex items-center justify-center no-select m-[0px]" 
        data-name="share-03"
        onClick={() => setIsOpen(!isOpen)}
      >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g id="share-03">
              <path d="M14.4979 5.49931V1.00001M14.4979 1.00001H9.9986M14.4979 1.00001L7.74895 7.74895M6.24918 1H4.59944C3.33952 1 2.70955 1 2.22833 1.2452C1.80503 1.46088 1.46088 1.80503 1.2452 2.22833C1 2.70955 1 3.33952 1 4.59944V10.8985C1 12.1584 1 12.7884 1.2452 13.2696C1.46088 13.6928 1.80503 14.037 2.22833 14.2527C2.70955 14.4979 3.33952 14.4979 4.59944 14.4979H10.8985C12.1584 14.4979 12.7884 14.4979 13.2696 14.2527C13.6928 14.037 14.037 13.6928 14.2527 13.2696C14.4979 12.7884 14.4979 12.1584 14.4979 10.8985V9.24872" id="Icon" stroke="#747473" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            </g>
          </svg>
        </div>
        
      {isOpen && (
        <div className="absolute right-0 top-6 z-[9999] w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 no-select">
            <button
              onClick={handleCopyContent}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 no-select"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Content
            </button>
            <button
              onClick={handleCopyLink}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 no-select"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Copy Link
            </button>
            <button
              onClick={handleContact}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 no-select"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact me
            </button>
        </div>
      )}
    </div>
  );
}

function SegmentedControl({ content, docType }: { content: string; docType?: string }) {
  return (
    <>
      <Download02 content={content} docType={docType} />
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(0,0,0,0.5)] text-center w-[16px] no-select" style={{ fontVariationSettings: "'wdth' 100" }}>

      </div>
      <Share03 content={content} docType={docType} />
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(0,0,0,0.5)] text-center w-[16px] no-select" style={{ fontVariationSettings: "'wdth' 100" }}>
      </div>
    </>
  );
}

function Search({ onSearchChange }: { onSearchChange?: (value: string) => void }) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  return (
    <div 
      className={`box-border content-stretch flex gap-[8px] h-[28px] items-center relative rounded-[6px] min-w-[126px] max-w-[140px] flex-1 px-[7px] py-[6px] cursor-text no-select ${isFocused ? 'bg-white border border-[rgba(0,0,0,0.1)]' : ''}`} 
      data-name="Search"
      onClick={handleContainerClick}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px] no-select" />
      <div className="flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 size-[16px] text-[#747473] text-[13px] text-center no-select" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] no-select">􀊫</p>
      </div>
      <div className="basis-0 grow h-[16px] leading-[16px] min-h-px min-w-px relative shrink-0 no-select">
        <input
          ref={inputRef}
          type="text"
          value={searchValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full h-full bg-transparent border-none outline-none font-['SF_Pro:Regular',_sans-serif] font-normal text-[13px] text-black placeholder:text-[rgba(0,0,0,0.25)] flex items-center allow-select ${isFocused && searchValue === '' ? 'cursor-blink' : ''}`}
          style={{ fontVariationSettings: "'wdth' 100" }}
          placeholder={isFocused ? '' : 'Search'}
        />
      </div>
      {searchValue && (
        <div 
          className="flex items-center justify-center w-[14px] h-[14px] rounded-full bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)] cursor-pointer transition-colors shrink-0 no-select"
          onClick={(e) => {
            e.stopPropagation();
            setSearchValue('');
            if (onSearchChange) {
              onSearchChange('');
            }
          }}
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M6 2L2 6M2 2L6 6" stroke="#747473" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );
}

function Trailing({ content, docType, onSearchChange }: { content: string; docType?: string; onSearchChange?: (value: string) => void }) {
  // Show download and share buttons only for document windows (not folder windows)
  const isDocumentWindow = docType && !docType.startsWith('folder');
  
  return (
    <div className="box-border content-stretch flex items-center justify-end gap-[8px] relative shrink-0 m-[0px] max-w-[calc(100%-16px)] py-[0px] px-[8px] pt-[0px] pr-[8px] pb-[0px] pl-[0px]" data-name="Trailing">
      {isDocumentWindow && (
        <SegmentedControl content={content} docType={docType} />
      )}
      <Search onSearchChange={onSearchChange} />
    </div>
  );
}

function Titlebar({ onMouseDown, onClose, onMinimize, onMaximize, content, title, docType, onSearchChange, isMaximized, onWindowClick, onToggleSidebar, isSidebarVisible }: { onMouseDown: (e: React.MouseEvent) => void; onClose: () => void; onMinimize: () => void; onMaximize: () => void; content: string; title: string; docType?: string; onSearchChange?: (value: string) => void; isMaximized?: boolean; onWindowClick?: () => void; onToggleSidebar?: () => void; isSidebarVisible?: boolean }) {
  const handleMouseDown = (e: React.MouseEvent) => {
    // Immediately activate window
    if (onWindowClick) {
      onWindowClick();
    }
    // Then handle dragging
    onMouseDown(e);
  };

  return (
    <div 
      className={`backdrop-blur-[15px] backdrop-filter bg-[rgba(234,234,234,0.8)] box-border content-stretch flex items-center px-0 py-[9px] relative shadow-[0px_0.5px_0px_0px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(0,0,0,0.1)] shrink-0 w-full z-[2] min-w-0 no-select ${isMaximized ? 'cursor-default' : 'cursor-move'}`}
      data-name="Titlebar"
      onMouseDown={handleMouseDown}
    >
      <Leading onClose={onClose} onMinimize={onMinimize} onMaximize={onMaximize} title={title} onToggleSidebar={onToggleSidebar} isSidebarVisible={isSidebarVisible} />
      <Trailing content={content} docType={docType} onSearchChange={onSearchChange} />
    </div>
  );
}

function ContentArea({ content, searchTerm, onWindowClick }: { content: string; searchTerm?: string; onWindowClick?: () => void }) {
  // Function to highlight search terms in text
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm || searchTerm.trim() === '') {
      return text;
    }
    
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\function ContentArea({ content }: { content: string }) {')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="search-highlight" style={{ padding: 0 }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  // Simple markdown parser for basic formatting
  const parseMarkdown = (text: string) => {
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    
    lines.forEach((line, index) => {
      if (line.startsWith('# ')) {
        elements.push(
          null
        );
      } else if (line.startsWith('## ')) {
        const headerText = line.substring(3);
        elements.push(
          <h2 key={index} className="text-base font-semibold mb-2 allow-select">
            {searchTerm ? highlightText(headerText, searchTerm) : headerText}
          </h2>
        );
      } else if (line.trim() === '') {
        elements.push(<br key={index} />);
      } else {
        elements.push(
          <p key={index} className="mb-0 whitespace-pre-wrap allow-select text-xs sm:text-sm break-words">
            {searchTerm ? highlightText(line, searchTerm) : line}
          </p>
        );
      }
    });
    
    return elements;
  };

  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full z-[1] allow-select" data-name="Content Area" onClick={onWindowClick}>
      <div className="absolute inset-0 no-select" data-name="Margins">
        <div aria-hidden="true" className="absolute border-[20px] border-[rgba(255,0,0,0.2)] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] left-[21px] right-[21px] not-italic text-[12px] text-black top-[21px] bottom-[21px] overflow-y-auto allow-select [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
        {content ? parseMarkdown(content) : <p className="allow-select text-xs sm:text-sm">Loading...</p>}
      </div>
    </div>
  );
}

function FolderContentArea({ 
  folderData, 
  selectedFileId, 
  onFileSelect, 
  searchTerm, 
  onWindowClick,
  isSidebarVisible
}: { 
  folderData: typeof projectFolderData; 
  selectedFileId?: string; 
  onFileSelect: (fileId: string) => void; 
  searchTerm?: string; 
  onWindowClick?: () => void;
  isSidebarVisible?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const selectedFile = folderData.files.find(f => f.id === selectedFileId) || folderData.files[0];
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  // Function to highlight search terms in text
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm || searchTerm.trim() === '') {
      return text;
    }
    
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\function WindowWithTitlebar({')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="search-highlight" style={{ padding: 0 }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleWindowClick = (e: React.MouseEvent) => {
    if (onWindowClick) {
      onWindowClick();
    }
  };

  return (
    <div 
      className="bg-white content-stretch flex flex-1 overflow-hidden relative w-full" 
      data-name="Content Area"
      onClick={handleWindowClick}
    >
      {/* Left sidebar with file list */}
      {(isSidebarVisible ?? true) && (
        <div className="bg-[#f6f6f6] border-r border-[rgba(0,0,0,0.1)] flex flex-col w-[240px] shrink-0">
        {/* Sidebar header */}
        <div 
          className="px-3 py-2 bg-[rgba(0,0,0,0.02)] cursor-pointer hover:bg-[rgba(0,0,0,0.04)] transition-colors"
          onClick={toggleExpanded}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-['SF_Pro:Regular',_sans-serif] text-[12px] text-[rgba(0,0,0,0.6)] font-bold">
              {folderData.name}
            </h3>
            <svg 
              className={`w-3 h-3 text-[rgba(0,0,0,0.5)] transition-transform duration-200 ${
                isExpanded ? 'rotate-90' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 8 8"
            >
              <path d="M2 1l3 3-3 3"/>
            </svg>
          </div>
        </div>
        
        {/* File list */}
        {isExpanded && (
          <div className="flex flex-col flex-1 overflow-y-auto">
            {folderData.files.map((file) => (
              <div
                key={file.id}
                className={`cursor-pointer px-3 py-1.5 mx-1 rounded transition-colors ${
                  selectedFileId === file.id 
                    ? 'bg-[#007AFF] text-white' 
                    : 'text-[rgba(0,0,0,0.85)] hover:bg-[rgba(0,0,0,0.06)]'
                }`}
                onClick={() => onFileSelect(file.id)}
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center opacity-80">
                    {file.type === 'pdf' ? '📄' : '📝'}
                  </div>
                  <span className="font-['SF_Pro:Regular',_sans-serif] text-[13px] truncate">
                    {file.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      )}
      
      {/* Right content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Content header */}

        
        {/* File content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
          <div className="font-['SF_Pro:Regular',_sans-serif] text-[14px] text-black leading-relaxed whitespace-pre-wrap allow-select">
            {searchTerm && searchTerm.trim() !== '' 
              ? highlightText(selectedFile?.content || '', searchTerm)
              : selectedFile?.content || ''
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function WindowWithTitlebar({ 
  windowData,
  onDragStart, 
  onResizeStart,
  onClose,
  onMinimize,
  onMaximize,
  isDragging,
  isResizing,
  searchTerm,
  onSearchChange,
  onWindowClick,
  isActive,
  onFileSelect
}: { 
  windowData: WindowData;
  onDragStart: (e: React.MouseEvent) => void;
  onResizeStart: (e: React.MouseEvent, direction: string) => void;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  isDragging: boolean;
  isResizing: string | null;
  searchTerm?: string;
  onSearchChange?: (value: string) => void;
  onWindowClick?: () => void;
  isActive: boolean;
  onFileSelect?: (fileId: string) => void;
}) {
  const { position, size, content, title, zIndex } = windowData;
  
  // Sidebar visibility state for folder windows
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  
  const handleWindowContainerClick = (e: React.MouseEvent) => {
    // Immediately activate this window when any part is clicked
    if (onWindowClick) {
      onWindowClick();
    }
  };

  return (
    <div 
      className={`absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(234,234,234,0.84)] box-border content-stretch flex flex-col isolate items-start overflow-clip rounded-[10px] shadow-[0px_36px_100px_0px_rgba(0,0,0,0.4),0px_0px_3px_0px_rgba(0,0,0,0.25)] no-select ${isActive ? 'window-active' : ''}`}
      data-name="Window with Titlebar"
      data-window-id={windowData.id}
      onMouseDown={handleWindowContainerClick}
      style={{
        left: isNaN(position.x) ? 337 : position.x,
        top: isNaN(position.y) ? 131 : position.y,
        width: isNaN(size.width) ? 594 : size.width,
        height: isNaN(size.height) ? 497 : size.height,
        minWidth: 400,
        minHeight: 300,
        zIndex: windowData.state === 'maximized' ? zIndex + 1000 : zIndex,
        transition: (isDragging || isResizing) ? 'none' : 'opacity 0.1s ease'
      }}
    >
      <Titlebar onMouseDown={onDragStart} onClose={onClose} onMinimize={onMinimize} onMaximize={onMaximize} content={content} title={title} docType={windowData.id} onSearchChange={onSearchChange} isMaximized={windowData.state === 'maximized'} onWindowClick={onWindowClick} onToggleSidebar={windowData.type === 'folder' ? toggleSidebar : undefined} isSidebarVisible={windowData.type === 'folder' ? isSidebarVisible : undefined} />
      {windowData.type === 'folder' && windowData.folderData ? (
        <FolderContentArea 
          folderData={windowData.folderData}
          selectedFileId={windowData.selectedFileId}
          onFileSelect={(fileId) => onFileSelect && onFileSelect(fileId)}
          searchTerm={searchTerm}
          onWindowClick={onWindowClick}
          isSidebarVisible={isSidebarVisible}
        />
      ) : (
        <ContentArea content={content} searchTerm={searchTerm} onWindowClick={onWindowClick} />
      )}
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_3px_0px_inset_rgba(255,255,255,0.1)] no-select" />
      
      {/* Resize handles - made larger and positioned correctly */}
      <div 
        className="absolute left-0 top-[15px] bottom-[15px] w-[8px] z-20 hover:bg-blue-200/30 no-select"
        style={{ cursor: 'w-resize' }}
        onMouseDown={(e) => onResizeStart(e, 'left')}
      />
      <div 
        className="absolute right-0 top-[15px] bottom-[15px] w-[8px] z-20 hover:bg-blue-200/30 no-select"
        style={{ cursor: 'e-resize' }}
        onMouseDown={(e) => onResizeStart(e, 'right')}
      />

      <div 
        className="absolute left-[15px] bottom-0 right-[15px] h-[8px] z-20 hover:bg-blue-200/30 no-select"
        style={{ cursor: 's-resize' }}
        onMouseDown={(e) => onResizeStart(e, 'bottom')}
      />
      {/* Corner handles */}


      <div 
        className="absolute bottom-0 left-0 w-[15px] h-[15px] z-20 hover:bg-blue-200/30 no-select"
        style={{ cursor: 'sw-resize' }}
        onMouseDown={(e) => onResizeStart(e, 'bottom-left')}
      />
      <div 
        className="absolute bottom-0 right-0 w-[15px] h-[15px] z-20 hover:bg-blue-200/30 no-select"
        style={{ cursor: 'se-resize' }}
        onMouseDown={(e) => onResizeStart(e, 'bottom-right')}
      />
    </div>
  );
}

function Group1() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-center px-[4px] py-0 no-select" data-name="Group - Leading">
      <div className="box-border content-stretch flex gap-[10px] items-start px-[11px] py-[2px] relative rounded-[4px] shrink-0 no-select" data-name="Apple Logo">
        <div className="relative rounded-[50px] shrink-0 size-[28px] no-select" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[50px] size-full no-select" src={imgUntitledArtwork1} />
        </div>
      </div>
      <div className="box-border content-stretch flex gap-[10px] items-start px-[11px] py-[4px] relative rounded-[4px] shrink-0 no-select" data-name="App Name">
        <div className="flex flex-col font-['SF_Pro:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[13px] text-black text-center text-nowrap no-select" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px] whitespace-pre no-select">Eric T. Graham</p>
        </div>
      </div>
    </div>
  );
}

function Secondary() {
  return (
    null
  );
}

function Group2() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const dayNumber = date.getDate();
    const year = date.getFullYear();
    
    // Add ordinal suffix (st, nd, rd, th)
    const getOrdinalSuffix = (day: number) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
    
    const time = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    
    return `${dayName}, ${monthName} ${dayNumber}${getOrdinalSuffix(dayNumber)} ${year} @ ${time}`;
  };

  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-end no-select" data-name="Frame - Trailing">
      <div className="box-border content-stretch flex gap-[10px] items-start px-[11px] py-[4px] relative rounded-[4px] shrink-0 no-select" data-name="Menu Item - Trailing">
        <div className="flex flex-col font-['SF_Pro:Semibold',_sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[13px] text-black text-center text-nowrap no-select" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px] whitespace-pre no-select">{formatDateTime(currentTime)}</p>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="flex items-center justify-between w-full h-[32px] leading-[0] relative shrink-0 no-select">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute backdrop-blur-[25px] backdrop-filter bg-[rgba(255,255,255,0.5)] h-[32px] left-0 top-0 w-full no-select" data-name="Menu Bar">
      <Group3 />
    </div>
  );
}

export default function MacBookAir1() {
  const [windows, setWindows] = useState<WindowData[]>([
    {
      id: 'about_me',
      title: 'about_me.md',
      filename: 'about_me.md',
      content: aboutMeContent,
      position: { x: 337, y: 131 },
      size: { width: 594, height: 497 },
      state: 'normal',
      zIndex: 1000
    }
  ]);
  const [isDragging, setIsDragging] = useState<string | null>(null);
  const [isResizing, setIsResizing] = useState<{ windowId: string; direction: string } | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [initialSize, setInitialSize] = useState({ width: 0, height: 0 });
  const [initialMousePosition, setInitialMousePosition] = useState({ x: 0, y: 0 });
  const [initialWindowPosition, setInitialWindowPosition] = useState({ x: 0, y: 0 });
  const [searchTerms, setSearchTerms] = useState<{ [windowId: string]: string }>({});
  const [nextZIndex, setNextZIndex] = useState(1001);
  const [activeWindowId, setActiveWindowId] = useState<string | null>('about_me');
  const containerRef = useRef<HTMLDivElement>(null);

  // Window focus-based text selection control
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Find which window this event is in
      const windowElement = target.closest('[data-window-id]');
      const windowId = windowElement?.getAttribute('data-window-id') || null;
      
      // If clicking in a window, make it active and bring to front
      if (windowId) {
        setActiveWindowId(windowId);
        bringToFront(windowId);
      }
      
      // Clear selection only when clicking outside all content areas
      const contentArea = target.closest('[data-name="Content Area"]');
      const isInputElement = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      
      if (!contentArea && !isInputElement && !windowElement) {
        // Clicked completely outside any window - clear all selections
        if (window.getSelection) {
          const selection = window.getSelection();
          if (selection) {
            selection.removeAllRanges();
          }
        }
      }
    };

    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      
      // Find which window this event is in
      const windowElement = target.closest('[data-window-id]');
      const windowId = windowElement?.getAttribute('data-window-id') || null;
      
      // Only allow selection in the active window's content area
      const contentArea = target.closest('[data-name="Content Area"]');
      const isInSelectableArea = contentArea && target.closest('.allow-select');
      const isInputElement = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      
      // Block selection if:
      // 1. Not in a selectable area or input
      // 2. Not in the active window
      if (!isInSelectableArea && !isInputElement) {
        e.preventDefault();
        return false;
      }
      
      if (windowId && windowId !== activeWindowId) {
        e.preventDefault();
        return false;
      }
    };

    // Monitor selection changes to prevent cross-window selection
    const handleSelectionChange = () => {
      if (window.getSelection) {
        const selection = window.getSelection();
        if (selection && !selection.isCollapsed) {
          const range = selection.getRangeAt(0);
          const startContainer = range.startContainer;
          const endContainer = range.endContainer;
          
          // Find the window elements for both start and end
          const startElement = startContainer.nodeType === Node.TEXT_NODE 
            ? startContainer.parentElement 
            : startContainer as HTMLElement;
          const endElement = endContainer.nodeType === Node.TEXT_NODE 
            ? endContainer.parentElement 
            : endContainer as HTMLElement;
            
          const startWindow = startElement?.closest('[data-window-id]');
          const endWindow = endElement?.closest('[data-window-id]');
          
          // If selection spans different windows, clear it
          if (startWindow && endWindow && startWindow !== endWindow) {
            selection.removeAllRanges();
            return;
          }
          
          // If selection is not in the active window, clear it
          const selectionWindowId = startWindow?.getAttribute('data-window-id');
          if (selectionWindowId && selectionWindowId !== activeWindowId) {
            selection.removeAllRanges();
            return;
          }
        }
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('selectstart', handleSelectStart, { passive: false });
    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, [activeWindowId]);

  const bringToFront = (windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, zIndex: nextZIndex } : w
    ));
    setNextZIndex(prev => prev + 1);
  };

  const openDocument = (docType: string) => {
    // Check if document is already open
    const existingWindow = windows.find(w => w.id === docType);
    if (existingWindow) {
      // If minimized, restore it and bring to front
      if (existingWindow.state === 'minimized') {
        setWindows(prev => prev.map(w => 
          w.id === docType ? { 
            ...w, 
            state: (w.previousWindowState || 'normal') as const, 
            zIndex: nextZIndex,
            previousWindowState: undefined
          } : w
        ));
        setNextZIndex(prev => prev + 1);
        setActiveWindowId(docType);
      } else {
        // If already open, just bring to front
        bringToFront(docType);
        setActiveWindowId(docType);
      }
      return;
    }

    // Create new window
    let newWindow: WindowData;
    
    if (docType === 'project_1') {
      newWindow = {
        id: docType,
        title: 'Project_1',
        filename: 'project_1',
        content: '',
        position: { 
          x: 200 + windows.length * 50, 
          y: 100 + windows.length * 30 
        },
        size: { width: 850, height: 530 },
        state: 'normal',
        zIndex: nextZIndex,
        type: 'folder',
        folderData: projectFolderData,
        selectedFileId: projectFolderData.files[0]?.id
      };
    } else {
      newWindow = {
        id: docType,
        title: docType === 'about_me' ? 'about_me.md' : 'resume.pdf',
        filename: docType === 'about_me' ? 'about_me.md' : 'resume.pdf',
        content: docType === 'about_me' ? aboutMeContent : resumeContent,
        position: { 
          x: 350 + windows.length * 50, 
          y: 150 + windows.length * 30 
        },
        size: { width: 594, height: 497 },
        state: 'normal',
        zIndex: nextZIndex,
        type: 'document'
      };
    }

    setWindows(prev => [...prev, newWindow]);
    setNextZIndex(prev => prev + 1);
    setActiveWindowId(docType);
  };

  const handleFileSelect = (windowId: string, fileId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, selectedFileId: fileId } : w
    ));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const mastheadHeight = 40;
        const titlebarHeight = 46;
        const maxY = window.innerHeight - titlebarHeight;
        
        setWindows(prev => prev.map(w => 
          w.id === isDragging ? {
            ...w,
            position: {
              x: isNaN(e.clientX - dragOffset.x) ? w.position.x : Math.max(0, Math.min(window.innerWidth - 400, e.clientX - dragOffset.x)),
              y: isNaN(e.clientY - dragOffset.y) ? w.position.y : Math.max(mastheadHeight, Math.min(maxY, e.clientY - dragOffset.y))
            }
          } : w
        ));
      } else if (isResizing) {
        const deltaX = isNaN(e.clientX - initialMousePosition.x) ? 0 : e.clientX - initialMousePosition.x;
        const deltaY = isNaN(e.clientY - initialMousePosition.y) ? 0 : e.clientY - initialMousePosition.y;
        
        let newWidth = isNaN(initialSize.width) ? 594 : initialSize.width;
        let newHeight = isNaN(initialSize.height) ? 497 : initialSize.height;
        let newX = isNaN(initialWindowPosition.x) ? 337 : initialWindowPosition.x;
        let newY = isNaN(initialWindowPosition.y) ? 131 : initialWindowPosition.y;
        
        if (isResizing.direction.includes('left')) {
          newWidth = Math.max(400, initialSize.width - deltaX);
          newX = initialWindowPosition.x + deltaX;
        } else if (isResizing.direction.includes('right')) {
          newWidth = Math.max(400, initialSize.width + deltaX);
        }
        
        if (isResizing.direction.includes('top')) {
          newHeight = Math.max(300, initialSize.height - deltaY);
          newY = initialWindowPosition.y + deltaY;
        } else if (isResizing.direction.includes('bottom')) {
          newHeight = Math.max(300, initialSize.height + deltaY);
        }
        
        setWindows(prev => prev.map(w => 
          w.id === isResizing.windowId ? {
            ...w,
            size: { 
              width: isNaN(newWidth) ? 594 : newWidth, 
              height: isNaN(newHeight) ? 497 : newHeight 
            },
            position: isResizing.direction.includes('left') || isResizing.direction.includes('top') 
              ? { 
                  x: isNaN(newX) ? w.position.x : newX, 
                  y: isNaN(newY) ? w.position.y : newY 
                } 
              : w.position
          } : w
        ));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(null);
      setIsResizing(null);
    };

    const handleMouseLeave = () => {
      // Cancel drag/resize when mouse leaves the browser window
      setIsDragging(null);
      setIsResizing(null);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging, isResizing, dragOffset, initialSize, initialMousePosition, initialWindowPosition]);

  const handleDragStart = (windowId: string, e: React.MouseEvent) => {
    const window = windows.find(w => w.id === windowId);
    if (!window) return;
    
    // Prevent dragging for maximized windows
    if (window.state === 'maximized') {
      e.preventDefault();
      return;
    }
    
    setDragOffset({
      x: e.clientX - window.position.x,
      y: e.clientY - window.position.y
    });
    setIsDragging(windowId);
    e.preventDefault();
  };

  const handleResizeStart = (windowId: string, e: React.MouseEvent, direction: string) => {
    const window = windows.find(w => w.id === windowId);
    if (!window) return;
    
    setIsResizing({ windowId, direction });
    setInitialSize(window.size);
    setInitialMousePosition({ x: e.clientX, y: e.clientY });
    setInitialWindowPosition(window.position);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClose = (windowId: string) => {
    setWindows(prev => {
      const updatedWindows = prev.filter(w => w.id !== windowId);
      
      // If the closed window was the active window, set a new active window
      if (activeWindowId === windowId && updatedWindows.length > 0) {
        // Find the next window that's not closed
        const nextActiveWindow = updatedWindows.find(w => w.state !== 'closed');
        if (nextActiveWindow) {
          setActiveWindowId(nextActiveWindow.id);
        } else {
          setActiveWindowId(null);
        }
      }
      
      return updatedWindows;
    });
    
    // Clear the search term for the closed window
    setSearchTerms(prev => {
      const newSearchTerms = { ...prev };
      delete newSearchTerms[windowId];
      return newSearchTerms;
    });
  };

  const handleMinimize = (windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { 
        ...w, 
        state: 'minimized' as const,
        previousWindowState: w.state === 'maximized' ? 'maximized' : 'normal'
      } : w
    ));
  };

  const handleRestoreFromDock = (windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { 
        ...w, 
        state: (w.previousWindowState || 'normal') as const, 
        zIndex: nextZIndex,
        previousWindowState: undefined
      } : w
    ));
    setNextZIndex(prev => prev + 1);
    setActiveWindowId(windowId);
  };

  const handleTaskbarClick = (windowId: string) => {
    const window = windows.find(w => w.id === windowId);
    if (!window) return;

    if (window.state === 'minimized') {
      // Restore minimized window
      handleRestoreFromDock(windowId);
    } else if (activeWindowId === windowId) {
      // If already active, minimize it
      handleMinimize(windowId);
    } else {
      // Bring to front and focus
      bringToFront(windowId);
      setActiveWindowId(windowId);
    }
  };

  const handleMaximize = (windowId: string) => {
    const windowData = windows.find(w => w.id === windowId);
    if (!windowData) return;
    
    if (windowData.state === 'maximized') {
      setWindows(prev => prev.map(w => 
        w.id === windowId ? { 
          ...w, 
          state: 'normal' as const,
          position: w.previousState?.position || w.position,
          size: w.previousState?.size || w.size
        } : w
      ));
    } else {
      const mastheadHeight = 32;
      const margin = 20;
      setWindows(prev => prev.map(w => 
        w.id === windowId ? { 
          ...w, 
          state: 'maximized' as const,
          previousState: { position: w.position, size: w.size },
          position: { x: margin, y: mastheadHeight + margin },
          size: { 
            width: window.innerWidth - (margin * 2), 
            height: window.innerHeight - mastheadHeight - (margin * 2) 
          }
        } : w
      ));
    }
  };

  const handleSearchChange = (windowId: string, value: string) => {
    setSearchTerms(prev => ({ ...prev, [windowId]: value }));
  };

  const handleActivateWindow = (docType: string) => {
    // Check if the window exists and is not closed
    const existingWindow = windows.find(w => w.id === docType && w.state !== 'closed');
    if (existingWindow) {
      // If window exists, bring it to front and activate it
      bringToFront(docType);
      setActiveWindowId(docType);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="bg-[#e1d7c2] relative size-full no-select" 
      data-name="MacBook Air - 1"
    >
      <Frame5 windows={windows} onOpenDocument={openDocument} onActivateWindow={handleActivateWindow} />
      {windows.map((window) => {
        if (window.state === 'minimized') return null;
        
        return (
          <WindowWithTitlebar 
            key={window.id}
            windowData={window}
            onDragStart={(e) => handleDragStart(window.id, e)}
            onResizeStart={(e, direction) => handleResizeStart(window.id, e, direction)}
            onClose={() => handleClose(window.id)}
            onMinimize={() => handleMinimize(window.id)}
            onMaximize={() => handleMaximize(window.id)}
            isDragging={isDragging === window.id}
            isResizing={isResizing?.windowId === window.id ? isResizing.direction : null}
            searchTerm={searchTerms[window.id] || ''}
            onSearchChange={(value) => handleSearchChange(window.id, value)}
            onWindowClick={() => {
              bringToFront(window.id);
              setActiveWindowId(window.id);
            }}
            isActive={activeWindowId === window.id}
            onFileSelect={(fileId) => handleFileSelect(window.id, fileId)}
          />
        );
      })}
      <TooltipProvider>
        <Taskbar 
          windows={windows} 
          activeWindowId={activeWindowId} 
          onWindowClick={handleTaskbarClick} 
        />
      </TooltipProvider>
      <Frame6 />
    </div>
  );
}