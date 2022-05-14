import fakeData from '../../../../../data/fakeData'

export default function handler(req, res) {
  res.status(200).json({ data: [fakeData.sections[0], fakeData.sections[1], fakeData.sections[2]] })
}
