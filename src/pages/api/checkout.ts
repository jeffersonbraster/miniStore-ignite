import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { price_id } = req.body;

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  if (!price_id) {
    return res.status(400).json({ error: "Missing price_id" });
  }

  const successUrl = process.env.NEXT_URL + "/success";
  const cancelUrl = process.env.NEXT_URL + "/";

  const checkout = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: price_id,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return res.status(201).json({ checkoutUrl: checkout.url });
}
