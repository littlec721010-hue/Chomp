import { DesignView, DesignText, DesignImage } from '../../native/Design';
import { asset } from '../../assets';
const imgAb6AXuDeRdpurLksKyZqHxhLfxgGyGfhDq2Mza9TVMls1S7QtHHvAutTheAPvtqwYrUoyYqJyQn4Y09Siv5TnGhErvagwkxOqX4RjAhSdYmH7MZjTxpHclhJwkApMgKbRwVlMooV3Mcqcy0IuwN7TtSpiCqwM503CmWcuFd4MUc6Ub0BpGpkVnW348Ma3HcOy2K1J2CX5Ke5IefHd9QnH0Xkosm4GTPuPwkLbyt4WDkPmDs1MmhqL0 = asset("f37ad.png");
const imgBattery = asset("fe7dd.svg");
const imgWifi = asset("9ed76.svg");
const imgCellularConnection = asset("83135.svg");
const imgContainer = asset("b4c81.svg");
const imgContainer1 = asset("22867.svg");
const imgContainer2 = asset("08f19.svg");
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

export default function Decide16() {
  return (
    <DesignView className="v1" data-node-id="298:25879" data-name="Decide 16">
      <DesignView className="v82" data-node-id="298:25880" data-name="Navigation bar">
        <DesignView className="v83" data-node-id="I298:25880;9:2837" data-name="Status Bar">
          <DesignView className="v84" data-node-id="I298:25880;9:2837;7:2322" data-name="Battery">
            <DesignImage alt="" className="v8" src={imgBattery} />
          </DesignView>
          <DesignView className="v85" data-node-id="I298:25880;9:2837;7:2326" data-name="Wifi">
            <DesignImage alt="" className="v8" src={imgWifi} />
          </DesignView>
          <DesignView className="v86" data-node-id="I298:25880;9:2837;7:2330" data-name="Cellular Connection">
            <DesignImage alt="" className="v8" src={imgCellularConnection} />
          </DesignView>
          <DesignView className="v87" data-node-id="I298:25880;9:2837;7:2335" data-name="Time Style">
            <DesignText className="v88" data-node-id="I298:25880;9:2837;7:2336">
              9:41
            </DesignText>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v334" data-node-id="312:26417" data-name="Subtle ambient celebratory decorative canvas">
        <DesignView className="v91" data-node-id="312:26418" data-name="Overlay+Blur" />
        <DesignView className="v92" data-node-id="312:26419" data-name="Overlay+Blur" />
        <DesignView className="v93" data-node-id="312:26420" data-name="Overlay+Blur" />
      </DesignView>
      <DesignView className="v335" data-node-id="309:26171" data-name="Heading 2 - Celebration Title & Subtext:margin">
        <DesignView className="v60" data-node-id="309:26172" data-name="Heading 2 - Celebration Title & Subtext">
          <DesignView className="v336" data-node-id="309:26173">
            <DesignText className="v185">Your vote is in!</DesignText>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v337" data-node-id="309:26174" data-name="Margin">
        <DesignView className="v338" data-node-id="309:26175" data-name="Container">
          <DesignView className="v327" data-node-id="309:26176">
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
      <DesignView className="v343" data-node-id="309:26251">
        <DesignView className="v344" data-node-id="309:26178" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow):margin">
          <DesignView className="v345" data-node-id="309:26179" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow)">
            <DesignView className="v346" data-node-id="309:26180" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow):shadow" />
            <DesignView className="v347" data-node-id="309:26181" data-name="Spot Details Split" />
            <DesignView className="v348" data-node-id="309:26202" data-name="Card Metadata Rows in a Soft Tonal Inset">
              <DesignView className="v108" data-node-id="309:26203" data-name="Container">
                <DesignView className="v349" data-node-id="309:26204" data-name="Container">
                  <DesignView className="v43" data-node-id="309:26207">
                    <DesignText className="v44">Voted via:</DesignText>
                  </DesignView>
                </DesignView>
                <DesignView className="v396" data-node-id="309:26208" data-name="Background">
                  <DesignView className="v397" data-node-id="309:26209">
                    <DesignText className="v24">Chomp Random</DesignText>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v352" data-node-id="309:26210" data-name="Container">
                <DesignView className="v349" data-node-id="309:26211" data-name="Container">
                  <DesignView className="v43" data-node-id="309:26214">
                    <DesignText className="v44">Group status:</DesignText>
                  </DesignView>
                </DesignView>
                <DesignView className="v193" data-node-id="309:26215" data-name="Container">
                  <DesignView className="v30" data-node-id="309:26216" data-name="Container">
                    <DesignView className="v353" data-node-id="309:26217">
                      <DesignText className="v44">4 of 4</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v354" data-node-id="309:26218">
                    <DesignText className="v44">friends voted</DesignText>
                  </DesignView>
                </DesignView>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
        <DesignView className="v355" data-node-id="309:26250">
          <DesignView className="v356" data-node-id="309:26236" data-name="Background">
            <DesignView className="v357" data-node-id="309:26237" data-name="AB6AXuDeRDPUR_LksKyZqHXHLfxgGYGfhDQ2mza-9tVMls1s7qtHHvAutTheAPvtqwYrUoyYqJyQN4y09siv5TNGhERVAGWKXOqX4RjAH-SDYmH7MZjTxpHclhJWKApMgKbRwVLMooV3MCQCY0iuwN7_TTSpiCqw-M503cmWCUFd4mUc6ub0BpGpkVnW348Ma3HcOy2k1J2cX5ke5iefHd9qnH0Xkosm4gTPuPwkLBYT4wDkPMDs1MmhqL0">
              <DesignView className="v358">
                <DesignImage alt="" className="v359" src={imgAb6AXuDeRdpurLksKyZqHxhLfxgGyGfhDq2Mza9TVMls1S7QtHHvAutTheAPvtqwYrUoyYqJyQn4Y09Siv5TnGhErvagwkxOqX4RjAhSdYmH7MZjTxpHclhJwkApMgKbRwVlMooV3Mcqcy0IuwN7TtSpiCqwM503CmWcuFd4MUc6Ub0BpGpkVnW348Ma3HcOy2K1J2CX5Ke5IefHd9QnH0Xkosm4GTPuPwkLbyt4WDkPmDs1MmhqL0} />
              </DesignView>
            </DesignView>
            <DesignView className="v360" data-node-id="309:26238" data-name="Overlay">
              <DesignView className="v361" data-node-id="309:26239" data-name="Container">
                <DesignImage alt="" className="v8" src={imgContainer} />
              </DesignView>
              <DesignView className="v362" data-node-id="309:26241" data-name="Margin">
                <DesignView className="v363" data-node-id="309:26242">
                  <DesignText className="v44">4.9</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
          </DesignView>
          <DesignView className="v364" data-node-id="309:26243" data-name="Container">
            <DesignView className="v171" data-node-id="309:26244" data-name="Container">
              <DesignView className="v365" data-node-id="309:26245" data-name="Container">
                <DesignView className="v366" data-node-id="309:26246">
                  <DesignText className="v169">{`Oishii Ramen & Izakaya`}</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v174" data-node-id="309:26247" data-name="Container">
              <DesignView className="v111" data-node-id="309:26248">
                <DesignText className="v152">Japanese • Izakaya</DesignText>
                <DesignText className="v44">0.8 mi • $15-30</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v367" data-node-id="312:26252" data-name="Member Vote Progress Strip Section:margin">
        <DesignView className="v368" data-node-id="312:26253" data-name="Member Vote Progress Strip Section">
          <DesignView className="v369" data-node-id="312:26254" data-name="Container">
            <DesignView className="v30" data-node-id="312:26255" data-name="Heading 3">
              <DesignView className="v370" data-node-id="312:26256">
                <DesignText className="v44">SQUAD PULSE</DesignText>
              </DesignView>
            </DesignView>
            <DesignView className="v371" data-node-id="312:26257" data-name="Overlay">
              <DesignView className="v372" data-node-id="312:26258" data-name="Background" />
              <DesignView className="v373" data-node-id="312:26259">
                <DesignText className="v32">100% Complete</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
          <DesignView className="v374" data-node-id="312:26260" data-name="Member List">
            <DesignView className="v375" data-node-id="312:26261" data-name="1. Shan (User)">
              <DesignView className="v376" data-node-id="312:26262" data-name="Container">
                <DesignView className="v398" data-node-id="312:26263" data-name="Background">
                  <DesignView className="v30" data-node-id="312:26264" data-name="Container">
                    <DesignView className="v378" data-node-id="312:26265">
                      <DesignText className="v216">S</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v379" data-node-id="312:26266" data-name="Background">
                    <DesignView className="v380" data-node-id="312:26267" data-name="Container">
                      <DesignImage alt="" className="v8" src={imgContainer1} />
                    </DesignView>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="312:26269" data-name="Container">
                  <DesignView className="v381" data-node-id="312:26270" data-name="Container">
                    <DesignView className="v205" data-node-id="312:26271" data-name="Container">
                      <DesignView className="v382" data-node-id="312:26272">
                        <DesignText className="v216">Sarah</DesignText>
                      </DesignView>
                    </DesignView>
                    <DesignView className="v383" data-node-id="312:26273" data-name="Background">
                      <DesignView className="v148" data-node-id="312:26274">
                        <DesignText className="v32">You</DesignText>
                      </DesignView>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v174" data-node-id="312:26275" data-name="Container">
                    <DesignView className="v117" data-node-id="312:26276">
                      <DesignText className="v32">{`Oishii Ramen & Izakaya`}</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v399" data-node-id="312:26277" data-name="Background">
                <DesignView className="v30" data-node-id="312:26278" data-name="Container">
                  <DesignView className="v400" data-node-id="312:26279">
                    <DesignText className="v32">Chomp Random</DesignText>
                  </DesignView>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v385" data-node-id="312:26282" data-name="2. Alex">
              <DesignView className="v376" data-node-id="312:26283" data-name="Container">
                <DesignView className="v386" data-node-id="312:26284" data-name="Background">
                  <DesignView className="v30" data-node-id="312:26285" data-name="Container">
                    <DesignView className="v382" data-node-id="312:26286">
                      <DesignText className="v216">A</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v379" data-node-id="312:26287" data-name="Background">
                    <DesignView className="v380" data-node-id="312:26288" data-name="Container">
                      <DesignImage alt="" className="v8" src={imgContainer1} />
                    </DesignView>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="312:26290" data-name="Container">
                  <DesignView className="v174" data-node-id="312:26291" data-name="Container">
                    <DesignView className="v382" data-node-id="312:26292">
                      <DesignText className="v216">Alex</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="312:26293" data-name="Container">
                    <DesignView className="v387" data-node-id="312:26294">
                      <DesignText className="v32">Locked in</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v384" data-node-id="312:26295" data-name="Background">
                <DesignView className="v117" data-node-id="312:26296">
                  <DesignText className="v32">{`Free Choice `}</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v385" data-node-id="312:26297" data-name="3. Jamie">
              <DesignView className="v376" data-node-id="312:26298" data-name="Container">
                <DesignView className="v386" data-node-id="312:26299" data-name="Background">
                  <DesignView className="v30" data-node-id="312:26300" data-name="Container">
                    <DesignView className="v382" data-node-id="312:26301">
                      <DesignText className="v216">J</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v379" data-node-id="312:26302" data-name="Background">
                    <DesignView className="v380" data-node-id="312:26303" data-name="Container">
                      <DesignImage alt="" className="v8" src={imgContainer1} />
                    </DesignView>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="312:26305" data-name="Container">
                  <DesignView className="v174" data-node-id="312:26306" data-name="Container">
                    <DesignView className="v382" data-node-id="312:26307">
                      <DesignText className="v216">Jamie</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="312:26308" data-name="Container">
                    <DesignView className="v387" data-node-id="312:26309">
                      <DesignText className="v32">Locked in</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v384" data-node-id="312:26310" data-name="Background">
                <DesignView className="v388" data-node-id="312:26311">
                  <DesignText className="v32">Chomp Random</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v385" data-node-id="312:26401" data-name="2. Alex">
              <DesignView className="v376" data-node-id="312:26402" data-name="Container">
                <DesignView className="v386" data-node-id="312:26403" data-name="Background">
                  <DesignView className="v30" data-node-id="312:26404" data-name="Container">
                    <DesignView className="v382" data-node-id="312:26405">
                      <DesignText className="v216">T</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v379" data-node-id="312:26406" data-name="Background">
                    <DesignView className="v380" data-node-id="312:26407" data-name="Container">
                      <DesignImage alt="" className="v8" src={imgContainer1} />
                    </DesignView>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="312:26409" data-name="Container">
                  <DesignView className="v174" data-node-id="312:26410" data-name="Container">
                    <DesignView className="v382" data-node-id="312:26411">
                      <DesignText className="v216">Taylor</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="312:26412" data-name="Container">
                    <DesignView className="v387" data-node-id="312:26413">
                      <DesignText className="v32">Locked in</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v384" data-node-id="312:26414" data-name="Background">
                <DesignView className="v117" data-node-id="312:26415">
                  <DesignText className="v32">{`Free Choice `}</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v389" data-node-id="312:26604">
        <DesignView className="v390" data-node-id="312:26389" data-name="Button - Primary Action: Wait for Squad Results (Butter Yellow Nom Pill)">
          <DesignView className="v391" data-node-id="312:26390" data-name="Button - Primary Action: Wait for Squad Results (Butter Yellow Nom Pill):shadow" />
          <DesignView className="v392" data-node-id="312:26599" data-name="Container">
            <DesignView className="v61" data-node-id="312:26600">
              <DesignText className="v44">View Result</DesignText>
            </DesignView>
          </DesignView>
          <DesignView className="v393" data-node-id="312:26601" data-name="Container">
            <DesignImage alt="" className="v8" src={imgContainer2} />
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v394" data-node-id="312:26395" data-name="Button - Secondary Link: Change My Vote (Soft Cream Pill with subtle contrast)">
        <DesignView className="v209" data-node-id="312:26396" data-name="Container">
          <DesignImage alt="" className="v8" src={imgContainer3} />
        </DesignView>
        <DesignView className="v60" data-node-id="312:26398" data-name="Container">
          <DesignView className="v395" data-node-id="312:26399">
            <DesignText className="v24">Change My Vote</DesignText>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v80" data-node-id="298:25888" data-name="Tabbar">
        <HomeIndicator className="v81" />
      </DesignView>
    </DesignView>
  );
}
