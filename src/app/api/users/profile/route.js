import { connect } from "mongoose";
import User from "@/models/userModels";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
  try {
    // I want My User Profile page to be accessible only if the user is logged in?
    const reqBody = await request.json();
    console.log(reqBody);
    console.log("reqBody");
  } catch (error) {
    console.log(error.message);
  }
}
