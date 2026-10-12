import { DesignView, DesignText, DesignImage } from '../../native/Design';
import { asset } from '../../assets';
const imgAb6AXuDeRdpurLksKyZqHxhLfxgGyGfhDq2Mza9TVMls1S7QtHHvAutTheAPvtqwYrUoyYqJyQn4Y09Siv5TnGhErvagwkxOqX4RjAhSdYmH7MZjTxpHclhJwkApMgKbRwVlMooV3Mcqcy0IuwN7TtSpiCqwM503CmWcuFd4MUc6Ub0BpGpkVnW348Ma3HcOy2K1J2CX5Ke5IefHd9QnH0Xkosm4GTPuPwkLbyt4WDkPmDs1MmhqL0 = asset("f37ad.png");
const imgBattery = asset("fe7dd.svg");
const imgWifi = asset("9ed76.svg");
const imgCellularConnection = asset("83135.svg");
const imgContainer = asset("b4c81.svg");
const imgContainer1 = asset("22867.svg");
const imgContainer2 = asset("ece1c.svg");
const imgContainer3 = asset("a07e1.svg");

type HomeIndicatorProps = {
  className?: string;
  dark?: "True";
};

function HomeIndicator({ className, dark = "True" }: HomeIndicatorProps) {
  return (
    <DesignView className={className || "v89"} data-node-id="202:17140">
      <DesignView className="v0" data-node-id="202:17141" data-name="Line" />
    </DesignView>
  );
}

export default function Decide15() {
  return (
    <DesignView className="v1" data-node-id="312:26427" data-name="Decide 15">
      <DesignView className="v82" data-node-id="312:26428" data-name="Navigation bar">
        <DesignView className="v83" data-node-id="I312:26428;9:2837" data-name="Status Bar">
          <DesignView className="v84" data-node-id="I312:26428;9:2837;7:2322" data-name="Battery">
            <DesignImage alt="" className="v8" src={imgBattery} />
          </DesignView>
          <DesignView className="v85" data-node-id="I312:26428;9:2837;7:2326" data-name="Wifi">
            <DesignImage alt="" className="v8" src={imgWifi} />
          </DesignView>
          <DesignView className="v86" data-node-id="I312:26428;9:2837;7:2330" data-name="Cellular Connection">
            <DesignImage alt="" className="v8" src={imgCellularConnection} />
          </DesignView>
          <DesignView className="v87" data-node-id="I312:26428;9:2837;7:2335" data-name="Time Style">
            <DesignText className="v88" data-node-id="I312:26428;9:2837;7:2336">
              9:41
            </DesignText>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v334" data-node-id="312:26435" data-name="Subtle ambient celebratory decorative canvas">
        <DesignView className="v91" data-node-id="312:26436" data-name="Overlay+Blur" />
        <DesignView className="v92" data-node-id="312:26437" data-name="Overlay+Blur" />
        <DesignView className="v93" data-node-id="312:26438" data-name="Overlay+Blur" />
      </DesignView>
      <DesignView className="v335" data-node-id="312:26439" data-name="Heading 2 - Celebration Title & Subtext:margin">
        <DesignView className="v60" data-node-id="312:26440" data-name="Heading 2 - Celebration Title & Subtext">
          <DesignView className="v336" data-node-id="312:26441">
            <DesignText className="v185">Your vote is in!</DesignText>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v337" data-node-id="312:26442" data-name="Margin">
        <DesignView className="v338" data-node-id="312:26443" data-name="Container">
          <DesignView className="v327" data-node-id="312:26444">
            <DesignText className="v54">
              <DesignText className="v339">{`You voted for `}</DesignText>
              <DesignText className="v340">{`Oishii Ramen & Izakaya `}</DesignText>
              <DesignText className="v341">in the</DesignText>
              <DesignText className="v342">{` `}</DesignText>
              <DesignText className="v339">Chomp</DesignText>
            </DesignText>
            <DesignText>
              <DesignText className="v44">random poll</DesignText>
              <DesignText className="v339">. Your squad will see your vote</DesignText>
              <DesignText className="v44">{` `}</DesignText>
              <DesignText className="v339">counted.</DesignText>
            </DesignText>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v343" data-node-id="312:26445">
        <DesignView className="v344" data-node-id="312:26446" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow):margin">
          <DesignView className="v345" data-node-id="312:26447" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow)">
            <DesignView className="v346" data-node-id="312:26448" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow):shadow" />
            <DesignView className="v347" data-node-id="312:26449" data-name="Spot Details Split" />
            <DesignView className="v348" data-node-id="312:26450" data-name="Card Metadata Rows in a Soft Tonal Inset">
              <DesignView className="v108" data-node-id="312:26451" data-name="Container">
                <DesignView className="v349" data-node-id="312:26452" data-name="Container">
                  <DesignView className="v43" data-node-id="312:26453">
                    <DesignText className="v44">Voted via:</DesignText>
                  </DesignView>
                </DesignView>
                <DesignView className="v350" data-node-id="312:26454" data-name="Background">
                  <DesignView className="v351" data-node-id="312:26455">
                    <DesignText className="v24">Free Choice</DesignText>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v352" data-node-id="312:26456" data-name="Container">
                <DesignView className="v349" data-node-id="312:26457" data-name="Container">
                  <DesignView className="v43" data-node-id="312:26458">
                    <DesignText className="v44">Group status:</DesignText>
                  </DesignView>
                </DesignView>
                <DesignView className="v193" data-node-id="312:26459" data-name="Container">
                  <DesignView className="v30" data-node-id="312:26460" data-name="Container">
                    <DesignView className="v353" data-node-id="312:26461">
                      <DesignText className="v44">4 of 4</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v354" data-node-id="312:26462">
                    <DesignText className="v44">friends voted</DesignText>
                  </DesignView>
                </DesignView>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
        <DesignView className="v355" data-node-id="312:26463">
          <DesignView className="v356" data-node-id="312:26464" data-name="Background">
            <DesignView className="v357" data-node-id="312:26465" data-name="AB6AXuDeRDPUR_LksKyZqHXHLfxgGYGfhDQ2mza-9tVMls1s7qtHHvAutTheAPvtqwYrUoyYqJyQN4y09siv5TNGhERVAGWKXOqX4RjAH-SDYmH7MZjTxpHclhJWKApMgKbRwVLMooV3MCQCY0iuwN7_TTSpiCqw-M503cmWCUFd4mUc6ub0BpGpkVnW348Ma3HcOy2k1J2cX5ke5iefHd9qnH0Xkosm4gTPuPwkLBYT4wDkPMDs1MmhqL0">
              <DesignView className="v358">
                <DesignImage alt="" className="v359" src={imgAb6AXuDeRdpurLksKyZqHxhLfxgGyGfhDq2Mza9TVMls1S7QtHHvAutTheAPvtqwYrUoyYqJyQn4Y09Siv5TnGhErvagwkxOqX4RjAhSdYmH7MZjTxpHclhJwkApMgKbRwVlMooV3Mcqcy0IuwN7TtSpiCqwM503CmWcuFd4MUc6Ub0BpGpkVnW348Ma3HcOy2K1J2CX5Ke5IefHd9QnH0Xkosm4GTPuPwkLbyt4WDkPmDs1MmhqL0} />
              </DesignView>
            </DesignView>
            <DesignView className="v360" data-node-id="312:26466" data-name="Overlay">
              <DesignView className="v361" data-node-id="312:26467" data-name="Container">
                <DesignImage alt="" className="v8" src={imgContainer} />
              </DesignView>
              <DesignView className="v362" data-node-id="312:26469" data-name="Margin">
                <DesignView className="v363" data-node-id="312:26470">
                  <DesignText className="v44">4.9</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
          </DesignView>
          <DesignView className="v364" data-node-id="312:26471" data-name="Container">
            <DesignView className="v171" data-node-id="312:26472" data-name="Container">
              <DesignView className="v365" data-node-id="312:26473" data-name="Container">
                <DesignView className="v366" data-node-id="312:26474">
                  <DesignText className="v169">{`Oishii Ramen & Izakaya`}</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v174" data-node-id="312:26475" data-name="Container">
              <DesignView className="v111" data-node-id="312:26476">
                <DesignText className="v152">Japanese • Izakaya</DesignText>
                <DesignText className="v44">0.8 mi • $15-30</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v367" data-node-id="312:26477" data-name="Member Vote Progress Strip Section:margin">
        <DesignView className="v368" data-node-id="312:26478" data-name="Member Vote Progress Strip Section">
          <DesignView className="v369" data-node-id="312:26479" data-name="Container">
            <DesignView className="v30" data-node-id="312:26480" data-name="Heading 3">
              <DesignView className="v370" data-node-id="312:26481">
                <DesignText className="v44">SQUAD PULSE</DesignText>
              </DesignView>
            </DesignView>
            <DesignView className="v371" data-node-id="312:26482" data-name="Overlay">
              <DesignView className="v372" data-node-id="312:26483" data-name="Background" />
              <DesignView className="v373" data-node-id="312:26484">
                <DesignText className="v32">100% Complete</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
          <DesignView className="v374" data-node-id="312:26485" data-name="Member List">
            <DesignView className="v375" data-node-id="312:26486" data-name="1. Shan (User)">
              <DesignView className="v376" data-node-id="312:26487" data-name="Container">
                <DesignView className="v377" data-node-id="312:26488" data-name="Background">
                  <DesignView className="v30" data-node-id="312:26489" data-name="Container">
                    <DesignView className="v378" data-node-id="312:26490">
                      <DesignText className="v216">S</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v379" data-node-id="312:26491" data-name="Background">
                    <DesignView className="v380" data-node-id="312:26492" data-name="Container">
                      <DesignImage alt="" className="v8" src={imgContainer1} />
                    </DesignView>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="312:26494" data-name="Container">
                  <DesignView className="v381" data-node-id="312:26495" data-name="Container">
                    <DesignView className="v205" data-node-id="312:26496" data-name="Container">
                      <DesignView className="v382" data-node-id="312:26497">
                        <DesignText className="v216">Sarah</DesignText>
                      </DesignView>
                    </DesignView>
                    <DesignView className="v383" data-node-id="312:26498" data-name="Background">
                      <DesignView className="v148" data-node-id="312:26499">
                        <DesignText className="v32">You</DesignText>
                      </DesignView>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v174" data-node-id="312:26500" data-name="Container">
                    <DesignView className="v117" data-node-id="312:26501">
                      <DesignText className="v32">{`Oishii Ramen & Izakaya`}</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v384" data-node-id="312:26586" data-name="Background">
                <DesignView className="v117" data-node-id="312:26587">
                  <DesignText className="v32">{`Free Choice `}</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v385" data-node-id="312:26505" data-name="2. Alex">
              <DesignView className="v376" data-node-id="312:26506" data-name="Container">
                <DesignView className="v386" data-node-id="312:26507" data-name="Background">
                  <DesignView className="v30" data-node-id="312:26508" data-name="Container">
                    <DesignView className="v382" data-node-id="312:26509">
                      <DesignText className="v216">A</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v379" data-node-id="312:26510" data-name="Background">
                    <DesignView className="v380" data-node-id="312:26511" data-name="Container">
                      <DesignImage alt="" className="v8" src={imgContainer1} />
                    </DesignView>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="312:26513" data-name="Container">
                  <DesignView className="v174" data-node-id="312:26514" data-name="Container">
                    <DesignView className="v382" data-node-id="312:26515">
                      <DesignText className="v216">Alex</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="312:26516" data-name="Container">
                    <DesignView className="v387" data-node-id="312:26517">
                      <DesignText className="v32">Locked in</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v384" data-node-id="312:26518" data-name="Background">
                <DesignView className="v117" data-node-id="312:26519">
                  <DesignText className="v32">{`Free Choice `}</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v385" data-node-id="312:26520" data-name="3. Jamie">
              <DesignView className="v376" data-node-id="312:26521" data-name="Container">
                <DesignView className="v386" data-node-id="312:26522" data-name="Background">
                  <DesignView className="v30" data-node-id="312:26523" data-name="Container">
                    <DesignView className="v382" data-node-id="312:26524">
                      <DesignText className="v216">J</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v379" data-node-id="312:26525" data-name="Background">
                    <DesignView className="v380" data-node-id="312:26526" data-name="Container">
                      <DesignImage alt="" className="v8" src={imgContainer1} />
                    </DesignView>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="312:26528" data-name="Container">
                  <DesignView className="v174" data-node-id="312:26529" data-name="Container">
                    <DesignView className="v382" data-node-id="312:26530">
                      <DesignText className="v216">Jamie</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="312:26531" data-name="Container">
                    <DesignView className="v387" data-node-id="312:26532">
                      <DesignText className="v32">Locked in</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v384" data-node-id="312:26533" data-name="Background">
                <DesignView className="v388" data-node-id="312:26534">
                  <DesignText className="v32">Chomp Random</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v385" data-node-id="312:26535" data-name="2. Alex">
              <DesignView className="v376" data-node-id="312:26536" data-name="Container">
                <DesignView className="v386" data-node-id="312:26537" data-name="Background">
                  <DesignView className="v30" data-node-id="312:26538" data-name="Container">
                    <DesignView className="v382" data-node-id="312:26539">
                      <DesignText className="v216">T</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v379" data-node-id="312:26540" data-name="Background">
                    <DesignView className="v380" data-node-id="312:26541" data-name="Container">
                      <DesignImage alt="" className="v8" src={imgContainer1} />
                    </DesignView>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="312:26543" data-name="Container">
                  <DesignView className="v174" data-node-id="312:26544" data-name="Container">
                    <DesignView className="v382" data-node-id="312:26545">
                      <DesignText className="v216">Taylor</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="312:26546" data-name="Container">
                    <DesignView className="v387" data-node-id="312:26547">
                      <DesignText className="v32">Locked in</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v384" data-node-id="312:26548" data-name="Background">
                <DesignView className="v117" data-node-id="312:26549">
                  <DesignText className="v32">{`Free Choice `}</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v389" data-node-id="312:26605">
        <DesignView className="v390" data-node-id="312:26550" data-name="Button - Primary Action: Wait for Squad Results (Butter Yellow Nom Pill)">
          <DesignView className="v391" data-node-id="312:26551" data-name="Button - Primary Action: Wait for Squad Results (Butter Yellow Nom Pill):shadow" />
          <DesignView className="v392" data-node-id="312:26552" data-name="Container">
            <DesignView className="v61" data-node-id="312:26553">
              <DesignText className="v44">View Result</DesignText>
            </DesignView>
          </DesignView>
          <DesignView className="v393" data-node-id="312:26554" data-name="Container">
            <DesignImage alt="" className="v8" src={imgContainer2} />
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v394" data-node-id="312:26556" data-name="Button - Secondary Link: Change My Vote (Soft Cream Pill with subtle contrast)">
        <DesignView className="v209" data-node-id="312:26557" data-name="Container">
          <DesignImage alt="" className="v8" src={imgContainer3} />
        </DesignView>
        <DesignView className="v60" data-node-id="312:26559" data-name="Container">
          <DesignView className="v395" data-node-id="312:26560">
            <DesignText className="v24">Change My Vote</DesignText>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v80" data-node-id="312:26561" data-name="Tabbar">
        <HomeIndicator className="v81" />
      </DesignView>
    </DesignView>
  );
}
