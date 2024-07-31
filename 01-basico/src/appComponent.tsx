import { FC } from "react";
import logo from "./content/logo.png";
import * as classes from "./index.scss";

export const App: FC = () => {
  return (
    <>
      <img src={logo} className={classes.logo} alt='lemoncode logo' />
      <svg
        width='458'
        height='510'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M114.48 71.69c-3.22 3-3.38 5.16-3.8 9.22 0-.21-5.83-3.93-6.42-4.44-1.06 6.12-.94 12.26-.84 18.44a19.551 19.551 0 0 1-6.17-5c1.85 2.09-1.39 16-1.54 19.15-2.49-1.77-5.24-2.49-6.71-5.52.49 1-2 9.25-2.2 10.89-.52 3.45-1.31 6.7-1.08 10.26a9.717 9.717 0 0 0-6.57-3.48l.27 26.69c0-3.22-4.31-9.08-5.23-12.57-5.76-21.7 1.62-46.59 16.21-63.63 3.85-4.49 8.39-8.17 11.92-13 1.16-1.59-.68.68.87-.53a76.56 76.56 0 0 0-17.5 7.5l.25-4.91a254.861 254.861 0 0 1-13 12.74l-.25-7-14.47 12.89-3.49-5.93a61.489 61.489 0 0 0-16.4 15c-1.49 2-1.61 3.06-3.2 4.95a68.163 68.163 0 0 0-.68-10.32 38.09 38.09 0 0 0-11.47 14.55l-.27-6.81a2.6 2.6 0 0 0-.25-1.22c-.69-1.17-2.46-.62-3.61.09A86.663 86.663 0 0 0 0 105.34c2-2.19 3-7.18 4.39-9.9a95.708 95.708 0 0 1 6.4-10.5A144.747 144.747 0 0 1 26.71 66.2c10.21-10.37 21.48-16.8 35.77-19.42 15-2.75 30.33-1.49 45.38-.16-3.91-2.91-9.91-6.77-14.12-9.22l5.14-1.62a81.725 81.725 0 0 0-19.72-5 7.26 7.26 0 0 0 4.17-5.07 55.91 55.91 0 0 0-17.73-2.18 10.53 10.53 0 0 1 4-5.07l-14.52-1.18a33.247 33.247 0 0 0 4.74-5.34 47.358 47.358 0 0 0-15.55-2c2.89-2.42 6.86-3 10.62-3.29 12.17-1 24.8-.31 35.91 4.75 11.11 5.06 20.47 15.1 22.24 27.18a2.26 2.26 0 0 0 .58 1.47c.41.35 1.23.16 1.23-.38 1 2.25.36 2.55 1.32 4.8-1.42-3.3 3.06-12.15 4.38-15.19 2.25-5.19 4.41-8.94 8.73-12.64a68.259 68.259 0 0 1 29-14.13 108.06 108.06 0 0 1 39.67-1.24c-3.34 1.81-6.89 2.05-10.37 3.49 1.38-.57 4.15 1 5 1.93-4.61 2.74-11.52 3.92-16.8 4.8a14.389 14.389 0 0 1 5.62 2.33c-1.95-1.35-7.2.91-9.34 1.27-5.12.85-10.26 1.37-15.35 2.42a35.317 35.317 0 0 1 8.09 2.1 50.167 50.167 0 0 0-15.71 4.33c2.79.223 5.526.899 8.1 2-7.45 1.57-14.79 3.68-22.08 5.86l7.38 1.58a39.075 39.075 0 0 0-17.73 12.66c7-.39 13.81-.21 20.81-.6 12.9-.73 26.64.47 38.83 5.61 14 5.9 21.49 16.31 30.64 27.65l17.55 21.74a85.455 85.455 0 0 1-19.89-12.15l.48 6.51a121.254 121.254 0 0 1-17.82-12l1.66 4.69a95.168 95.168 0 0 1-19.21-13.91l-1.62 5.57a76.367 76.367 0 0 1-15.95-16.59c-.253 2.487.027 4.999.82 7.37L147.3 58.29l1.06 5.73-20.8-6.93c4.05 1.35 9.41 8.55 12.47 11.57a82.287 82.287 0 0 1 21.86 37.28c3.4 13 4.77 30.94-5.71 41.14.25-10.58 1.54-21.6-.85-32a18.461 18.461 0 0 0-3.51 9.21c-5.19-3-4.34-12.49-5-17.59-.95-.66-1.56.62-2.54 1.22l-4.42 2.71a90.186 90.186 0 0 0-1.93-20.92l-3.74 5.13c-1.69-4.47-2.13-9.5-3.38-14.12a4.648 4.648 0 0 1-2.25 3.81 26.317 26.317 0 0 0-5.87-8.76c2.11 2.08.36 17.24.47 20.57.233 7.186.567 14.366 1 21.54.86 14.68 2.15 29.34 4.08 43.92 3.17 23.91 7.53 47.66 17.45 69.8 7.93 17.7 17 34.87 26.23 51.92 5.59 10.32 13 22.7 25 26.31 6.41 1.94 13.24 1.86 19.94 1.78l20.58-.27c3.76 0 9.74 1 13.07-.84a9.816 9.816 0 0 0 2.36-2c5.83-6.26 9.55-13.43 14.15-20.57 14.47-22.73 22.69-48.76 28.17-74.99 3-14.09 5.21-28.34 6.85-42.64 1.57-13.72.94-27.47 1.83-41.25a21.002 21.002 0 0 0-2.13 4.6l-3.75-3.21a41.062 41.062 0 0 0-1.71 12.05l-3-3a32.245 32.245 0 0 0-2.8 15.19l-5-3.76a43.892 43.892 0 0 0-2.31 15.73 9.003 9.003 0 0 1-3.94-4.38 47.606 47.606 0 0 0-2.22 20.92 14.153 14.153 0 0 1-5.37-7.75c-1.64-5.59-1.05-11.39-.42-17.07.72-6.41 3.23-12.5 6.13-18.21a128.598 128.598 0 0 1 18.13-26.76c-3.53 1.59-7.88 3.35-11.41 4.93a18.576 18.576 0 0 1-.19-4.24 41.646 41.646 0 0 0-10.2 9.84c0-1.6.31-3.53-.09-5a23.628 23.628 0 0 0-3.15 2.49c-3.5 2.9-7.05 5.86-9.62 9.61-.39-1.79-.39-3.86-1-5.54-5.8 2.8-11.18 9.72-15 14.81-.12-2.37-.14-4.79-.4-7.14-4.42 2.7-7.84 7.82-11.31 11.67a25.453 25.453 0 0 0-1.18-6.56 58 58 0 0 0-16.36 13c4.15-11.15 11.91-19.9 20.32-28.32 3.18-3.18 5-5.26 8.85-7.53a90.594 90.594 0 0 1 56.67-11.48 36.449 36.449 0 0 0-12.79-7.63 11.368 11.368 0 0 1 4.48-1.09 93.815 93.815 0 0 0-16.1-3.5 6.36 6.36 0 0 0 4.14-3.66 57.836 57.836 0 0 0-12.66-3.56 8.89 8.89 0 0 1 3.87-3.53 38.827 38.827 0 0 0-13.7-2l4.29-4a35.85 35.85 0 0 0-15.49-2.44c2.09-2.37 5.57-2.8 8.72-3 9.63-.52 19.49 0 28.51 3.45 9.02 3.45 17.16 10 20.87 18.87a32.524 32.524 0 0 0 2.19 4.91c.29.46.41.3.61.81l4.95-8.45a74.576 74.576 0 0 1 4.2-6.62c6.46-8.76 16.65-14.36 27.31-16.54 10.66-2.18 21.79-1.16 32.36 1.48a77.467 77.467 0 0 0-11.61 4.11 8.363 8.363 0 0 0 2.49 1.23l-15.34 5.66a18.606 18.606 0 0 1 4.79 2.36l-12.48 1.68a30.205 30.205 0 0 0 5.29 3.57 77.908 77.908 0 0 0-14.34 2.51 9.058 9.058 0 0 1 4.48 3.22 52.721 52.721 0 0 0-16.65 3.69 17.16 17.16 0 0 0 5.15.75c.42.84-.74 1.55-1.64 1.82a27.989 27.989 0 0 0-11.19 6.48 73.996 73.996 0 0 1 24-2.64 43.878 43.878 0 0 1 22.78 7.2 72.555 72.555 0 0 1 6.58 5.32l8.54 7.48c2.61 2.29 5.23 4.58 7.69 7 2.19 2.18 4.25 4.49 6.3 6.8l11 12.38c-7.36-3.4-14.46-6.53-21-11.38l1.89 5.73a43.02 43.02 0 0 1-12.37-10 21.696 21.696 0 0 0 1.55 4.93 59 59 0 0 1-15.88-14c.352 2.318.378 4.674.08 7a84.722 84.722 0 0 1-17.45-13.81l1.8 5c-4-2.179-7.62-4.993-10.72-8.33.41 1.27.55 2.612.41 3.94l-16.91-4.84a76.32 76.32 0 0 1 25 33.08c2.31 5.94 4.58 13 4.75 19.42.17 6.27-2.65 13.4-5.65 18.78.87-3.38-.27-6.8-1-10.1l-2.57-12.25a12.784 12.784 0 0 0-2.36 4.52c-.59-5-.67-9.92-1.64-14.83l-4.61 5.76a112 112 0 0 0-2.11-17.07l-2 4.54a57.899 57.899 0 0 0-3.77-15.67l-2.67 4.59a30.104 30.104 0 0 0-5.87-10.9c.78.93-.21 2.58-.2 3.64 0 1.57.1 3.07 0 4.68-.7 9.17-.61 18.45-.83 27.65-.26 11-.48 22.09-1.4 33.09-.127 1.546-.27 3.093-.43 4.64-2 19.52-6.9 38.57-11.26 57.66a176.34 176.34 0 0 1-12.55 35.78c-3.05 6.41-11.67 18.7-8 25.93a2.684 2.684 0 0 0 2.64 1.83c6.49 0 14.12 3.08 20.25 4.86a302.562 302.562 0 0 1 50.65 20 312.467 312.467 0 0 1 56.59 36.28 157.3 157.3 0 0 1 27.3 28.08c8.38 11.2 15.2 22.61 22.44 34.66-3-5-10.4-9.59-14.95-13.15-18.42-14.44-41.37-21.82-63.92-26.9-12.2-2.75-24.64-4.59-37.18-4.39-12.74.2-24.94 3-37.43 5.29-31.12 5.82-62.28 12.78-94.1 12.73a351.392 351.392 0 0 1-79.86-9.32c-23.89-5.62-51.78-12-72.39-25.6a.071.071 0 0 1-.013-.04c0-.015.005-.029.013-.04 2.57-3.91 7.24-7.07 10.71-10.12 6.827-6 13.733-11.904 20.72-17.71 17.35-14.52 36.39-24.08 57.47-31.9 1.1-.41 15.54-4.54 15.6-4.95 2.16-13-6.47-26.09-11.68-37.54-11.3-24.84-23.21-49.13-26.34-76.5-.7-6.14-1.08-12.31-1.45-18.48-2.17-35.68-5.51-71-6.51-106.91'
          fill='#000'
        />
        <path
          d='M456.28 453.86c-14.18-12.51-30.23-22.74-46.89-31.7-9.4-5.06-19.06-9.74-29.27-12.86-23.13-7.08-48-5.85-71.91-2-23.91 3.85-47.32 10.3-71.3 13.49a363.177 363.177 0 0 1-81.83 1c-26.14-2.53-53.76-13.11-78.22-22.32-11.5-4.33-23.08-9.22-32.29-17.36 11.78 21.58 27.32 41.39 47.06 56 20.66 15.32 41.61 20.05 66.33 23.92 25.13 3.93 49.9-3.83 73.9-11.22 36.59-11.27 73.87-26.65 112.52-28 36.1-1.29 72.65 7.69 103.67 26.28 3.113 1.9 6.16 3.85 9.14 5.85'
          fill='#000'
        />
        <path
          d='M397.62 435.71c-45.12-14-94.5-2-137.24 18.06-8.25 3.88-16.36 8.06-24.67 11.81-61 27.54-134.22 17-183.42-29.83 16.13 19.75 33.66 41.7 55.67 55.06a132.828 132.828 0 0 0 72.89 18.94c19.31-.68 37.66-8.21 55.31-16.09a1095.897 1095.897 0 0 0 53.63-25.72c17.2-8.86 34.25-18.22 52.49-24.7 18.24-6.48 38-10 57-6.7'
          fill='#000'
        />
        <path
          d='M361.43 448.94c-19.1 6.19-35.69 19.63-55.5 22.88 21.9 8.25 46.43 3.24 68.82-3.58 21-6.39 41.53-13.71 63.66-14.36-25.36-6.94-51-13.32-76.98-4.94ZM417.03 278.38c22.18 0 40.16-17.98 40.16-40.16 0-22.18-17.98-40.16-40.16-40.16-22.18 0-40.16 17.98-40.16 40.16 0 22.18 17.98 40.16 40.16 40.16Z'
          fill='#000'
        />
      </svg>
    </>
  );
};
