import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler:NextApiHandler = (req:NextApiRequest, res:NextApiResponse) => {
    const { url } = req.body;
    if(req.method === 'POST'){
        res.status(200).json({
            'message':"success",
            'url': url
        })
        
    }
}

export default handler