function saveData(key,value){

  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
}

function loadData(key,defaultValue){

  const data=
    localStorage.getItem(key);

  if(!data) return defaultValue;

  return JSON.parse(data);
}