//if url = https://example.com/?name=Jonathan%20Smith&age=18
//to parse out the name and age parameters

let params = new URL(documnet.location).searchParams;
let name = params.get("name");
let age = parseInt(params.get("age"));
