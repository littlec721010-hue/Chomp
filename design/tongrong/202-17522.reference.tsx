const assetPathPrefix = "https://www.figma.com/api/mcp/asset/a37628b8-e185-45d9-837a-ce06b5722472";
const imgEllpises = `${assetPathPrefix}/6651f.svg`;
const imgGroup3 = `${assetPathPrefix}/977d6.svg`;
const imgGroup2 = `${assetPathPrefix}/17b2a.svg`;
const imgGroup = `${assetPathPrefix}/1ec4e.svg`;
const imgAb6AXuBs1KKh6SrIQkdyhFlsc9ClSWjTcfCoWog6FsConfRekKhmyh5CkGikTi9AdQcTpYeR0B3BtnWe4Nh73IvwkkbhbdDjxFb3Ei9ZSkUm4L3Gf3XN6M0WSifPKd1CmCj8EMcOuHvt4Gez1YFoF2UKsEhQm4KGasieNruGGoJMhUudDr6PfZ42SRddLbqhx5VfMToXre4ZOog5B4S9DJdAwsZdLkk11JmYs6D0Z4XQUjwSBfCapq = `${assetPathPrefix}/62333.png`;
const imgAb6AXuBl3FdhCi1XQc6JhtdpYYy3PWkcScB9MiVscQg6O1NuLnYmr4ZmTuMroVosFprd3OtZz1VJjme0LjvJq5UgRkGgOdz7NOBgJlOWj1Djrab5Uk8SflgZtECaTc9URemejFwY2BkE7Pt7915XUtfnitBZz3Pr1Y3DuDwq4BiZNdVtpKjt4H3U1IdOn3QqXh1L7RZg8D8YuGfej4CjBDguAwMEjaa45K8Wz6RTuP1Vtlj8Ho = `${assetPathPrefix}/38e36.png`;
const imgContainer = `${assetPathPrefix}/99caf.svg`;
const imgContainer1 = `${assetPathPrefix}/4fff8.svg`;
const imgContainer2 = `${assetPathPrefix}/0995c.svg`;
const imgContainer3 = `${assetPathPrefix}/1fbe0.svg`;
const imgVector = `${assetPathPrefix}/651f1.svg`;
const imgContainer4 = `${assetPathPrefix}/c3159.svg`;
const imgContainer5 = `${assetPathPrefix}/03d99.svg`;
const imgVector1 = `${assetPathPrefix}/79563.svg`;
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

function Navbar({ className }: { className?: string }) {
  return (
    <div className={className || "h-[130px] relative w-[390px]"} data-node-id="242:19542" data-name="Navbar">
      <div className="absolute bg-white inset-[36.15%_0_0_0] rounded-tl-[12px] rounded-tr-[12px]" data-node-id="202:17524" />
      <div className="absolute inset-[0_63.33%_27.69%_4.1%]" data-node-id="202:17525" data-name="Ellpises">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllpises} />
      </div>
      <a className="absolute block cursor-pointer inset-[51.54%_15.38%_24.62%_76.67%]" data-node-id="202:17744">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
      </a>
      <a className="absolute block cursor-pointer inset-[52.31%_46.67%_26.15%_46.67%]" data-node-id="202:17733">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
      </a>
      <div className="absolute contents inset-[27.69%_76%_49.23%_15.38%]" data-node-id="202:17528">
        <div className="absolute inset-[27.69%_76%_49.23%_15.38%]" data-node-id="202:17699" data-name="Group">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
        </div>
      </div>
    </div>
  );
}

export default function Decide() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="202:17522" data-name="Decide">
      <div className="absolute contents left-[20px] top-[52px]" data-node-id="242:19540">
        <div className="absolute bg-[#fff8f4] h-[966px] left-[20px] top-[52px] w-[350px]" data-node-id="242:19539" />
        <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[20px] right-[20px] top-[634px]" data-node-id="226:19469" data-name="Recent Chomps (Tactile Horizontal Tray)">
          <div className="content-stretch flex items-center justify-between px-[4px] relative shrink-0 w-full" data-node-id="226:19470" data-name="Container">
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="226:19471" data-name="Container">
              <div className="relative shrink-0 size-[13.5px]" data-node-id="226:19472" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="226:19474" data-name="Heading 4">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[18px] whitespace-nowrap" data-node-id="226:19475">
                  <p className="leading-[26px]">Recent Chomps</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="226:19476" data-name="Link">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#ffd43b] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="226:19477">
                <p className="leading-[14px]">See all (12)</p>
              </div>
            </div>
          </div>
          <div className="h-[218px] relative shrink-0 w-full" data-node-id="226:19478" data-name="Margin">
            <div className="absolute h-[218px] left-[-4px] overflow-auto right-[-4px] top-0" data-node-id="226:19479" data-name="Container">
              <div className="absolute bg-white bottom-[8px] content-stretch flex flex-col gap-[8px] items-start left-0 p-[12px] rounded-[16px] top-0 w-[190px]" data-node-id="226:19480" data-name="Recent Card 1: Oishii Ramen">
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 rounded-[16px] shadow-[0px_4px_16px_-2px_rgba(62,45,18,0.06)] top-0 w-[190px]" data-node-id="226:19481" data-name="Recent Card 1: Oishii Ramen:shadow" />
                <div className="bg-[#f9ecdf] content-stretch flex flex-col h-[96px] items-start justify-center overflow-clip relative rounded-[48px] shrink-0 w-full" data-node-id="226:19482" data-name="Background">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="226:19483" data-name="AB6AXuBS1KKh6SrIQkdyhFlsc9ClSWjTCF-CoWog6FSConfRekKHMYH5CkGIKTi9AD_qcTPYeR0b3BTNWe4nh73ivwkkbhbdDJXFb3EI9ZSkUm4l3gf3xN6m0WSifP-KD1CmCj8eMcOuHvt4gez1YFoF2UKsEHQm4KGasieNruGGoJMhUudDR6PfZ42sRddLBQHX5VfMToXRE4zOog-5b4S9dJdAwsZdLkk11JMYs6d0z4x_QUjwSBfCAPQ">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[-1.77%] max-w-none top-0 w-[103.53%]" src={imgAb6AXuBs1KKh6SrIQkdyhFlsc9ClSWjTcfCoWog6FsConfRekKhmyh5CkGikTi9AdQcTpYeR0B3BtnWe4Nh73IvwkkbhbdDjxFb3Ei9ZSkUm4L3Gf3XN6M0WSifPKd1CmCj8EMcOuHvt4Gez1YFoF2UKsEhQm4KGasieNruGGoJMhUudDr6PfZ42SRddLbqhx5VfMToXre4ZOog5B4S9DJdAwsZdLkk11JmYs6D0Z4XQUjwSBfCapq} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="226:19489" data-name="Container">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="226:19490" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[18px] w-full" data-node-id="226:19491">
                      <p className="leading-[26px]">Oishii Ramen</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="226:19492" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="226:19493" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="226:19494">
                        <p className="leading-[14px]">Japanese</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="226:19495" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="226:19496">
                        <p className="leading-[14px]">•</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="226:19497" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="226:19498">
                        <p className="leading-[14px]">0.4 mi</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-node-id="226:19499" data-name="Button:margin">
                  <div className="bg-[#f9ecdf] content-stretch flex gap-[3.99px] items-center justify-center py-[6px] relative rounded-[9999px] shrink-0 w-full" data-node-id="226:19500" data-name="Button">
                    <div className="h-[12.25px] relative shrink-0 w-[10.5px]" data-node-id="226:19501" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                    </div>
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="226:19503" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[13px] text-center whitespace-nowrap" data-node-id="226:19504">
                        <p className="leading-[18px]">Chomp Again</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white bottom-[8px] content-stretch flex flex-col gap-[8px] items-start left-[202px] p-[12px] rounded-[16px] top-0 w-[190px]" data-node-id="226:19505" data-name="Recent Card 2: Bella Trattoria">
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 rounded-[16px] shadow-[0px_4px_16px_-2px_rgba(62,45,18,0.06)] top-0 w-[190px]" data-node-id="226:19506" data-name="Recent Card 2: Bella Trattoria:shadow" />
                <div className="bg-[#f9ecdf] content-stretch flex flex-col h-[96px] items-start justify-center overflow-clip relative rounded-[48px] shrink-0 w-full" data-node-id="226:19507" data-name="Background">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="226:19508" data-name="AB6AXuBL3FdhCi1xQc6JhtdpYYy3pWkcScB9miVscQG6o1NuLNYmr4ZMTuMroVOSFprd3OtZZ1VJjme0LjvJQ5ugRKGgODZ7n-oBGJl-OWj1DJRAB5uk8SFLGZtECaTc9uRemejFwY-2bkE-7PT7915-XUtfnit-bZz3PR1y3duDwq4BI_ZNdVtpKjt4h3u1idOn3qqXH1l-7RZg8D8yuGFEJ4CjBDguAW_mEJAA45K8Wz6RTuP1VTLJ8ho">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[-3.06%] max-w-none top-0 w-[106.13%]" src={imgAb6AXuBl3FdhCi1XQc6JhtdpYYy3PWkcScB9MiVscQg6O1NuLnYmr4ZmTuMroVosFprd3OtZz1VJjme0LjvJq5UgRkGgOdz7NOBgJlOWj1Djrab5Uk8SflgZtECaTc9URemejFwY2BkE7Pt7915XUtfnitBZz3Pr1Y3DuDwq4BiZNdVtpKjt4H3U1IdOn3QqXh1L7RZg8D8YuGfej4CjBDguAwMEjaa45K8Wz6RTuP1Vtlj8Ho} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="226:19514" data-name="Container">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="226:19515" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[18px] w-full" data-node-id="226:19516">
                      <p className="leading-[26px]">Bella Trattoria</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="226:19517" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="226:19518" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="226:19519">
                        <p className="leading-[14px]">Italian</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="226:19520" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="226:19521">
                        <p className="leading-[14px]">•</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="226:19522" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="226:19523">
                        <p className="leading-[14px]">1.1 mi</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-node-id="226:19524" data-name="Button:margin">
                  <div className="bg-[#f9ecdf] content-stretch flex gap-[3.99px] items-center justify-center py-[6px] relative rounded-[9999px] shrink-0 w-full" data-node-id="226:19525" data-name="Button">
                    <div className="h-[12.25px] relative shrink-0 w-[10.5px]" data-node-id="226:19526" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                    </div>
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="226:19528" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[13px] text-center whitespace-nowrap" data-node-id="226:19529">
                        <p className="leading-[18px]">Chomp Again</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[28px] pb-[24px] right-[12px] top-[52px]" data-node-id="226:19344" data-name="Primary Playful Hook:margin">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-node-id="226:19345" data-name="Primary Playful Hook">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="226:19346" data-name="Heading 2">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[32px] tracking-[-0.8px] w-full" data-node-id="226:19347">
                <p className="leading-[32px]">What are we eating today?</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="226:19348" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[14px] w-full" data-node-id="226:19349">
                <p className="leading-[19.25px]">No debates, no endless scrolling. Just good food.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[20px] top-[156px]" data-node-id="226:19388">
          <div className="absolute bg-white content-stretch flex flex-col items-start left-[20px] overflow-clip right-[20px] rounded-[24px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.08)] top-[156px]" data-node-id="226:19351" data-name="Link - JUST ME CARD">
            <div className="content-stretch flex flex-col items-start p-[24px] relative shrink-0 w-full" data-node-id="226:19353" data-name="Container">
              <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-node-id="226:19354" data-name="Margin">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="226:19355" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px pt-[3px] relative" data-node-id="226:19356" data-name="Container">
                    <div className="bg-[#ffd43b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[4px] items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="226:19357" data-name="Background+Shadow">
                      <div className="relative shrink-0 size-[8px]" data-node-id="226:19358" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="226:19360" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="226:19361">
                          <p className="leading-[14px]">Solo Cravings</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-node-id="226:19362" data-name="Heading 3">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[24px] tracking-[-0.6px] w-full" data-node-id="226:19363">
                        <p className="leading-[32px]">Just Me</p>
                      </div>
                    </div>
                    <div className="h-[45.5px] overflow-clip relative shrink-0 w-full" data-node-id="226:19364" data-name="Container">
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-0 text-[#4d4633] text-[14px] top-[22px] w-[234px]" data-node-id="226:19365">
                        <p className="leading-[22.75px]">Quick solo cravings, tailored strictly to your taste.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[44px] relative shrink-0 w-[195px]" data-node-id="226:19370" data-name="Container" />
            </div>
          </div>
          <a className="absolute bg-[#ffd43b] content-stretch cursor-pointer flex h-[38px] items-center justify-center left-[44px] overflow-clip right-[44px] rounded-[9999px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.12)] top-[314px]" data-node-id="226:19381" data-name="Primary Action CTA Button">
            <div className="relative shrink-0" data-node-id="226:19382" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8.01px] items-center relative size-full">
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="226:19383" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[15px] text-center tracking-[0.15px] whitespace-nowrap" data-node-id="226:19384">
                    <p className="leading-[20px]">Start Solo Pick</p>
                  </div>
                </div>
                <div className="relative shrink-0 size-[12px]" data-node-id="226:19385" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
                </div>
              </div>
            </div>
          </a>
          <div className="absolute inset-[19.51%_11.54%_73.59%_70.26%]" data-node-id="226:19391" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
        <div className="absolute contents left-[20px] top-[395px]" data-node-id="226:19442">
          <div className="absolute bg-[#f4e6d9] content-stretch flex flex-col items-start left-[20px] overflow-clip right-[20px] rounded-[24px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.08)] top-[395px]" data-node-id="226:19393" data-name="Link - WITH FRIENDS CARD">
            <div className="content-stretch flex flex-col h-[214.5px] items-start justify-between p-[24px] relative shrink-0 w-full" data-node-id="226:19395" data-name="Container">
              <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-[204px]" data-node-id="226:19396" data-name="Margin">
                <div className="content-stretch flex items-start relative shrink-0 w-[204px]" data-node-id="226:19397" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px pt-[3px] relative" data-node-id="226:19398" data-name="Container">
                    <div className="bg-[#ffdad2] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[4px] items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="226:19399" data-name="Background+Shadow">
                      <div className="h-[6px] relative shrink-0 w-[12px]" data-node-id="226:19400" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="226:19402" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#84240d] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="226:19403">
                          <p className="leading-[14px]">Party of 2+</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-node-id="226:19404" data-name="Heading 3">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[24px] tracking-[-0.6px] w-full" data-node-id="226:19405">
                        <p className="leading-[32px]">With Friends</p>
                      </div>
                    </div>
                    <div className="h-[45.5px] overflow-clip relative shrink-0 w-full" data-node-id="226:19406" data-name="Container">
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-0 text-[#251e14] text-[14px] top-[22.38px] w-[192.9px]" data-node-id="226:19407">
                        <p className="leading-[22.75px] mb-0">Vote together or let Chomp</p>
                        <p className="leading-[22.75px]">{`surprise the squad. `}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[44px] relative shrink-0 w-full" data-node-id="226:19412" data-name="Container" />
            </div>
          </div>
          <a className="absolute bg-[#a53b22] content-stretch cursor-pointer flex h-[38px] items-center justify-center left-[44px] overflow-clip right-[44px] rounded-[9999px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.12)] top-[548px]" data-node-id="226:19431" data-name="Primary Action CTA Button">
            <div className="content-stretch flex gap-[8.01px] items-center relative shrink-0" data-node-id="226:19432" data-name="Container">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="226:19433" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-[color:var(----wf-white,white)] text-center tracking-[0.15px] whitespace-nowrap" data-node-id="226:19434">
                  <p className="leading-[20px]">Create / Join a Group</p>
                </div>
              </div>
              <div className="relative shrink-0 size-[12px]" data-node-id="226:19435" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
              </div>
            </div>
          </a>
          <div className="absolute inset-[42.72%_12.82%_50.39%_68.97%]" data-node-id="226:19459" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
          </div>
        </div>
      </div>
      <Navbar className="absolute h-[130px] left-0 top-[714px] w-[390px]" />
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="202:17537" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
      <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="202:17538" data-name="Navigation bar">
        <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I202:17538;9:2837" data-name="Status Bar">
          <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I202:17538;9:2837;7:2322" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I202:17538;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I202:17538;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I202:17538;9:2837;7:2335" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I202:17538;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
