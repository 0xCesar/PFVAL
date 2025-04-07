
"use client";
import { useEffect } from "react";
import { gsap } from "gsap";


export default function Portfoliosvg() {

  useEffect(() => {
    // Rotation infinie de l'élément avec l'ID "cercle"
    gsap.to("#circle", {
      rotation: 360,
      transformOrigin: "50% 50%",
      duration: 5, 
      repeat: -1, 
      ease: "linear", 
    });
  }, []);

  return <>
    <svg width="126" height="125" viewBox="0 0 126 125" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="circle">
<path d="M54.391 113.844L55.6629 114.093L54.107 121.981L50.2443 121.225C48.4895 120.882 47.4857 119.646 47.8317 117.892C48.1754 116.149 49.5763 115.372 51.3311 115.715L53.9219 116.222L54.391 113.844ZM50.5873 120.106L53.0604 120.59L53.6967 117.364L51.2236 116.88C50.0341 116.648 49.3335 116.975 49.1036 118.141C48.8737 119.306 49.3978 119.873 50.5873 120.106Z" fill="#1E1E1E"/>
<path d="M43.3782 110.59C45.7201 111.521 46.6631 113.652 45.7303 115.98C44.7975 118.308 42.6404 119.207 40.2986 118.276C37.9345 117.336 37.0025 115.21 37.9354 112.882C38.8682 110.554 41.0141 109.65 43.3782 110.59ZM42.9141 111.748C41.141 111.044 39.952 111.527 39.2066 113.387C38.4613 115.247 38.9852 116.424 40.7583 117.129C42.5314 117.833 43.7137 117.335 44.459 115.474C45.2044 113.614 44.6872 112.453 42.9141 111.748Z" fill="#1E1E1E"/>
<path d="M36.3801 107.288L37.4724 107.985L33.1201 114.745L29.6005 112.498C28.0632 111.516 27.5802 110.183 28.3922 108.921C29.1133 107.801 30.2933 107.587 31.6131 108.33L31.6586 108.259C31.2236 107.782 31.1758 107.325 31.2059 106.746L31.3334 104.065L32.5875 104.866L32.4679 107.423C32.427 108.152 32.5976 108.574 33.4472 109.117L34.6912 109.911L36.3801 107.288ZM32.6579 113.069L34.152 110.749L31.7348 109.205C30.8246 108.624 30.1681 108.646 29.6224 109.493C29.0897 110.321 29.3305 110.944 30.2407 111.526L32.6579 113.069Z" fill="#1E1E1E"/>
<path d="M26.7983 99.964L27.7386 100.838L23.0358 105.855L25.3557 108.012L24.5596 108.861L18.9882 103.68L19.7843 102.831L22.0955 104.98L26.7983 99.964Z" fill="#1E1E1E"/>
<path d="M22.2803 95.0163L23.0648 96.0478L16.6463 100.89L12.7744 95.7988L13.7037 95.0978L16.791 99.1572L18.7836 97.654L15.8053 93.7379L16.7249 93.0442L19.7033 96.9603L22.2803 95.0163Z" fill="#1E1E1E"/>
<path d="M16.4958 85.7009C17.6347 87.9489 16.9303 90.1696 14.6893 91.2957C12.4484 92.4219 10.2363 91.6667 9.09741 89.4187C7.94767 87.1494 8.65749 84.9394 10.8984 83.8132C13.1394 82.6871 15.3461 83.4316 16.4958 85.7009ZM15.3807 86.2613C14.5184 84.5593 13.3073 84.1337 11.5167 85.0336C9.72608 85.9334 9.3395 87.1617 10.2018 88.8638C11.0641 90.5658 12.2805 90.9752 14.0711 90.0754C15.8617 89.1756 16.243 87.9633 15.3807 86.2613Z" fill="#1E1E1E"/>
<path d="M12.0543 73.8353L13.8268 79.8308L6.1117 82.0932L5.74426 80.8503L12.3424 78.9155L10.9373 74.1629L12.0543 73.8353Z" fill="#1E1E1E"/>
<path d="M11.557 70.3675L11.7553 71.6483L3.80849 72.8688L3.61017 71.5881L11.557 70.3675Z" fill="#1E1E1E"/>
<path d="M11.123 62.4308C11.1246 64.9508 9.49363 66.6199 6.98563 66.6214C4.47763 66.623 2.84457 64.9561 2.84297 62.4361C2.84136 59.8921 4.4723 58.235 6.9803 58.2334C9.4883 58.2319 11.1214 59.8868 11.123 62.4308ZM9.87497 62.4316C9.87376 60.5236 8.98517 59.6002 6.98117 59.6014C4.97717 59.6027 4.07776 60.5273 4.07897 62.4353C4.08018 64.3433 4.98076 65.2547 6.98476 65.2534C8.98876 65.2522 9.87618 64.3396 9.87497 62.4316Z" fill="#1E1E1E"/>
<path d="M12.1435 41.9939L10.7899 45.5618L9.75663 45.1729L11.1103 41.6051L12.1435 41.9939Z" fill="#1E1E1E"/>
<path d="M22.5839 30.2562L21.7383 31.2382L15.6247 26.0166L18.193 23.034C19.3597 21.6791 20.934 21.414 22.2936 22.5753C23.6441 23.7287 23.6301 25.3265 22.4634 26.6814L20.7407 28.6819L22.5839 30.2562ZM18.9998 23.8809L17.3555 25.7905L19.8556 27.9259L21.5 26.0163C22.2909 25.0979 22.3513 24.3289 21.4479 23.5573C20.5446 22.7858 19.7907 22.9625 18.9998 23.8809Z" fill="#1E1E1E"/>
<path d="M30.8653 22.3196C28.8967 23.8928 26.5697 23.6632 24.9963 21.7102C23.4228 19.7572 23.702 17.445 25.6706 15.8719C27.658 14.2837 29.9756 14.5208 31.549 16.4738C33.1225 18.4268 32.8527 20.7315 30.8653 22.3196ZM30.0823 21.3478C31.5729 20.1567 31.7376 18.8883 30.4803 17.3278C29.2231 15.7673 27.9366 15.6432 26.4461 16.8344C24.9555 18.0255 24.8077 19.2956 26.065 20.8562C27.3222 22.4167 28.5918 22.5389 30.0823 21.3478Z" fill="#1E1E1E"/>
<path d="M37.2009 17.8963L36.0538 18.4994L32.2884 11.3957L35.9847 9.45237C37.5992 8.60357 39.0022 8.84204 39.7047 10.1674C40.3286 11.3443 39.9353 12.4729 38.6364 13.2507L38.6757 13.3249C39.3067 13.183 39.7302 13.3671 40.2212 13.6783L42.5011 15.1098L41.184 15.8023L39.0078 14.4383C38.3913 14.0439 37.9384 13.9837 37.0462 14.4528L35.7397 15.1397L37.2009 17.8963ZM33.9807 11.821L35.2733 14.2596L37.8118 12.925C38.7678 12.4224 39.0715 11.8425 38.5994 10.9518C38.1386 10.0824 37.4752 9.98383 36.5192 10.4864L33.9807 11.821Z" fill="#1E1E1E"/>
<path d="M48.318 13.2109L47.0927 13.5948L45.0217 7.03808L41.9986 7.98516L41.6481 6.87521L48.9081 4.60077L49.2587 5.71072L46.247 6.65422L48.318 13.2109Z" fill="#1E1E1E"/>
<path d="M54.8651 11.7428L53.5805 11.9144L52.5074 3.94636L58.8471 3.09948L59.0024 4.25307L53.9473 4.92834L54.2805 7.40201L59.1572 6.75057L59.3109 7.89226L54.4342 8.5437L54.8651 11.7428Z" fill="#1E1E1E"/>
<path d="M65.8395 11.3229C63.3224 11.2034 61.7342 9.49422 61.8541 6.98909C61.974 4.48396 63.7181 2.9329 66.2353 3.05236C68.7764 3.17297 70.3525 4.88161 70.2327 7.38675C70.1128 9.89188 68.3807 11.4435 65.8395 11.3229ZM65.8992 10.0763C67.805 10.1668 68.7704 9.3236 68.8662 7.32189C68.962 5.32018 68.0821 4.37741 66.1762 4.28695C64.2703 4.1965 63.3164 5.05223 63.2206 7.05394C63.1248 9.05565 63.9933 9.98587 65.8992 10.0763Z" fill="#1E1E1E"/>
<path d="M78.3801 13.3139L72.2894 11.9027L74.1183 4.0735L75.3808 4.36602L73.8168 11.0618L78.6449 12.1804L78.3801 13.3139Z" fill="#1E1E1E"/>
<path d="M81.6683 14.5907L80.4556 14.1335L83.3124 6.61817L84.5251 7.07539L81.6683 14.5907Z" fill="#1E1E1E"/>
<path d="M88.8086 18.1123C86.6124 16.8765 85.9641 14.639 87.2016 12.4576C88.4391 10.2762 90.6981 9.67466 92.8943 10.9104C95.1114 12.158 95.7493 14.3896 94.5118 16.571C93.2742 18.7524 91.0257 19.3598 88.8086 18.1123ZM89.4244 17.0268C91.0873 17.9624 92.3307 17.6432 93.3195 15.9001C94.3084 14.1571 93.9472 12.9212 92.2844 11.9855C90.6216 11.0498 89.3827 11.3854 88.3938 13.1284C87.405 14.8715 87.7616 16.0911 89.4244 17.0268Z" fill="#1E1E1E"/>
<path d="M106.184 29.0421L103.735 26.1151L104.585 25.4102L107.034 28.3371L106.184 29.0421Z" fill="#1E1E1E"/>
<path d="M111.323 43.8673L110.881 42.6491L118.445 39.9249L119.789 43.6245C120.399 45.3052 119.857 46.8013 118.175 47.4071C116.504 48.0089 115.115 47.2081 114.505 45.5274L113.604 43.046L111.323 43.8673ZM118.653 43.9061L117.792 41.5374L114.699 42.6516L115.559 45.0202C115.973 46.1595 116.615 46.5915 117.732 46.189C118.85 45.7864 119.066 45.0454 118.653 43.9061Z" fill="#1E1E1E"/>
<path d="M114.196 54.9613C113.79 52.4743 115.132 50.5671 117.607 50.166C120.083 49.7649 121.963 51.15 122.369 53.6371C122.779 56.1478 121.435 58.0431 118.96 58.4443C116.484 58.8454 114.606 57.4721 114.196 54.9613ZM115.428 54.7617C115.735 56.6448 116.761 57.4147 118.739 57.0942C120.717 56.7737 121.457 55.7178 121.149 53.8348C120.842 51.9517 119.806 51.1956 117.828 51.5161C115.85 51.8366 115.12 52.8787 115.428 54.7617Z" fill="#1E1E1E"/>
<path d="M114.949 62.6319L114.987 61.3365L123.024 61.5703L122.901 65.7445C122.848 67.5677 121.951 68.6701 120.452 68.6265C119.12 68.5878 118.33 67.6884 118.291 66.1746L118.207 66.1722C118.02 66.791 117.652 67.0684 117.14 67.3416L114.774 68.6174L114.817 67.13L117.074 65.9111C117.72 65.5698 117.995 65.2056 118.024 64.198L118.068 62.7227L114.949 62.6319ZM121.822 62.8319L119.063 62.7516L118.979 65.6184C118.948 66.6979 119.304 67.2485 120.311 67.2778C121.295 67.3065 121.706 66.7782 121.738 65.6987L121.822 62.8319Z" fill="#1E1E1E"/>
<path d="M113.569 74.5926L113.838 73.337L120.563 74.7659L121.227 71.6681L122.365 71.91L120.772 79.3493L119.634 79.1074L120.295 76.0214L113.569 74.5926Z" fill="#1E1E1E"/>
<path d="M111.624 80.9882L112.108 79.7861L119.574 82.7696L117.184 88.7022L116.103 88.2703L118.009 83.5398L115.691 82.6136L113.852 87.1771L112.783 86.7496L114.621 82.1861L111.624 80.9882Z" fill="#1E1E1E"/>
<path d="M106.576 90.715C107.924 88.5858 110.198 88.0443 112.322 89.378C114.446 90.7117 114.936 92.9889 113.588 95.1181C112.227 97.2676 109.959 97.7989 107.835 96.4652C105.711 95.1315 105.215 92.8645 106.576 90.715ZM107.633 91.3786C106.612 92.9907 106.87 94.2437 108.567 95.3094C110.264 96.375 111.521 96.0729 112.541 94.4608C113.562 92.8487 113.287 91.5995 111.59 90.5339C109.893 89.4682 108.653 89.7665 107.633 91.3786Z" fill="#1E1E1E"/>
<path d="M98.6458 100.601L102.887 96.0074L108.816 101.437L107.937 102.39L102.866 97.7458L99.5043 101.387L98.6458 100.601Z" fill="#1E1E1E"/>
<path d="M95.9095 102.809L96.9074 101.982L102.062 108.152L101.064 108.979L95.9095 102.809Z" fill="#1E1E1E"/>
<path d="M89.31 107.254C91.4717 105.959 93.7464 106.498 95.0431 108.645C96.3399 110.792 95.7529 113.046 93.5912 114.341C91.4089 115.649 89.1445 115.103 87.8478 112.956C86.551 110.809 87.1278 108.561 89.31 107.254ZM89.9553 108.322C88.3186 109.303 87.9851 110.538 89.0213 112.253C90.0574 113.968 91.3154 114.264 92.9521 113.283C94.5888 112.303 94.9058 111.063 93.8697 109.348C92.8335 107.633 91.592 107.341 89.9553 108.322Z" fill="#1E1E1E"/>
<path d="M71.2088 116.911L74.9638 116.232L75.1619 117.318L71.4069 117.997L71.2088 116.911Z" fill="#1E1E1E"/>
</g>

<g id="logo">
<path fillRule="evenodd" clipRule="evenodd" d="M52.0153 34H35.4805V91H71.2906L70.9124 62.5051L70.909 62.4754C70.5111 58.344 67.2991 54.6025 63.1642 54.2041L61.364 54.0308C60.7612 53.9728 60.7612 53.0934 61.364 53.0354L63.1642 52.8621C67.2991 52.4644 70.5709 49.1941 70.9689 45.0621L71.1426 43.2571C71.2007 42.6543 72.08 42.6543 72.138 43.2571L72.3118 45.0621C72.7097 49.1934 75.9815 52.4637 80.1164 52.8621L81.9166 53.0354C82.5194 53.0934 82.5194 53.9728 81.9166 54.0308L80.1164 54.2041C75.9815 54.6018 72.7281 58.3433 72.3302 62.4754L72.3275 62.5H72.3296V91H90.1539V34H53.631L53.4326 81.0605H52.0153V34Z" fill="#1E1E1E"/>
</g>
</svg>
  </>
}


