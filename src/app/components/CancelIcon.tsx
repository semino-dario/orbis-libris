import styles from '../page.module.scss'
import { useArticle } from './ArticleContext';

export default function CancelIcon({onClick}: {onClick: () => void})  {
     
    const articleContext = useArticle();
    const lightMode = articleContext ? articleContext.lightMode : false;
  
    return(
        <svg className={`${styles.shareIcon} ${styles.cancelShare} ${styles.svg} ${lightMode ? styles.svgLightMode : styles.svgDarktMode}`}
         onClick={onClick} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  zoomAndPan="magnify" viewBox="-10 0 75 48"  preserveAspectRatio="xMidYMid meet" version="1.0"><g clip-path="url(#007698319f)"></g><g clip-path="url(#1bc3f61725)"><path className={styles.svgPath} fill="#ffffff" d="M 8.855469 9.015625 C 9.023438 9.390625 9.144531 9.773438 9.363281 10.117188 C 9.582031 10.464844 9.777344 10.8125 10.007812 11.140625 C 10.492188 11.847656 11.152344 12.539062 11.769531 13.125 C 13.019531 14.3125 14.34375 15.421875 15.667969 16.53125 C 18.355469 18.777344 21.125 20.917969 23.921875 23.019531 C 29.402344 27.140625 35.050781 31.027344 40.863281 34.679688 C 42.46875 35.6875 44.082031 36.675781 45.710938 37.644531 C 46.578125 38.160156 47.429688 38.585938 48.308594 39.019531 C 49.261719 39.492188 50.21875 39.820312 51.234375 39.34375 C 51.4375 39.226562 51.539062 39.054688 51.535156 38.816406 C 51.441406 37.882812 50.882812 37.210938 50.125 36.6875 C 49.414062 36.195312 48.75 35.707031 48.007812 35.265625 C 46.515625 34.386719 45.035156 33.492188 43.566406 32.578125 C 40.679688 30.789062 37.832031 28.9375 35.019531 27.03125 C 29.410156 23.21875 24.035156 19.164062 18.757812 14.960938 C 17.226562 13.738281 15.730469 12.46875 14.171875 11.277344 C 13.40625 10.6875 12.609375 10.140625 11.785156 9.632812 C 10.980469 9.136719 10.089844 8.84375 9.199219 8.570312 C 8.921875 8.484375 8.753906 8.785156 8.855469 9.015625 Z M 8.855469 9.015625 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#0ff1940bcd)"><path className={styles.svgPath} fill="#ffffff" d="M 47.484375 8.101562 C 46.648438 8.222656 45.960938 8.65625 45.238281 9.070312 C 44.472656 9.511719 43.679688 9.902344 42.972656 10.433594 C 41.554688 11.496094 40.152344 12.574219 38.769531 13.671875 C 36.046875 15.820312 33.363281 18.015625 30.667969 20.199219 C 25.34375 24.507812 19.9375 28.75 14.75 33.226562 C 11.84375 35.75 9.113281 38.445312 6.554688 41.316406 C 6.246094 41.660156 6.636719 42.214844 7.058594 41.96875 C 8.582031 41.085938 10.125 40.191406 11.566406 39.191406 C 12.964844 38.222656 14.40625 37.304688 15.75 36.273438 C 18.523438 34.148438 21.234375 31.953125 23.941406 29.753906 C 29.261719 25.425781 34.609375 21.128906 39.878906 16.742188 C 41.359375 15.511719 42.832031 14.269531 44.273438 12.996094 C 45.015625 12.328125 45.707031 11.613281 46.347656 10.847656 C 46.96875 10.121094 47.625 9.488281 47.960938 8.570312 C 48.066406 8.265625 47.746094 8.058594 47.488281 8.097656 Z M 47.484375 8.101562 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
    )
}