import axios from 'axios';
import { Buffer } from 'buffer';

const ipfsService = {
  async uploadToIPFS(fileUri) {
    const file = await fetch(fileUri);
    const blob = await file.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());

    const response = await axios.post('https://ipfs.infura.io:5001/api/v0/add', buffer, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.Hash;
  },
};

export default ipfsService;
