const assetPathPrefix = "https://www.figma.com/api/mcp/asset/973df71c-7f9d-41e9-abe0-0798105f2d07";
const imgChompLogo = `${assetPathPrefix}/95f50.png`;
const imgSvg = `${assetPathPrefix}/f963f.svg`;
const imgSvg1 = `${assetPathPrefix}/913b4.svg`;
const imgSvg2 = `${assetPathPrefix}/538e9.svg`;
const imgBattery = `${assetPathPrefix}/fe7dd.svg`;
const imgWifi = `${assetPathPrefix}/9ed76.svg`;
const imgCellularConnection = `${assetPathPrefix}/83135.svg`;
const imgGroup93 = `${assetPathPrefix}/f7bd5.svg`;
const imgVector = `${assetPathPrefix}/afe8d.svg`;
const imgVector1 = `${assetPathPrefix}/11129.svg`;

type HomeIndicatorProps = {
  className?: string;
  dark?: "True";
};

function HomeIndicator({ className, dark = "True" }: HomeIndicatorProps) {
  return (
    <div className={className || "h-[34px] relative w-[375px]"} data-node-id="202:17140">
      <div className="-translate-x-1/2 absolute bg-[#181818] bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[135px]" data-node-id="202:17141" data-name="Line" />
    </div>
  );
}

export default function SignIn() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="202:17973" data-name="Sign in">
      <div className="absolute inset-[68px_23px_96px_17px] overflow-clip" data-node-id="221:18384" data-name="Floating Ambient Culinary Micro-Doodles">
        <div className="absolute content-stretch flex flex-col items-start justify-center left-[-12px] opacity-40 size-[80px] top-[-16px]" data-node-id="221:18385" data-name="Noodle Swirl Top Left">
          <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="221:18386" data-name="SVG">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg} />
          </div>
        </div>
        <div className="absolute flex items-center justify-center right-[-13.95px] size-[75.908px] top-[26.05px]" data-node-id="221:18389">
          <div className="flex-none rotate-12">
            <div className="content-stretch flex flex-col items-start justify-center opacity-35 relative size-[64px]" data-name="Soft Avocado Slice Top Right">
              <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="221:18390" data-name="SVG">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg1} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[6.42px] size-[35.17px] top-[206.42px]" data-node-id="221:18393">
          <div className="-rotate-6 flex-none">
            <div className="content-stretch flex flex-col items-start justify-center opacity-45 relative size-[32px]" data-name="Joyful Sparkle Center Left">
              <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="221:18394" data-name="SVG">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[3.99px] items-center justify-center left-[123px] top-[206px]" data-node-id="221:18404" data-name="Heading 1 - Brand Wordmark">
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="221:18405" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[32px] text-center tracking-[-0.8px] whitespace-nowrap" data-node-id="221:18406">
              <p className="leading-[40px]">Chomp</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[14px] items-start pb-[4px] relative shrink-0 w-[10px]" data-node-id="221:18407" data-name="Margin">
            <div className="bg-[#fe7d5e] relative rounded-[9999px] shrink-0 size-[10px]" data-node-id="221:18408" data-name="Background" />
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="202:17978" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
      <div className="absolute contents left-0 top-[-6px]" data-node-id="202:17983">
        <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="202:17984" data-name="Navigation bar">
          <div className="absolute bottom-[12px] content-stretch flex gap-[12px] h-[24px] items-center left-[16px] w-[21px]" data-node-id="I202:17984;9:2834" data-name="LeftNavBar" />
          <div className="absolute bottom-[12px] content-stretch flex gap-[8px] h-[24px] items-center right-[16px] w-[28px]" data-node-id="I202:17984;9:2835" data-name="RightNavBar" />
          <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I202:17984;9:2837" data-name="Status Bar">
            <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I202:17984;9:2837;7:2322" data-name="Battery">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
            </div>
            <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I202:17984;9:2837;7:2326" data-name="Wifi">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
            </div>
            <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I202:17984;9:2837;7:2330" data-name="Cellular Connection">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
            </div>
            <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I202:17984;9:2837;7:2335" data-name="Time Style">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I202:17984;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
                9:41
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[49.849px] left-[calc(50%-56px)] text-[#251e14] text-[16px] top-[589px] tracking-[0.32px] whitespace-nowrap" data-node-id="202:17985">
        or sign in with
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[49.849px] left-[calc(50%+10px)] text-[#251e14] text-[12px] top-[478px] tracking-[0.24px] whitespace-nowrap" data-node-id="202:17986">
        Forget your password?
      </p>
      <a className="-translate-x-1/2 absolute contents cursor-pointer left-1/2 top-[519px]" data-node-id="202:17987">
        <div className="-translate-x-1/2 absolute bg-[#ffd43b] h-[42px] left-1/2 rounded-[21px] top-[519px] w-[288px]" data-node-id="202:17988" />
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[49.849px] left-[calc(50%-31px)] text-[#725b00] text-[16px] top-[535px] tracking-[0.32px] whitespace-nowrap" data-node-id="202:17989">
          Sign in
        </p>
      </a>
      <div className="absolute inset-[74.64%_33.08%_23.46%_32.82%]" data-node-id="202:17991">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup93} />
      </div>
      <a className="-translate-x-1/2 [word-break:break-word] absolute contents cursor-pointer font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[49.849px] left-[calc(50%-0.5px)] text-[16px] top-[698px] tracking-[0.32px] whitespace-nowrap" data-node-id="202:18004">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] absolute left-[calc(50%-128px)] text-[#251e14] top-[698px]" data-node-id="202:18005">{`Don’t have an account? `}</p>
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] absolute left-[calc(50%+61px)] text-[#ffd43b] top-[698px]" data-node-id="202:18006">
          SIGN UP
        </p>
      </a>
      <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.5px)] top-[784px]" data-node-id="202:18007">
        <div className="-translate-x-1/2 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[0] left-[calc(50%-0.5px)] not-italic text-[#888] text-[8px] text-center top-[784px] tracking-[0.16px] w-[273px] whitespace-pre-wrap" data-node-id="202:18008">
          <p className="font-['Plus_Jakarta_Sans:Regular'] leading-[10px] mb-0">{`By signing up, you agree to the `}</p>
          <p className="font-['Plus_Jakarta_Sans:Regular'] mb-0">
            <span className="[text-decoration-skip-ink:none] decoration-from-font decoration-solid leading-[10px] underline">User Agreement</span>
            <span className="leading-[10px]">{` & `}</span>
            <span className="[text-decoration-skip-ink:none] decoration-from-font decoration-solid leading-[10px] underline">Privacy Policy</span>
          </p>
          <p className="leading-[10px]">​</p>
        </div>
      </div>
      <div className="absolute contents left-[52px] top-[422px]" data-node-id="202:18009">
        <div className="-translate-x-1/2 absolute bg-white h-[42px] left-[calc(50%+0.5px)] rounded-[21px] shadow-[3px_4px_7.1px_0px_#d9d9d9] top-[426px] w-[287px]" data-node-id="202:18010" />
        <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[49.849px] left-[83px] text-[#c1c1c1] text-[16px] top-[422px] tracking-[0.32px] whitespace-nowrap" data-node-id="202:18011">
          Password
        </p>
        <div className="absolute inset-[51.54%_79.74%_46.33%_16.15%]" data-node-id="202:18012" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <div className="absolute contents left-[52px] top-[339px]" data-node-id="202:18013">
        <div className="-translate-x-1/2 absolute bg-white h-[42px] left-[calc(50%+0.5px)] rounded-[21px] shadow-[3px_4px_7.1px_0px_#d9d9d9] top-[343px] w-[287px]" data-node-id="202:18014" />
        <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[49.849px] left-[83px] text-[#c1c1c1] text-[16px] top-[339px] tracking-[0.32px] whitespace-nowrap" data-node-id="202:18015">
          Username
        </p>
        <div className="absolute inset-[42.18%_80.26%_56.16%_16.15%]" data-node-id="202:18016" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
        </div>
      </div>
      <div className="absolute content-stretch flex items-center justify-center left-[123px] top-[114px]" data-node-id="202:18133" data-name="Tactile Plate Logo with Soft Halo Glow">
        <div className="absolute bg-[rgba(255,212,59,0.3)] blur-[20px] inset-[-16px] rounded-[9999px]" data-node-id="202:18134" data-name="Ambient Butter Glow" />
        <div className="bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[9999px] shrink-0 size-[144px]" data-node-id="202:18135" data-name="Interactive Pillows & Plate Asset Wrapper">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_16px_36px_-6px_rgba(62,45,18,0.14)] size-[144px] top-1/2" data-node-id="202:18136" data-name="Interactive Pillows & Plate Asset Wrapper:shadow" />
          <div className="flex-[1_0_0] h-full min-w-px relative rounded-[9999px]" data-node-id="202:18137" data-name="Chomp Logo">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgChompLogo} />
            </div>
          </div>
          <div className="absolute bg-[#ffd43b] right-[-4px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[10px] top-[-4px]" data-node-id="202:18138" data-name="Tiny Playful Bite Crumbs Micro-detail" />
          <div className="absolute bg-[#fe7d5e] opacity-80 right-[-12px] rounded-[9999px] size-[6px] top-[8px]" data-node-id="202:18139" data-name="Background" />
        </div>
      </div>
    </div>
  );
}
