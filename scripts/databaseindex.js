var firebaseConfig = {
    apiKey: "AIzaSyBMMJiWV35g5OPgOyaG1qYpAKeDGyfoJhI",
    authDomain: "salao-d01d9.firebaseapp.com",
    databaseURL: "https://salao-d01d9.firebaseio.com",
    projectId: "salao-d01d9",
    storageBucket: "salao-d01d9.appspot.com",
    messagingSenderId: "490828123867",
    appId: "1:490828123867:web:a280ad6c9962f56cf406fe"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  function renderNews(){
    const content = document.getElementById("database")
    for(news of allnews){
        const caixa = document.createElement("div")
        caixa.style.borderRadius="5px"
        caixa.style.backgroundColor="rgb(235, 22, 235)"
        caixa.style.marginRight="30px"
        const title = document.createElement("h2")
        title.appendChild(document.createTextNode(news.title))
        const img = document.createElement("img")
        img.src=news.img
        const espaco = document.createElement("br")
        const description = document.createElement("h3")
        description.appendChild(document.createTextNode(news.description))
        content.appendChild(caixa)
        caixa.appendChild(title)
        caixa.appendChild(img)
        caixa.appendChild(description)
        caixa.appendChild(espaco)
        caixa.style.marginBottom="20px"
    }
  }
  
  
  async function readNews() {
      allnews = []
      const logNews = await db.collection("salao").get()
      for (doc of logNews.docs){
      allnews.push({
          id: doc.id,
          title: doc.data().title,
          img: doc.data(). img,
          description: doc.data(). description,
          
          })
      }
      renderNews()
}
readNews()