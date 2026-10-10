const assetPathPrefix = "https://www.figma.com/api/mcp/asset/e6189f57-59b5-4bc1-8c63-f0636aa544c8";
const imgChompLogo = `${assetPathPrefix}/95f50.png`;
const imgBattery = `${assetPathPrefix}/fe7dd.svg`;
const imgWifi = `${assetPathPrefix}/9ed76.svg`;
const imgCellularConnection = `${assetPathPrefix}/83135.svg`;
const imgSvg = `${assetPathPrefix}/f963f.svg`;
const imgSvg1 = `${assetPathPrefix}/913b4.svg`;
const imgSvg2 = `${assetPathPrefix}/538e9.svg`;
const imgSvg3 = `${assetPathPrefix}/fe8bf.svg`;
const imgContainer = `${assetPathPrefix}/1fbe0.svg`;

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

export default function Sign() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="202:17860" data-name="Sign">
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="202:17876" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
      <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="202:17877" data-name="Navigation bar">
        <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I202:17877;9:2837" data-name="Status Bar">
          <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I202:17877;9:2837;7:2322" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I202:17877;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I202:17877;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I202:17877;9:2837;7:2335" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I202:17877;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[82px]" data-node-id="202:17902" data-name="Container">
        <div className="absolute inset-0 overflow-clip" data-node-id="202:17903" data-name="Floating Ambient Culinary Micro-Doodles">
          <div className="absolute content-stretch flex flex-col items-start justify-center left-[-12px] opacity-40 size-[80px] top-[-16px]" data-node-id="202:17904" data-name="Noodle Swirl Top Left">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="202:17905" data-name="SVG">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg} />
            </div>
          </div>
          <div className="absolute flex items-center justify-center right-[-13.95px] size-[75.908px] top-[26.05px]" data-node-id="202:17908">
            <div className="flex-none rotate-12">
              <div className="content-stretch flex flex-col items-start justify-center opacity-35 relative size-[64px]" data-name="Soft Avocado Slice Top Right">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="202:17909" data-name="SVG">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg1} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex items-center justify-center left-[6.42px] size-[35.17px] top-[206.42px]" data-node-id="202:17912">
            <div className="-rotate-6 flex-none">
              <div className="content-stretch flex flex-col items-start justify-center opacity-45 relative size-[32px]" data-name="Joyful Sparkle Center Left">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="202:17913" data-name="SVG">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg2} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[60.257px] items-center justify-center right-[6.71px] top-[364.87px] w-[72.581px]" data-node-id="202:17915">
            <div className="-rotate-12 flex-none">
              <div className="content-stretch flex flex-col h-[48px] items-start opacity-35 relative w-[64px]" data-name="Minimal Nigiri Sushi Bottom Right">
                <div className="bg-[#eee0d4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[28.001px] items-center justify-center relative rounded-[9999px] shrink-0 w-[56.005px]" data-node-id="202:17916" data-name="Background+Shadow">
                  <div className="absolute bg-[#fe7d5e] h-[16px] left-[4px] rounded-[9999px] top-[-4.01px] w-[47.999px]" data-node-id="202:17917" data-name="Background" />
                  <div className="bg-[#372f27] h-[32.001px] opacity-80 relative rounded-[2px] shrink-0 w-[12.003px]" data-node-id="202:17918" data-name="Background" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[194px] content-stretch flex flex-col items-start justify-center left-[16px] opacity-40 size-[24px]" data-node-id="202:17919" data-name="Playful Sparkle Cluster Bottom Left">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="202:17920" data-name="SVG">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg3} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[680px] items-center min-h-[680px] pb-[16px] pt-[40px] relative shrink-0 w-full" data-node-id="202:17922" data-name="Main Hero Visual Content Container">
          <div className="content-stretch flex flex-col h-[441.5px] items-start justify-center min-h-[320.5px] py-[60.5px] relative shrink-0 w-full" data-node-id="202:17928" data-name="Centerpiece Brand Icon & Typography:margin">
            <div className="h-[320.5px] relative shrink-0 w-full" data-node-id="202:17929" data-name="Centerpiece Brand Icon & Typography">
              <div className="absolute content-stretch flex flex-col items-start left-[112.02px] pb-[8px] top-[168px]" data-node-id="202:17930" data-name="Heading 1 - Brand Wordmark:margin">
                <div className="content-stretch flex gap-[3.99px] items-center justify-center relative shrink-0" data-node-id="202:17931" data-name="Heading 1 - Brand Wordmark">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="202:17932" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[32px] text-center tracking-[-0.8px] whitespace-nowrap" data-node-id="202:17933">
                      <p className="leading-[40px]">Chomp</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col h-[14px] items-start pb-[4px] relative shrink-0 w-[10px]" data-node-id="202:17934" data-name="Margin">
                    <div className="bg-[#fe7d5e] relative rounded-[9999px] shrink-0 size-[10px]" data-node-id="202:17935" data-name="Background" />
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 max-w-[240px] top-[216px]" data-node-id="202:17936" data-name="Delightful Human Tagline">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[18px] text-center whitespace-nowrap" data-node-id="202:17937">
                  <p className="leading-[29.25px] mb-0">Stop overthinking it.</p>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold'] font-semibold leading-[29.25px]">{`Let's eat.`}</p>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[103px] pb-[24px] top-0" data-node-id="202:17950" data-name="Tactile Plate Logo with Soft Halo Glow:margin">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="202:17951" data-name="Tactile Plate Logo with Soft Halo Glow">
                  <div className="absolute bg-[rgba(255,212,59,0.3)] blur-[20px] inset-[-16px] rounded-[9999px]" data-node-id="202:17952" data-name="Ambient Butter Glow" />
                  <div className="bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[9999px] shrink-0 size-[144px]" data-node-id="202:17953" data-name="Interactive Pillows & Plate Asset Wrapper">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_16px_36px_-6px_rgba(62,45,18,0.14)] size-[144px] top-1/2" data-node-id="202:17954" data-name="Interactive Pillows & Plate Asset Wrapper:shadow" />
                    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[9999px]" data-node-id="202:17955" data-name="Chomp Logo">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgChompLogo} />
                      </div>
                    </div>
                    <div className="absolute bg-[#ffd43b] right-[-4px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[10px] top-[-4px]" data-node-id="202:17956" data-name="Tiny Playful Bite Crumbs Micro-detail" />
                    <div className="absolute bg-[#fe7d5e] opacity-80 right-[-12px] rounded-[9999px] size-[6px] top-[8px]" data-node-id="202:17957" data-name="Background" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[94px] items-start justify-center min-h-[94px] relative shrink-0 w-full" data-node-id="202:17958" data-name="Bottom Actions & Ready State:margin">
            <a className="content-stretch cursor-pointer flex flex-col items-center px-[8px] relative shrink-0 w-full" data-node-id="202:17959" data-name="Bottom Actions & Ready State">
              <div className="bg-[#ffd43b] content-stretch flex h-[56px] items-center justify-center overflow-clip relative rounded-[9999px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.12)] shrink-0 w-full" data-node-id="202:17960" data-name="Primary Action CTA Button">
                <div className="content-stretch flex gap-[8.01px] items-center relative shrink-0" data-node-id="202:17961" data-name="Container">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="202:17962" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[15px] text-center tracking-[0.15px] whitespace-nowrap" data-node-id="202:17963">
                      <p className="leading-[20px]">Get Started</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[12px]" data-node-id="202:17964" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
