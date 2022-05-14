const fakeData = {
  features: [
    {
      id: '1',
      name: 'Data Onboarding',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    },
    {
      id: '2',
      name: 'Access Provisioning',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    },
    {
      id: '3',
      name: 'Search For Data',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    },
    {
      id: '4',
      name: 'Consume Data',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    },
  ],
  dataSources: [
    {
      id: '1',
      icon: 'folder',
      name: 'NAS',
      description: 'Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.',
    },
    {
      id: '2',
      icon: 'repeat',
      name: 'Denodo',
      description: 'Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.',
    },
    {
      id: '3',
      icon: 'database',
      name: 'Other JDBC Sources',
      description: 'Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!',
    },
  ],
  sections: [
    {
      title: 'source system',
      items: [
        { id: 1, name: 'DBMS' },
        { id: 2, name: 'DDB' },
        { id: 3, name: 'GI' },
        { id: 4, name: 'LTC' },
        { id: 5, name: 'RDH' },
        { id: 6, name: 'ref_data' },
      ],
    },
    {
      title: 'database',
      items: [
        { id: 1, name: 'Case360' },
        { id: 2, name: 'CITRON' },
        { id: 3, name: 'CITRON2' },
        { id: 4, name: 'INSPRO_RDB' },
      ]
    },
    {
      title: 'folder',
      items: [
        { id: 1, name: 'Folder 1' },
        { id: 2, name: 'Folder 2' },
        { id: 3, name: 'Folder 3' },
        { id: 4, name: 'Folder 4' },
      ],
    },
    {
      title: 'dump file',
      items: [
        { id: 1, name: 'File 1' },
        { id: 2, name: 'File 2' },
        { id: 3, name: 'File 3' },
        { id: 4, name: 'File 4' },
        { id: 5, name: 'File 5' },
        { id: 6, name: 'File 6' },
      ],
    },
  ]
}

export default fakeData
