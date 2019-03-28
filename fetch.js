const key = '5c6ecf1828ca2e129e8696e8'
const fname = '' // TODO: must fill!
const del = async id => {
  fetch(`https://homework-63c7.restdb.io/media/${id}`, { headers: { 'x-apikey': key }, method: "DELETE" })
}
(async _ => {
  resp = await fetch(`https://homework-63c7.restdb.io/media/${fname}/meta`, { headers: { 'x-apikey': key } })
  resp = await resp.json()
  for (var i of resp)
    del(i['_id'])
})()