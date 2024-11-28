import app from "./src/config/server.js";
import './src/config/database.js'

const PORT = app.get("port");

app.listen(PORT, () => {
  console.log(`Servidor activo en puerto ${PORT}`);
});
