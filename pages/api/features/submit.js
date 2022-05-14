export default function handler(req, res) {
  const { formData } = req.body
  console.log(formData)
  res.status(200).json({ data: formData })
}
