import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from "@react-native-firebase/firestore";
import app from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";

// const app = firebase.app();

const SignIn = async (email, password) => {
  const res = await auth()
    .signInWithEmailAndPassword(email, password)
    .then(async (res) => {
      await AsyncStorage.setItem("email_user", email);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  return res;
};
const SignUp = async (data) => {
  const res = await auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((res) => {
      firestore()
        .collection("user")
        .add(data)
        .then((res) => res)
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
const searchFirebase = async (key) => {
  let data = [];
  await firestore()
    .collection("movies")
    .where("title", "==", key)
    .get()
    .then((res) => {
      res.forEach((element) => {
        data.push(element.data());
      });
    })
    .catch((err) => console.log(err));
  return data;
};

const getMoviesHome = async () => {
  const data = [];

  await firestore()
    .collection("categories")
    .get()
    .then((res) => {
      res.forEach(async (doc) => {
        await data.push(doc.data());
      });
    })
    .catch((res) => console.log(res));
  return data;
};
const getMoviesCategory = async (id) => {
  const data = [];

  await firestore()
    .collection("movies")
    .where("category", "==", id)
    .get()
    .then((res) => {
      res.forEach(async (doc) => {
        await data.push(doc.data());
      });
    })
    .catch((res) => console.log(res));
  return data;
};

const postComment = async (data) => {
  await firestore().collection("comment").add({
    id: data.id,
    user: data.emailUser,
    comment: data.comment,
    rating: data.rating,
  });
  await firestore()
    .collection("movies")
    .where("id", "==", data.id)
    .get()
    .then((res) => {
      res.forEach((element) => {
        const dataRating = element.data().rating;

        firestore()
          .collection("movies")
          .doc(element.id)
          .update({
            rating: firestore.FieldValue.arrayUnion(data.rating),
          });
      });
    });
};
const getUser = async () => {
  const data = [];
  const email = await AsyncStorage.getItem("email");
  await firestore()
    .collection("user")
    .where("email", "==", email)
    .get()
    .then((res) => {
      return res.forEach((element) => {
        data.push(element.data());
      });
    });
  return data;
};
const getCarousel = () => {
  const data = [];
  firestore()
    .collection("carousel")
    .get()
    .then((res) => {
      res.forEach(async(element) => {
        data.push(element.data().image)
      });
    })
    .catch((err) => console.log(err));
  return data;
};

const getComment = async (id) => {
  let comment = [];
  let data = [];
  const getCommentar = await firestore()
    .collection("comment")
    .where("id", "==", id)
    .get()
    .then((res) => {
      res.forEach((element) => {
        comment.push(element.data());
      });
    })
    .catch((err) => console.log(err));

  return comment;
};

export {
  SignIn,
  getMoviesHome,
  SignUp,
  postComment,
  getComment,
  searchFirebase,
  getMoviesCategory,
  getUser,
  getCarousel,
};
