import mongoose from 'mongoose'; // npm i mongoose

async function connectDB() {
  /* regarde si on est déjà connecté */
  if (mongoose.connection.readyState >= 1)
    return;

  /* connection à notre base de données */
  try{
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(con => console.log("Connected to database"));
  }catch(e){
      console.log('erreur ', e);
  }
}
export default connectDB;
