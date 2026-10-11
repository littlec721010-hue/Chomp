const assetPathPrefix = "https://www.figma.com/api/mcp/asset/8d87cfe8-43c3-4918-9075-1835cfbf2db8";
const imgAb6AXuDeRdpurLksKyZqHxhLfxgGyGfhDq2Mza9TVMls1S7QtHHvAutTheAPvtqwYrUoyYqJyQn4Y09Siv5TnGhErvagwkxOqX4RjAhSdYmH7MZjTxpHclhJwkApMgKbRwVlMooV3Mcqcy0IuwN7TtSpiCqwM503CmWcuFd4MUc6Ub0BpGpkVnW348Ma3HcOy2K1J2CX5Ke5IefHd9QnH0Xkosm4GTPuPwkLbyt4WDkPmDs1MmhqL0 = `${assetPathPrefix}/f37ad.png`;
const imgBattery = `${assetPathPrefix}/fe7dd.svg`;
const imgWifi = `${assetPathPrefix}/9ed76.svg`;
const imgCellularConnection = `${assetPathPrefix}/83135.svg`;
const imgContainer = `${assetPathPrefix}/b4c81.svg`;
const imgContainer1 = `${assetPathPrefix}/22867.svg`;
const imgContainer2 = `${assetPathPrefix}/ece1c.svg`;
const imgContainer3 = `${assetPathPrefix}/a07e1.svg`;

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

export default function Decide15() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="312:26427" data-name="Decide 15">
      <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="312:26428" data-name="Navigation bar">
        <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I312:26428;9:2837" data-name="Status Bar">
          <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I312:26428;9:2837;7:2322" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I312:26428;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I312:26428;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I312:26428;9:2837;7:2335" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I312:26428;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-[844px] left-0 overflow-clip top-0 w-[391px]" data-node-id="312:26435" data-name="Subtle ambient celebratory decorative canvas">
        <div className="-translate-x-1/2 absolute bg-[rgba(255,212,59,0.25)] blur-[32px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-48px]" data-node-id="312:26436" data-name="Overlay+Blur" />
        <div className="absolute bg-[rgba(254,125,94,0.2)] blur-[20px] right-[-64px] rounded-[9999px] size-[224px] top-[192px]" data-node-id="312:26437" data-name="Overlay+Blur" />
        <div className="absolute bg-[rgba(169,231,169,0.3)] blur-[20px] left-[-48px] rounded-[9999px] size-[192px] top-[320px]" data-node-id="312:26438" data-name="Overlay+Blur" />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[88.8px] pb-[8px] top-[52px]" data-node-id="312:26439" data-name="Heading 2 - Celebration Title & Subtext:margin">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26440" data-name="Heading 2 - Celebration Title & Subtext">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[32px] text-center tracking-[-0.8px] whitespace-nowrap" data-node-id="312:26441">
            <p className="leading-[40px]">Your vote is in!</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[35px] max-w-[320px] pb-[20px] top-[100px]" data-node-id="312:26442" data-name="Margin">
        <div className="content-stretch flex flex-col items-center max-w-[320px] pl-[2.27px] pr-[2.28px] relative shrink-0" data-node-id="312:26443" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[14px] text-center whitespace-nowrap" data-node-id="312:26444">
            <p className="mb-0">
              <span className="leading-[20px] text-[#251e14]">{`You voted for `}</span>
              <span className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[20px] text-[#251e14]">{`Oishii Ramen & Izakaya `}</span>
              <span className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium'] font-medium leading-[20px] text-[#251e14]">in the</span>
              <span className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium'] font-medium leading-[20px]">{` `}</span>
              <span className="leading-[20px] text-[#251e14]">Chomp</span>
            </p>
            <p>
              <span className="leading-[20px]">random poll</span>
              <span className="leading-[20px] text-[#251e14]">. Your squad will see your vote</span>
              <span className="leading-[20px]">{` `}</span>
              <span className="leading-[20px] text-[#251e14]">counted.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[20px] top-[147px]" data-node-id="312:26445">
        <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[16px] right-[20px] top-[147px]" data-node-id="312:26446" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow):margin">
          <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[32px] shrink-0 w-full" data-node-id="312:26447" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow)">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_4px_20px_-2px_rgba(62,45,18,0.08)]" data-node-id="312:26448" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow):shadow" />
            <div className="h-[64px] relative shrink-0 w-full" data-node-id="312:26449" data-name="Spot Details Split" />
            <div className="bg-[#fff1e5] content-stretch flex flex-col gap-[10px] items-start p-[12px] relative rounded-[16px] shrink-0 w-full" data-node-id="312:26450" data-name="Card Metadata Rows in a Soft Tonal Inset">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="312:26451" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="312:26452" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[14px] whitespace-nowrap" data-node-id="312:26453">
                    <p className="leading-[20px]">Voted via:</p>
                  </div>
                </div>
                <div className="bg-[#ffdc73] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="312:26454" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[13px] whitespace-nowrap" data-node-id="312:26455">
                    <p className="leading-[18px]">Free Choice</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full" data-node-id="312:26456" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="312:26457" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[14px] whitespace-nowrap" data-node-id="312:26458">
                    <p className="leading-[20px]">Group status:</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="312:26459" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26460" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#326a38] text-[15px] tracking-[0.15px] whitespace-nowrap" data-node-id="312:26461">
                      <p className="leading-[20px]">4 of 4</p>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[15px] tracking-[0.15px] whitespace-nowrap" data-node-id="312:26462">
                    <p className="leading-[20px]">friends voted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute contents left-[52px] top-[calc(50%-222px)]" data-node-id="312:26463">
          <div className="-translate-y-1/2 absolute bg-[#f4e6d9] content-stretch flex flex-col items-start justify-center left-[52px] overflow-clip size-[64px] top-[calc(50%-222px)]" data-node-id="312:26464" data-name="Background">
            <div className="flex-[1_0_0] min-h-px relative rounded-[10px] w-full" data-node-id="312:26465" data-name="AB6AXuDeRDPUR_LksKyZqHXHLfxgGYGfhDQ2mza-9tVMls1s7qtHHvAutTheAPvtqwYrUoyYqJyQN4y09siv5TNGhERVAGWKXOqX4RjAH-SDYmH7MZjTxpHclhJWKApMgKbRwVLMooV3MCQCY0iuwN7_TTSpiCqw-M503cmWCUFd4mUc6ub0BpGpkVnW348Ma3HcOy2k1J2cX5ke5iefHd9qnH0Xkosm4gTPuPwkLBYT4wDkPMDs1MmhqL0">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
                <img alt="" className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]" src={imgAb6AXuDeRdpurLksKyZqHxhLfxgGyGfhDq2Mza9TVMls1S7QtHHvAutTheAPvtqwYrUoyYqJyQn4Y09Siv5TnGhErvagwkxOqX4RjAhSdYmH7MZjTxpHclhJwkApMgKbRwVlMooV3Mcqcy0IuwN7TtSpiCqwM503CmWcuFd4MUc6Ub0BpGpkVnW348Ma3HcOy2K1J2CX5Ke5IefHd9QnH0Xkosm4GTPuPwkLbyt4WDkPmDs1MmhqL0} />
              </div>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.9)] bottom-[4px] content-stretch flex items-center px-[4px] py-[2px] right-[4px] rounded-[9999px]" data-node-id="312:26466" data-name="Overlay">
              <div className="h-[7.917px] relative shrink-0 w-[8.333px]" data-node-id="312:26467" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
              </div>
              <div className="content-stretch flex flex-col items-start pl-[2px] relative shrink-0" data-node-id="312:26469" data-name="Margin">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[10px] whitespace-nowrap" data-node-id="312:26470">
                  <p className="leading-[20px]">4.9</p>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[132px] right-[52px] top-[calc(50%-222px)]" data-node-id="312:26471" data-name="Container">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="312:26472" data-name="Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="312:26473" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[18px] w-full" data-node-id="312:26474">
                  <p className="leading-[26px]">{`Oishii Ramen & Izakaya`}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="312:26475" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[14px] w-full" data-node-id="312:26476">
                <p className="leading-[20px] mb-0">Japanese • Izakaya</p>
                <p className="leading-[20px]">0.8 mi • $15-30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[21px] pb-[24px] right-[19px] top-[367px]" data-node-id="312:26477" data-name="Member Vote Progress Strip Section:margin">
        <div className="bg-[#f9ecdf] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[16px] relative rounded-[32px] shrink-0 w-full" data-node-id="312:26478" data-name="Member Vote Progress Strip Section">
          <div className="content-stretch flex items-center justify-between px-[4px] relative shrink-0 w-full" data-node-id="312:26479" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26480" data-name="Heading 3">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[15px] tracking-[0.375px] uppercase whitespace-nowrap" data-node-id="312:26481">
                <p className="leading-[20px]">SQUAD PULSE</p>
              </div>
            </div>
            <div className="bg-[rgba(169,231,169,0.6)] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="312:26482" data-name="Overlay">
              <div className="bg-[#326a38] relative rounded-[9999px] shrink-0 size-[6px]" data-node-id="312:26483" data-name="Background" />
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#326a38] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26484">
                <p className="leading-[14px]">100% Complete</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="312:26485" data-name="Member List">
            <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between p-[10px] relative rounded-[16px] shrink-0 w-full" data-node-id="312:26486" data-name="1. Shan (User)">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="312:26487" data-name="Container">
                <div className="bg-[#ffe082] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26488" data-name="Background">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26489" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="312:26490">
                      <p className="leading-[24px]">S</p>
                    </div>
                  </div>
                  <div className="absolute bg-[#326a38] bottom-[-2px] content-stretch flex items-center justify-center right-[-2px] rounded-[9999px] size-[14px]" data-node-id="312:26491" data-name="Background">
                    <div className="h-[5.01px] relative shrink-0 w-[6.792px]" data-node-id="312:26492" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26494" data-name="Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="312:26495" data-name="Container">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="312:26496" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26497">
                        <p className="leading-[24px]">Sarah</p>
                      </div>
                    </div>
                    <div className="bg-[#ffe082] content-stretch flex flex-col items-start px-[6px] relative rounded-[16px] shrink-0" data-node-id="312:26498" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#564500] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26499">
                        <p className="leading-[14px]">You</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="312:26500" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26501">
                      <p className="leading-[14px]">{`Oishii Ramen & Izakaya`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff1e5] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="312:26586" data-name="Background">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26587">
                  <p className="leading-[14px]">{`Free Choice `}</p>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-between p-[10px] relative rounded-[16px] shrink-0 w-full" data-node-id="312:26505" data-name="2. Alex">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="312:26506" data-name="Container">
                <div className="bg-[#f4e6d9] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26507" data-name="Background">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26508" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26509">
                      <p className="leading-[24px]">A</p>
                    </div>
                  </div>
                  <div className="absolute bg-[#326a38] bottom-[-2px] content-stretch flex items-center justify-center right-[-2px] rounded-[9999px] size-[14px]" data-node-id="312:26510" data-name="Background">
                    <div className="h-[5.01px] relative shrink-0 w-[6.792px]" data-node-id="312:26511" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26513" data-name="Container">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="312:26514" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26515">
                      <p className="leading-[24px]">Alex</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26516" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#326a38] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26517">
                      <p className="leading-[14px]">Locked in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff1e5] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="312:26518" data-name="Background">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26519">
                  <p className="leading-[14px]">{`Free Choice `}</p>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-between p-[10px] relative rounded-[16px] shrink-0 w-full" data-node-id="312:26520" data-name="3. Jamie">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="312:26521" data-name="Container">
                <div className="bg-[#f4e6d9] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26522" data-name="Background">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26523" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26524">
                      <p className="leading-[24px]">J</p>
                    </div>
                  </div>
                  <div className="absolute bg-[#326a38] bottom-[-2px] content-stretch flex items-center justify-center right-[-2px] rounded-[9999px] size-[14px]" data-node-id="312:26525" data-name="Background">
                    <div className="h-[5.01px] relative shrink-0 w-[6.792px]" data-node-id="312:26526" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26528" data-name="Container">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="312:26529" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26530">
                      <p className="leading-[24px]">Jamie</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26531" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#326a38] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26532">
                      <p className="leading-[14px]">Locked in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff1e5] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="312:26533" data-name="Background">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#a53b22] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26534">
                  <p className="leading-[14px]">Chomp Random</p>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-between p-[10px] relative rounded-[16px] shrink-0 w-full" data-node-id="312:26535" data-name="2. Alex">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="312:26536" data-name="Container">
                <div className="bg-[#f4e6d9] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26537" data-name="Background">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26538" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26539">
                      <p className="leading-[24px]">T</p>
                    </div>
                  </div>
                  <div className="absolute bg-[#326a38] bottom-[-2px] content-stretch flex items-center justify-center right-[-2px] rounded-[9999px] size-[14px]" data-node-id="312:26540" data-name="Background">
                    <div className="h-[5.01px] relative shrink-0 w-[6.792px]" data-node-id="312:26541" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26543" data-name="Container">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="312:26544" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26545">
                      <p className="leading-[24px]">Taylor</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26546" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#326a38] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26547">
                      <p className="leading-[14px]">Locked in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff1e5] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="312:26548" data-name="Background">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26549">
                  <p className="leading-[14px]">{`Free Choice `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="absolute contents cursor-pointer left-[20px] right-[20px] top-[711px]" data-node-id="312:26605">
        <div className="absolute bg-[#ffd43b] h-[50px] left-[20px] right-[20px] rounded-[9999px] top-[711px]" data-node-id="312:26550" data-name="Button - Primary Action: Wait for Squad Results (Butter Yellow Nom Pill)">
          <div className="absolute bg-[rgba(255,255,255,0)] h-[50px] left-0 right-0 rounded-[9999px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.12)] top-0" data-node-id="312:26551" data-name="Button - Primary Action: Wait for Squad Results (Butter Yellow Nom Pill):shadow" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%-12.5px)] top-1/2" data-node-id="312:26552" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[15px] text-center tracking-[0.15px] whitespace-nowrap" data-node-id="312:26553">
              <p className="leading-[20px]">View Result</p>
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+48.67px)] size-[13.333px] top-[calc(50%-0.33px)]" data-node-id="312:26554" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
          </div>
        </div>
      </a>
      <a className="absolute bg-[#f9ecdf] content-stretch cursor-pointer flex gap-[6px] h-[50px] items-center justify-center left-[20px] right-[20px] rounded-[9999px] top-[771px]" data-node-id="312:26556" data-name="Button - Secondary Link: Change My Vote (Soft Cream Pill with subtle contrast)">
        <div className="relative shrink-0 size-[13.5px]" data-node-id="312:26557" data-name="Container">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26559" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[15px] text-center whitespace-nowrap" data-node-id="312:26560">
            <p className="leading-[18px]">Change My Vote</p>
          </div>
        </div>
      </a>
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="312:26561" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
    </div>
  );
}
