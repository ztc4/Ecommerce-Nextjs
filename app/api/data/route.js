import { NextResponse, NextRequest } from "next/server";
import data from "./data";
import { request } from "express";


export async function GET(request) {
    
  
    return NextResponse.json(data)
    
}

