import { getDataFromAuth } from "@/helpers/getDataFromAuth";
import { NextResponse } from "next/server";
import User from "@/models/userModels";
import { connect } from "@/db/dbConfig";

connect();

export async function GET(request) {
  try {
    const userID = await getDataFromAuth(request);
    console.log(userID);
    const user = await User.findOne({ _id: userID }).select("-password");
    return NextResponse.json({ data: user, status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
