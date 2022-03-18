import './style.scss'
import avatar from '../../Images/avatar.png'
import { Image } from '../Multispace'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <a href="#">
                        <svg width="168" height="36" viewBox="0 0 168 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M134.803 32.9069L132.356 26.9464H133.403L134.791 30.4816C135.004 31.0093 135.189 31.5467 135.344 32.0916H135.391C135.505 31.6874 135.641 31.289 135.8 30.8978C136.029 30.2938 136.544 28.9767 137.344 26.9464H138.391L135.944 32.9069H134.803ZM147.439 26.827C147.46 27.2811 147.295 27.7257 146.977 28.0728C146.63 28.4157 146.17 28.6433 145.668 28.7202V28.7638C146.241 28.7952 146.784 29.0107 147.204 29.373C147.547 29.7229 147.727 30.1837 147.705 30.6556C147.725 30.9889 147.658 31.3218 147.509 31.6261C147.361 31.9304 147.135 32.1972 146.852 32.4041C146.14 32.8516 145.288 33.0676 144.428 33.0181C144.009 33.0208 143.591 32.9888 143.178 32.9226C142.796 32.858 142.425 32.7455 142.075 32.5883V31.7267C142.454 31.8992 142.854 32.0297 143.266 32.1155C143.658 32.2022 144.06 32.248 144.463 32.2519C145.949 32.2519 146.692 31.7135 146.692 30.6365C146.692 29.6718 145.873 29.1895 144.234 29.1895H143.386V28.4118H144.245C144.81 28.4406 145.37 28.2968 145.839 28.0025C146.03 27.8717 146.184 27.6994 146.287 27.5008C146.39 27.3022 146.439 27.0832 146.429 26.8632C146.438 26.6904 146.403 26.5181 146.328 26.3597C146.253 26.2012 146.14 26.0609 145.997 25.9497C145.66 25.7143 145.244 25.5968 144.823 25.6182C144.463 25.616 144.104 25.6636 143.758 25.7594C143.354 25.8853 142.97 26.0609 142.617 26.2813L142.122 25.6721C142.489 25.4077 142.902 25.2026 143.343 25.0656C143.812 24.9175 144.304 24.843 144.799 24.8452C145.495 24.8053 146.184 24.993 146.746 25.3753C146.975 25.5515 147.157 25.7743 147.277 26.0261C147.397 26.2779 147.453 26.5521 147.439 26.827ZM149.304 32.3311C149.288 32.1328 149.352 31.9361 149.483 31.7785C149.549 31.714 149.63 31.6637 149.719 31.6312C149.808 31.5988 149.904 31.585 150 31.5909C150.098 31.5857 150.196 31.5997 150.288 31.6321C150.379 31.6644 150.463 31.7143 150.532 31.7785C150.67 31.9328 150.739 32.1305 150.723 32.3304C150.738 32.5288 150.668 32.7246 150.529 32.8762C150.39 32.9952 150.209 33.0628 150.02 33.0664C149.83 33.0699 149.646 33.009 149.503 32.8953C149.429 32.8187 149.374 32.7291 149.34 32.6319C149.306 32.5347 149.293 32.4321 149.304 32.3304V32.3311ZM157.905 28.9201C157.981 29.9864 157.738 31.0515 157.202 31.9982C156.974 32.33 156.655 32.5994 156.277 32.7783C155.898 32.9572 155.475 33.0391 155.051 33.0153C154.631 33.032 154.213 32.9442 153.841 32.761C153.47 32.5778 153.158 32.3059 152.939 31.9736C152.394 31.0382 152.143 29.9804 152.215 28.9201C152.137 27.8522 152.379 26.785 152.916 25.8365C153.142 25.5078 153.459 25.2412 153.835 25.0642C154.211 24.8873 154.63 24.8065 155.051 24.8302C155.475 24.8131 155.896 24.9015 156.27 25.0862C156.644 25.2709 156.958 25.5451 157.178 25.8801C157.723 26.811 157.974 27.8643 157.905 28.9207V28.9201ZM153.204 28.9201C153.148 29.7814 153.299 30.6435 153.647 31.4442C153.77 31.6903 153.969 31.8969 154.219 32.0379C154.47 32.1788 154.76 32.2476 155.053 32.2356C155.348 32.2485 155.64 32.1792 155.892 32.0366C156.145 31.8941 156.345 31.6848 156.467 31.436C156.81 30.6374 156.96 29.7787 156.905 28.9207C156.96 28.0645 156.811 27.2075 156.467 26.4109C156.344 26.1625 156.144 25.9538 155.892 25.8117C155.639 25.6697 155.347 25.6008 155.052 25.6141C154.76 25.6014 154.47 25.6694 154.219 25.8093C153.969 25.9492 153.769 26.1548 153.645 26.4C153.297 27.1994 153.147 28.0606 153.205 28.9207L153.204 28.9201ZM159.398 32.3311C159.383 32.1327 159.447 31.936 159.578 31.7785C159.644 31.714 159.725 31.6637 159.814 31.6312C159.903 31.5988 159.999 31.585 160.095 31.5909C160.193 31.5857 160.291 31.5997 160.383 31.6321C160.474 31.6644 160.558 31.7143 160.627 31.7785C160.765 31.9328 160.834 32.1305 160.818 32.3304C160.833 32.5288 160.763 32.7246 160.624 32.8762C160.485 32.9952 160.304 33.0628 160.115 33.0664C159.926 33.0699 159.742 33.009 159.598 32.8953C159.524 32.8187 159.469 32.7291 159.435 32.6319C159.401 32.5347 159.389 32.4321 159.399 32.3304L159.398 32.3311ZM167.999 28.9201C168.076 29.9864 167.832 31.0515 167.296 31.9982C167.069 32.33 166.749 32.5994 166.371 32.7783C165.993 32.9572 165.57 33.0391 165.146 33.0153C164.725 33.032 164.307 32.9442 163.936 32.761C163.564 32.5778 163.253 32.3059 163.034 31.9736C162.489 31.0382 162.238 29.9804 162.31 28.9201C162.231 27.8522 162.473 26.785 163.01 25.8365C163.236 25.5078 163.554 25.2412 163.929 25.0642C164.305 24.8873 164.725 24.8065 165.146 24.8302C165.569 24.8131 165.99 24.9015 166.364 25.0862C166.738 25.2709 167.052 25.5451 167.272 25.8801C167.817 26.8111 168.068 27.8644 167.998 28.9207L167.999 28.9201ZM163.298 28.9201C163.242 29.7814 163.393 30.6435 163.741 31.4442C163.864 31.6903 164.063 31.8969 164.314 32.0379C164.564 32.1788 164.854 32.2476 165.147 32.2356C165.442 32.2486 165.735 32.1794 165.987 32.0368C166.24 31.8943 166.44 31.685 166.562 31.436C166.905 30.6374 167.055 29.7787 167 28.9207C167.055 28.0645 166.906 27.2075 166.562 26.4109C166.439 26.1625 166.239 25.9538 165.987 25.8117C165.734 25.6697 165.442 25.6008 165.147 25.6141C164.855 25.6014 164.565 25.6694 164.314 25.8093C164.064 25.9492 163.864 26.1548 163.741 26.4C163.392 27.1994 163.241 28.0606 163.299 28.9207L163.298 28.9201Z" fill="#CAC7E2" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67278 36H3.19377C4.99355 35.9969 6.77471 35.663 8.43367 35.0178C10.0926 34.3726 11.5963 33.429 12.8572 32.2417C14.2575 32.5899 15.7013 32.7663 17.1513 32.7663C19.4333 32.7293 21.6851 32.2771 23.778 31.4354C25.8709 30.5938 27.7639 29.3793 29.349 27.8612C30.9341 26.3431 32.1802 24.5512 33.0161 22.5879C33.8521 20.6246 34.2614 18.5283 34.2208 16.4186C34.2697 14.3036 33.8665 12.2005 33.0345 10.2297C32.2025 8.25899 30.958 6.45942 29.3722 4.93416C27.7865 3.4089 25.8908 2.18793 23.7937 1.34123C21.6966 0.494528 19.4393 0.0387443 17.1513 0C14.8567 0.0294058 12.5911 0.478308 10.485 1.32084C8.37893 2.16337 6.47401 3.38287 4.88004 4.90907C3.28607 6.43527 2.03456 8.23798 1.19764 10.2133C0.360707 12.1887 -0.0450954 14.2976 0.00361344 16.4186C-0.00470086 19.0712 0.678129 21.6866 1.99435 24.0435C3.31056 26.4005 5.22145 28.4298 7.56538 29.9597C6.60349 32.3696 4.90344 34.4684 2.67278 36ZM12.1454 5.00286C13.7267 4.36734 15.428 4.02603 17.1521 3.99841C18.8761 4.02612 20.5773 4.36749 22.1587 5.00304C23.74 5.63859 25.1704 6.55587 26.3682 7.70249C27.566 8.84912 28.5078 10.2026 29.1398 11.6857C29.7718 13.1689 30.0815 14.7525 30.0514 16.3463V16.4146C30.0927 19.6217 28.7591 22.7136 26.3421 25.0145C23.925 27.3155 20.621 28.6384 17.1521 28.6943C15.428 28.6666 13.7267 28.3253 12.1454 27.6898C10.564 27.0543 9.13357 26.137 7.93573 24.9904C6.73788 23.8437 5.79609 22.4902 5.16416 21.007C4.53223 19.5239 4.22252 17.9402 4.25273 16.3463C4.22252 14.7525 4.53223 13.1688 5.16416 11.6856C5.79609 10.2025 6.73788 8.84894 7.93573 7.7023C9.13357 6.55566 10.564 5.63838 12.1454 5.00286ZM15.4802 10.1805H19.4216V21.6368H15.4802V10.1805ZM20.863 15.9083H24.8044V21.6368H20.863V15.9083ZM13.8382 12.9312H10.2341V21.6511H13.8382V12.9312Z" fill="url(#paint0_linear_0_1)" />
                            <path d="M40.6212 16.6425V15.306H43.1538V14.5645H40.6212V13.3037H43.4763V12.5492H39.6471V17.3977H43.5811V16.6425H40.6212ZM52.2232 17.3977L52.2158 12.5485H51.4174L49.3718 15.7631L47.2893 12.5492H46.4871V17.3977H47.4162V14.2254L49.1393 16.8437H49.574L51.2971 14.1831L51.3044 17.397L52.2232 17.3977ZM57.6169 12.5485H55.4628V17.3977H56.4369V15.9985H57.6176C58.9961 15.9985 59.8506 15.3401 59.8506 14.2738C59.8506 13.2076 58.9998 12.5492 57.6206 12.5492L57.6169 12.5485ZM57.5718 15.2364H56.4369V13.3106H57.5755C58.4301 13.3106 58.8721 13.6639 58.8721 14.2732C58.8721 14.8824 58.4301 15.2364 57.5755 15.2364H57.5718ZM62.6438 17.3977H66.3601V16.6356H63.6216V12.5492H62.6475L62.6438 17.3977ZM71.3043 17.4659C71.6697 17.4839 72.0351 17.4327 72.3783 17.3153C72.7214 17.198 73.0349 17.0169 73.2995 16.7833C73.5641 16.5498 73.7742 16.2686 73.9169 15.9572C74.0596 15.6458 74.1318 15.3106 74.1292 14.9724C74.1317 14.6346 74.0595 14.2999 73.917 13.9889C73.7746 13.6778 73.5649 13.3969 73.3007 13.1635C73.0366 12.9301 72.7237 12.749 72.3811 12.6314C72.0386 12.5138 71.6737 12.4622 71.3088 12.4796C70.9436 12.4622 70.5784 12.5138 70.2356 12.6314C69.8927 12.749 69.5795 12.9301 69.315 13.1635C69.0505 13.397 68.8404 13.6779 68.6975 13.989C68.5546 14.3002 68.4819 14.6351 68.4839 14.9731C68.4818 15.3112 68.5544 15.6461 68.6973 15.9574C68.8401 16.2686 69.0503 16.5496 69.3147 16.7831C69.5792 17.0166 69.8925 17.1978 70.2354 17.3154C70.5783 17.433 70.9435 17.4847 71.3088 17.4672L71.3043 17.4659ZM71.3043 16.6759C71.0599 16.6833 70.8164 16.6442 70.589 16.5611C70.3615 16.4781 70.1549 16.3527 69.982 16.1928C69.8091 16.033 69.6735 15.842 69.5836 15.6317C69.4937 15.4214 69.4515 15.1963 69.4595 14.9704C69.4515 14.7444 69.4937 14.5193 69.5836 14.309C69.6735 14.0988 69.8091 13.9078 69.982 13.7479C70.1549 13.5881 70.3615 13.4627 70.589 13.3796C70.8164 13.2965 71.0599 13.2575 71.3043 13.2649C71.5488 13.2575 71.7923 13.2965 72.0197 13.3796C72.2472 13.4627 72.4537 13.5881 72.6267 13.7479C72.7996 13.9078 72.9352 14.0988 73.0251 14.309C73.115 14.5193 73.1572 14.7444 73.1492 14.9704C73.1574 15.1961 73.1154 15.421 73.0259 15.6311C72.9364 15.8413 72.8012 16.0322 72.6287 16.1922C72.4563 16.3521 72.2501 16.4777 72.0231 16.5611C71.7961 16.6446 71.553 16.6841 71.3088 16.6773L71.3043 16.6759ZM81.077 12.5492H80.1177L78.568 14.911L77.0323 12.5492H75.9903L78.0514 15.701V17.3977H79.0255V15.6867L81.077 12.5492ZM84.4332 16.6425V15.306H86.9658V14.5645H84.4339V13.3037H87.2891V12.5492H83.4598V17.3977H87.3938V16.6425H84.4332ZM91.2732 16.6425V15.306H93.8066V14.5645H91.274V13.3037H94.1291V12.5492H90.3014V17.3977H94.2354V16.6425H91.2732ZM102.092 17.3977H103.068V13.3106H104.806V12.5492H100.354V13.3112H102.092V17.3977ZM107.359 17.3977H108.333V12.5492H107.359V17.3977ZM117.309 17.3977L117.301 12.5485H116.499L114.454 15.7631L112.37 12.5492H111.568V17.3977H112.497V14.2254L114.221 16.8437H114.655L116.378 14.1831L116.386 17.397L117.309 17.3977ZM121.517 16.6425V15.306H124.049V14.5645H121.517V13.3037H124.372V12.5492H120.543V17.3977H124.477V16.6425H121.517Z" fill="#8F7FFF" />
                            <path d="M47.9726 32.9274L45.9558 30.2552C46.5208 30.0496 47.0026 29.6864 47.3341 29.2161C47.6657 28.7457 47.8305 28.1916 47.8058 27.6307C47.8058 25.7663 46.3026 24.6147 43.9006 24.6147H40.0116V32.9274H42.0926V30.6113H44.0032L45.7373 32.9274H47.9726ZM45.699 27.6307C45.699 28.5333 45.057 29.0797 43.7847 29.0797H42.0874V26.1824H43.7847C45.057 26.1824 45.699 26.7166 45.699 27.6307ZM52.2667 31.3829V29.459H56.4413V27.9637H52.2675V26.1585H56.9948V24.6147H50.199V32.9274H57.1615V31.3835L52.2667 31.3829ZM63.4599 24.6147H59.5673V32.9274H61.6483V30.6352H63.4592C65.8612 30.6352 67.3644 29.4836 67.3644 27.6335C67.3644 25.7663 65.862 24.6147 63.4599 24.6147ZM63.3441 29.0675H61.6468V26.1817H63.3441C64.6156 26.1817 65.2583 26.7159 65.2583 27.6307C65.2583 28.5333 64.6156 29.0675 63.3441 29.0675ZM74.0739 33.0693C76.8995 33.0693 78.9938 31.2526 78.9938 28.7714C78.9938 26.2902 76.9002 24.4735 74.0739 24.4735C71.235 24.4735 69.154 26.3025 69.154 28.7714C69.154 31.2403 71.2357 33.0693 74.0739 33.0693ZM74.0739 31.432C73.6961 31.4413 73.3204 31.3785 72.9702 31.2473C72.62 31.1161 72.3029 30.9194 72.0388 30.6696C71.7747 30.4198 71.5693 30.1223 71.4354 29.7956C71.3015 29.469 71.2421 29.1203 71.2608 28.7714C71.2421 28.4225 71.3015 28.0738 71.4354 27.7472C71.5693 27.4205 71.7747 27.123 72.0388 26.8732C72.3029 26.6234 72.62 26.4267 72.9702 26.2955C73.3204 26.1643 73.6961 26.1014 74.0739 26.1108C74.4516 26.1014 74.8273 26.1643 75.1775 26.2955C75.5277 26.4267 75.8448 26.6234 76.1089 26.8732C76.373 27.123 76.5785 27.4205 76.7123 27.7472C76.8462 28.0738 76.9057 28.4225 76.8869 28.7714C76.9054 29.1202 76.8459 29.4687 76.7119 29.7952C76.5779 30.1217 76.3724 30.4191 76.1083 30.6687C75.8442 30.9184 75.5272 31.1149 75.1771 31.246C74.827 31.3771 74.4514 31.44 74.0739 31.4306V31.432ZM89.2756 32.9281L87.2573 30.2552C87.8224 30.0496 88.3041 29.6864 88.6357 29.2161C88.9672 28.7457 89.1321 28.1916 89.1074 27.6307C89.1074 25.7663 87.6042 24.6147 85.2021 24.6147H81.3102V32.9274H83.3912V30.6113H85.3054L87.0396 32.9267L89.2756 32.9281ZM87.0005 27.6307C87.0005 28.5333 86.3585 29.0797 85.0863 29.0797H83.389V26.1824H85.0863C86.3585 26.1824 87.0005 26.7166 87.0005 27.6307ZM93.2347 32.9274H95.3157V26.1824H98.1937V24.6133H90.3574V26.1824H93.2355L93.2347 32.9274ZM100.06 32.9274H102.141V24.6147H100.06V32.9274ZM111.214 24.6147V29.663L106.744 24.6147H105.025V32.9274H107.08V27.8791L111.563 32.9274H113.272V24.6147H111.214ZM122.227 31.0745C121.729 31.3189 121.172 31.4415 120.608 31.4306C120.223 31.4489 119.839 31.3928 119.478 31.2661C119.118 31.1393 118.791 30.9445 118.516 30.6942C118.242 30.4439 118.027 30.1436 117.885 29.8123C117.743 29.481 117.678 29.126 117.693 28.77C117.676 28.4116 117.742 28.054 117.885 27.7205C118.028 27.387 118.245 27.085 118.522 26.8341C118.8 26.5832 119.131 26.3891 119.495 26.2642C119.859 26.1394 120.247 26.0866 120.634 26.1094C121.072 26.1024 121.506 26.1826 121.906 26.3447C122.307 26.5069 122.666 26.747 122.957 27.0488L124.293 25.9089C123.818 25.4288 123.235 25.0513 122.584 24.803C121.934 24.5547 121.232 24.4417 120.529 24.4721C117.665 24.4721 115.585 26.265 115.585 28.77C115.585 31.2751 117.666 33.0679 120.492 33.0679C121.793 33.0769 123.065 32.7072 124.127 32.0112V28.6404H122.227V31.0745Z" fill="#8F7FFF" />
                            <defs>
                                <linearGradient id="paint0_linear_0_1" x1="8.48752" y1="22.86" x2="25.4302" y2="0.816464" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#A497FF" />
                                    <stop offset="1" stop-color="#624BFF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div className="header__links">
                    <a href="#" className="header__link">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg--lavenderGray'>
                            <path d="M7.07413 16.6553C5.19796 16.6553 3.39862 15.91 2.07197 14.5834C0.745308 13.2567 0 11.4574 0 9.58121C0 7.70504 0.745308 5.90571 2.07197 4.57905C3.39862 3.25239 5.19796 2.50708 7.07413 2.50708H7.54347V9.11189H14.1483V9.58121C14.1483 11.4574 13.403 13.2567 12.0763 14.5834C10.7496 15.91 8.95031 16.6553 7.07413 16.6553ZM6.6048 3.46495C5.43505 3.5549 4.31563 3.9784 3.37926 4.68523C2.44289 5.39206 1.72884 6.35259 1.32179 7.45291C0.914737 8.55323 0.831747 9.7472 1.08266 10.8933C1.33358 12.0393 1.90787 13.0894 2.73745 13.919C3.56703 14.7485 4.6171 15.3228 5.76315 15.5738C6.90921 15.8247 8.10318 15.7417 9.20351 15.3346C10.3038 14.9276 11.2644 14.2135 11.9712 13.2772C12.678 12.3408 13.1015 11.2214 13.1915 10.0516H6.6048V3.46495Z" fill="#B6B4C6" />
                            <path d="M16 8.08354H8.5717V0.655273H9.03462C10.8819 0.655273 12.6536 1.38912 13.9599 2.69537C15.2661 4.00163 16 5.77329 16 7.62061V8.08354ZM9.49331 7.15874H15.0538C14.9416 5.72187 14.3202 4.37225 13.3014 3.35285C12.2826 2.33345 10.9333 1.71123 9.4965 1.59821L9.49331 7.15874Z" fill="#B6B4C6" />
                        </svg>
                        <span className='text--regular text--lavenderGray'>Summary</span>
                    </a>
                    <a href="#" className="header__link">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg--lavenderGray'>
                            <path d="M13.5157 3.13953C12.8012 2.37266 11.9395 1.75758 10.982 1.33098C10.0246 0.90437 8.99102 0.674979 7.943 0.656488C6.89497 0.637997 5.85396 0.830784 4.88207 1.22335C3.91017 1.61591 3.0273 2.20022 2.28612 2.94139C1.54494 3.68257 0.960641 4.56544 0.568076 5.53734C0.175511 6.50924 -0.0172764 7.55025 0.00121472 8.59827C0.0197058 9.64629 0.249097 10.6799 0.675703 11.6373C1.10231 12.5947 1.71739 13.4564 2.48425 14.171C3.19882 14.9379 4.06053 15.553 5.01798 15.9796C5.97542 16.4062 7.00898 16.6356 8.057 16.6541C9.10503 16.6726 10.146 16.4798 11.1179 16.0872C12.0898 15.6946 12.9727 15.1103 13.7139 14.3692C14.4551 13.628 15.0394 12.7451 15.4319 11.7732C15.8245 10.8013 16.0173 9.7603 15.9988 8.71228C15.9803 7.66426 15.7509 6.63069 15.3243 5.67325C14.8977 4.71581 14.2826 3.8541 13.5157 3.13953ZM8 15.5052C6.64521 15.5052 5.32085 15.1035 4.19438 14.3508C3.06792 13.5981 2.18994 12.5283 1.67149 11.2766C1.15303 10.025 1.01738 8.64767 1.28169 7.31892C1.54599 5.99016 2.19839 4.76962 3.15637 3.81164C4.11435 2.85366 5.33489 2.20127 6.66364 1.93696C7.9924 1.67265 9.36969 1.80831 10.6214 2.32676C11.873 2.84522 12.9428 3.72319 13.6955 4.84965C14.4482 5.97612 14.8499 7.30048 14.8499 8.65527C14.848 10.4714 14.1257 12.2126 12.8415 13.4968C11.5573 14.781 9.81612 15.5033 8 15.5052Z" fill="#B6B4C6" />
                            <path d="M7.99983 3.0968C6.90048 3.0968 5.82581 3.4228 4.91173 4.03356C3.99766 4.64433 3.28522 5.51244 2.86452 6.5281C2.44381 7.54377 2.33374 8.66139 2.54821 9.73961C2.76269 10.8178 3.29207 11.8083 4.06943 12.5856C4.84679 13.363 5.8372 13.8924 6.91543 14.1068C7.99365 14.3213 9.11127 14.2112 10.1269 13.7905C11.1426 13.3698 12.0107 12.6574 12.6215 11.7433C13.2322 10.8292 13.5582 9.75457 13.5582 8.65522C13.5566 7.18154 12.9704 5.7687 11.9284 4.72665C10.8863 3.6846 9.4735 3.09845 7.99983 3.0968ZM11.5996 11.6129L10.9752 10.9885L10.3383 11.6254L10.9627 12.2498C10.2495 12.839 9.37644 13.2014 8.45565 13.2905V12.4111H7.5544V13.2957C6.6336 13.2067 5.76049 12.8443 5.04734 12.255L5.67176 11.6306L5.03485 10.9937L4.41042 11.6181C3.82117 10.905 3.45873 10.0318 3.36972 9.11105H4.24912V8.2098H3.36972C3.45873 7.289 3.82117 6.41588 4.41042 5.70273L5.03485 6.32716L5.67176 5.69024L5.04734 5.06582C5.76049 4.47657 6.6336 4.11413 7.5544 4.02511V4.90451H8.45565V4.02511C9.37645 4.11413 10.2496 4.47657 10.9627 5.06582L10.3383 5.69024L10.9752 6.32716L11.5996 5.70273C12.1889 6.41588 12.5513 7.289 12.6403 8.2098H8.78972C8.71038 8.07296 8.59665 7.95923 8.45981 7.87989V5.80264H7.55856V7.87677C7.43885 7.9459 7.33665 8.04163 7.25985 8.15658C7.18306 8.27152 7.13374 8.40259 7.1157 8.53964C7.09766 8.67669 7.11139 8.81606 7.15583 8.94696C7.20026 9.07786 7.27421 9.19678 7.37196 9.29452C7.46971 9.39227 7.58863 9.46623 7.71953 9.51066C7.85043 9.5551 7.9898 9.56883 8.12685 9.55079C8.26391 9.53275 8.39497 9.48343 8.50991 9.40663C8.62486 9.32984 8.72059 9.22764 8.78972 9.10793H12.6403C12.5509 10.028 12.1885 10.9003 11.5996 11.6129Z" fill="#B6B4C6" />
                        </svg>
                        <span className='text--regular text--lavenderGray'>Hours</span>
                    </a>
                    <a href="#" className="header__link">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg--lavenderGray'>
                            <path d="M12.4104 0.655273L2.02824 11.0402L0 16.6553L5.61788 14.6308L16 4.24586L12.4104 0.655273ZM14.6748 4.24586L12.7708 6.1508L10.5064 3.88539L12.4113 1.98045L14.6748 4.24586ZM4.55906 12.7616L11.3073 6.01245L12.1082 6.81433L5.36471 13.5626L4.55906 12.7616ZM3.09553 11.2972L9.84376 4.54798L10.6447 5.34986L3.89647 12.099L3.09553 11.2972ZM2.62494 12.1499L4.50729 14.0322L1.55859 15.0976L2.62494 12.1499Z" fill="#8F7FFF" />
                        </svg>
                        <span className='text--regular text--lavenderGray'>Projects</span>
                    </a>
                    <a href="#" className="header__link">
                        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg--lavenderGray'>
                            <path d="M8.05821 0.655273H0V16.6553H12V4.67955L8.05821 0.655273ZM8.32752 2.2556L10.4315 4.40464H8.32752V2.2556ZM0.918384 15.7171V1.59234H7.40808V5.34608H11.0816V15.7204L0.918384 15.7171Z" fill="#B6B4C6" />
                            <path d="M2.23349 8.19214H9.76676V9.1183H2.23349V8.19214Z" fill="#B6B4C6" />
                            <path d="M2.23105 10.0989H9.76431V11.025H2.23105V10.0989Z" fill="#B6B4C6" />
                            <path d="M2.23105 11.9752H9.76431V12.9014H2.23105V11.9752Z" fill="#B6B4C6" />
                        </svg>
                        <span className='text--regular text--lavenderGray'>Time reports</span>
                    </a>
                    <a href="#" className="header__link">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg--lavenderGray'>
                            <path d="M11.5358 6.11729C11.6529 6.23449 11.7186 6.39337 11.7186 6.55901C11.7186 6.72466 11.6529 6.88354 11.5358 7.00073L7.33819 11.1943C7.22099 11.3113 7.06211 11.3771 6.89647 11.3771C6.73082 11.3771 6.57194 11.3113 6.45474 11.1943L4.45909 9.19759C4.35119 9.07867 4.29321 8.92278 4.29716 8.76225C4.30111 8.60172 4.36669 8.44887 4.4803 8.33539C4.59391 8.22191 4.74684 8.15651 4.90737 8.15275C5.0679 8.14898 5.22372 8.20714 5.34253 8.31517L6.89698 9.8686L10.6473 6.11729C10.7054 6.05856 10.7746 6.01194 10.8508 5.98011C10.9271 5.94829 11.0089 5.93191 11.0915 5.93191C11.1742 5.93191 11.256 5.94829 11.3322 5.98011C11.4085 6.01194 11.4777 6.05856 11.5358 6.11729ZM16 8.65629C15.9998 10.2383 15.5306 11.7847 14.6516 13.1C13.7727 14.4154 12.5235 15.4406 11.0619 16.0461C9.60041 16.6516 7.99217 16.8102 6.44053 16.5018C4.88889 16.1934 3.46351 15.4319 2.34459 14.3136C1.22567 13.1952 0.463445 11.7702 0.15427 10.2187C-0.154906 8.66726 0.00285213 7.05895 0.6076 5.59711C1.21235 4.13527 2.23693 2.88555 3.55183 2.00593C4.86673 1.12631 6.41291 0.656285 7.9949 0.655275C9.04571 0.654604 10.0863 0.861064 11.0573 1.26285C12.0283 1.66464 12.9105 2.25387 13.6536 2.99686C14.3967 3.73985 14.986 4.62202 15.3879 5.59294C15.7899 6.56385 15.9965 7.60446 15.9959 8.65527L16 8.65629ZM14.7499 8.65629C14.7499 7.32129 14.354 6.01627 13.6123 4.90625C12.8707 3.79623 11.8165 2.93108 10.5831 2.4202C9.3497 1.90931 7.99251 1.77564 6.68316 2.03609C5.37381 2.29654 4.17109 2.9394 3.2271 3.88339C2.28311 4.82738 1.64024 6.0301 1.3798 7.33945C1.11935 8.64881 1.25302 10.006 1.7639 11.2394C2.27479 12.4728 3.13994 13.5269 4.24996 14.2686C5.35997 15.0103 6.665 15.4062 8 15.4062C8.88627 15.4061 9.76382 15.2313 10.5825 14.8919C11.4012 14.5526 12.1451 14.0552 12.7715 13.4283C13.398 12.8014 13.8948 12.0572 14.2335 11.2382C14.5723 10.4192 14.7464 9.54154 14.7458 8.65527L14.7499 8.65629Z" fill="#B6B4C6" />
                        </svg>
                        <span className='text--regular text--lavenderGray'>Confirmation</span>
                    </a>
                    <a href="#" className="header__link">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg--lavenderGray'>
                            <path d="M0 0.655273V12.6553H16V0.655273H0ZM10.1566 5.73219C9.87768 6.00862 9.54281 6.2286 9.17212 6.37887C8.80142 6.52914 8.40255 6.6066 7.99951 6.6066C7.59648 6.6066 7.19761 6.52914 6.82691 6.37887C6.45621 6.2286 6.12135 6.00862 5.84247 5.73219L1.59932 1.57835H14.3997L10.1566 5.73219ZM4.88249 6.09035L0.937633 10.8904V2.22358L4.88249 6.09035ZM5.57041 6.71804C6.2607 7.24031 7.11706 7.52469 7.99951 7.52469C8.88197 7.52469 9.73832 7.24031 10.4286 6.71804L14.5513 11.7387H1.44774L5.57041 6.71804ZM11.1165 6.09035L15.0614 2.22451V10.894L11.1165 6.09035Z" fill="#B6B4C6" />
                        </svg>
                        <span className='text--regular text--lavenderGray'>Mailer</span>
                    </a>
                    <a href="#" className="header__link">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg--lavenderGray'>
                            <path d="M15.5307 11.6605H15.0307V1.15226C15.03 1.0863 15.0174 1.02113 14.9935 0.960459C14.9696 0.899789 14.935 0.844818 14.8914 0.798669C14.8479 0.752521 14.7965 0.716101 14.74 0.691502C14.6835 0.666903 14.6231 0.654606 14.5622 0.655301H12.6875C12.6266 0.654606 12.5662 0.666903 12.5097 0.691502C12.4532 0.716101 12.4018 0.752521 12.3583 0.798669C12.3148 0.844818 12.2801 0.899789 12.2562 0.960459C12.2323 1.02113 12.2197 1.0863 12.2191 1.15226V11.6605H11.2813V4.13581C11.2807 4.06985 11.2681 4.00468 11.2442 3.94401C11.2203 3.88333 11.1856 3.82835 11.1421 3.7822C11.0986 3.73605 11.0471 3.69965 10.9906 3.67505C10.9341 3.65045 10.8737 3.63814 10.8128 3.63883H8.93736C8.87647 3.63814 8.81606 3.65045 8.75957 3.67505C8.70308 3.69965 8.65161 3.73605 8.60811 3.7822C8.56461 3.82835 8.52992 3.88333 8.50603 3.94401C8.48215 4.00468 8.46953 4.06985 8.46889 4.13581V11.6605H7.53115V8.11327C7.53051 8.04731 7.51789 7.98214 7.494 7.92147C7.47011 7.8608 7.43543 7.80581 7.39193 7.75966C7.34843 7.71352 7.29696 7.67711 7.24047 7.65251C7.18397 7.62791 7.12356 7.6156 7.06268 7.6163H5.18719C5.12631 7.6156 5.0659 7.62791 5.0094 7.65251C4.95291 7.67711 4.90144 7.71352 4.85794 7.75966C4.81444 7.80581 4.77976 7.8608 4.75587 7.92147C4.73198 7.98214 4.71936 8.04731 4.71873 8.11327V11.6605H3.78098V6.12892C3.78035 6.06296 3.76772 5.9978 3.74384 5.93713C3.71995 5.87646 3.68527 5.82148 3.64176 5.77533C3.59826 5.72918 3.5468 5.69277 3.4903 5.66817C3.43381 5.64357 3.3734 5.63126 3.31251 5.63196H1.43784C1.37696 5.63126 1.31654 5.64357 1.26005 5.66817C1.20356 5.69277 1.15209 5.72918 1.10859 5.77533C1.06509 5.82148 1.0304 5.87646 1.00651 5.93713C0.982628 5.9978 0.970006 6.06296 0.969371 6.12892V11.6605H0.468484C0.346711 11.6605 0.229926 11.7129 0.143819 11.8062C0.0577126 11.8995 0.00933838 12.026 0.00933838 12.1579C0.00933838 12.2898 0.0577126 12.4163 0.143819 12.5096C0.229926 12.6029 0.346711 12.6553 0.468484 12.6553H15.5307C15.6525 12.6553 15.7693 12.6029 15.8554 12.5096C15.9415 12.4163 15.9899 12.2898 15.9899 12.1579C15.9899 12.026 15.9415 11.8995 15.8554 11.8062C15.7693 11.7129 15.6525 11.6605 15.5307 11.6605ZM13.156 1.65099H14.0937V11.6605H13.156V1.65099ZM9.40582 4.63627H10.3436V11.6605H9.40582V4.63627ZM5.65566 8.61374H6.5934V11.6631H5.65647L5.65566 8.61374ZM1.9063 6.62589H2.84405V11.664H1.9063V6.62589Z" fill="#B6B4C6" />
                        </svg>
                        <span className='text--regular text--lavenderGray'>Compare</span>
                    </a>
                </div>
                <div className="header__profile">
                    <Image image={avatar} />
                </div>
            </header>
        </>
    )
}

export default Header