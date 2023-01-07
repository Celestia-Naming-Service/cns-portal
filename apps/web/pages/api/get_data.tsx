export default async function getData(
  namespace_id: string,
  height: number
): Promise<void> {
  const response = await fetch(
    `http://localhost:26659/namespaced_data/${namespace_id}/height/${height}`
  );
  const data = await response.json();
  console.log(data);
}

getData("756f60cbe7bf5401", 27525);
