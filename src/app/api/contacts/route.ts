import { mockData } from "./_mock/data";

export async function GET() {
  return Response.json(mockData);
}

export const dynamic = "force-static";
