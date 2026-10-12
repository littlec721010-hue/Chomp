const assetPathPrefix = "https://www.figma.com/api/mcp/asset/0fc41109-b192-4800-bf4d-09c470eccc7a";
const imgAb6AXuDl28VWjpGcvdF2Wbl1EgFeBgBJiitUtaxPiAAvvbje0VtqcdKut8EVizsutXAqdHt44G9HWtpFviTn60Brk7Gihq7GTwP9KdfWSsnJLp04TovzUPcuiAs6R1CyQDiXTiCsZk7MEkLfhLsS90OnT0BtUfIpEqxtDyxHVhErtvAtAVhL80HoD1BIvJyjGSiQiqRiydU8IiBgco9AhCeyazDTh0CLpYb2KLbwChYDwXlfASk = `${assetPathPrefix}/91d18.png`;
const imgAb6AXuAuKdFfDyFrZpEiqr2O6S5GFt2CHf5Z9Sbj5Ii3LnUxbDjbu5Z6A7IWp9JtqCqJktZ4UygUleF0WgpMqd6Rgih987Scqwu2P03PtGUjoKiajuSuedPnrHfGekyNutRsChoUf5QVxeDxyHxxe4ACiG2XzEaKeW1Lj7EOtqjohJhXrvFBfuPrgmfepnNmBccG0Tlxon6YJ1Fxh4Wa43AVn4IJ86ZhPo6VqtFyTQxkdbwq0VeSavM = `${assetPathPrefix}/5e4e8.png`;
const imgAb6AXuAxUn62BOnCknMmymAn0SCIfqCs8Sc6NPujAdzjCb5KlzI4AlVpNiLgOdp1Sn4SmUnTnRvX1J3V6AazMpVqlrKgeu2Fl0BHnmymHFpzYlAchKvrdB35Mic21HcXWnuInJ13Yg3EskYJvQxcq935ZZyz280Q66HAUwe3K6QL6K6PmO8Hf4X2RG54X7B3CzDjNdDWMduAm6EuAokUjIVcSNaPlrcgvLk5K0Z5JUt11VnxiWI = `${assetPathPrefix}/2974e.png`;
const imgAb6AXuATup6TcFfUJ6JbWxjg6IXfnLOPzBCklyhXcHTlI6Y9OfAoLjwAaXuLSlaGfdcj5BEzWhcUresNyzIrLuOi0RaLdw5OgXyf8Iid8RGq9GtedZfIa2VlvZFaIisK2WaeClPLbmhleKUm8EKYpRjTamWpSxOKlzvxUHjSoaZpzHYdVtWjny9WG3Hv6StbPoCpqVa8GbE0L4QyUoQx4WKHtn8O0R0WRzcB9F3W0WlN90GLzvQk = `${assetPathPrefix}/605c6.png`;
const imgAb6AXuCtwr15Mie9DdEcmj5P3DSgLaSvoCWtYwN8DmfEmZKdUmGx7L6SGn4ONcXb7McjgyP6WftIwrqJ8DDlRFabeuRs3XH7QE1QB1IifXVxi4GrNyE8Flqqr6XGyrpYguemWbGknhCmEdHdZKxZ0IeZPc57JUIcAmJsB3JseNVta1QFmVcLkY84BU4IuoXOvemK8FsZo8TbyUveub6Dz5HqEjMkoPiqqPgRl4TMfwDl8Lmi = `${assetPathPrefix}/b9414.png`;
const imgBattery = `${assetPathPrefix}/fe7dd.svg`;
const imgWifi = `${assetPathPrefix}/9ed76.svg`;
const imgCellularConnection = `${assetPathPrefix}/83135.svg`;
const imgContainer = `${assetPathPrefix}/accbc.svg`;
const imgContainer1 = `${assetPathPrefix}/10c44.svg`;
const imgContainer2 = `${assetPathPrefix}/ce033.svg`;
const imgContainer3 = `${assetPathPrefix}/fbcfb.svg`;
const imgContainer4 = `${assetPathPrefix}/7bc63.svg`;
const imgContainer5 = `${assetPathPrefix}/1e226.svg`;
const imgContainer6 = `${assetPathPrefix}/f4f94.svg`;
const imgContainer7 = `${assetPathPrefix}/8cefd.svg`;
const imgContainer8 = `${assetPathPrefix}/ab6c1.svg`;

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

export default function Decide17() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="312:26834" data-name="Decide 17">
      <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="312:26835" data-name="Navigation bar">
        <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I312:26835;9:2837" data-name="Status Bar">
          <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I312:26835;9:2837;7:2322" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I312:26835;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I312:26835;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I312:26835;9:2837;7:2335" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I312:26835;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-[0_-1px_0_0] overflow-clip" data-node-id="312:26836" data-name="Subtle ambient celebratory decorative canvas">
        <div className="-translate-x-1/2 absolute bg-[rgba(255,212,59,0.25)] blur-[32px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-48px]" data-node-id="312:26837" data-name="Overlay+Blur" />
        <div className="absolute bg-[rgba(254,125,94,0.2)] blur-[20px] right-[-64px] rounded-[9999px] size-[224px] top-[192px]" data-node-id="312:26838" data-name="Overlay+Blur" />
        <div className="absolute bg-[rgba(169,231,169,0.3)] blur-[20px] left-[-48px] rounded-[9999px] size-[192px] top-[320px]" data-node-id="312:26839" data-name="Overlay+Blur" />
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-[28px] right-[28px] top-[69px]" data-node-id="312:26845" data-name="Heading 2">
        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[28px] text-center tracking-[-0.7px] whitespace-nowrap" data-node-id="312:26846">
          <p className="leading-[36px] mb-0">Tonight, we’re eating</p>
          <p className="leading-[36px]">at...</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[19px] pt-[16px] right-[21px] top-[141px]" data-node-id="312:26847" data-name="Large Hero Restaurant Card (Level 3 Elevation):margin">
        <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[32px] shadow-[0px_16px_36px_-6px_rgba(62,45,18,0.14)] shrink-0 w-full" data-node-id="312:26848" data-name="Large Hero Restaurant Card (Level 3 Elevation)">
          <div className="bg-[#f4e6d9] content-stretch flex flex-col h-[208px] items-start justify-center overflow-clip relative shrink-0 w-full z-[2]" data-node-id="312:26849" data-name="Edge-to-Edge Delicious Food Imagery">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="312:26850" data-name="AB6AXuDL28VWjpGcvdF2WBL1egFeBgBJiitUtaxPiAAvvbje0vtqcdKut8eVizsutXAqdHT44g9hWtpFVITn60BRK7Gihq7GTwP9kdfWSsnJLp04TovzUPcuiAS6-r1-cy-QDiXTiCsZK7mEKLfhLS-s90onT0BtUFIpEQXTDyxHVhErtvAtAVhL_80hoD1bIVJyjGSiQIQRiydU8iiBGCO9ah_ceyazD-Th0c-LpYb2KLbwChYDwXlfASk">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[-4.53%] max-w-none top-0 w-[109.06%]" src={imgAb6AXuDl28VWjpGcvdF2Wbl1EgFeBgBJiitUtaxPiAAvvbje0VtqcdKut8EVizsutXAqdHt44G9HWtpFviTn60Brk7Gihq7GTwP9KdfWSsnJLp04TovzUPcuiAs6R1CyQDiXTiCsZk7MEkLfhLsS90OnT0BtUfIpEqxtDyxHVhErtvAtAVhL80HoD1BIvJyjGSiQiqRiydU8IiBgco9AhCeyazDTh0CLpYb2KLbwChYDwXlfASk} />
              </div>
            </div>
            <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[6px] items-center left-[12px] px-[12px] py-[4px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[12px]" data-node-id="312:26851" data-name="Live Status Badge Overlay">
              <div className="bg-[#326a38] relative rounded-[9999px] shrink-0 size-[8px]" data-node-id="312:26852" data-name="Background" />
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26853" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26854">
                  <p className="leading-[14px]">Open Now • Closes 11:00 PM</p>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#ffd43b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[3.99px] items-center px-[10px] py-[4px] right-[12px] rounded-[9999px] top-[12px]" data-node-id="312:26855" data-name="Rating Pill Overlay">
              <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-node-id="312:26856" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26858" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26859">
                  <p className="leading-[14px]">4.9 (420+)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative shrink-0 w-full z-[1]" data-node-id="312:26947" data-name="Container">
            <div className="bg-[#fff1e5] content-stretch flex items-center justify-between p-[10px] relative shrink-0 w-full" data-node-id="312:26948" data-name="Background">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="312:26949" data-name="Container">
                <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="312:26950" data-name="Container">
                  <div className="max-w-[104px] mr-[-8px] relative rounded-[9999px] shadow-[0px_0px_0px_2px_white] shrink-0 size-[32px]" data-node-id="312:26951" data-name="AB6AXuAUKdFfDYFrZPEiqr2O6s5gFT2CHf5z9Sbj5Ii3lnUXBDjbu5Z6a7iWP9JtqCQJktZ4UygUleF0WgpMQD6Rgih987scqwu2p03PtGUjoKIAJUSuedPNRHfGEKYNutRSChoUf5q_vxeDxyHxxe4aCiG2XZEaKeW1lj7eOTQJOHJhXrvFBfuPrgmfepn_NmBccG0TLXON6yJ1FXH4WA43A-vn4iJ86ZHPo6VqtFyTQxkdbwq0Ve_SavM">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuAuKdFfDyFrZpEiqr2O6S5GFt2CHf5Z9Sbj5Ii3LnUxbDjbu5Z6A7IWp9JtqCqJktZ4UygUleF0WgpMqd6Rgih987Scqwu2P03PtGUjoKiajuSuedPnrHfGekyNutRsChoUf5QVxeDxyHxxe4ACiG2XzEaKeW1Lj7EOtqjohJhXrvFBfuPrgmfepnNmBccG0Tlxon6YJ1Fxh4Wa43AVn4IJ86ZhPo6VqtFyTQxkdbwq0VeSavM} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start max-w-[96px] mr-[-8px] relative shrink-0 size-[32px]" data-node-id="312:26952" data-name="Img:margin">
                    <div className="max-w-[104px] relative rounded-[9999px] shadow-[0px_0px_0px_2px_white] shrink-0 size-[32px]" data-node-id="312:26953" data-name="AB6AXuAxUn62bOnCknMmymAn0sCIfqCs8Sc6nPUJAdzjCb5KlzI4alVpNiLgOdp1sn4SMUnTNRvX1j3V6AazMpVqlrKgeu2FL0bHnmymHFpzYL-achKVRD--b35mic21hcXWnuInJ13yg3EskYJvQXCQ-93_5ZZyz280q6_6hAUwe3K6qL6K6PmO8HF4x2rG54x7b3czDjNdD_wMDUAm6EuAokUjIVcSNaPlrcgvLK5K0z5jUt11Vnxi_wI">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuAxUn62BOnCknMmymAn0SCIfqCs8Sc6NPujAdzjCb5KlzI4AlVpNiLgOdp1Sn4SmUnTnRvX1J3V6AazMpVqlrKgeu2Fl0BHnmymHFpzYlAchKvrdB35Mic21HcXWnuInJ13Yg3EskYJvQxcq935ZZyz280Q66HAUwe3K6QL6K6PmO8Hf4X2RG54X7B3CzDjNdDWMduAm6EuAokUjIVcSNaPlrcgvLk5K0Z5JUt11VnxiWI} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start max-w-[96px] mr-[-8px] relative shrink-0 size-[32px]" data-node-id="312:26954" data-name="Img:margin">
                    <div className="max-w-[104px] relative rounded-[9999px] shadow-[0px_0px_0px_2px_white] shrink-0 size-[32px]" data-node-id="312:26955" data-name="AB6AXuATup6TcFfU_j6jbWxjg6IXfnL-oPz-bCKLYHXcHTl_i6y9ofAoLJWAaXuLSlaGfdcj5bEzWHCUresNyzIrLuOI0RaLdw5ogXYF8Iid8RGq9GtedZfIA2VlvZFaIisK2WAEClPLbmhleKUm8eKYpRjTamWpSxOKlzvxU-hjSoaZpzHYdVtWJNY9W-G3HV6stbPOCpqVa_8gbE0l4QyUOQx4wKHtn8O0R0wRzcB9F3w0WlN90gLZVQk">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuATup6TcFfUJ6JbWxjg6IXfnLOPzBCklyhXcHTlI6Y9OfAoLjwAaXuLSlaGfdcj5BEzWhcUresNyzIrLuOi0RaLdw5OgXyf8Iid8RGq9GtedZfIa2VlvZFaIisK2WaeClPLbmhleKUm8EKYpRjTamWpSxOKlzvxUHjSoaZpzHYdVtWjny9WG3Hv6StbPoCpqVa8GbE0L4QyUoQx4WKHtn8O0R0WRzcB9F3W0WlN90GLzvQk} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start max-w-[96px] relative shrink-0 size-[32px]" data-node-id="312:26956" data-name="Img:margin">
                    <div className="max-w-[104px] relative rounded-[9999px] shadow-[0px_0px_0px_2px_white] shrink-0 size-[32px]" data-node-id="312:26957" data-name="AB6AXuCTWR15mie9DDEcmj5p3dSgLaSvoC_wtYwN8dmfEmZKdUmGx7_l6sGn-4ONcXB7MCJGY-p6WFTIwrq-j8dDlRFabeuRS3xH7qE1qB1iifXVxi4grNyE8Flqqr6XGyrpYguemWBGknhCmEDHdZ_KX_z0__IeZPc57J_uIcAmJsB3jseNVta1qFmVCLkY84bU4IuoX_OvemK8fsZo8tbyUveub6Dz5HQEjMkoPiqqPgRL4tMFWDl8LMI">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuCtwr15Mie9DdEcmj5P3DSgLaSvoCWtYwN8DmfEmZKdUmGx7L6SGn4ONcXb7McjgyP6WftIwrqJ8DDlRFabeuRs3XH7QE1QB1IifXVxi4GrNyE8Flqqr6XGyrpYguemWbGknhCmEdHdZKxZ0IeZPc57JUIcAmJsB3JseNVta1QFmVcLkY84BU4IuoXOvemK8FsZo8TbyUveub6Dz5HqEjMkoPiqqPgRl4TMfwDl8Lmi} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26958" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26959" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[13px] whitespace-nowrap" data-node-id="312:26960">
                      <p className="leading-[18px]">4 Feasters Attending</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26961" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26962">
                      <p className="leading-[14px]">{`Sarah, Alex, Jamie & Taylor`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[16.667px]" data-node-id="312:26963" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="312:26965" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26966" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[11px] tracking-[0.55px] uppercase w-full" data-node-id="312:26967">
                  <p className="leading-[14px]">SQUAD VERIFIED PERKS</p>
                </div>
              </div>
              <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__34px_34px] relative shrink-0 w-full" data-node-id="312:26968" data-name="Container">
                <div className="bg-[#f9ecdf] col-1 content-stretch flex gap-[8px] h-[34px] items-center justify-self-stretch p-[8px] relative row-1 shrink-0" data-node-id="312:26969" data-name="Background">
                  <div className="h-[15px] relative shrink-0 w-[12px]" data-node-id="312:26970" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26972" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26973">
                      <p className="leading-[13.75px]">Nut-Free Line Safe</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f9ecdf] col-2 content-stretch flex gap-[8px] h-[34px] items-center justify-self-stretch p-[8px] relative row-1 shrink-0" data-node-id="312:26974" data-name="Background">
                  <div className="h-[15px] relative shrink-0 w-[13.961px]" data-node-id="312:26975" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26977" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26978">
                      <p className="leading-[13.75px]">16-Hr Rich Broth</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f9ecdf] col-1 content-stretch flex gap-[8px] h-[34px] items-center justify-self-stretch p-[8px] relative row-2 shrink-0" data-node-id="312:26979" data-name="Background">
                  <div className="h-[12.744px] relative shrink-0 w-[12.747px]" data-node-id="312:26980" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26982" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26983">
                      <p className="leading-[13.75px]">Vegan Shiitake Prep</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f9ecdf] col-2 content-stretch flex gap-[8px] h-[34px] items-center justify-self-stretch p-[8px] relative row-2 shrink-0" data-node-id="312:26984" data-name="Background">
                  <div className="h-[12px] relative shrink-0 w-[16.5px]" data-node-id="312:26985" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26987" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[11px] tracking-[0.33px] whitespace-nowrap" data-node-id="312:26988">
                      <p className="leading-[13.75px]">{`<$20 / Person`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[8px] items-start justify-center left-[19px] pt-[4px] right-[21px] top-[580px]" data-node-id="312:26887" data-name="Quick Action Pill Buttons (Horizontal layout)">
        <div className="bg-[#f9ecdf] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px p-[12px] relative" data-node-id="312:26888" data-name="Link - Directions">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_4px_16px_-2px_rgba(62,45,18,0.06)]" data-node-id="312:26889" data-name="Link - Directions:shadow" />
          <div className="content-stretch flex flex-col h-[42px] items-start pb-[6px] relative shrink-0 w-[36px]" data-node-id="312:26890" data-name="Margin">
            <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26891" data-name="Background">
              <div className="relative shrink-0 size-[15px]" data-node-id="312:26892" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26894" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[11px] text-center tracking-[0.33px] whitespace-nowrap" data-node-id="312:26895">
              <p className="leading-[14px]">Directions</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26896" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[10px] text-center whitespace-nowrap" data-node-id="312:26897">
              <p className="leading-[15px]">7 min walk</p>
            </div>
          </div>
        </div>
        <div className="bg-[#f9ecdf] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px p-[12px] relative" data-node-id="312:26898" data-name="Link - Call">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_4px_16px_-2px_rgba(62,45,18,0.06)]" data-node-id="312:26899" data-name="Link - Call:shadow" />
          <div className="content-stretch flex flex-col h-[42px] items-start pb-[6px] relative shrink-0 w-[36px]" data-node-id="312:26900" data-name="Margin">
            <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26901" data-name="Background">
              <div className="relative shrink-0 size-[15px]" data-node-id="312:26902" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26904" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[11px] text-center tracking-[0.33px] whitespace-nowrap" data-node-id="312:26905">
              <p className="leading-[14px]">Call Table</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26906" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[10px] text-center whitespace-nowrap" data-node-id="312:26907">
              <p className="leading-[15px]">Instant ring</p>
            </div>
          </div>
        </div>
        <div className="bg-[#f9ecdf] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px p-[12px] relative" data-node-id="312:26908" data-name="Link - View Menu">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.01px_0_0] shadow-[0px_4px_16px_-2px_rgba(62,45,18,0.06)]" data-node-id="312:26909" data-name="Link - View Menu:shadow" />
          <div className="content-stretch flex flex-col h-[42px] items-start pb-[6px] relative shrink-0 w-[36px]" data-node-id="312:26910" data-name="Margin">
            <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26911" data-name="Background">
              <div className="relative shrink-0 size-[15px]" data-node-id="312:26912" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26914" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#211a13] text-[11px] text-center tracking-[0.33px] whitespace-nowrap" data-node-id="312:26915">
              <p className="leading-[14px]">View Menu</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26916" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#4d4633] text-[10px] text-center whitespace-nowrap" data-node-id="312:26917">
              <p className="leading-[15px]">Popular items</p>
            </div>
          </div>
        </div>
      </div>
      <a className="absolute bg-[#ffd43b] content-stretch cursor-pointer drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[48px] items-center justify-center left-[36px] right-[36px] rounded-[9999px] top-[757px]" data-node-id="312:26918" data-name="Button - Action CTA">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26919" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[15px] text-center tracking-[0.15px] whitespace-nowrap" data-node-id="312:26920">
            <p className="leading-[20px]">{`Back to Home `}</p>
          </div>
        </div>
      </a>
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="312:26921" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
    </div>
  );
}
