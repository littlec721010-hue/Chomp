const assetPathPrefix = "/assets/figma";
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
    <div className={className || "v89"} data-node-id="202:17140">
      <div className="v0" data-node-id="202:17141" data-name="Line" />
    </div>
  );
}

export default function Decide16() {
  return (
    <div className="v1" data-node-id="298:25879" data-name="Decide 16">
      <div className="v82" data-node-id="298:25880" data-name="Navigation bar">
        <div className="v83" data-node-id="I298:25880;9:2837" data-name="Status Bar">
          <div className="v84" data-node-id="I298:25880;9:2837;7:2322" data-name="Battery">
            <img alt="" className="v8" src={imgBattery} />
          </div>
          <div className="v85" data-node-id="I298:25880;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="v8" src={imgWifi} />
          </div>
          <div className="v86" data-node-id="I298:25880;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="v8" src={imgCellularConnection} />
          </div>
          <div className="v87" data-node-id="I298:25880;9:2837;7:2335" data-name="Time Style">
            <p className="v88" data-node-id="I298:25880;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
        </div>
      </div>
      <div className="v334" data-node-id="312:26417" data-name="Subtle ambient celebratory decorative canvas">
        <div className="v91" data-node-id="312:26418" data-name="Overlay+Blur" />
        <div className="v92" data-node-id="312:26419" data-name="Overlay+Blur" />
        <div className="v93" data-node-id="312:26420" data-name="Overlay+Blur" />
      </div>
      <div className="v335" data-node-id="309:26171" data-name="Heading 2 - Celebration Title & Subtext:margin">
        <div className="v60" data-node-id="309:26172" data-name="Heading 2 - Celebration Title & Subtext">
          <div className="v336" data-node-id="309:26173">
            <p className="v185">Your vote is in!</p>
          </div>
        </div>
      </div>
      <div className="v337" data-node-id="309:26174" data-name="Margin">
        <div className="v338" data-node-id="309:26175" data-name="Container">
          <div className="v327" data-node-id="309:26176">
            <p className="v54">
              <span className="v339">{`You voted for `}</span>
              <span className="v340">{`Oishii Ramen & Izakaya `}</span>
              <span className="v341">in the</span>
              <span className="v342">{` `}</span>
              <span className="v339">Chomp</span>
            </p>
            <p>
              <span className="v44">random poll</span>
              <span className="v339">. Your squad will see your vote</span>
              <span className="v44">{` `}</span>
              <span className="v339">counted.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="v343" data-node-id="309:26251">
        <div className="v344" data-node-id="309:26178" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow):margin">
          <div className="v345" data-node-id="309:26179" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow)">
            <div className="v346" data-node-id="309:26180" data-name="Summary Card (Level 1 Surface with Umber Ambient Glow):shadow" />
            <div className="v347" data-node-id="309:26181" data-name="Spot Details Split" />
            <div className="v348" data-node-id="309:26202" data-name="Card Metadata Rows in a Soft Tonal Inset">
              <div className="v108" data-node-id="309:26203" data-name="Container">
                <div className="v349" data-node-id="309:26204" data-name="Container">
                  <div className="v43" data-node-id="309:26207">
                    <p className="v44">Voted via:</p>
                  </div>
                </div>
                <div className="v396" data-node-id="309:26208" data-name="Background">
                  <div className="v397" data-node-id="309:26209">
                    <p className="v24">Chomp Random</p>
                  </div>
                </div>
              </div>
              <div className="v352" data-node-id="309:26210" data-name="Container">
                <div className="v349" data-node-id="309:26211" data-name="Container">
                  <div className="v43" data-node-id="309:26214">
                    <p className="v44">Group status:</p>
                  </div>
                </div>
                <div className="v193" data-node-id="309:26215" data-name="Container">
                  <div className="v30" data-node-id="309:26216" data-name="Container">
                    <div className="v353" data-node-id="309:26217">
                      <p className="v44">4 of 4</p>
                    </div>
                  </div>
                  <div className="v354" data-node-id="309:26218">
                    <p className="v44">friends voted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="v355" data-node-id="309:26250">
          <div className="v356" data-node-id="309:26236" data-name="Background">
            <div className="v357" data-node-id="309:26237" data-name="AB6AXuDeRDPUR_LksKyZqHXHLfxgGYGfhDQ2mza-9tVMls1s7qtHHvAutTheAPvtqwYrUoyYqJyQN4y09siv5TNGhERVAGWKXOqX4RjAH-SDYmH7MZjTxpHclhJWKApMgKbRwVLMooV3MCQCY0iuwN7_TTSpiCqw-M503cmWCUFd4mUc6ub0BpGpkVnW348Ma3HcOy2k1J2cX5ke5iefHd9qnH0Xkosm4gTPuPwkLBYT4wDkPMDs1MmhqL0">
              <div className="v358">
                <img alt="" className="v359" src={imgAb6AXuDeRdpurLksKyZqHxhLfxgGyGfhDq2Mza9TVMls1S7QtHHvAutTheAPvtqwYrUoyYqJyQn4Y09Siv5TnGhErvagwkxOqX4RjAhSdYmH7MZjTxpHclhJwkApMgKbRwVlMooV3Mcqcy0IuwN7TtSpiCqwM503CmWcuFd4MUc6Ub0BpGpkVnW348Ma3HcOy2K1J2CX5Ke5IefHd9QnH0Xkosm4GTPuPwkLbyt4WDkPmDs1MmhqL0} />
              </div>
            </div>
            <div className="v360" data-node-id="309:26238" data-name="Overlay">
              <div className="v361" data-node-id="309:26239" data-name="Container">
                <img alt="" className="v8" src={imgContainer} />
              </div>
              <div className="v362" data-node-id="309:26241" data-name="Margin">
                <div className="v363" data-node-id="309:26242">
                  <p className="v44">4.9</p>
                </div>
              </div>
            </div>
          </div>
          <div className="v364" data-node-id="309:26243" data-name="Container">
            <div className="v171" data-node-id="309:26244" data-name="Container">
              <div className="v365" data-node-id="309:26245" data-name="Container">
                <div className="v366" data-node-id="309:26246">
                  <p className="v169">{`Oishii Ramen & Izakaya`}</p>
                </div>
              </div>
            </div>
            <div className="v174" data-node-id="309:26247" data-name="Container">
              <div className="v111" data-node-id="309:26248">
                <p className="v152">Japanese • Izakaya</p>
                <p className="v44">0.8 mi • $15-30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="v367" data-node-id="312:26252" data-name="Member Vote Progress Strip Section:margin">
        <div className="v368" data-node-id="312:26253" data-name="Member Vote Progress Strip Section">
          <div className="v369" data-node-id="312:26254" data-name="Container">
            <div className="v30" data-node-id="312:26255" data-name="Heading 3">
              <div className="v370" data-node-id="312:26256">
                <p className="v44">SQUAD PULSE</p>
              </div>
            </div>
            <div className="v371" data-node-id="312:26257" data-name="Overlay">
              <div className="v372" data-node-id="312:26258" data-name="Background" />
              <div className="v373" data-node-id="312:26259">
                <p className="v32">100% Complete</p>
              </div>
            </div>
          </div>
          <div className="v374" data-node-id="312:26260" data-name="Member List">
            <div className="v375" data-node-id="312:26261" data-name="1. Shan (User)">
              <div className="v376" data-node-id="312:26262" data-name="Container">
                <div className="v398" data-node-id="312:26263" data-name="Background">
                  <div className="v30" data-node-id="312:26264" data-name="Container">
                    <div className="v378" data-node-id="312:26265">
                      <p className="v216">S</p>
                    </div>
                  </div>
                  <div className="v379" data-node-id="312:26266" data-name="Background">
                    <div className="v380" data-node-id="312:26267" data-name="Container">
                      <img alt="" className="v8" src={imgContainer1} />
                    </div>
                  </div>
                </div>
                <div className="v30" data-node-id="312:26269" data-name="Container">
                  <div className="v381" data-node-id="312:26270" data-name="Container">
                    <div className="v205" data-node-id="312:26271" data-name="Container">
                      <div className="v382" data-node-id="312:26272">
                        <p className="v216">Sarah</p>
                      </div>
                    </div>
                    <div className="v383" data-node-id="312:26273" data-name="Background">
                      <div className="v148" data-node-id="312:26274">
                        <p className="v32">You</p>
                      </div>
                    </div>
                  </div>
                  <div className="v174" data-node-id="312:26275" data-name="Container">
                    <div className="v117" data-node-id="312:26276">
                      <p className="v32">{`Oishii Ramen & Izakaya`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v399" data-node-id="312:26277" data-name="Background">
                <div className="v30" data-node-id="312:26278" data-name="Container">
                  <div className="v400" data-node-id="312:26279">
                    <p className="v32">Chomp Random</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="v385" data-node-id="312:26282" data-name="2. Alex">
              <div className="v376" data-node-id="312:26283" data-name="Container">
                <div className="v386" data-node-id="312:26284" data-name="Background">
                  <div className="v30" data-node-id="312:26285" data-name="Container">
                    <div className="v382" data-node-id="312:26286">
                      <p className="v216">A</p>
                    </div>
                  </div>
                  <div className="v379" data-node-id="312:26287" data-name="Background">
                    <div className="v380" data-node-id="312:26288" data-name="Container">
                      <img alt="" className="v8" src={imgContainer1} />
                    </div>
                  </div>
                </div>
                <div className="v30" data-node-id="312:26290" data-name="Container">
                  <div className="v174" data-node-id="312:26291" data-name="Container">
                    <div className="v382" data-node-id="312:26292">
                      <p className="v216">Alex</p>
                    </div>
                  </div>
                  <div className="v4" data-node-id="312:26293" data-name="Container">
                    <div className="v387" data-node-id="312:26294">
                      <p className="v32">Locked in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v384" data-node-id="312:26295" data-name="Background">
                <div className="v117" data-node-id="312:26296">
                  <p className="v32">{`Free Choice `}</p>
                </div>
              </div>
            </div>
            <div className="v385" data-node-id="312:26297" data-name="3. Jamie">
              <div className="v376" data-node-id="312:26298" data-name="Container">
                <div className="v386" data-node-id="312:26299" data-name="Background">
                  <div className="v30" data-node-id="312:26300" data-name="Container">
                    <div className="v382" data-node-id="312:26301">
                      <p className="v216">J</p>
                    </div>
                  </div>
                  <div className="v379" data-node-id="312:26302" data-name="Background">
                    <div className="v380" data-node-id="312:26303" data-name="Container">
                      <img alt="" className="v8" src={imgContainer1} />
                    </div>
                  </div>
                </div>
                <div className="v30" data-node-id="312:26305" data-name="Container">
                  <div className="v174" data-node-id="312:26306" data-name="Container">
                    <div className="v382" data-node-id="312:26307">
                      <p className="v216">Jamie</p>
                    </div>
                  </div>
                  <div className="v4" data-node-id="312:26308" data-name="Container">
                    <div className="v387" data-node-id="312:26309">
                      <p className="v32">Locked in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v384" data-node-id="312:26310" data-name="Background">
                <div className="v388" data-node-id="312:26311">
                  <p className="v32">Chomp Random</p>
                </div>
              </div>
            </div>
            <div className="v385" data-node-id="312:26401" data-name="2. Alex">
              <div className="v376" data-node-id="312:26402" data-name="Container">
                <div className="v386" data-node-id="312:26403" data-name="Background">
                  <div className="v30" data-node-id="312:26404" data-name="Container">
                    <div className="v382" data-node-id="312:26405">
                      <p className="v216">T</p>
                    </div>
                  </div>
                  <div className="v379" data-node-id="312:26406" data-name="Background">
                    <div className="v380" data-node-id="312:26407" data-name="Container">
                      <img alt="" className="v8" src={imgContainer1} />
                    </div>
                  </div>
                </div>
                <div className="v30" data-node-id="312:26409" data-name="Container">
                  <div className="v174" data-node-id="312:26410" data-name="Container">
                    <div className="v382" data-node-id="312:26411">
                      <p className="v216">Taylor</p>
                    </div>
                  </div>
                  <div className="v4" data-node-id="312:26412" data-name="Container">
                    <div className="v387" data-node-id="312:26413">
                      <p className="v32">Locked in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v384" data-node-id="312:26414" data-name="Background">
                <div className="v117" data-node-id="312:26415">
                  <p className="v32">{`Free Choice `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="v389" data-node-id="312:26604">
        <div className="v390" data-node-id="312:26389" data-name="Button - Primary Action: Wait for Squad Results (Butter Yellow Nom Pill)">
          <div className="v391" data-node-id="312:26390" data-name="Button - Primary Action: Wait for Squad Results (Butter Yellow Nom Pill):shadow" />
          <div className="v392" data-node-id="312:26599" data-name="Container">
            <div className="v61" data-node-id="312:26600">
              <p className="v44">View Result</p>
            </div>
          </div>
          <div className="v393" data-node-id="312:26601" data-name="Container">
            <img alt="" className="v8" src={imgContainer2} />
          </div>
        </div>
      </a>
      <a className="v394" data-node-id="312:26395" data-name="Button - Secondary Link: Change My Vote (Soft Cream Pill with subtle contrast)">
        <div className="v209" data-node-id="312:26396" data-name="Container">
          <img alt="" className="v8" src={imgContainer3} />
        </div>
        <div className="v60" data-node-id="312:26398" data-name="Container">
          <div className="v395" data-node-id="312:26399">
            <p className="v24">Change My Vote</p>
          </div>
        </div>
      </a>
      <div className="v80" data-node-id="298:25888" data-name="Tabbar">
        <HomeIndicator className="v81" />
      </div>
    </div>
  );
}
