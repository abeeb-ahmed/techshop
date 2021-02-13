import express from "express";
import path from "path";
const router = express.Router();
import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cd) {
    cd(null, "uploads/");
  },
  filename(req, file, cd) {
    cd(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
function checkFileType(file, cd) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cd(null, true);
  } else {
    cd("Images only!");
  }
}
const upload = multer({
  storage,
  fileFilter: function (req, file, cd) {
    checkFileType(file, cd);
  },
});
router.post("/", upload.single("image"), (req, res) => {
  res.send(`${req.file.path}`);
});

export default router;
