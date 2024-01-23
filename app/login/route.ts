

export async function POST(email:string) {

  const res = await fetch('http://localhost:3333/professo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  });

  const data = await res.json();
	console.log(data)

  return data;
}