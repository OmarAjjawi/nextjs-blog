import axios from "axios";

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '4mb' 
      }
  }
}

async function handler(req, res) {
  if (req.method === "POST") {
    const formData = new FormData(req.body);
    await axios.post("http://127.0.0.1:8000/api/products", formData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data; boundary=${req.body._boundary}'
      }
    }).then(response => {
        res.status(201).json({message: 'product inserted'});
    });

    
  }
}

export default handler;
