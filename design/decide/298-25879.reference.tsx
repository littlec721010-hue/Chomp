const assetPathPrefix = "https://www.figma.com/api/mcp/asset/fb72f988-c974-419e-b06f-da178061be29";
const imgAb6AXuDeRdpurLksKyZqHxhLfxgGyGfhDq2Mza9TVMls1S7QtHHvAutTheAPvtqwYrUoyYqJyQn4Y09Siv5TnGhErvagwkxOqX4RjAhSdYmH7MZjTxpHclhJwkApMgKbRwVlMooV3Mcqcy0IuwN7TtSpiCqwM503CmWcuFd4MUc6Ub0BpGpkVnW348Ma3HcOy2K1J2CX5Ke5IefHd9QnH0Xkosm4GTPuPwkLbyt4WDkPmDs1MmhqL0 = `${assetPathPrefix}/f37ad.png`;
const imgBattery = `${assetPathPrefix}/fe7dd.svg`;
const imgWifi = `${assetPathPrefix}/9ed76.svg`;
const imgCellularConnection = `${assetPathPrefix}/83135.svg`;
const imgContainer = `${assetPathPrefix}/b4c81.svg`;
const imgContainer1 = `${assetPathPrefix}/22867.svg`;
const imgContainer2 = `${assetPathPrefix}/08f19.svg`;
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

export default function Decide16() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="298:25879" data-name="Decide 16">
      <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="298:25880" data-name="Navigation bar">
        <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I298:25880;9:2837" data-name="Status Bar">
          <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I298:25880;9:2837;7:2322" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I298:25880;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I298:25880;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I298:25880;9:2837;7:2335" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I298:25880;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-[844px] left-0 overflow-clip top-0 w-[391px]" data-node-id="312:26417" data-name="Subtle ambient celebratory decorative canvas">
        <div className="-translate-x-1/2 absolute bg-[rgba(255,212,59,0.25)] blur-[32px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-48px]" data-node-id="312:26418" data-name="Overlay+Blur" />
        <div className="absolute bg-[rgba(254,125,94,0.2)] blur-[20px] right-[-64px] rounded-[9999px] size-[224px] top-[192px]" data-node-id="312:26419" data-name="Overlay+Blur" />
        <div className="absolute bg-[rgba(169,231,169,0.3)] blur-[20px] left-[-48px] rounded-[9999px] size-[192px] top-[320px]" data-node-id="312:26420" data-name="Overlay+Blur" />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[88.8px] pb-[8px] top-[52px]" data-node-id="309:26171" data-name="Heading 2 - Celebration Title & Subtext:margin">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="309:26172" data-name="Heading 2 - Celebration Title & Subtext">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[32px] text-center tracking-[-0.8px] whitespace-nowrap" data-node-id="309:26173">
            <p className="leading-[40px]">Your vote is in!</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[35px] max-w-[320px] pb-[20px] top-[100px]" data-node-id="309:26174" data-name="Margin">
        <div className="content-stretch flex flex-col items-center max-w-[320px] pl-[2.27px] pr-[2.28px] relative shrink-0" data-node-id="309:26175" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[14px] text-center whitespace-nowrap" data-node-id="309:26176">
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
      <div className="absolute contents left-[20px] top-[147px]" data-node-id="309:26251">
        <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[16px] right-[20px] top-[147px]" data-node-id="309:26178" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow):margin">
          <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[32px] shrink-0 w-full" data-node-id="309:26179" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow)">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_4px_20px_-2px_rgba(62,45,18,0.08)]" data-node-id="309:26180" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow):shadow" />
            <div className="h-[64px] relative shrink-0 w-full" data-node-id="309:26181" data-name="Spot Details Split" />
            <div className="bg-[#fff1e5] content-stretch flex flex-col gap-[10px] items-start p-[12px] relative rounded-[16px] shrink-0 w-full" data-node-id="309:26202" data-name="Card Metadata Rows in a Soft Tonal Inset">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="309:26203" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="309:26204" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[14px] whitespace-nowrap" data-node-id="309:26207">
                    <p className="leading-[20px]">Voted via:</p>
                  </div>
                </div>
                <div className="bg-[#ffdad2] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="309:26208" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#84240d] text-[13px] whitespace-nowrap" data-node-id="309:26209">
                    <p className="leading-[18px]">Chomp Random</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full" data-node-id="309:26210" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="309:26211" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[14px] whitespace-nowrap" data-node-id="309:26214">
                    <p className="leading-[20px]">Group status:</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="309:26215" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="309:26216" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#326a38] text-[15px] tracking-[0.15px] whitespace-nowrap" data-node-id="309:26217">
                      <p className="leading-[20px]">4 of 4</p>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[15px] tracking-[0.15px] whitespace-nowrap" data-node-id="309:26218">
                    <p className="leading-[20px]">friends voted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute contents left-[52px] top-[calc(50%-222px)]" data-node-id="309:26250">
          <div className="-translate-y-1/2 absolute bg-[#f4e6d9] content-stretch flex flex-col items-start justify-center left-[52px] overflow-clip size-[64px] top-[calc(50%-222px)]" data-node-id="309:26236" data-name="Background">
            <div className="flex-[1_0_0] min-h-px relative rounded-[10px] w-full" data-node-id="309:26237" data-name="AB6AXuDeRDPUR_LksKyZqHXHLfxgGYGfhDQ2mza-9tVMls1s7qtHHvAutTheAPvtqwYrUoyYqJyQN4y09siv5TNGhERVAGWKXOqX4RjAH-SDYmH7MZjTxpHclhJWKApMgKbRwVLMooV3MCQCY0iuwN7_TTSpiCqw-M503cmWCUFd4mUc6ub0BpGpkVnW348Ma3HcOy2k1J2cX5ke5iefHd9qnH0Xkosm4gTPuPwkLBYT4wDkPMDs1MmhqL0">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
                <img alt="" className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]" src={imgAb6AXuDeRdpurLksKyZqHxhLfxgGyGfhDq2Mza9TVMls1S7QtHHvAutTheAPvtqwYrUoyYqJyQn4Y09Siv5TnGhErvagwkxOqX4RjAhSdYmH7MZjTxpHclhJwkApMgKbRwVlMooV3Mcqcy0IuwN7TtSpiCqwM503CmWcuFd4MUc6Ub0BpGpkVnW348Ma3HcOy2K1J2CX5Ke5IefHd9QnH0Xkosm4GTPuPwkLbyt4WDkPmDs1MmhqL0} />
              </div>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.9)] bottom-[4px] content-stretch flex items-center px-[4px] py-[2px] right-[4px] rounded-[9999px]" data-node-id="309:26238" data-name="Overlay">
              <div className="h-[7.917px] relative shrink-0 w-[8.333px]" data-node-id="309:26239" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
              </div>
              <div className="content-stretch flex flex-col items-start pl-[2px] relative shrink-0" data-node-id="309:26241" data-name="Margin">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[10px] whitespace-nowrap" data-node-id="309:26242">
                  <p className="leading-[20px]">4.9</p>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[132px] right-[52px] top-[calc(50%-222px)]" data-node-id="309:26243" data-name="Container">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="309:26244" data-name="Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="309:26245" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[18px] w-full" data-node-id="309:26246">
                  <p className="leading-[26px]">{`Oishii Ramen & Izakaya`}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="309:26247" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[14px] w-full" data-node-id="309:26248">
                <p className="leading-[20px] mb-0">Japanese • Izakaya</p>
                <p className="leading-[20px]">0.8 mi • $15-30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[21px] pb-[24px] right-[19px] top-[367px]" data-node-id="312:26252" data-name="Member Vote Progress Strip Section:margin">
        <div className="bg-[#f9ecdf] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[16px] relative rounded-[32px] shrink-0 w-full" data-node-id="312:26253" data-name="Member Vote Progress Strip Section">
          <div className="content-stretch flex items-center justify-between px-[4px] relative shrink-0 w-full" data-node-id="312:26254" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26255" data-name="Heading 3">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[15px] tracking-[0.375px] uppercase whitespace-nowrap" data-node-id="312:26256">
                <p className="leading-[20px]">SQUAD PULSE</p>
              </div>
            </div>
            <div className="bg-[rgba(169,231,169,0.6)] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="312:26257" data-name="Overlay">
              <div className="bg-[#326a38] relative rounded-[9999px] shrink-0 size-[6px]" data-node-id="312:26258" data-name="Background" />
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#326a38] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26259">
                <p className="leading-[14px]">100% Complete</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="312:26260" data-name="Member List">
            <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between p-[10px] relative rounded-[16px] shrink-0 w-full" data-node-id="312:26261" data-name="1. Shan (User)">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="312:26262" data-name="Container">
                <div className="bg-[#ffdc73] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26263" data-name="Background">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26264" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="312:26265">
                      <p className="leading-[24px]">S</p>
                    </div>
                  </div>
                  <div className="absolute bg-[#326a38] bottom-[-2px] content-stretch flex items-center justify-center right-[-2px] rounded-[9999px] size-[14px]" data-node-id="312:26266" data-name="Background">
                    <div className="h-[5.01px] relative shrink-0 w-[6.792px]" data-node-id="312:26267" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26269" data-name="Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="312:26270" data-name="Container">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="312:26271" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26272">
                        <p className="leading-[24px]">Sarah</p>
                      </div>
                    </div>
                    <div className="bg-[#ffe082] content-stretch flex flex-col items-start px-[6px] relative rounded-[16px] shrink-0" data-node-id="312:26273" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#564500] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26274">
                        <p className="leading-[14px]">You</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="312:26275" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26276">
                      <p className="leading-[14px]">{`Oishii Ramen & Izakaya`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff1e5] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="312:26277" data-name="Background">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26278" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#a53b22] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26279">
                    <p className="leading-[14px]">Chomp Random</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-between p-[10px] relative rounded-[16px] shrink-0 w-full" data-node-id="312:26282" data-name="2. Alex">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="312:26283" data-name="Container">
                <div className="bg-[#f4e6d9] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26284" data-name="Background">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26285" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26286">
                      <p className="leading-[24px]">A</p>
                    </div>
                  </div>
                  <div className="absolute bg-[#326a38] bottom-[-2px] content-stretch flex items-center justify-center right-[-2px] rounded-[9999px] size-[14px]" data-node-id="312:26287" data-name="Background">
                    <div className="h-[5.01px] relative shrink-0 w-[6.792px]" data-node-id="312:26288" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26290" data-name="Container">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="312:26291" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26292">
                      <p className="leading-[24px]">Alex</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26293" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#326a38] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26294">
                      <p className="leading-[14px]">Locked in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff1e5] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="312:26295" data-name="Background">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26296">
                  <p className="leading-[14px]">{`Free Choice `}</p>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-between p-[10px] relative rounded-[16px] shrink-0 w-full" data-node-id="312:26297" data-name="3. Jamie">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="312:26298" data-name="Container">
                <div className="bg-[#f4e6d9] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26299" data-name="Background">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26300" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26301">
                      <p className="leading-[24px]">J</p>
                    </div>
                  </div>
                  <div className="absolute bg-[#326a38] bottom-[-2px] content-stretch flex items-center justify-center right-[-2px] rounded-[9999px] size-[14px]" data-node-id="312:26302" data-name="Background">
                    <div className="h-[5.01px] relative shrink-0 w-[6.792px]" data-node-id="312:26303" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26305" data-name="Container">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="312:26306" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26307">
                      <p className="leading-[24px]">Jamie</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26308" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#326a38] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26309">
                      <p className="leading-[14px]">Locked in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff1e5] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="312:26310" data-name="Background">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#a53b22] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26311">
                  <p className="leading-[14px]">Chomp Random</p>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-between p-[10px] relative rounded-[16px] shrink-0 w-full" data-node-id="312:26401" data-name="2. Alex">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="312:26402" data-name="Container">
                <div className="bg-[#f4e6d9] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26403" data-name="Background">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26404" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26405">
                      <p className="leading-[24px]">T</p>
                    </div>
                  </div>
                  <div className="absolute bg-[#326a38] bottom-[-2px] content-stretch flex items-center justify-center right-[-2px] rounded-[9999px] size-[14px]" data-node-id="312:26406" data-name="Background">
                    <div className="h-[5.01px] relative shrink-0 w-[6.792px]" data-node-id="312:26407" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26409" data-name="Container">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="312:26410" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[16px] whitespace-nowrap" data-node-id="312:26411">
                      <p className="leading-[24px]">Taylor</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26412" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#326a38] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26413">
                      <p className="leading-[14px]">Locked in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff1e5] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="312:26414" data-name="Background">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26415">
                  <p className="leading-[14px]">{`Free Choice `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="absolute contents cursor-pointer left-[20px] right-[20px] top-[711px]" data-node-id="312:26604">
        <div className="absolute bg-[#ffd43b] h-[50px] left-[20px] right-[20px] rounded-[9999px] top-[711px]" data-node-id="312:26389" data-name="Button - Primary Action: Wait for Squad Results (Butter Yellow Nom Pill)">
          <div className="absolute bg-[rgba(255,255,255,0)] h-[50px] left-0 right-0 rounded-[9999px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.12)] top-0" data-node-id="312:26390" data-name="Button - Primary Action: Wait for Squad Results (Butter Yellow Nom Pill):shadow" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%-12.5px)] top-1/2" data-node-id="312:26599" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[15px] text-center tracking-[0.15px] whitespace-nowrap" data-node-id="312:26600">
              <p className="leading-[20px]">View Result</p>
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+48.67px)] size-[13.333px] top-[calc(50%-0.33px)]" data-node-id="312:26601" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
          </div>
        </div>
      </a>
      <a className="absolute bg-[#f9ecdf] content-stretch cursor-pointer flex gap-[6px] h-[50px] items-center justify-center left-[20px] right-[20px] rounded-[9999px] top-[771px]" data-node-id="312:26395" data-name="Button - Secondary Link: Change My Vote (Soft Cream Pill with subtle contrast)">
        <div className="relative shrink-0 size-[13.5px]" data-node-id="312:26396" data-name="Container">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26398" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[15px] text-center whitespace-nowrap" data-node-id="312:26399">
            <p className="leading-[18px]">Change My Vote</p>
          </div>
        </div>
      </a>
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="298:25888" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
    </div>
  );
}
