const firebase = require("firebase-app");
//? The Firebase App (firebase.app()) is always required and must be the first thing you import.
//? It contains the core firebase client (the firebase namespace) and should be used to
//? initialize and configure Firebase services.
const {
  getStorage,
  uploadBytes,
  ref,
  getDownloadURL,
} = require("firebase/storage");
//? The Firebase Storage SDK to upload files.
const config = require("../../config").api.firebase;

const firebaseApp = firebase.initializeApp(config);

const storage = getStorage(firebaseApp);

//! Peliculas
const addToFirebaseMovieVideo = async () => {
  const movieRef = ref(
    storage,
    `movie-videos/${Date.now()}-${file.originalname}`
  );
  await uploadBytes(movieRef, file.buffer);
  const movieUrl = await getDownloadURL(movieRef);
  return movieUrl;
};

//! Cover de peliculas
const addToFirebaseMovieCover = async () => {
  const movieCoverRef = ref(
    storage,
    `movie-covers/${Date.now()}-${file.originalname}`
  );
  await uploadBytes(movieCoverRef, file.buffer);
  const movieCoverUrl = await getDownloadURL(movieCoverRef);
  return movieCoverUrl;
};

//! Series - Nombre - Temporada - Cover
//! Cover de series - Temporada - Capitulo
