import api from '@/api';

const dataURItoBlob = (base64Data) => {
  const bytes = window.atob(base64Data.split(',')[1]);
  const ab = new ArrayBuffer(bytes.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], {
    type: 'image/png',
  });
};
const compressImage = (file, rename, callBack) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    const img = new Image();
    img.src = e.target.result;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const originWidth = img.width;
      const originHeight = img.height;
      const maxWidth = 300;
      const maxHeight = 300;
      if (originWidth > maxWidth || originHeight > maxHeight) {
        if (originWidth / originHeight > maxWidth / maxHeight) {
          canvas.width = maxWidth;
          canvas.height = Math.round(maxWidth * (originHeight / originWidth));
        } else {
          canvas.height = maxHeight;
          canvas.width = Math.round(maxHeight * (originWidth / originHeight));
        }
      }
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
      const base64Data = canvas.toDataURL('image/png', 0.8);
      const blob = dataURItoBlob(base64Data);
      const form = new FormData();
      form.append('file', blob, rename);
      api.uploadPhoto(form).then((res) => {
        callBack(res);
      });
    };
  };
};

export default {
  compressImage,
};
