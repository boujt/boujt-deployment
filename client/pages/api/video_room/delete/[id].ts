import axios from "axios";

/*
 *** Deletes specifik room, if exists
 */
export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "DELETE") {
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
      },
    };

    const dailyRes = await fetch(
      `https://api.daily.co/v1/rooms/${id}`,
      options
    );

    const response = await dailyRes.json();
    if (response.error) {
      return res.status(404).json(response.error);
    }

    return res.status(204).json(response);
  }

  return res.status(401);
}
