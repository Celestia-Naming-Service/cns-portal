import { NextApiRequest, NextApiResponse } from "next";
import { Buffer } from "buffer";

async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { namespaceId, data, gasLimit } = req.body;
    await postData(namespaceId, data, gasLimit);
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ success: false });
  }
};

async function getData(namespace_id: string, height: number): Promise<void> {
  const response = await fetch(
    `http://localhost:26659/namespaced_data/${namespace_id}/height/${height}`
  );
  const data = await response.json();
  console.log(data);
}

function parse(data: string): string {
  const decodedData = Buffer.from(data, "base64").toString("utf-8");
  return decodedData;
}

async function postData(
  namespaceId: string,
  data: string,
  gasLimit: number = 70000
): Promise<void> {
  const encodedData = Buffer.from(data, "utf-8").toString("hex");
  const response = await fetch(`http://localhost:26659/submit_pfd`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      namespace_id: namespaceId,
      data: encodedData,
      gas_limit: gasLimit,
    }),
  });
  const json = await response.json();
  console.log(json);
  console.log(await getData(namespaceId, json.height));
}
