const assetPathPrefix = "https://www.figma.com/api/mcp/asset/0d68b2aa-4078-437d-af27-215507cfb137";
const imgContainer = `${assetPathPrefix}/39b6c.svg`;
const imgMargin = `${assetPathPrefix}/0d544.svg`;
const imgContainer1 = `${assetPathPrefix}/baf22.svg`;
const imgContainer2 = `${assetPathPrefix}/45a32.svg`;
const imgContainer3 = `${assetPathPrefix}/10014.svg`;
const imgContainer4 = `${assetPathPrefix}/15713.svg`;
const imgContainer5 = `${assetPathPrefix}/dbf21.svg`;
const imgWeuiBackFilled = `${assetPathPrefix}/29250.svg`;
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

export default function DecideSetPreference2() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="281:23871" data-name="Decide - Set Preference 2">
      <div className="absolute bg-[#fff8f4] h-[1691px] left-[16px] rounded-[25px] top-[60px] w-[358px]" data-node-id="281:23872" />
      <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[27px] right-[13px] top-[60px]" data-node-id="281:23873" data-name="Warm Introductory Heading">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:23874" data-name="Heading 2">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[24px] tracking-[-0.64px] w-full" data-node-id="281:23875">
            <p className="leading-[40px]">Edit preferences for this time</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:23876" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Plantagenet_Cherokee:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[14px] w-full" data-node-id="281:23877">
            <p>
              <span className="font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[20px]">{`These settings apply `}</span>
              <span className="font-['Plus_Jakarta_Sans:SemiBold'] font-semibold leading-[20px]">ONLY</span>
              <span className="font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[20px]">{` to this time and will not alter your default profile.`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] h-[245px] items-start left-[16px] p-[16px] right-[16px] rounded-[12px] top-[159px]" data-node-id="281:23878" data-name="2. Favorite Cuisines Section">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="281:23879" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:23880" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:23881" data-name="Heading 3">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[16px] whitespace-nowrap" data-node-id="281:23882">
                <p className="leading-[24px]">Favorite Cuisines</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:23883" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] whitespace-nowrap" data-node-id="281:23884">
                <p className="leading-[16px]">Tap to pick dishes you regularly crave</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[104px] relative shrink-0 w-full" data-node-id="281:23885" data-name="Container">
          <div className="absolute bg-[#ffd43b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center left-0 px-[12px] py-[6px] rounded-[9999px] top-[4px]" data-node-id="281:23886" data-name="Button - Pre-selected Cuisines">
            <div className="h-[8.017px] relative shrink-0 w-[10.867px]" data-node-id="281:23887" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23889" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" data-node-id="281:23890">
                <p className="leading-[16px]">Italian</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#ffd43b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center left-[88.48px] px-[12px] py-[6px] rounded-[9999px] top-[4px]" data-node-id="281:23891" data-name="Button">
            <div className="h-[8.017px] relative shrink-0 w-[10.867px]" data-node-id="281:23892" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23894" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" data-node-id="281:23895">
                <p className="leading-[16px]">Japanese</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#ffd43b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center left-[198.34px] px-[12px] py-[6px] rounded-[9999px] top-[4px]" data-node-id="281:23896" data-name="Button">
            <div className="h-[8.017px] relative shrink-0 w-[10.867px]" data-node-id="281:23897" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23899" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" data-node-id="281:23900">
                <p className="leading-[16px]">Korean</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-0 px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="281:23901" data-name="Button - Unselected Choices">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23902" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23903">
                <p className="leading-[16px]">Chinese</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[78.83px] px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="281:23904" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23905" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23906">
                <p className="leading-[16px]">Mexican</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[159.36px] px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="281:23907" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23908" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23909">
                <p className="leading-[16px]">American</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[246.42px] px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="281:23910" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23911" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23912">
                <p className="leading-[16px]">Thai</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-0 px-[12px] py-[6px] rounded-[9999px] top-[76px]" data-node-id="281:23913" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23914" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23915">
                <p className="leading-[16px]">Indian</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[66.97px] px-[12px] py-[6px] rounded-[9999px] top-[76px]" data-node-id="281:23916" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23917" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23918">
                <p className="leading-[16px]">Mediterranean</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[44px] items-start pt-[4px] relative shrink-0 w-[326px]" data-node-id="281:23919" data-name="Add Disliked Input Row:margin">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="281:23920" data-name="Add Disliked Input Row">
            <div className="bg-[rgba(255,212,59,0.3)] content-stretch flex flex-[1_0_0] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="281:23921" data-name="Background">
              <div className="h-[13.5px] relative shrink-0 w-[21.5px]" data-node-id="281:23922" data-name="Margin">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMargin} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-px relative" data-node-id="281:23924" data-name="Input">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="281:23925" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#777587] text-[12px] whitespace-nowrap" data-node-id="281:23926">
                    <p className="leading-[normal]">Add custom favorite cuisines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,212,59,0.5)] content-stretch flex flex-col h-[40px] items-center justify-center pb-[12.5px] pt-[11.5px] px-[16px] relative rounded-[8px] shrink-0" data-node-id="281:23927" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23928">
                <p className="leading-[16px]">Add</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start left-[16px] p-[16px] right-[16px] rounded-[12px] top-[425px]" data-node-id="281:23929" data-name="3. Disliked Foods Section">
        <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-node-id="281:23930" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:23931" data-name="Heading 3">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[16px] w-full" data-node-id="281:23932">
              <p className="leading-[24px]">Disliked Foods</p>
            </div>
          </div>
          <div className="h-[32px] relative shrink-0 w-full" data-node-id="281:23933" data-name="Container" />
        </div>
        <div className="content-stretch flex gap-[8px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="281:23934" data-name="Container">
          <div className="bg-[#f4e6d9] content-stretch flex gap-[6px] h-[28px] items-center pl-[12px] pr-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="281:23935" data-name="Removable item tags">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:23936" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] whitespace-nowrap" data-node-id="281:23937">
                <p className="leading-[16px]">Cilantro</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[16px]" data-node-id="281:23938" data-name="Button - Remove Cilantro">
              <div className="relative shrink-0 size-[8.167px]" data-node-id="281:23939" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
              </div>
            </div>
          </div>
          <div className="bg-[#f4e6d9] content-stretch flex gap-[5.99px] items-center pl-[12px] pr-[8px] py-[4px] relative rounded-[9999px] self-stretch shrink-0" data-node-id="281:23941" data-name="Background">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:23942" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] whitespace-nowrap" data-node-id="281:23943">
                <p className="leading-[16px]">Olives</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[16px]" data-node-id="281:23944" data-name="Button - Remove Olives">
              <div className="relative shrink-0 size-[8.167px]" data-node-id="281:23945" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-node-id="281:23947" data-name="Add Disliked Input Row:margin">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="281:23948" data-name="Add Disliked Input Row">
            <div className="bg-[rgba(255,212,59,0.3)] content-stretch flex flex-[1_0_0] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="281:23949" data-name="Background">
              <div className="h-[13.5px] relative shrink-0 w-[21.5px]" data-node-id="281:23950" data-name="Margin">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMargin} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-px relative" data-node-id="281:23952" data-name="Input">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="281:23953" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#777587] text-[12px] whitespace-nowrap" data-node-id="281:23954">
                    <p className="leading-[normal]">Add custom disliked food (e.g. Mushrooms)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,212,59,0.5)] content-stretch flex flex-col h-[40px] items-center justify-center pb-[12.5px] pt-[11.5px] px-[16px] relative rounded-[8px] shrink-0" data-node-id="281:23955" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23956">
                <p className="leading-[16px]">Add</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] h-[208px] items-start left-[16px] p-[16px] right-[16px] rounded-[12px] top-[602px]" data-node-id="281:23957" data-name="4. Dietary Preferences & Restrictions Section">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:23958" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:23959" data-name="Heading 3">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[16px] w-full" data-node-id="281:23960">
              <p className="leading-[24px]">{`Dietary Lifestyle & Habits`}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:23961" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] w-full" data-node-id="281:23962">
              <p className="leading-[16px]">Filters dishes matching dietary regimes</p>
            </div>
          </div>
        </div>
        <div className="h-[68px] relative shrink-0 w-full" data-node-id="281:23963" data-name="Container">
          <div className="absolute bg-[#ffd43b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center left-0 px-[12px] py-[6px] rounded-[9999px] top-[4px]" data-node-id="281:23964" data-name="Button - Selected">
            <div className="h-[8.017px] relative shrink-0 w-[10.867px]" data-node-id="281:23965" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23967" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" data-node-id="281:23968">
                <p className="leading-[16px]">Gluten-free</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[120.06px] px-[12px] py-[6px] rounded-[9999px] top-[4px]" data-node-id="281:23969" data-name="Button - Unselected">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23970" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23971">
                <p className="leading-[16px]">Vegetarian</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[214.22px] px-[12px] py-[6px] rounded-[9999px] top-[4px]" data-node-id="281:23972" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23973" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23974">
                <p className="leading-[16px]">Vegan</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-0 px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="281:23975" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23976" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23977">
                <p className="leading-[16px]">Halal</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[60.63px] px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="281:23978" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23979" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23980">
                <p className="leading-[16px]">Kosher</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[133.03px] px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="281:23981" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23982" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23983">
                <p className="leading-[16px]">Dairy-free</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[44px] items-start pt-[4px] relative shrink-0 w-[326px]" data-node-id="281:23984" data-name="Add Disliked Input Row:margin">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="281:23985" data-name="Add Disliked Input Row">
            <div className="bg-[rgba(255,212,59,0.3)] content-stretch flex flex-[1_0_0] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="281:23986" data-name="Background">
              <div className="h-[13.5px] relative shrink-0 w-[21.5px]" data-node-id="281:23987" data-name="Margin">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMargin} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-px relative" data-node-id="281:23989" data-name="Input">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="281:23990" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#777587] text-[12px] whitespace-nowrap" data-node-id="281:23991">
                    <p className="leading-[normal]">{`Add custom dietary lifestyle & habits`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,212,59,0.5)] content-stretch flex flex-col h-[40px] items-center justify-center pb-[12.5px] pt-[11.5px] px-[16px] relative rounded-[8px] shrink-0" data-node-id="281:23992" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:23993">
                <p className="leading-[16px]">Add</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,218,214,0.25)] content-stretch flex flex-col gap-[12px] h-[241px] items-start left-[16px] p-[16px] right-[16px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[831px]" data-node-id="281:23994" data-name="5. Food Allergies Section (Safety / Alert Warning Styling)">
        <div className="content-stretch flex items-start relative shrink-0 w-[255px]" data-node-id="281:23995" data-name="Container">
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="281:23996" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:23997" data-name="Container">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="281:23998" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:23999" data-name="Heading 3">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[16px] whitespace-nowrap" data-node-id="281:24000">
                    <p className="leading-[24px]">Food Allergies</p>
                  </div>
                </div>
                <div className="bg-[#ba1a1a] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="281:24001" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white tracking-[0.55px] uppercase whitespace-nowrap" data-node-id="281:24002">
                    <p className="leading-[14px]">SAFETY CRITICAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="281:24003" data-name="Active Allergen Tags with Shield Styling">
          <div className="bg-[#ba1a1a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center pl-[12px] pr-[8px] py-[6px] relative rounded-[9999px] self-stretch shrink-0" data-node-id="281:24004" data-name="Background+Shadow">
            <div className="h-[12.667px] relative shrink-0 w-[14.667px]" data-node-id="281:24005" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:24007" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="281:24008">
                <p className="leading-[16px]">Peanuts</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[16px]" data-node-id="281:24009" data-name="Button - Remove Peanuts">
              <div className="relative shrink-0 size-[8.167px]" data-node-id="281:24010" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
              </div>
            </div>
          </div>
          <div className="bg-[#ba1a1a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center pl-[12px] pr-[8px] py-[6px] relative rounded-[9999px] self-stretch shrink-0" data-node-id="281:24012" data-name="Background+Shadow">
            <div className="h-[12.667px] relative shrink-0 w-[14.667px]" data-node-id="281:24013" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:24015" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="281:24016">
                <p className="leading-[16px]">Shellfish</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[16px]" data-node-id="281:24017" data-name="Button - Remove Shellfish">
              <div className="relative shrink-0 size-[8.167px]" data-node-id="281:24018" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="281:24020" data-name="Quick Allergen Pills">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24021" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[11px] tracking-[0.22px] w-full" data-node-id="281:24022">
              <p className="leading-[14px]">Quick-add common allergens:</p>
            </div>
          </div>
          <div className="h-[52px] relative shrink-0 w-full" data-node-id="281:24023" data-name="Container">
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-0 px-[10px] py-[4px] rounded-[8px] top-0" data-node-id="281:24024" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:24025">
                <p className="leading-[16px]">+ Tree nuts</p>
              </div>
            </div>
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[88.95px] px-[10px] py-[4px] rounded-[8px] top-0" data-node-id="281:24026" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:24027">
                <p className="leading-[16px]">+ Fish</p>
              </div>
            </div>
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[147.95px] px-[10px] py-[4px] rounded-[8px] top-0" data-node-id="281:24028" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:24029">
                <p className="leading-[16px]">+ Dairy</p>
              </div>
            </div>
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[213.39px] px-[10px] py-[4px] rounded-[8px] top-0" data-node-id="281:24030" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:24031">
                <p className="leading-[16px]">+ Eggs</p>
              </div>
            </div>
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-0 px-[10px] py-[4px] rounded-[8px] top-[28px]" data-node-id="281:24032" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:24033">
                <p className="leading-[16px]">+ Soy</p>
              </div>
            </div>
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[56.89px] px-[10px] py-[4px] rounded-[8px] top-[28px]" data-node-id="281:24034" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:24035">
                <p className="leading-[16px]">+ Wheat</p>
              </div>
            </div>
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[129.42px] px-[10px] py-[4px] rounded-[8px] top-[28px]" data-node-id="281:24036" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="281:24037">
                <p className="leading-[16px]">+ Sesame</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-[326px]" data-node-id="281:24038" data-name="Add Disliked Input Row:margin">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="281:24039" data-name="Add Disliked Input Row">
            <div className="bg-white content-stretch flex flex-[1_0_0] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="281:24040" data-name="Background">
              <div className="h-[13.5px] relative shrink-0 w-[21.5px]" data-node-id="281:24041" data-name="Margin">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMargin} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-px relative" data-node-id="281:24043" data-name="Input">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="281:24044" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#777587] text-[12px] whitespace-nowrap" data-node-id="281:24045">
                    <p className="leading-[normal]">Add custom allergen</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#ba1a1a] content-stretch flex flex-col h-[40px] items-center justify-center pb-[12.5px] pt-[11.5px] px-[16px] relative rounded-[8px] shrink-0" data-node-id="281:24046" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-[color:var(----wf-white,white)] text-center whitespace-nowrap" data-node-id="281:24047">
                <p className="leading-[16px]">Add</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] h-[155px] items-start left-[16px] p-[16px] right-[16px] rounded-[12px] top-[1093px]" data-node-id="281:24048" data-name="6. Default Budget Range">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="281:24049" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:24050" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24051" data-name="Heading 3">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[16px] whitespace-nowrap" data-node-id="281:24052">
                <p className="leading-[24px]">Default Budget Range</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24053" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] whitespace-nowrap" data-node-id="281:24054">
                <p className="leading-[16px]">{`Per person estimation excluding tips & tax`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start justify-center pt-[4px] relative shrink-0 w-full" data-node-id="281:24055" data-name="Container">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="281:24056" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24057" data-name="Label">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] w-full" data-node-id="281:24058">
                <p className="leading-[16px]">Minimum</p>
              </div>
            </div>
            <div className="bg-[#f4e6d9] content-stretch flex gap-[4px] items-center px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-node-id="281:24059" data-name="Background">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:24060" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#505f76] text-[14px] whitespace-nowrap" data-node-id="281:24061">
                  <p className="leading-[20px]">$</p>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="281:24062" data-name="Input">
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="281:24063" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="281:24064" data-name="Container">
                    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-node-id="281:24065" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[16px] w-full" data-node-id="281:24066">
                        <p className="leading-[24px]">15</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center self-stretch" data-node-id="281:24067">
                    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
                      <div className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]" data-node-id="281:24068" data-name="Rectangle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="281:24069" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24070" data-name="Label">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] w-full" data-node-id="281:24071">
                <p className="leading-[16px]">Maximum</p>
              </div>
            </div>
            <div className="bg-[#f4e6d9] content-stretch flex gap-[4px] items-center px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-node-id="281:24072" data-name="Background">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:24073" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#505f76] text-[14px] whitespace-nowrap" data-node-id="281:24074">
                  <p className="leading-[20px]">$</p>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="281:24075" data-name="Input">
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="281:24076" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="281:24077" data-name="Container">
                    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-node-id="281:24078" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[16px] w-full" data-node-id="281:24079">
                        <p className="leading-[24px]">30</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center self-stretch" data-node-id="281:24080">
                    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
                      <div className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]" data-node-id="281:24081" data-name="Rectangle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start left-[16px] p-[16px] right-[16px] rounded-[12px] top-[1269px]" data-node-id="281:24082" data-name="7. Preferred Distance">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24083" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24084" data-name="Heading 3">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[16px] w-full" data-node-id="281:24085">
              <p className="leading-[24px]">Preferred Travel Radius</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24086" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] w-full" data-node-id="281:24087">
              <p className="leading-[16px]">Maximum radius from your location</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="281:24088" data-name="Radiogroup - Distance preferences">
          <div className="bg-[#fff2c4] content-stretch flex items-center justify-between p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="281:24089" data-name="Label">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="281:24090" data-name="Container">
              <div className="relative shrink-0 size-[15px]" data-node-id="281:24091" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:24093" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[14px] whitespace-nowrap" data-node-id="281:24094">
                  <p className="leading-[20px]">Within 1 mi</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#767676] border-solid relative rounded-[50px] shrink-0 size-[16px]" data-node-id="281:24095" data-name="Input" />
          </div>
          <div className="bg-[#fff2c4] content-stretch flex items-center justify-between p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="281:24096" data-name="Label">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="281:24097" data-name="Container">
              <div className="relative shrink-0 size-[15px]" data-node-id="281:24098" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:24100" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[14px] whitespace-nowrap" data-node-id="281:24101">
                  <p className="leading-[20px]">Within 3 mi</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#767676] border-solid relative rounded-[50px] shrink-0 size-[16px]" data-node-id="281:24102" data-name="Input" />
          </div>
          <div className="bg-[#ffe99d] content-stretch flex items-center justify-between p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="281:24103" data-name="Label">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="281:24104" data-name="Container">
              <div className="relative shrink-0 size-[15px]" data-node-id="281:24105" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:24107" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[14px] whitespace-nowrap" data-node-id="281:24108">
                  <p className="leading-[20px]">Within 5 mi</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#767676] border-solid content-stretch flex flex-col items-start justify-center px-[3.2px] relative rounded-[50px] shrink-0 size-[16px]" data-node-id="281:24109" data-name="Input">
              <div className="bg-[#767676] relative rounded-[50px] shrink-0 size-[9.6px]" data-node-id="281:24110" data-name="Input:checked" />
            </div>
          </div>
          <div className="bg-[#fff2c4] content-stretch flex items-center justify-between p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="281:24111" data-name="Label">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="281:24112" data-name="Container">
              <div className="relative shrink-0 size-[15px]" data-node-id="281:24113" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:24115" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[14px] whitespace-nowrap" data-node-id="281:24116">
                  <p className="leading-[20px]">Within 10 mi</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#767676] border-solid relative rounded-[50px] shrink-0 size-[16px]" data-node-id="281:24117" data-name="Input" />
          </div>
          <div className="bg-[#fff2c4] content-stretch flex items-center justify-between p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="281:24118" data-name="Label">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="281:24119" data-name="Container">
              <div className="relative shrink-0 size-[16.667px]" data-node-id="281:24120" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="281:24122" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[14px] whitespace-nowrap" data-node-id="281:24123">
                  <p className="leading-[20px]">No preference</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#767676] border-solid relative rounded-[50px] shrink-0 size-[16px]" data-node-id="281:24124" data-name="Input" />
          </div>
        </div>
      </div>
      <a className="absolute bg-[#ffd43b] content-stretch cursor-pointer flex gap-[8px] h-[56px] items-center justify-center left-[20px] right-[20px] rounded-[9999px] top-[1658px]" data-node-id="281:24125" data-name="Button">
        <div className="absolute bg-[rgba(255,255,255,0)] h-[56px] left-0 right-0 rounded-[9999px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.18)] top-0" data-node-id="281:24126" data-name="Button:shadow" />
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:24127" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[15px] text-center tracking-[0.15px] whitespace-nowrap" data-node-id="281:24128">
            <p className="leading-[20px]">Confirm</p>
          </div>
        </div>
      </a>
      <div className="absolute content-stretch flex items-center justify-center left-[20px] right-[20px] top-[1827px]" data-node-id="281:24129" data-name="Reassuring Microcopy">
        <div className="h-[14px] relative shrink-0 w-[226px]" data-node-id="281:24130" data-name="Container" />
      </div>
      <div className="absolute h-[24px] left-[27px] top-[36px] w-[12px]" data-node-id="281:24131" data-name="weui:back-filled">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWeuiBackFilled} />
      </div>
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="281:24134" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
      <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="281:24133" data-name="Navigation bar">
        <div className="absolute bottom-[12px] content-stretch flex gap-[12px] h-[24px] items-center left-[16px] w-[21px]" data-node-id="I281:24133;9:2834" data-name="LeftNavBar" />
        <div className="absolute bottom-[12px] content-stretch flex gap-[8px] h-[24px] items-center right-[16px] w-[28px]" data-node-id="I281:24133;9:2835" data-name="RightNavBar" />
        <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I281:24133;9:2837" data-name="Status Bar">
          <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I281:24133;9:2837;7:2322" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I281:24133;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I281:24133;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I281:24133;9:2837;7:2335" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I281:24133;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
