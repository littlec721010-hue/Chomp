const assetPathPrefix = "https://www.figma.com/api/mcp/asset/b049c14f-88f1-42e8-b8c3-016e28937150";
const imgEllpises = `${assetPathPrefix}/8c028.svg`;
const imgGroup3 = `${assetPathPrefix}/fd9f5.svg`;
const imgGroup2 = `${assetPathPrefix}/8b6ca.svg`;
const imgGroup = `${assetPathPrefix}/03a8c.svg`;
const imgContainer = `${assetPathPrefix}/5cfaf.svg`;
const imgContainer1 = `${assetPathPrefix}/20aab.svg`;
const imgContainer2 = `${assetPathPrefix}/cfe31.svg`;
const imgContainer3 = `${assetPathPrefix}/25b2f.svg`;
const imgContainer4 = `${assetPathPrefix}/3df0f.svg`;
const imgContainer5 = `${assetPathPrefix}/67736.svg`;
const imgGroup276 = `${assetPathPrefix}/e4ab1.svg`;
const imgBattery = `${assetPathPrefix}/fe7dd.svg`;
const imgWifi = `${assetPathPrefix}/9ed76.svg`;
const imgCellularConnection = `${assetPathPrefix}/83135.svg`;

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

function Group4({ className }: { className?: string }) {
  return (
    <div className={className || "h-[130px] relative w-[390px]"} data-node-id="312:27419">
      <div className="absolute bg-white inset-[36.15%_0_0_0] rounded-tl-[12px] rounded-tr-[12px]" data-node-id="209:79" />
      <div className="absolute inset-[0_33.08%_27.69%_34.36%]" data-node-id="209:80" data-name="Ellpises">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllpises} />
      </div>
      <a className="absolute block cursor-pointer inset-[51.54%_14.87%_24.62%_77.18%]" data-node-id="202:17757">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
      </a>
      <div className="absolute bottom-1/2 left-[46.67%] right-[46.67%] top-[28.46%]" data-node-id="202:17748">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
      </div>
      <a className="absolute contents cursor-pointer inset-[51.54%_76%_25.38%_15.38%]" data-node-id="202:17751">
        <div className="absolute inset-[51.54%_76%_25.38%_15.38%]" data-node-id="202:17752" data-name="Group">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
        </div>
      </a>
    </div>
  );
}

export default function Split() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="202:17583" data-name="Split">
      <div className="absolute bg-[#fff8f4] h-[880px] left-[20px] top-[52px] w-[350px]" data-node-id="312:27418" />
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[20px] right-[20px] top-[627px]" data-node-id="312:27363" data-name="Recent Splits Section">
        <div className="content-stretch flex items-center justify-between px-[2px] relative shrink-0 w-full" data-node-id="312:27364" data-name="Container">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="312:27365" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:27366" data-name="Heading 3">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[18px] whitespace-nowrap" data-node-id="312:27367">
                <p className="leading-[26px]">Recent Splits</p>
              </div>
            </div>
            <div className="bg-[#f4e6d9] content-stretch flex items-center justify-center pb-[3.5px] pt-[2.5px] relative rounded-[9999px] shrink-0 size-[20px]" data-node-id="312:27368" data-name="Background">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] text-center tracking-[0.33px] whitespace-nowrap" data-node-id="312:27369">
                <p className="leading-[14px]">2</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="312:27370" data-name="Button">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725c00] text-[13px] text-center whitespace-nowrap" data-node-id="312:27371">
              <p className="leading-[18px]">View All</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="312:27372" data-name="Splits List">
          <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between p-[14px] relative rounded-[32px] shrink-0 w-full" data-node-id="312:27373" data-name="Item 1: Oishii Ramen Feast">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="312:27374" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:27377" data-name="Container">
                <div className="content-stretch flex flex-col items-start mb-[-0.5px] overflow-clip relative shrink-0 w-full" data-node-id="312:27378" data-name="Heading 4">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[15px] tracking-[0.15px] whitespace-nowrap" data-node-id="312:27379">
                    <p className="leading-[20px]">{`Oishii Ramen & Izakaya`}</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="312:27380" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:27381" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:27382">
                      <p className="leading-[14px]">Yesterday</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:27383" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:27384">
                      <p className="leading-[14px]">•</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="312:27385" data-name="Container">
                    <div className="h-[8.667px] relative shrink-0 w-[11.917px]" data-node-id="312:27386" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:27388">
                      <p className="leading-[14px]">4 diners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-end relative shrink-0" data-node-id="312:27389" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:27390" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[20px] tracking-[-0.5px] whitespace-nowrap" data-node-id="312:27391">
                  <p className="leading-[28px]">$127.55</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between p-[14px] relative rounded-[32px] shrink-0 w-full" data-node-id="312:27394" data-name="Item 2: Taqueria Lunch">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="312:27395" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:27398" data-name="Container">
                <div className="content-stretch flex flex-col items-start mb-[-0.5px] overflow-clip relative shrink-0 w-full" data-node-id="312:27399" data-name="Heading 4">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[15px] tracking-[0.15px] whitespace-nowrap" data-node-id="312:27400">
                    <p className="leading-[20px]">Taqueria Lunch</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="312:27401" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:27402" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:27403">
                      <p className="leading-[14px]">3 days ago</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:27404" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:27405">
                      <p className="leading-[14px]">•</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[1.99px] items-center relative shrink-0" data-node-id="312:27406" data-name="Container">
                    <div className="h-[8.667px] relative shrink-0 w-[11.917px]" data-node-id="312:27407" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:27409">
                      <p className="leading-[14px]">3 diners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-end relative shrink-0" data-node-id="312:27410" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:27411" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[20px] tracking-[-0.5px] whitespace-nowrap" data-node-id="312:27412">
                  <p className="leading-[28px]">$48.20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f9ecdf] content-stretch flex flex-col items-start justify-between left-[20px] overflow-clip p-[16px] right-[20px] rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[157px]" data-node-id="312:27280" data-name="Action Card 1: Scan Receipt">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="312:27281" data-name="Container">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="312:27282" data-name="Container">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="312:27283" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:27284" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[18px] whitespace-nowrap" data-node-id="312:27285">
                  <p className="leading-[26px]">Scan Receipt</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:27288" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[13px] whitespace-nowrap" data-node-id="312:27289">
                <p className="leading-[18px]">Instant Optical Reader</p>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-node-id="312:27290" data-name="Background+Shadow">
            <div className="h-[19.5px] relative shrink-0 w-[21.667px]" data-node-id="312:27291" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[88px] items-start py-[12px] relative shrink-0 w-full" data-node-id="312:27293" data-name="Micro visual preview graphic:margin">
          <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[12px] h-[64px] items-center px-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="312:27294" data-name="Micro visual preview graphic">
            <div className="bg-[rgba(236,194,40,0.3)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-node-id="312:27295" data-name="Overlay">
              <div className="h-[18.333px] relative shrink-0 w-[16.667px]" data-node-id="312:27296" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[242px]" data-node-id="312:27298" data-name="Container">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="312:27299" data-name="Container">
                <div className="content-stretch flex flex-col items-start pr-[46.86px] relative shrink-0" data-node-id="312:27300" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] whitespace-nowrap" data-node-id="312:27301">
                    <p className="leading-[16px] mb-0">Auto-detects items, tax, and total instantly</p>
                    <p className="leading-[16px]">via camera lens.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="bg-[#ffd43b] content-stretch cursor-pointer drop-shadow-[0px_4px_7px_rgba(255,212,59,0.35)] flex gap-[8px] h-[48px] items-center justify-center relative rounded-[9999px] shrink-0 w-full" data-node-id="312:27307" data-name="Button">
          <div className="h-[15px] relative shrink-0 w-[16.667px]" data-node-id="312:27308" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:27310" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[15px] text-center tracking-[0.15px] whitespace-nowrap" data-node-id="312:27311">
              <p className="leading-[20px]">{`Open Camera `}</p>
            </div>
          </div>
        </a>
      </div>
      <div className="absolute contents left-[20px] top-[398px]" data-node-id="312:27421">
        <div className="absolute bg-[#fff1e5] content-stretch flex flex-col items-start left-[20px] overflow-clip p-[16px] right-[20px] rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[398px]" data-node-id="312:27313" data-name="Action Card 2: Upload Receipt">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="312:27314" data-name="Container">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="312:27315" data-name="Container">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="312:27316" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:27317" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[18px] whitespace-nowrap" data-node-id="312:27318">
                    <p className="leading-[26px]">Upload Receipt</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:27321" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[13px] whitespace-nowrap" data-node-id="312:27322">
                  <p className="leading-[18px]">Photo Gallery</p>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-node-id="312:27323" data-name="Background+Shadow">
              <div className="relative shrink-0 size-[21.667px]" data-node-id="312:27324" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[88px] items-start py-[12px] relative shrink-0 w-full" data-node-id="312:27342" data-name="Micro visual preview graphic:margin">
            <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[12px] h-[64px] items-center px-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="312:27343" data-name="Micro visual preview graphic">
              <div className="bg-[rgba(205,144,126,0.4)] relative rounded-[9999px] shrink-0 size-[40px]" data-node-id="312:27344" data-name="Overlay" />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[245px]" data-node-id="312:27347" data-name="Container">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="312:27348" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[234px]" data-node-id="312:27349" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] w-[245px]" data-node-id="312:27350">
                      <p className="leading-[16px]">Auto-detects items, tax, and total from your uploaded receipt.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#a53b22] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] h-[48px] items-center justify-center relative rounded-[9999px] shrink-0 w-full" data-node-id="312:27336" data-name="Button">
            <div className="relative shrink-0 size-[15px]" data-node-id="312:27337" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:27339" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[0.15px] whitespace-nowrap" data-node-id="312:27340">
                <p className="leading-[20px]">{`Choose Photo `}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[53.33%_79.49%_44.85%_16.41%]" data-node-id="312:27361">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup276} />
        </div>
      </div>
      <div className="absolute contents left-[20px] right-[20px] top-[52px]" data-node-id="312:27279">
        <div className="absolute content-stretch flex flex-col items-start left-[20px] pt-[4px] right-[20px] top-[52px]" data-node-id="312:27273" data-name="Heading 2:margin">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:27274" data-name="Heading 2">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[32px] tracking-[-0.7px] w-full" data-node-id="312:27275">
              <p className="leading-[36px]">Split the bill</p>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[97.4px]" data-node-id="312:27276" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[14px] w-full" data-node-id="312:27277">
            <p className="leading-[22.75px] mb-0">Snap a paper receipt or upload a digital check.</p>
            <p className="leading-[22.75px]">Chomp handles items, tax, and tips seamlessly.</p>
          </div>
        </div>
      </div>
      <Group4 className="absolute h-[130px] left-0 top-[714px] w-[390px]" />
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="202:17598" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
      <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="202:17599" data-name="Navigation bar">
        <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I202:17599;9:2837" data-name="Status Bar">
          <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I202:17599;9:2837;7:2322" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I202:17599;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I202:17599;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I202:17599;9:2837;7:2335" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I202:17599;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
