import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// تفعيل إعدادات dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// برمجيات وسيطة (Middleware)
app.use(cors());
app.use(express.json());

// نقطة الفحص الأساسية (Route)
app.get('/', (req, res) => {
  res.json({ message: "Welcome to SoundVibe Backend API!" });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
