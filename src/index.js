import { PORT } from '../config/config.js';
import app from './app.js';


app.listen(PORT, "0.0.0.0");
console.log(`Server running on port ${PORT}`);