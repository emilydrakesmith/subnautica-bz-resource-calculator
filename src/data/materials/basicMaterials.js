const basicMaterials = {
    enameledGlass: {
        name: 'Enameled Glass',
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
    fiberMesh: {
        name: 'Fiber Mesh',
        ingredients: [
            {
                name: 'Creepvine Sample',
                quantity: 2,
                isBase: true,
                appId: 'creepvineSample'
            }
        ]
    },
    glass: {
        name: 'Glass',
        ingredients: [
            {
                name: 'Quartz',
                quantity: 2,
                isBase: true,
                appId: 'quartz'
            }
        ]
    },
    lubricant: {
        name: 'Lubricant',
        ingredients: [
            {
                name: 'Creepvine Seed Cluster',
                quantity: 1,
                isBase: true,
                appId: 'creepvineSeedCluster'
            }
        ]
    },
    plasteelIngot: {
        name: 'Plasteel Ingot',
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
    siliconeRubber: {
        name: 'Silicone Rubber',
        ingredients: [
            {
                name: 'Creepvine Seed Cluster',
                quantity: 1,
                isBase: true,
                appId: 'creepvineSeedCluster'
            }
        ]
    },
    titaniumIngot: {
        name: 'Titanium Ingot',
        ingredients: [
            {
                name: 'Titanium',
                quantity: 5,
                isBase: true,
                appId: 'titanium'
            }
        ]
    }
}

export default basicMaterials;