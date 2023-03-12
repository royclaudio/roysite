import React, { Component } from "react";

import { InfoButton } from "./InfoButton";
import "./NavMenu.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header className="primary">
        <div className="primary-header">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="primary-header__flag"
            href="https://www.hsd.state.nm.us/lookingforinformation/community_assistance_and_community_services_block_grant/"
          >
            <svg
              className="primary-header__flag"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              height="100px"
              viewBox="0 0 753 871"
              enableBackground="new 0 0 753 871"
            >
              {/*inner circle*/}
              <path
                className="flag-style"
                opacity="0"
                stroke="none"
                d="
M345.324036,410.262665 
	C342.107300,409.374084 342.458344,407.697937 342.892242,405.247803 
	C344.537079,395.959412 347.506317,387.064728 350.430664,378.154633 
	C350.671783,377.420013 350.975494,374.499664 353.556458,376.903503 
	C360.648956,380.191650 366.573822,384.760071 373.109131,388.285278 
	C374.238434,388.894470 375.215942,389.819336 377.092529,390.268585 
	C374.810272,380.739014 372.112671,371.775024 369.751984,362.726227 
	C368.627747,358.416992 366.993256,354.214264 366.938538,349.317200 
	C365.589508,345.952301 365.858582,343.526489 367.754547,340.421417 
	C371.938995,333.568390 376.474060,326.985504 380.961792,320.347229 
	C382.404205,318.213623 383.925018,317.720001 386.535126,317.981323 
	C395.811646,320.823700 405.103851,321.413025 414.220764,322.887115 
	C461.672913,330.559448 509.152496,338.062134 556.623596,345.617340 
	C563.687134,346.741516 570.776001,347.718109 577.819092,348.956757 
	C602.926147,353.372345 625.306213,374.593445 630.589233,398.996796 
	C633.482178,412.359985 630.424561,425.067993 626.095215,437.619263 
	C625.681580,438.818420 624.592346,439.889099 625.287170,441.787659 
	C651.723389,426.531616 677.945251,411.058380 705.296082,397.596802 
	C706.511230,399.176544 705.966187,400.702698 705.971375,402.095551 
	C706.022034,415.757935 705.999451,429.420532 706.004944,443.083099 
	C706.005737,445.039246 706.370239,446.911774 703.808167,447.951965 
	C676.080688,459.209076 650.235962,474.533966 622.426758,485.632233 
	C595.552307,496.357513 567.901306,500.089478 539.251343,495.190948 
	C522.767151,492.372528 514.129639,479.900085 517.207336,463.249329 
	C518.399658,456.798889 520.685181,450.754028 524.906128,445.591583 
	C527.387329,442.556976 530.351624,440.231567 534.262878,439.335175 
	C539.648132,438.100922 543.387207,440.349884 544.796448,445.667908 
	C545.092712,446.785828 545.222351,447.970734 545.672668,449.020111 
	C546.581177,451.137329 548.548218,451.706268 550.601562,451.811768 
	C552.541260,451.911469 553.502991,450.590240 554.254822,448.955017 
	C557.789307,441.268066 554.755859,433.248657 546.979187,429.864868 
	C535.934021,425.058960 523.424194,428.414917 514.126770,438.678162 
	C489.955658,465.360046 498.542206,503.054504 531.926880,517.023071 
	C545.640747,522.761047 560.244141,524.120728 574.753906,525.882690 
	C606.657898,529.757080 638.833557,530.029419 670.807861,532.971497 
	C681.574829,533.962280 692.296021,535.441650 703.052124,536.563904 
	C705.310181,536.799500 706.083252,537.492493 706.063843,539.893372 
	C705.941284,555.054504 705.875671,570.218872 706.090698,585.377930 
	C706.144348,589.158203 704.090576,588.815735 701.713257,588.741699 
	C680.095032,588.068848 658.462341,587.695801 636.861938,586.654175 
	C611.603699,585.436279 586.381165,583.559143 561.305176,580.103333 
	C545.228333,577.887695 529.445312,574.908691 516.000732,564.825195 
	C498.847626,551.960205 490.907227,533.952454 486.877472,513.617493 
	C484.709778,502.678711 483.140717,491.660797 481.863983,480.145264 
	C466.212769,485.871399 450.817627,491.464722 435.450745,497.134613 
	C408.813080,506.963104 382.192902,516.838989 355.262268,526.900513 
	C353.278107,528.446655 352.801788,526.939087 352.406891,525.882751 
	C347.225006,512.020630 343.390747,497.818115 340.805481,483.218262 
	C340.160950,479.578094 340.917480,475.734528 339.114868,472.222198 
	C338.358398,470.748199 339.370911,469.739044 341.571167,469.913208 
	C346.443329,466.595459 351.903046,466.048584 356.945251,464.491272 
	C389.729004,454.365997 423.016205,445.944855 455.726440,435.575348 
	C472.870789,430.140442 489.732239,423.818848 506.909943,418.483429 
	C519.133728,414.686646 531.338684,410.813202 544.402466,410.549622 
	C563.033569,410.173737 575.966736,426.179382 573.870056,445.327698 
	C573.247314,451.014679 571.863403,456.449402 569.229492,461.559814 
	C567.353760,465.199158 564.775330,468.234283 561.402222,470.480652 
	C554.398743,475.144653 547.604675,473.143433 544.257996,465.545410 
	C543.245850,463.247589 542.448059,460.351196 539.247925,460.991852 
	C535.721375,461.697876 535.552612,464.972382 535.578125,467.805450 
	C535.659912,476.868683 543.339783,483.349365 553.403503,482.488220 
	C567.093201,481.316833 577.593872,474.659393 584.856079,462.992645 
	C588.255127,457.532013 590.253357,451.504578 590.987732,445.161591 
	C592.300110,433.826721 592.526672,422.488098 587.942627,411.715515 
	C582.518127,398.967926 573.232971,391.342133 559.113892,389.262787 
	C528.296875,384.724304 497.723511,378.720520 467.086914,373.111420 
	C448.901062,369.781830 430.753326,366.247498 412.580078,362.849884 
	C407.665710,361.931122 407.407776,362.451965 407.834320,367.740112 
	C409.345642,386.476349 411.308228,405.175232 412.520844,423.935181 
	C412.826294,428.660309 411.559387,429.836945 407.013428,428.521637 
	C386.541351,422.598450 365.925476,417.158356 345.324036,410.262665 
z"
              />
              <path
                className="flag-style"
                transform="translate(0.000000,871.000000) scale(0.100000,-0.100000)"
                fill="#6E0008"
                opacity="1.000000"
                stroke="none"
                d="M0 4355 l0 -4355 820 0 820 0 0 285 0 285 811 0 810 0 67 44 c116 75
181 159 209 268 l17 68 1988 0 1988 0 0 3880 0 3880 -3765 0 -3765 0 0 -4355z
m7050 2524 l0 -1121 -34 29 c-156 129 -197 162 -283 219 -133 88 -352 195
-501 244 -705 231 -1459 93 -2037 -373 -81 -66 -272 -257 -312 -313 l-22 -30
272 -43 c1559 -247 1683 -268 1745 -293 100 -41 170 -88 248 -165 57 -57 82
-92 118 -165 83 -169 83 -294 -1 -553 -6 -19 -5 -19 18 -4 56 37 457 263 609
344 91 48 168 90 173 92 4 2 6 -109 5 -247 l-3 -252 -69 -29 c-38 -16 -193
-90 -346 -164 -417 -202 -561 -256 -770 -290 -110 -17 -313 -20 -427 -5 -113
15 -198 59 -238 124 -28 46 -30 56 -30 145 0 84 3 103 28 156 44 95 102 145
167 145 38 0 80 -39 80 -74 0 -25 32 -56 57 -56 42 0 61 120 27 168 -53 72
-182 94 -282 47 -190 -88 -296 -392 -212 -608 46 -121 186 -232 362 -285 132
-41 466 -80 858 -102 326 -18 683 -48 773 -66 l27 -6 0 -260 0 -260 -132 6
c-73 3 -218 8 -323 11 -484 14 -990 61 -1192 110 -211 52 -398 211 -481 411
-31 74 -69 231 -87 359 -9 61 -19 128 -23 151 l-7 41 -628 -230 c-627 -230
-628 -231 -622 -256 3 -14 35 -84 70 -156 183 -372 467 -684 815 -893 401
-241 858 -346 1316 -301 456 44 886 231 1224 533 l65 58 3 -502 c1 -277 0
-506 -4 -509 -3 -3 -886 -6 -1962 -6 -1635 0 -1964 -2 -1997 -14 -152 -52
-268 -166 -312 -305 l-18 -56 -897 0 -898 0 0 -300 0 -300 -144 0 -144 0 3
3078 c1 1692 3 3339 4 3660 l1 582 3185 0 3185 0 0 -1121z m-25 -2825 c3 -20
4 -38 1 -41 -2 -3 -62 -7 -133 -9 l-128 -4 73 36 c63 30 120 48 168 53 7 1 15
-15 19 -35z m-148 -131 l151 -6 4 -34 4 -33 -71 0 c-40 0 -161 3 -271 7 l-199
6 70 33 c78 36 87 37 312 27z m-197 -148 c162 -8 310 -15 328 -15 32 0 32 0
32 -50 l0 -51 -57 6 c-32 3 -206 14 -388 25 -181 11 -361 23 -400 26 l-70 7
110 32 c61 18 119 33 130 34 11 0 153 -6 315 -14z m-1115 -136 c68 -7 170 -9
270 -5 111 4 203 2 300 -9 77 -8 289 -24 470 -35 182 -12 355 -24 385 -28 l55
-7 3 -47 c4 -54 10 -52 -98 -38 -41 6 -257 26 -480 45 -598 52 -956 89 -1062
111 -16 3 -28 12 -28 21 0 12 8 14 38 10 20 -3 87 -11 147 -18z"
              />
              <path
                className="flag-style"
                fill="#6E0008"
                opacity="1.000000"
                stroke="none"
                transform="translate(0.000000,871.000000) scale(0.100000,-0.100000)"
                d="M3612 5133 c-22 -49 -50 -112 -61 -140 l-21 -53 23 -14 c88 -56 221
-135 224 -133 5 5 -112 427 -118 427 -3 0 -24 -39 -47 -87z"
              />
              <path
                className="flag-style"
                fill="#6E0008"
                opacity="1.000000"
                transform="translate(0.000000,871.000000) scale(0.100000,-0.100000)"
                stroke="none"
                d="M4051 5098 c0 -13 13 -165 28 -338 15 -173 26 -317 24 -319 -2 -3
-150 37 -328 89 -179 51 -327 91 -329 89 -2 -2 -6 -23 -10 -47 -4 -30 -3 -44
6 -46 57 -17 58 -19 6 -30 -25 -6 -28 -11 -28 -46 0 -22 3 -40 8 -40 4 0 59
11 122 25 l115 26 84 -19 85 -18 -212 -54 -212 -54 0 -47 0 -48 123 33 c67 18
193 52 279 76 l156 42 79 -18 c43 -9 74 -19 68 -20 -8 -3 -359 -105 -647 -189
l-58 -16 0 -42 c0 -23 4 -47 8 -53 5 -8 46 0 137 27 72 22 297 86 500 144 204
58 523 157 710 220 408 137 510 165 637 172 95 6 100 5 162 -26 91 -45 136
-109 150 -216 9 -63 -9 -175 -35 -229 -67 -133 -201 -166 -234 -56 -16 53 -67
79 -93 47 -57 -68 15 -214 114 -233 96 -18 253 43 329 128 85 94 115 178 122
338 8 179 -28 292 -127 391 -70 70 -98 80 -365 125 -320 53 -1313 236 -1357
250 -14 4 -18 0 -17 -18z m242 -123 c70 -10 125 -20 123 -22 -4 -4 -259 -34
-262 -30 0 1 -4 19 -7 40 -4 28 -3 37 6 34 7 -2 69 -12 140 -22z m435 -78 l64
-12 -299 -64 c-164 -36 -306 -67 -315 -69 -15 -4 -18 3 -18 40 l0 44 213 36
c238 40 266 42 355 25z m315 -58 c109 -17 110 -20 7 -41 -52 -11 -144 -35
-205 -54 -104 -32 -546 -144 -628 -159 l-38 -7 3 42 3 43 380 93 c209 51 386
93 393 93 7 1 46 -4 85 -10z m475 -85 c28 -4 52 -10 52 -14 0 -4 -46 -10 -102
-13 -130 -7 -255 -38 -533 -132 -296 -100 -720 -223 -731 -213 -1 2 -6 22 -9
44 l-7 40 229 63 c125 36 311 91 413 124 249 80 375 106 520 106 63 1 139 -2
168 -5z"
              />
              <path
                className="flag-style"
                fill="#E2871B"
                opacity="1.000000"
                stroke="none"
                d="
M705.967041,205.500214 
	C695.985718,200.491333 686.226501,194.604446 676.025024,189.623337 
	C652.390808,178.083344 627.594543,170.044861 601.743774,164.844040 
	C577.733215,160.013489 553.547974,159.306839 529.302063,160.169708 
	C513.308472,160.738876 497.427917,163.444275 481.825012,167.134674 
	C457.667603,172.848343 434.464874,181.266571 412.469482,192.871719 
	C394.368011,202.422363 377.502411,213.766541 361.613892,226.706238 
	C350.776001,235.532684 340.673126,245.111771 331.327728,255.380951 
	C316.455078,271.723724 303.434387,289.497498 292.528381,308.824738 
	C281.664886,328.076691 273.200653,348.257477 266.839783,369.397583 
	C262.181610,384.878845 259.128601,400.625275 256.840729,416.634186 
	C254.169861,435.323151 254.464706,454.068970 255.261536,472.713501 
	C256.146240,493.413727 260.207947,513.822327 266.038940,533.781616 
	C271.811188,553.540039 279.577179,572.525208 289.339111,590.616394 
	C298.262177,607.152771 308.745911,622.666748 320.611237,637.330322 
	C330.677460,649.770386 341.920868,661.035950 353.593475,671.790710 
	C366.442200,683.629150 380.699768,693.846619 395.686737,702.941589 
	C397.204132,703.862427 398.685059,704.843323 400.467041,705.988647 
	C399.126892,707.470947 397.224518,706.832336 395.464172,706.836609 
	C374.519806,706.887024 353.570099,707.150757 332.632660,706.766113 
	C319.665039,706.527893 307.082428,707.112610 295.327515,714.260254 
	C290.348480,713.552551 288.166748,709.624695 285.451782,706.674622 
	C272.029388,692.089539 259.112579,677.092712 247.774460,660.760193 
	C230.293320,635.578491 216.177261,608.687744 205.403183,580.005005 
	C193.848419,549.243958 186.610870,517.461731 183.876358,484.771362 
	C179.921722,437.494568 184.573837,391.042480 198.501495,345.559418 
	C212.946548,298.386688 236.151093,255.980087 267.757202,218.244980 
	C299.137085,180.779922 336.616150,150.825439 380.138824,128.372025 
	C417.086334,109.310745 456.044403,96.817169 497.176697,91.112526 
	C518.479858,88.157997 539.935852,86.790283 561.419495,87.780373 
	C605.044678,89.790878 647.256836,98.599617 687.571838,115.671211 
	C693.655090,118.247208 700.169861,120.083939 705.670288,124.743393 
	C705.959595,151.699417 705.973938,178.366547 705.967041,205.500214 
z"
              />

              <path
                className="flag-style"
                fill="#FEC265"
                opacity="1.000000"
                stroke="none"
                d="
M346.535614,71.970863 
	C334.054443,79.629601 320.966705,86.971031 308.698700,95.674393 
	C294.999512,105.393066 281.526062,115.355743 268.897003,126.480789 
	C259.715576,134.568802 250.533066,142.632797 242.063965,151.463730 
	C225.041931,169.212982 209.298996,188.030151 195.314713,208.278717 
	C182.223801,227.233719 170.621613,247.070557 160.635513,267.832275 
	C146.865723,296.460541 136.470215,326.328278 129.163528,357.198120 
	C125.730270,371.703247 123.424362,386.497742 121.141197,401.243713 
	C119.863503,409.495758 119.822792,417.931763 118.964211,426.258026 
	C117.770882,437.830688 117.949799,449.428192 118.022705,461.022461 
	C118.145767,480.590942 120.130783,499.984070 122.848785,519.372681 
	C126.482162,545.291077 132.628052,570.555786 141.058884,595.250854 
	C150.113831,621.774109 161.562592,647.218323 175.665878,671.541504 
	C185.365295,688.269470 196.029587,704.284729 207.470352,719.797546 
	C213.476669,727.941528 220.318329,735.469482 226.868866,743.601196 
	C200.960037,743.946960 174.965088,743.967041 148.504974,743.955139 
	C145.922302,743.057129 144.694351,741.301819 143.444748,739.502747 
	C114.242401,697.461548 92.120605,651.949097 76.919868,603.101990 
	C73.717674,592.811829 69.962975,582.576538 69.266327,571.286499 
	C68.086540,507.598022 68.883072,444.233032 68.664803,380.870300 
	C68.618996,367.571259 68.889153,354.271118 69.045029,340.505920 
	C73.707779,312.598816 83.429443,286.733307 94.100250,261.246002 
	C112.754578,216.689987 137.794708,175.906723 168.512909,138.650940 
	C185.692520,117.815109 204.134384,98.164650 224.828674,80.717201 
	C228.256439,77.827240 231.202255,74.344444 235.722260,72.264450 
	C259.605835,72.002892 283.171082,71.909706 306.736359,71.861839 
	C319.847839,71.835205 332.959442,71.884102 346.535614,71.970863 
z"
              />

              <path
                className="flag-style"
                fill="#FEC265"
                opacity="1.000000"
                stroke="none"
                d="
M148.521439,71.982178 
	C140.009018,81.828903 131.350616,91.860176 123.075996,102.262497 
	C112.237732,115.887642 102.247513,130.073273 93.062027,144.827866 
	C84.416374,158.715332 76.640739,173.098999 69.279724,188.058731 
	C68.849884,186.757416 68.653908,185.272095 68.653198,183.786667 
	C68.636185,148.201096 68.708694,112.615204 68.546623,77.030365 
	C68.527985,72.938309 69.521347,71.716431 73.728722,71.753998 
	C98.503326,71.975189 123.280617,71.893929 148.521439,71.982178 
z"
              />
              <path
                className="flag-style"
                fill="#FABD63"
                opacity="1.000000"
                stroke="none"
                d="
M635.924927,511.174011 
	C658.125671,512.997925 679.954529,513.450500 701.639709,515.884094 
	C705.258362,516.290222 707.875916,522.272156 705.820068,525.314697 
	C704.967102,526.577209 703.708496,526.005493 702.634521,525.879944 
	C649.720276,519.693420 596.410522,517.456177 543.627563,509.963135 
	C543.297729,509.916290 542.949463,509.933502 542.638184,509.832977 
	C541.200989,509.368896 538.754333,509.973419 538.994507,507.496002 
	C539.263123,504.724182 541.584412,506.149841 542.956787,506.271942 
	C548.258911,506.743561 553.552002,507.354980 558.829468,508.057343 
	C569.792969,509.516510 580.748535,509.365631 591.711426,508.120270 
	C603.111450,506.825195 614.201904,510.097382 625.495056,510.422333 
	C628.819397,510.518036 632.135193,510.907898 635.924927,511.174011 
z"
              />
              <path
                className="flag-style"
                fill="#FABE63"
                opacity="1.000000"
                stroke="none"
                d="
M691.796143,495.341858 
	C695.420898,495.553314 698.572144,495.817566 701.724487,495.832031 
	C704.121887,495.843048 705.318787,496.453827 705.212585,499.223480 
	C704.901184,507.348572 706.176025,505.997040 698.826416,505.549011 
	C673.614990,504.012268 648.407349,502.414032 623.199341,500.821747 
	C620.227173,500.634003 617.261841,500.337402 613.847839,500.054321 
	C622.858826,495.744843 637.217285,492.779724 646.009521,493.199829 
	C661.112793,493.921539 676.218384,494.594025 691.796143,495.341858 
z"
              />
              <path
                className="flag-style"
                fill="#F8BC62"
                opacity="1.000000"
                stroke="none"
                d="
M690.901978,479.443176 
	C694.542664,479.570587 697.706421,479.893677 700.851440,479.763367 
	C703.444519,479.655853 704.222656,480.705353 704.585083,483.116760 
	C705.107849,486.595642 704.134644,487.791046 700.475220,487.617310 
	C684.375488,486.852875 668.264465,486.325226 652.008240,485.332642 
	C657.463135,482.740631 662.262451,478.679718 668.959106,478.989288 
	C676.103394,479.319489 683.263672,479.306091 690.901978,479.443176 
z"
              />

              <path
                className="flag-style"
                fill="#F6B961"
                opacity="1.000000"
                stroke="none"
                d="
M699.589050,471.576202 
	C691.859985,471.581451 684.592407,471.581451 677.625488,471.581451 
	C684.783020,468.258698 692.045105,463.642975 700.990967,463.014832 
	C704.183960,462.790649 703.411011,464.900482 703.660522,466.511475 
	C704.099365,469.345490 704.272705,472.040802 699.589050,471.576202 
z"
              />
              <path
                className="flag-style"
                fill="#DB801B"
                opacity="1.000000"
                stroke="none"
                d="
M694.438354,706.419495 
	C697.840454,703.769104 701.538208,701.386780 705.594055,699.007812 
	C705.705505,707.584656 708.956116,707.223938 694.438354,706.419495 
z"
              />
              <path
                className="flag-style"
                fill="#71060B"
                opacity="1.000000"
                stroke="none"
                d="
M344.973450,410.481720 
	C351.355499,410.173126 357.116150,412.912140 363.119751,414.561157 
	C377.860199,418.610107 392.568939,422.797821 407.166870,427.328033 
	C411.525696,428.680725 411.665009,427.512207 411.307526,423.723572 
	C409.494171,404.504608 407.922882,385.262756 406.307159,366.025513 
	C406.155975,364.225800 406.286987,362.402374 406.286987,360.294922 
	C427.882690,364.357849 449.382233,368.443207 470.898163,372.440735 
	C500.821716,378.000427 530.734558,383.625763 560.828003,388.218140 
	C573.720825,390.185608 583.036194,397.175873 588.149841,409.013153 
	C595.991211,427.164581 595.448181,445.513031 586.283325,462.950989 
	C578.943237,476.917145 566.416748,483.731293 550.665344,483.798889 
	C539.571106,483.846466 531.669495,473.001831 534.791443,462.872894 
	C535.441650,460.763489 536.379089,459.227020 538.743835,459.026642 
	C541.286255,458.811157 543.375366,459.488922 544.454224,462.041962 
	C544.711670,462.651062 544.897034,463.290314 545.124512,463.912354 
	C548.204468,472.335052 555.013000,474.190857 562.142029,468.491150 
	C564.233032,466.819305 566.006042,464.810455 567.322388,462.452606 
	C572.762024,452.708893 574.276794,442.314240 571.378052,431.602295 
	C567.307495,416.560120 553.754700,409.398987 536.208923,412.391357 
	C515.770874,415.876984 496.404175,423.004578 476.987244,429.886566 
	C440.752930,442.729034 403.382782,451.736389 366.657227,462.913513 
	C358.714172,465.330933 350.727722,467.605682 342.373413,469.892731 
	C341.981628,466.817230 341.977661,463.795105 341.937012,460.315735 
	C342.275604,457.526245 344.353760,457.280396 345.995178,456.801453 
	C366.429291,450.839142 386.805756,444.677704 407.313629,438.969635 
	C408.100464,438.750671 408.916534,438.502655 409.734131,438.961456 
	C401.354858,435.497223 393.216278,436.999695 384.877838,439.515503 
	C372.145447,443.357056 359.180206,446.403961 346.377380,450.024292 
	C344.793549,450.472168 343.169891,450.997559 341.252777,450.020599 
	C341.005829,447.144806 341.001221,444.581879 340.981873,441.590149 
	C341.409607,439.427521 342.874817,438.935669 344.318878,438.561737 
	C355.740112,435.604309 367.171356,432.684967 378.663635,430.013214 
	C379.460663,429.827911 380.310089,429.848541 381.548096,430.456543 
	C371.958069,427.125397 362.876526,427.433075 353.674866,430.166473 
	C350.106293,431.226532 346.413025,432.743347 342.228302,431.165131 
	C342.298004,428.829681 342.635345,426.791718 342.948151,424.362305 
	C343.079773,421.214539 345.697998,421.935638 346.984406,420.927277 
	C345.805725,420.543884 344.457733,420.125610 343.867188,418.359741 
	C344.277039,415.645721 344.631256,413.263794 344.973450,410.481720 
z"
              />
              <path
                className="flag-style"
                fill="#F9BC62"
                opacity="1.000000"
                stroke="none"
                d="
M340.598816,449.831787 
	C356.594513,445.590698 372.314117,441.914886 387.709839,437.184784 
	C396.391968,434.517365 404.314972,435.506683 413.124054,438.545807 
	C389.143341,445.575043 365.756287,452.430237 342.134766,459.571960 
	C340.443909,459.976166 338.353058,460.377411 339.090851,457.997192 
	C339.920105,455.321808 334.531036,451.841187 340.598816,449.831787 
z"
              />
              <path
                className="flag-style"
                fill="#70060C"
                opacity="1.000000"
                stroke="none"
                d="
M366.638916,349.170898 
	C370.976868,363.393829 375.040375,377.823669 379.543793,393.815643 
	C370.249786,387.932312 362.175873,382.821350 353.997620,377.376953 
	C357.699036,367.663300 361.433258,358.250763 366.638916,349.170898 
z"
              />
              <path
                className="flag-style"
                fill="#F9BC62"
                opacity="1.000000"
                stroke="none"
                d="
M341.557983,430.930725 
	C347.817657,430.830902 353.513824,429.313385 358.909393,427.537506 
	C367.474213,424.718567 375.192505,427.872894 383.390350,429.896973 
	C369.489777,433.563232 355.589203,437.229462 341.327881,441.028473 
	C340.534088,441.350464 339.797119,441.792664 339.712891,441.691498 
	C338.041290,439.683563 338.981537,432.995026 341.557983,430.930725 
z"
              />
              <path
                className="flag-style"
                fill="#F5B760"
                opacity="1.000000"
                stroke="none"
                d="
M343.522949,418.006470 
	C345.239014,420.511932 348.633270,419.142487 350.259705,421.469940 
	C347.853882,422.104523 345.568542,422.707306 343.103394,423.640472 
	C341.585907,423.934204 339.911163,424.612946 339.952393,422.138062 
	C339.989990,419.880524 340.048920,417.837128 343.522949,418.006470 
z"
              />
              <path
                className="flag-style"
                fill="#F9BD62"
                opacity="1.000000"
                stroke="none"
                d="
M481.143646,417.169250 
	C462.932861,423.225250 444.841736,428.283630 426.612000,432.821350 
	C424.851807,433.259460 421.608643,436.653412 420.514557,431.431915 
	C419.657715,427.342499 419.816803,425.077179 424.849518,423.728210 
	C444.276276,418.521149 463.588287,412.863037 482.838837,407.029053 
	C496.362305,402.930634 509.681580,398.135132 523.815735,396.441986 
	C534.624084,395.147247 545.406677,395.502777 556.165222,397.022400 
	C556.981567,397.137695 557.833557,397.303375 557.782227,398.996307 
	C552.834412,399.486084 547.773071,398.838501 542.773132,399.516663 
	C524.338745,402.016937 506.996796,408.353790 489.541809,414.322296 
	C486.869537,415.236023 484.198120,416.152283 481.143646,417.169250 
z"
              />
              <path
                className="flag-style"
                fill="#F9BC62"
                opacity="1.000000"
                stroke="none"
                d="
M484.091858,397.997284 
	C463.636322,404.787628 442.882355,408.820221 422.387512,413.855225 
	C420.951996,414.207916 418.806152,415.083344 418.882019,412.148560 
	C418.951813,409.448303 417.030975,406.060486 421.736938,404.977051 
	C432.752991,402.440857 443.718567,399.685791 454.706360,397.026550 
	C466.659729,394.133575 478.734283,391.657990 490.529236,388.222076 
	C498.923706,385.776703 506.450378,388.975769 514.424622,389.960541 
	C504.397217,392.716156 494.266907,394.656769 484.091858,397.997284 
z"
              />
              <path
                className="flag-style"
                fill="#F9BC62"
                opacity="1.000000"
                stroke="none"
                d="
M468.990112,386.008636 
	C452.811432,389.503510 437.051392,392.955444 421.279510,396.352295 
	C419.719238,396.688385 417.080109,398.231995 417.196045,395.087860 
	C417.283600,392.713440 414.544556,388.803223 419.687164,387.958313 
	C433.635986,385.666656 447.553864,383.175873 461.528381,381.056488 
	C467.546478,380.143829 473.342224,382.423615 479.293854,383.646057 
	C475.997711,384.414124 472.701599,385.182190 468.990112,386.008636 
z"
              />
              <path
                className="flag-style"
                fill="#F4B65F"
                opacity="1.000000"
                stroke="none"
                d="
M415.550110,372.524902 
	C424.884399,373.604492 433.918671,374.950684 442.952972,376.296875 
	C434.802429,378.678131 426.375031,379.194855 418.047577,379.602936 
	C414.604584,379.771667 416.063446,375.193665 415.550110,372.524902 
z"
              />
              {/* 7 black */}
              <path
                className="flag-style"
                fill="#000000"
                opacity="000000"
                stroke="none"
                d="
M705.675659,205.679672 
	C705.945801,235.697205 705.945801,265.427643 705.945801,296.401581 
	C698.199036,288.281677 690.352173,282.034973 682.248657,276.132202 
	C663.081238,262.170227 642.029907,251.965622 619.389648,244.962723 
	C606.429199,240.953918 593.223511,238.419342 579.728760,236.878860 
	C565.939148,235.304703 552.093994,235.375732 538.414307,236.257584 
	C515.756470,237.718201 493.805267,243.241867 472.783417,252.078033 
	C453.275238,260.277924 435.354980,271.163574 419.077454,284.617279 
	C407.303375,294.348816 396.539612,305.170715 387.092285,317.666534 
	C382.808868,319.540131 380.401154,322.883881 378.158844,326.430267 
	C375.400085,330.793427 372.444153,335.027924 369.676300,339.387604 
	C367.906342,342.175537 366.911102,345.050354 367.541473,348.728882 
	C363.097168,358.246277 359.317993,367.688599 354.605713,377.070374 
	C352.315308,378.079376 351.306885,379.628937 350.612396,381.617523 
	C348.108185,388.788055 346.148163,396.103271 344.484283,403.505951 
	C343.998718,405.666382 343.841980,407.754730 345.535339,409.941406 
	C346.259216,412.582001 345.436829,414.737610 344.834229,417.265228 
	C343.363525,419.435394 339.628510,420.689758 343.403229,424.023743 
	C344.270325,426.356201 343.505646,428.230225 342.826416,430.460022 
	C340.137146,434.035309 338.975983,437.435059 341.684906,441.573212 
	C342.565155,444.184845 342.491516,446.490265 341.887115,449.158264 
	C338.783447,453.704376 338.880829,455.172211 342.639496,460.293640 
	C343.674927,463.310638 343.563446,466.016052 342.917786,469.112000 
	C341.790070,471.025055 340.864838,472.494629 341.116272,474.535187 
	C343.322021,492.435638 347.187592,509.896881 354.763885,526.779175 
	C360.287720,539.423157 365.775024,551.634155 372.953461,563.054443 
	C384.489716,581.407654 398.094788,597.861633 414.481171,612.169739 
	C429.190948,625.013794 445.141144,635.835266 462.683014,644.243591 
	C482.461487,653.723999 503.209259,659.985229 525.016907,663.194885 
	C541.434998,665.611328 557.890015,665.656006 574.224792,664.733704 
	C596.416443,663.480652 617.879089,657.844666 638.458862,649.228455 
	C662.683777,639.086121 684.587646,625.363403 703.496094,607.023254 
	C704.053467,606.482666 704.496643,605.663269 705.985718,605.896423 
	C705.985718,636.579590 705.985718,667.326294 705.968872,698.542114 
	C702.841797,702.318848 699.086121,704.627075 694.493896,706.167542 
	C693.645264,706.107056 693.147888,706.023865 692.650513,706.023926 
	C595.671326,706.032532 498.692139,706.047058 401.232056,706.121216 
	C398.840454,706.171997 397.242279,705.357117 395.653351,704.372192 
	C336.802612,667.889648 294.965210,617.441223 270.889435,552.414368 
	C262.103912,528.685364 256.682953,504.212616 254.565872,478.987122 
	C249.029648,413.021698 263.546112,351.896362 298.848969,295.846466 
	C324.362823,255.338409 357.982544,223.031921 399.148987,198.734863 
	C434.182343,178.057663 472.029633,165.282379 512.480713,160.562195 
	C566.685608,154.237061 618.695190,162.196854 668.513245,184.643295 
	C680.099792,189.863831 691.081421,196.094040 701.982483,202.534653 
	C703.282593,203.302780 704.529663,204.122162 705.675659,205.679672 
z"
              />
              <path
                className="flag-style"
                fill="#000000"
                opacity="000000"
                stroke="none"
                d="
M705.966187,124.562332 
	C693.375366,119.728569 680.955688,114.076530 668.077759,109.502541 
	C649.026001,102.735680 629.496033,97.653732 609.637878,94.229179 
	C595.928223,91.864937 582.020630,90.504684 568.037292,89.720161 
	C557.749146,89.142960 547.465271,88.729042 537.240234,89.145500 
	C515.795959,90.018929 494.502777,92.244270 473.385162,96.647263 
	C453.084259,100.879959 433.231903,106.529877 414.094513,114.212830 
	C384.338165,126.158913 356.244080,141.351822 330.605499,160.840652 
	C318.935760,169.711273 307.834351,179.172226 297.117523,189.202789 
	C271.168884,213.489807 249.837448,241.276520 231.983719,271.899597 
	C219.465698,293.370697 209.524384,315.964081 201.814987,339.552216 
	C195.434158,359.075409 190.645630,378.969604 187.919937,399.367645 
	C186.592499,409.301849 185.729874,419.254791 184.785736,429.220245 
	C183.541611,442.351807 183.668289,455.468689 184.197647,468.516418 
	C184.993637,488.135895 187.353455,507.659485 191.426910,526.940796 
	C196.448868,550.711670 203.650574,573.812195 213.161423,596.121033 
	C220.584137,613.531860 229.480835,630.251770 239.723145,646.214661 
	C252.320435,665.847900 266.341766,684.335876 282.501343,701.236145 
	C286.484100,705.401428 290.452820,709.634460 294.660004,714.081665 
	C292.112640,717.691711 288.233459,719.916626 285.458008,723.585022 
	C281.674316,728.586060 278.802582,733.869934 277.246216,739.800842 
	C276.337189,743.264893 274.622437,744.109009 271.278748,744.069641 
	C256.819702,743.899475 242.357635,743.985168 227.425812,743.952271 
	C223.687378,742.310364 221.721085,739.288574 219.507233,736.648926 
	C190.820190,702.444946 167.709610,664.834595 150.417450,623.635498 
	C135.097748,587.135925 125.076126,549.240784 120.008957,510.028137 
	C116.908966,486.038666 115.668060,461.890503 116.825775,437.753662 
	C119.453438,382.970245 131.377945,330.241516 153.631531,280.002533 
	C171.367386,239.962662 194.611923,203.417664 223.235397,170.228989 
	C256.328125,131.858276 295.016052,100.397728 338.894196,75.198624 
	C341.242310,73.850098 343.680328,72.881676 346.672546,72.251923 
	C465.083527,72.028305 583.166809,72.029381 701.250061,71.926483 
	C704.899780,71.923302 706.138916,72.795021 706.087341,76.627022 
	C705.874451,92.446388 705.991394,108.270195 705.966187,124.562332 
z"
              />
              <path
                className="flag-style"
                fill="#000000"
                opacity="000000"
                stroke="none"
                d="
M235.571121,72.048027 
	C228.404266,79.045631 220.885818,86.149170 213.098450,92.944550 
	C205.328979,99.724335 197.989075,106.966537 191.246872,114.696312 
	C187.263306,119.263382 183.025452,123.622391 179.040833,128.187531 
	C168.077347,140.748291 157.887405,153.874298 148.146988,167.370636 
	C131.043228,191.069672 116.380501,216.217407 103.809517,242.591370 
	C89.254120,273.128693 78.120445,304.884491 70.014526,337.713806 
	C69.857208,338.350983 69.851524,339.025574 69.425720,339.861511 
	C69.054520,289.742920 69.032677,239.445511 68.982872,188.695465 
	C74.521675,172.655441 83.321808,158.744415 91.790794,144.693527 
	C105.544800,121.874252 121.773117,100.849449 139.235321,80.768867 
	C141.936478,77.662689 144.549683,74.355362 148.685333,72.249519 
	C177.691132,72.039505 206.396393,72.029198 235.571121,72.048027 
z"
              />
              <path
                className="flag-style"
                fill="#000000"
                opacity="000000"
                stroke="none"
                d="
M69.046936,571.428467 
	C74.195374,588.351074 78.653084,605.933655 84.918480,622.990601 
	C95.020065,650.491150 107.007317,677.061523 121.681381,702.467407 
	C129.780624,716.489990 138.541916,730.030945 147.919907,743.602966 
	C132.873962,743.949097 117.705902,744.126221 102.543701,743.903748 
	C98.296570,743.841431 96.801102,744.746887 96.883446,749.344910 
	C97.181831,766.005981 96.887962,782.677063 97.086037,799.341125 
	C97.131111,803.132812 95.984718,804.240173 92.272926,804.078613 
	C85.785278,803.796204 79.274460,803.904480 72.777550,804.044250 
	C70.051514,804.102905 68.631989,803.312134 68.992691,800.394104 
	C69.053551,799.901733 68.999146,799.395264 68.999191,798.895264 
	C69.005539,723.229553 69.012009,647.563782 69.046936,571.428467 
z"
              />
              {/* 7 black */}
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="primary-header__title"
            href="https://www.linkedin.com/in/royclaudio/"
          >
            Roy Claudio
          </a>
          <InfoButton
            info=" 
          I moved to Albuqurque, New Mexico at the age of 2, I was born in Ciudad Juárez.
          I graduated with a Computer Science degree from UNM.
          Everyday I strive to set a good example for my family."
          />
        </div>
        <nav className="navMenu">
          <a href="/">Home</a>
          <a href="/web-scrape"> Web Scraping Project </a>
          <a href="/counter">Projects</a>

          <div className="links">
            <a>Resources</a>
            <span className="popuptext">
              <a href="https://www.cabq.gov/family/services/homeless-services">
                NM |&nbsp; Resources{" "}
              </a>
              <a href="https://www.rentassistance.us">
                {" "}
                US |&nbsp; Rent Assistance
              </a>
              <a href="https://www.publichousing.com">
                {" "}
                US |&nbsp;Public Housing
              </a>
            </span>
          </div>
          <div className="dot"></div>
        </nav>
      </header>
    );
  }
}
