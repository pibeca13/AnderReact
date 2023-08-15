import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query, addDoc } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBxvJXNvsw-dq-qWLky3SmS3VOEXpbdM0A",
  authDomain: "react-ecomerce-92dc9.firebaseapp.com",
  projectId: "react-ecomerce-92dc9",
  storageBucket: "react-ecomerce-92dc9.appspot.com",
  messagingSenderId: "266889118711",
  appId: "1:266889118711:web:8483b4380db6405d2e24f2"
};


const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);


async function getData(){
  
const productsRef = collection (db, "products");
const documentsSnapshot = await getDocs(productsRef);
const documents = documentsSnapshot.docs
const docsData = documents.map((item) => {
  let productFullData = item.data();
  productFullData.id = item.id
  return productFullData;

});
return(docsData);
  
}

async function getProductData(id){  

    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
        return {...docSnapshot.data(), id: docSnapshot.id}
    } else {
        throw new Error("No econtramos ese producto")
    }  
    
}


async function getCategoryData(categoryId){
    const productsRef = collection (db, "products", );
    const q = query(productsRef, where("categoria", "==", categoryId))
    const documentsSnapshot = await getDocs(q);

const documents = documentsSnapshot.docs
const docsData = documents.map((item) => {
  let productFullData = item.data();
  productFullData.id = item.id
  return productFullData;

});
return(docsData);

}

async function createOrder(orderData){
    const collectionRef = collection(db, "orders")
    const docCreated = await addDoc(collectionRef, orderData)

    return(docCreated.id)

}


async function getOrder(id){
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return {...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");

  }

}

export {getData, getProductData, getCategoryData, createOrder, getOrder};
