const assetPathPrefix = "https://www.figma.com/api/mcp/asset/e0c353a4-75ff-4d3d-9169-ae0162790dab";
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

export default function DecideSetPreference1() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="258:21149" data-name="Decide - Set Preference 1">
      <div className="absolute bg-[#fff8f4] h-[1679px] left-[16px] rounded-[25px] top-[60px] w-[358px]" data-node-id="258:21150" />
      <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[27px] right-[13px] top-[60px]" data-node-id="258:21151" data-name="Warm Introductory Heading">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21152" data-name="Heading 2">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[24px] tracking-[-0.64px] w-full" data-node-id="258:21153">
            <p className="leading-[40px]">Edit preferences for this time</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21154" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Plantagenet_Cherokee:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[14px] w-full" data-node-id="258:21155">
            <p>
              <span className="font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[20px]">{`These settings apply `}</span>
              <span className="font-['Plus_Jakarta_Sans:SemiBold'] font-semibold leading-[20px]">ONLY</span>
              <span className="font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[20px]">{` to this time and will not alter your default profile.`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] h-[245px] items-start left-[16px] p-[16px] right-[16px] rounded-[12px] top-[159px]" data-node-id="258:21156" data-name="2. Favorite Cuisines Section">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="258:21157" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21158" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21159" data-name="Heading 3">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[16px] whitespace-nowrap" data-node-id="258:21160">
                <p className="leading-[24px]">Favorite Cuisines</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21161" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] whitespace-nowrap" data-node-id="258:21162">
                <p className="leading-[16px]">Tap to pick dishes you regularly crave</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[104px] relative shrink-0 w-full" data-node-id="258:21163" data-name="Container">
          <div className="absolute bg-[#ffd43b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center left-0 px-[12px] py-[6px] rounded-[9999px] top-[4px]" data-node-id="258:21164" data-name="Button - Pre-selected Cuisines">
            <div className="h-[8.017px] relative shrink-0 w-[10.867px]" data-node-id="258:21165" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21167" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" data-node-id="258:21168">
                <p className="leading-[16px]">Italian</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#ffd43b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center left-[88.48px] px-[12px] py-[6px] rounded-[9999px] top-[4px]" data-node-id="258:21169" data-name="Button">
            <div className="h-[8.017px] relative shrink-0 w-[10.867px]" data-node-id="258:21170" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21172" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" data-node-id="258:21173">
                <p className="leading-[16px]">Japanese</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#ffd43b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center left-[198.34px] px-[12px] py-[6px] rounded-[9999px] top-[4px]" data-node-id="258:21174" data-name="Button">
            <div className="h-[8.017px] relative shrink-0 w-[10.867px]" data-node-id="258:21175" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21177" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" data-node-id="258:21178">
                <p className="leading-[16px]">Korean</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-0 px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="258:21179" data-name="Button - Unselected Choices">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21180" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21181">
                <p className="leading-[16px]">Chinese</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[78.83px] px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="258:21182" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21183" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21184">
                <p className="leading-[16px]">Mexican</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[159.36px] px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="258:21185" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21186" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21187">
                <p className="leading-[16px]">American</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[246.42px] px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="258:21188" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21189" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21190">
                <p className="leading-[16px]">Thai</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-0 px-[12px] py-[6px] rounded-[9999px] top-[76px]" data-node-id="258:21191" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21192" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21193">
                <p className="leading-[16px]">Indian</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[66.97px] px-[12px] py-[6px] rounded-[9999px] top-[76px]" data-node-id="258:21194" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21195" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21196">
                <p className="leading-[16px]">Mediterranean</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[44px] items-start pt-[4px] relative shrink-0 w-[326px]" data-node-id="258:21197" data-name="Add Disliked Input Row:margin">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="258:21198" data-name="Add Disliked Input Row">
            <div className="bg-[rgba(255,212,59,0.3)] content-stretch flex flex-[1_0_0] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="258:21199" data-name="Background">
              <div className="h-[13.5px] relative shrink-0 w-[21.5px]" data-node-id="258:21200" data-name="Margin">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMargin} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-px relative" data-node-id="258:21202" data-name="Input">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="258:21203" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#777587] text-[12px] whitespace-nowrap" data-node-id="258:21204">
                    <p className="leading-[normal]">Add custom favorite cuisines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,212,59,0.5)] content-stretch flex flex-col h-[40px] items-center justify-center pb-[12.5px] pt-[11.5px] px-[16px] relative rounded-[8px] shrink-0" data-node-id="258:21205" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21206">
                <p className="leading-[16px]">Add</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start left-[16px] p-[16px] right-[16px] rounded-[12px] top-[425px]" data-node-id="258:21207" data-name="3. Disliked Foods Section">
        <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-node-id="258:21208" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21209" data-name="Heading 3">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[16px] w-full" data-node-id="258:21210">
              <p className="leading-[24px]">Disliked Foods</p>
            </div>
          </div>
          <div className="h-[32px] relative shrink-0 w-full" data-node-id="258:21211" data-name="Container" />
        </div>
        <div className="content-stretch flex gap-[8px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="258:21212" data-name="Container">
          <div className="bg-[#f4e6d9] content-stretch flex gap-[6px] h-[28px] items-center pl-[12px] pr-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="258:21213" data-name="Removable item tags">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21214" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] whitespace-nowrap" data-node-id="258:21215">
                <p className="leading-[16px]">Cilantro</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[16px]" data-node-id="258:21216" data-name="Button - Remove Cilantro">
              <div className="relative shrink-0 size-[8.167px]" data-node-id="258:21217" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
              </div>
            </div>
          </div>
          <div className="bg-[#f4e6d9] content-stretch flex gap-[5.99px] items-center pl-[12px] pr-[8px] py-[4px] relative rounded-[9999px] self-stretch shrink-0" data-node-id="258:21219" data-name="Background">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21220" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] whitespace-nowrap" data-node-id="258:21221">
                <p className="leading-[16px]">Olives</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[16px]" data-node-id="258:21222" data-name="Button - Remove Olives">
              <div className="relative shrink-0 size-[8.167px]" data-node-id="258:21223" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-node-id="258:21225" data-name="Add Disliked Input Row:margin">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="258:21226" data-name="Add Disliked Input Row">
            <div className="bg-[rgba(255,212,59,0.3)] content-stretch flex flex-[1_0_0] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="258:21227" data-name="Background">
              <div className="h-[13.5px] relative shrink-0 w-[21.5px]" data-node-id="258:21228" data-name="Margin">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMargin} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-px relative" data-node-id="258:21230" data-name="Input">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="258:21231" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#777587] text-[12px] whitespace-nowrap" data-node-id="258:21232">
                    <p className="leading-[normal]">Add custom disliked food (e.g. Mushrooms)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,212,59,0.5)] content-stretch flex flex-col h-[40px] items-center justify-center pb-[12.5px] pt-[11.5px] px-[16px] relative rounded-[8px] shrink-0" data-node-id="258:21233" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21234">
                <p className="leading-[16px]">Add</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] h-[208px] items-start left-[16px] p-[16px] right-[16px] rounded-[12px] top-[602px]" data-node-id="258:21235" data-name="4. Dietary Preferences & Restrictions Section">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21236" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21237" data-name="Heading 3">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[16px] w-full" data-node-id="258:21238">
              <p className="leading-[24px]">{`Dietary Lifestyle & Habits`}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21239" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] w-full" data-node-id="258:21240">
              <p className="leading-[16px]">Filters dishes matching dietary regimes</p>
            </div>
          </div>
        </div>
        <div className="h-[68px] relative shrink-0 w-full" data-node-id="258:21241" data-name="Container">
          <div className="absolute bg-[#ffd43b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center left-0 px-[12px] py-[6px] rounded-[9999px] top-[4px]" data-node-id="258:21242" data-name="Button - Selected">
            <div className="h-[8.017px] relative shrink-0 w-[10.867px]" data-node-id="258:21243" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21245" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" data-node-id="258:21246">
                <p className="leading-[16px]">Gluten-free</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[120.06px] px-[12px] py-[6px] rounded-[9999px] top-[4px]" data-node-id="258:21247" data-name="Button - Unselected">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21248" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21249">
                <p className="leading-[16px]">Vegetarian</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[214.22px] px-[12px] py-[6px] rounded-[9999px] top-[4px]" data-node-id="258:21250" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21251" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21252">
                <p className="leading-[16px]">Vegan</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-0 px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="258:21253" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21254" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21255">
                <p className="leading-[16px]">Halal</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[60.63px] px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="258:21256" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21257" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21258">
                <p className="leading-[16px]">Kosher</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4e6d9] content-stretch flex items-center left-[133.03px] px-[12px] py-[6px] rounded-[9999px] top-[40px]" data-node-id="258:21259" data-name="Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21260" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21261">
                <p className="leading-[16px]">Dairy-free</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[44px] items-start pt-[4px] relative shrink-0 w-[326px]" data-node-id="258:21262" data-name="Add Disliked Input Row:margin">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="258:21263" data-name="Add Disliked Input Row">
            <div className="bg-[rgba(255,212,59,0.3)] content-stretch flex flex-[1_0_0] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="258:21264" data-name="Background">
              <div className="h-[13.5px] relative shrink-0 w-[21.5px]" data-node-id="258:21265" data-name="Margin">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMargin} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-px relative" data-node-id="258:21267" data-name="Input">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="258:21268" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#777587] text-[12px] whitespace-nowrap" data-node-id="258:21269">
                    <p className="leading-[normal]">{`Add custom dietary lifestyle & habits`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,212,59,0.5)] content-stretch flex flex-col h-[40px] items-center justify-center pb-[12.5px] pt-[11.5px] px-[16px] relative rounded-[8px] shrink-0" data-node-id="258:21270" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21271">
                <p className="leading-[16px]">Add</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,218,214,0.25)] content-stretch flex flex-col gap-[12px] h-[241px] items-start left-[16px] p-[16px] right-[16px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[831px]" data-node-id="258:21272" data-name="5. Food Allergies Section (Safety / Alert Warning Styling)">
        <div className="content-stretch flex items-start relative shrink-0 w-[255px]" data-node-id="258:21273" data-name="Container">
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="258:21274" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21275" data-name="Container">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="258:21276" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21277" data-name="Heading 3">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[16px] whitespace-nowrap" data-node-id="258:21278">
                    <p className="leading-[24px]">Food Allergies</p>
                  </div>
                </div>
                <div className="bg-[#ba1a1a] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="258:21279" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white tracking-[0.55px] uppercase whitespace-nowrap" data-node-id="258:21280">
                    <p className="leading-[14px]">SAFETY CRITICAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="258:21281" data-name="Active Allergen Tags with Shield Styling">
          <div className="bg-[#ba1a1a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center pl-[12px] pr-[8px] py-[6px] relative rounded-[9999px] self-stretch shrink-0" data-node-id="258:21282" data-name="Background+Shadow">
            <div className="h-[12.667px] relative shrink-0 w-[14.667px]" data-node-id="258:21283" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21285" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="258:21286">
                <p className="leading-[16px]">Peanuts</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[16px]" data-node-id="258:21287" data-name="Button - Remove Peanuts">
              <div className="relative shrink-0 size-[8.167px]" data-node-id="258:21288" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
              </div>
            </div>
          </div>
          <div className="bg-[#ba1a1a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center pl-[12px] pr-[8px] py-[6px] relative rounded-[9999px] self-stretch shrink-0" data-node-id="258:21290" data-name="Background+Shadow">
            <div className="h-[12.667px] relative shrink-0 w-[14.667px]" data-node-id="258:21291" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21293" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="258:21294">
                <p className="leading-[16px]">Shellfish</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[16px]" data-node-id="258:21295" data-name="Button - Remove Shellfish">
              <div className="relative shrink-0 size-[8.167px]" data-node-id="258:21296" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="258:21298" data-name="Quick Allergen Pills">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21299" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[11px] tracking-[0.22px] w-full" data-node-id="258:21300">
              <p className="leading-[14px]">Quick-add common allergens:</p>
            </div>
          </div>
          <div className="h-[52px] relative shrink-0 w-full" data-node-id="258:21301" data-name="Container">
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-0 px-[10px] py-[4px] rounded-[8px] top-0" data-node-id="258:21302" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21303">
                <p className="leading-[16px]">+ Tree nuts</p>
              </div>
            </div>
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[88.95px] px-[10px] py-[4px] rounded-[8px] top-0" data-node-id="258:21304" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21305">
                <p className="leading-[16px]">+ Fish</p>
              </div>
            </div>
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[147.95px] px-[10px] py-[4px] rounded-[8px] top-0" data-node-id="258:21306" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21307">
                <p className="leading-[16px]">+ Dairy</p>
              </div>
            </div>
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[213.39px] px-[10px] py-[4px] rounded-[8px] top-0" data-node-id="258:21308" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21309">
                <p className="leading-[16px]">+ Eggs</p>
              </div>
            </div>
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-0 px-[10px] py-[4px] rounded-[8px] top-[28px]" data-node-id="258:21310" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21311">
                <p className="leading-[16px]">+ Soy</p>
              </div>
            </div>
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[56.89px] px-[10px] py-[4px] rounded-[8px] top-[28px]" data-node-id="258:21312" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21313">
                <p className="leading-[16px]">+ Wheat</p>
              </div>
            </div>
            <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[129.42px] px-[10px] py-[4px] rounded-[8px] top-[28px]" data-node-id="258:21314" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="258:21315">
                <p className="leading-[16px]">+ Sesame</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-[326px]" data-node-id="258:21316" data-name="Add Disliked Input Row:margin">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="258:21317" data-name="Add Disliked Input Row">
            <div className="bg-white content-stretch flex flex-[1_0_0] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="258:21318" data-name="Background">
              <div className="h-[13.5px] relative shrink-0 w-[21.5px]" data-node-id="258:21319" data-name="Margin">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMargin} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-px relative" data-node-id="258:21321" data-name="Input">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="258:21322" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#777587] text-[12px] whitespace-nowrap" data-node-id="258:21323">
                    <p className="leading-[normal]">Add custom allergen</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#ba1a1a] content-stretch flex flex-col h-[40px] items-center justify-center pb-[12.5px] pt-[11.5px] px-[16px] relative rounded-[8px] shrink-0" data-node-id="258:21324" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-[color:var(----wf-white,white)] text-center whitespace-nowrap" data-node-id="258:21325">
                <p className="leading-[16px]">Add</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] h-[155px] items-start left-[16px] p-[16px] right-[16px] rounded-[12px] top-[1093px]" data-node-id="258:21326" data-name="6. Default Budget Range">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="258:21327" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21328" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21329" data-name="Heading 3">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[16px] whitespace-nowrap" data-node-id="258:21330">
                <p className="leading-[24px]">Default Budget Range</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21331" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] whitespace-nowrap" data-node-id="258:21332">
                <p className="leading-[16px]">{`Per person estimation excluding tips & tax`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start justify-center pt-[4px] relative shrink-0 w-full" data-node-id="258:21333" data-name="Container">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="258:21334" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21335" data-name="Label">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] w-full" data-node-id="258:21336">
                <p className="leading-[16px]">Minimum</p>
              </div>
            </div>
            <div className="bg-[#f4e6d9] content-stretch flex gap-[4px] items-center px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-node-id="258:21337" data-name="Background">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21338" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#505f76] text-[14px] whitespace-nowrap" data-node-id="258:21339">
                  <p className="leading-[20px]">$</p>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="258:21340" data-name="Input">
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="258:21341" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="258:21342" data-name="Container">
                    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-node-id="258:21343" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[16px] w-full" data-node-id="258:21344">
                        <p className="leading-[24px]">15</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center self-stretch" data-node-id="258:21345">
                    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
                      <div className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]" data-node-id="258:21346" data-name="Rectangle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="258:21347" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21348" data-name="Label">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] w-full" data-node-id="258:21349">
                <p className="leading-[16px]">Maximum</p>
              </div>
            </div>
            <div className="bg-[#f4e6d9] content-stretch flex gap-[4px] items-center px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-node-id="258:21350" data-name="Background">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21351" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#505f76] text-[14px] whitespace-nowrap" data-node-id="258:21352">
                  <p className="leading-[20px]">$</p>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="258:21353" data-name="Input">
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="258:21354" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="258:21355" data-name="Container">
                    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-node-id="258:21356" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[16px] w-full" data-node-id="258:21357">
                        <p className="leading-[24px]">30</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center self-stretch" data-node-id="258:21358">
                    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
                      <div className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]" data-node-id="258:21359" data-name="Rectangle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start left-[16px] p-[16px] right-[16px] rounded-[12px] top-[1269px]" data-node-id="258:21360" data-name="7. Preferred Distance">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21361" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21362" data-name="Heading 3">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[16px] w-full" data-node-id="258:21363">
              <p className="leading-[24px]">Preferred Travel Radius</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:21364" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] w-full" data-node-id="258:21365">
              <p className="leading-[16px]">Maximum radius from your location</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="258:21366" data-name="Radiogroup - Distance preferences">
          <div className="bg-[#fff2c4] content-stretch flex items-center justify-between p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="258:21367" data-name="Label">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="258:21368" data-name="Container">
              <div className="relative shrink-0 size-[15px]" data-node-id="258:21369" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21371" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[14px] whitespace-nowrap" data-node-id="258:21372">
                  <p className="leading-[20px]">Within 1 mi</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#767676] border-solid relative rounded-[50px] shrink-0 size-[16px]" data-node-id="258:21373" data-name="Input" />
          </div>
          <div className="bg-[#fff2c4] content-stretch flex items-center justify-between p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="258:21374" data-name="Label">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="258:21375" data-name="Container">
              <div className="relative shrink-0 size-[15px]" data-node-id="258:21376" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21378" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[14px] whitespace-nowrap" data-node-id="258:21379">
                  <p className="leading-[20px]">Within 3 mi</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#767676] border-solid relative rounded-[50px] shrink-0 size-[16px]" data-node-id="258:21380" data-name="Input" />
          </div>
          <div className="bg-[#ffe99d] content-stretch flex items-center justify-between p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="258:21381" data-name="Label">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="258:21382" data-name="Container">
              <div className="relative shrink-0 size-[15px]" data-node-id="258:21383" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21385" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[14px] whitespace-nowrap" data-node-id="258:21386">
                  <p className="leading-[20px]">Within 5 mi</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#767676] border-solid content-stretch flex flex-col items-start justify-center px-[3.2px] relative rounded-[50px] shrink-0 size-[16px]" data-node-id="258:21387" data-name="Input">
              <div className="bg-[#767676] relative rounded-[50px] shrink-0 size-[9.6px]" data-node-id="258:21388" data-name="Input:checked" />
            </div>
          </div>
          <div className="bg-[#fff2c4] content-stretch flex items-center justify-between p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="258:21389" data-name="Label">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="258:21390" data-name="Container">
              <div className="relative shrink-0 size-[15px]" data-node-id="258:21391" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21393" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[14px] whitespace-nowrap" data-node-id="258:21394">
                  <p className="leading-[20px]">Within 10 mi</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#767676] border-solid relative rounded-[50px] shrink-0 size-[16px]" data-node-id="258:21395" data-name="Input" />
          </div>
          <div className="bg-[#fff2c4] content-stretch flex items-center justify-between p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="258:21396" data-name="Label">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="258:21397" data-name="Container">
              <div className="relative shrink-0 size-[16.667px]" data-node-id="258:21398" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="258:21400" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[14px] whitespace-nowrap" data-node-id="258:21401">
                  <p className="leading-[20px]">No preference</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#767676] border-solid relative rounded-[50px] shrink-0 size-[16px]" data-node-id="258:21402" data-name="Input" />
          </div>
        </div>
      </div>
      <a className="absolute bg-[#ffd43b] content-stretch cursor-pointer flex gap-[8px] h-[56px] items-center justify-center left-[20px] right-[20px] rounded-[9999px] top-[1658px]" data-node-id="258:21403" data-name="Button">
        <div className="absolute bg-[rgba(255,255,255,0)] h-[56px] left-0 right-0 rounded-[9999px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.18)] top-0" data-node-id="258:21404" data-name="Button:shadow" />
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:21405" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[15px] text-center tracking-[0.15px] whitespace-nowrap" data-node-id="258:21406">
            <p className="leading-[20px]">Confirm</p>
          </div>
        </div>
      </a>
      <div className="absolute content-stretch flex items-center justify-center left-[20px] right-[20px] top-[1827px]" data-node-id="258:21409" data-name="Reassuring Microcopy">
        <div className="h-[14px] relative shrink-0 w-[226px]" data-node-id="258:21410" data-name="Container" />
      </div>
      <div className="absolute h-[24px] left-[27px] top-[36px] w-[12px]" data-node-id="258:21413" data-name="weui:back-filled">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWeuiBackFilled} />
      </div>
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="258:21415" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
      <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="258:21412" data-name="Navigation bar">
        <div className="absolute bottom-[12px] content-stretch flex gap-[12px] h-[24px] items-center left-[16px] w-[21px]" data-node-id="I258:21412;9:2834" data-name="LeftNavBar" />
        <div className="absolute bottom-[12px] content-stretch flex gap-[8px] h-[24px] items-center right-[16px] w-[28px]" data-node-id="I258:21412;9:2835" data-name="RightNavBar" />
        <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I258:21412;9:2837" data-name="Status Bar">
          <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I258:21412;9:2837;7:2322" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I258:21412;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I258:21412;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I258:21412;9:2837;7:2335" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I258:21412;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
