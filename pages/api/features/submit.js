export default function handler(req, res) {
  const formData = req.body.replace(/------\w+/g, '').replace(/\r\n/g, '').split('Content-Disposition: form-data; name=')
  const params = {}
  formData.forEach((data) => {
    if (data && data.split('\"').length > 2) {
      params[data.split('\"')[1]] = data.split('\"')[2].replace('--', '')
    }
  })
  console.log(params)
  res.status(200).json({ data: params })
}
