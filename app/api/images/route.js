import { NextResponse } from "next/server";
export async function GET(req, res) {
    try {
      const response = await fetch('http://' + process.env.NEXT_PUBLIC_SOURCE)
      const imageBlob = await response.blob();
  
      // Set appropriate content type header for the response
      res.setHeader('Content-Type', 'image/jpeg'); // Adjust the content type if needed
  
      // Send the Blob as the response
      res.status(200).end(imageBlob);
    } catch (error) {
      console.error('Error fetching image from local server:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  }
  

// To handle a POST request to /api
export async function POST(request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
