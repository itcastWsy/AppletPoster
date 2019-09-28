export const chooseImage = () => {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err);
      }
    });

  })
}
export const getImageInfo = (src) => {
  return new Promise((resolve, reject) => {
    wx.getImageInfo({
      src: src,
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err);
      }

    });

  })
}
export const canvasToTempFilePath = (params) => {
  return new Promise((resolve, reject) => {
    wx.canvasToTempFilePath({
      ...params,
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err);
      }
    });
  })
}
export const saveImageToPhotosAlbum = (filePath) => {
  return new Promise((resolve, reject) => {
    wx.saveImageToPhotosAlbum({
      filePath:filePath ,
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err);
      }
    });
      
  })
}