import { NextResponse, NextRequest } from "next/server";
import data from "./data";



export async function GET(request) {
    
  
    return NextResponse.json(data)
    
}

