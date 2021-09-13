const basicMaterials = [
    {
        name: 'Enameled Glass',
        appId: 'enameledGlass',
        ingredients: [
            {
                name: 'Glass',
                quantity: 1,
                isBase: false,
                appId: 'glass'
            },
            {
                name: 'Lead',
                quantity: 1,
                isBase: true,
                appId: 'lead'
            },
            {
                name: 'Diamond',
                quantity: 1,
                isBase: true,
                appId: 'diamond'
            }
        ]
    },
    {
        name: 'Fiber Mesh',
        appId: 'fiberMesh',
        ingredients: [
            {
                name: 'Creepvine Sample',
                quantity: 2,
                isBase: true,
                appId: 'creepvineSample'
            }
        ]
    },
    {
        name: 'Glass',
        appId: 'glass',
        ingredients: [
            {
                name: 'Quartz',
                quantity: 2,
                isBase: true,
                appId: 'quartz'
            }
        ]
    },
    {
        name: 'Lubricant',
        appId: 'lubricant',
        ingredients: [
            {
                name: 'Creepvine Seed Cluster',
                quantity: 1,
                isBase: true,
                appId: 'creepvineSeedCluster'
            }
        ]
    },
    {
        name: 'Plasteel Ingot',
        appId: 'plasteelIngot',
        ingredients: [
            {
                name: 'Titanium Ingot',
                quantity: 1,
                isBase: false,
                appId: 'titaniumIngot'
            },
            {
                name: 'Lithium',
                quantity: 2,
                isBase: true,
                appId: 'lithium'
            },
        ]
    },
    {
        name: 'Silicone Rubber',
        appId: 'siliconeRubber',
        ingredients: [
            {
                name: 'Creepvine Seed Cluster',
                quantity: 1,
                isBase: true,
                appId: 'creepvineSeedCluster'
            }
        ]
    },
    {
        name: 'Titanium Ingot',
        appId: 'titaniumIngot',
        ingredients: [
            {
                name: 'Titanium',
                quantity: 5,
                isBase: true,
                appId: 'titanium'
            }
        ]
    }
]

export default basicMaterials;