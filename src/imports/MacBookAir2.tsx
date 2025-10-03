import svgPaths from "./svg-a3j09sz84v";
import imgUntitledArtwork1 from "figma:asset/6a2954ef7309b0be8ff53811c71d12ce5e7847c4.png";

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

function Frame1() {
  return (
    <div className="bg-[#c2c5e1] content-stretch flex gap-[10px] h-[16px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">about_me.md</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Aboutme />
      <Frame1 />
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

function Frame2() {
  return (
    <div className="bg-[#e1d7c2] content-stretch flex gap-[10px] h-[16px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">resume.pdf</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Aboutme1 />
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[18px] items-start left-[16px] top-[75px] w-[80px]">
      <Frame3 />
      <Frame4 />
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

function WindowControls() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[12px] items-center justify-center px-[20px] py-0 relative shrink-0" data-name="Window Controls">
      <Close />
      <Minimize />
      <Zoom />
    </div>
  );
}

function TitleAndSubtitle() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Title and Subtitle">
      <p className="font-['SF_Pro:Semibold',_sans-serif] font-[590] leading-[20px] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.85)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        about_me.md
      </p>
    </div>
  );
}

function TitleSidebarAndNavigation() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-0 relative shrink-0" data-name="Title + Sidebar and Navigation">
      <TitleAndSubtitle />
    </div>
  );
}

function Leading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Leading">
      <WindowControls />
      <TitleSidebarAndNavigation />
    </div>
  );
}

function Download02() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="download-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="download-02">
          <path d={svgPaths.p2c9ebc00} id="Icon" stroke="var(--stroke-0, #747473)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Share03() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="share-03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="share-03">
          <path d={svgPaths.p14f840} id="Icon" stroke="var(--stroke-0, #747473)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SegmentedControl() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Segmented Control">
      <Download02 />
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(0,0,0,0.5)] text-center w-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre-wrap"> </p>
      </div>
      <Share03 />
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(0,0,0,0.5)] text-center w-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre-wrap"> </p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[28px] items-center px-[7px] py-[6px] relative rounded-[6px] shrink-0 w-[126px]" data-name="Search">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 size-[16px] text-[#747473] text-[13px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">􀊫</p>
      </div>
      <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',_sans-serif] font-normal grow h-[16px] leading-[16px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-[rgba(0,0,0,0.25)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search
      </p>
    </div>
  );
}

function Trailing() {
  return (
    <div className="box-border content-stretch flex items-center justify-end px-[12px] py-0 relative shrink-0" data-name="Trailing">
      <SegmentedControl />
      <Search />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="backdrop-blur-[15px] backdrop-filter bg-[rgba(234,234,234,0.8)] box-border content-stretch flex items-center justify-between px-0 py-[9px] relative shadow-[0px_0.5px_0px_0px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(0,0,0,0.1)] shrink-0 w-full z-[2]" data-name="Toolbar">
      <Leading />
      <Trailing />
    </div>
  );
}

function ContentArea() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Content Area">
      <div className="absolute inset-0" data-name="Margins">
        <div aria-hidden="true" className="absolute border-[20px] border-[rgba(255,0,0,0.2)] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] h-[427px] justify-center leading-[16px] left-[21px] not-italic text-[12px] text-black top-[234.5px] translate-y-[-50%] w-[552px]">
        <p className="mb-0">Hey there,</p>
        <p className="mb-0">
          I am excited to bring my design systems and AI experience to help Google ship cohesive enterprise grade experiences faster.
          <br aria-hidden="true" />I build the bridge between design and engineering, turning complex workflows into patterns teams can reuse with confidence.
          <br aria-hidden="true" />
          At Dell I helped lead the Infrastructure Design System, covering foundations, tokens, components, accessibility, and the governance that keeps it healthy across products.
          <br aria-hidden="true" />
          To make the system truly usable I used Figma Code Connect to annotate designs with live code references, props, and usage notes, so product teams could ingest our components directly into their own agentic AI workflows with minimal handoff.
          <br aria-hidden="true" />I like to prove ideas in code, including an on prem retrieval augmented assistant and a research library that sped up discovery for hundreds of internal users.
          <br aria-hidden="true" />
          Earlier I cofounded the Dell developer portal and led usability work that shaped its information architecture and launch.
          <br aria-hidden="true" />
          In enterprise systems management I simplified admin flows and dashboards and saw measurable drops in task time across multiple product lines.
          <br aria-hidden="true" />I teach design prototyping at the University of Texas and I mentor cross functional teams on systems thinking and rapid exploration.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p>
          Warmly,
          <br aria-hidden="true" />
          Eric T Graham
        </p>
      </div>
    </div>
  );
}

function WindowWithTitlebar() {
  return (
    <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(234,234,234,0.84)] box-border content-stretch flex flex-col h-[497px] isolate items-start left-[337px] overflow-clip rounded-[10px] shadow-[0px_36px_100px_0px_rgba(0,0,0,0.4),0px_0px_3px_0px_rgba(0,0,0,0.25)] top-[131px] w-[594px]" data-name="Window with Titlebar">
      <Toolbar />
      <ContentArea />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_3px_0px_inset_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[32px]" data-name="Untitled_Artwork 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUntitledArtwork1} />
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['IBM_Plex_Mono:Medium',_sans-serif] justify-center leading-[0] ml-[115.5px] mt-[17px] not-italic relative text-[16px] text-black text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[16px] whitespace-pre">Eric T. Graham</p>
      </div>
    </div>
  );
}

function Secondary() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col items-center justify-center ml-0 mt-0 overflow-clip px-[7px] py-[3px] relative rounded-[5px] shadow-[0px_0.5px_2.5px_0px_rgba(0,0,0,0.3),0px_0px_0px_0.5px_rgba(0,0,0,0.05)]" data-name="Secondary">
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.85)] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Share</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[884px] mt-[6px] place-items-start relative">
      <div className="[grid-area:1_/_1] flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] ml-[227px] mt-[11px] not-italic relative text-[12px] text-black text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[16px] whitespace-pre">Wednesday, October 1st 2025 @ 10:01 PM</p>
      </div>
      <Secondary />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#fff9eb] box-border content-stretch flex flex-col gap-[10px] h-[51px] items-start left-0 px-[16px] py-[9px] top-0 w-[1280px]">
      <Group3 />
    </div>
  );
}

export default function MacBookAir2() {
  return (
    <div className="bg-[#e1d7c2] relative size-full" data-name="MacBook Air - 2">
      <Frame5 />
      <WindowWithTitlebar />
      <Frame6 />
    </div>
  );
}