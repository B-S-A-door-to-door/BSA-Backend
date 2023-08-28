# API DOCUMENTATION FOR USERS

### Get all users endpoint (GET REQUEST: base_URL/api/bsa/admin/getAllUsers)

- sample output
```bash
{
    "status": "success",
    "message": "Successfully retrieved users",
    "results": 2,
    "data": {
        "result": [
            {
                "_id": "64d8126e5c92545cae415929",
                "fullname": "Yeboah Andrews",
                "username": "andyYeboah",
                "contact": "0247668944",
                "isAdmin": false,
                "dateOfBirth": "2023-08-12T23:14:15.266Z",
                "createdAt": "2023-08-12T23:14:54.490Z",
                "updatedAt": "2023-08-12T23:14:54.490Z",
                "__v": 0
            },
            {
                "_id": "64db49c86fee737b14733e77",
                "fullname": "Jerome Akumasi",
                "username": "Jerome23",
                "contact": "0247558944",
                "isAdmin": false,
                "dateOfBirth": "2023-08-12T23:14:15.266Z",
                "createdAt": "2023-08-15T09:47:52.262Z",
                "updatedAt": "2023-08-15T09:47:52.262Z",
                "__v": 0
            }
        ]
    }
}
```

### Get UserDetails Endpoint (GET REQUEST: base_URL/api/bsa/getUser/:username)

-Sample output

```bash
{
    "status": "success",
    "message": "Successfully retrieved user details",
    "data": {
        "result": [
            {
                "_id": "64db49c86fee737b14733e77",
                "fullname": "Jerome Akumasi",
                "username": "Jerome23",
                "contact": "0247558944",
                "isAdmin": false,
                "dateOfBirth": "2023-08-12T23:14:15.266Z",
                "createdAt": "2023-08-15T09:47:52.262Z",
                "updatedAt": "2023-08-15T09:47:52.262Z",
                "__v": 0
            }
        ]
    }
}
```

### Update User Endpoint (PATCH REQUEST: base_URL/api/bsa/admin/updateUser/:username)

-sample body

```bash
{
    "fullname": "Jerome Akumasi",
    "username" : "Jerome23",
    "password" : "jerome1234",
}
```

### Delete User Endpoint (DELETE REQUEST: base_URL/api/bsa/admin/deleteUser/:username)
```bash
{
    "status": "success",
    "message": "User deleted successfully"
}
```

### Create new user Endpoint (POST REQUEST: base_URL/api/bsa/admin/signUp)

- sample body
```bash
{
    "fullname": "Jerome Akumasi",
    "username" : "Jerome23",
    "password" : "jerome1234",
    "contact" : "0247558944",
    "dateOfBirth" : "2023-08-12T23:14:15.266Z"
}
```

-sample output
```bash
{
    "status": "success",
    "message": "successfully added a new user",
    "data": {
        "user": {
            "fullname": "Clement zito",
            "username": "zito",
            "contact": "0247668344",
            "isAdmin": false,
            "orgId": "01",
            "invoices": [],
            "dateOfBirth": 1692876121003,
            "_id": "64e73d59d538f531a5125f38",
            "createdAt": "2023-08-24T11:22:01.018Z",
            "updatedAt": "2023-08-24T11:22:01.018Z",
            "__v": 0
        }
    }
}

```

### Update Admin Data endpoint (.....IN PROGRESS)
```bash
same as updating a user
```

###  User SignIn Endpoint (POST REQUEST: base_URL/api/bsa/signIn)

 -sample body
 ```bash
 {
    "username": "Jerome23",
    "password": "jerome1234"
}
```

-sample output
```bash
    {
    "status": "success",
    "message": "Successfully logged in",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTczMDQ5NjA0NTQ0NzFhMmMyOTM1NCIsIm9yZ0lkIjoiMDEiLCJ1c2VybmFtZSI6IkFuZHkiLCJpYXQiOjE2OTI4NzYxMzIsImV4cCI6MTcwMDY1MjEzMn0.yEOXdakHeLTbQLB-z831syk0W6UQNTJWgHL-TcrbWyc",
    "data": {
        "_id": "64e7304960454471a2c29354",
        "fullname": "Yeboah Andrews",
        "username": "Andy",
        "contact": "0247668344",
        "isAdmin": true,
        "orgId": "01",
        "invoices": [
            "64e732fffcd7bda42cd81ef0",
            "64e737a09b91d0e766005dad",
            "64e737b29b91d0e766005db5",
            "64e737c49b91d0e766005dbd",
            "64e737d39b91d0e766005dc5"
        ],
        "dateOfBirth": 1692872777193,
        "createdAt": "2023-08-24T10:26:17.220Z",
        "updatedAt": "2023-08-24T10:58:27.303Z",
        "__v": 5
    }
}

```

# API DOCUMENTATION FOR INVOICE

### Generate invoice endpoint (POST REQUEST: base_URL/api/bsa/generateInvoice)

-sample body

```bash
{
    "username" : "andyYeboah",
    "refNumber" : "002",
    "senderName" : "Yeboah Andrews",
    "senderContact" : "0247668944",
    "senderLocation" : "Manchester",
    "receiverName" : "Wilson Aballey",
    "receiverContact" : "0203232764",
    "receiverLocation" : "Accra, Ghana",
    "items" : [
        {
            "item" : "iphone 13 pro max",
            "description" : "A slightly used iphone 6s with no cracks",
            "quantity" : 2,
            "price" : 4000
        },
        {
            "item" : "Samsung Television",
            "description" : "Fresh in box",
            "quantity" : 1,
            "price" : 200
        }
    ]
}
```

-sample output 
```bash
{
    "status": "success",
    "message": "Successfully generated an invoice",
    "data": {
        "invoice": {
            "orgId": "01",
            "username": "Clement",
            "refNumber": "011",
            "senderName": "Yeboah Andrews",
            "senderContact": "0247668944",
            "senderLocation": "Manchester",
            "receiverName": "Wilson Aballey",
            "receiverContact": "0203232764",
            "receiverLocation": "Accra, Ghana",
            "items": [
                {
                    "item": "iphone 13 pro max",
                    "description": "A slightly used iphone 6s with no cracks",
                    "quantity": 2,
                    "price": 400,
                    "_id": "64e7387d9b91d0e766005df6"
                },
                {
                    "item": "Samsung Television",
                    "description": "Fresh in box",
                    "quantity": 1,
                    "price": 200,
                    "_id": "64e7387d9b91d0e766005df7"
                }
            ],
            "_id": "64e7387d9b91d0e766005df5",
            "createdAt": "2023-08-24T11:01:17.723Z",
            "updatedAt": "2023-08-24T11:01:17.723Z",
            "__v": 0
        }
    }
}
```

### Get all invoices endpoint (GET REQUEST: base_URL/api/bsa/admin/getAllInvoices)

-sample output

```bash
{
    "status": "success",
    "message": "Successfully retrieved invoices",
    "results": 12,
    "data": {
        "result": [
            {
                "_id": "64e7328b6927fa48c0bea57b",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "002",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e7328b6927fa48c0bea57c"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e7328b6927fa48c0bea57d"
                    }
                ],
                "createdAt": "2023-08-24T10:35:56.002Z",
                "updatedAt": "2023-08-24T10:35:56.002Z",
                "__v": 0
            },
            {
                "_id": "64e732fffcd7bda42cd81ef0",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "001",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e732fffcd7bda42cd81ef1"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e732fffcd7bda42cd81ef2"
                    }
                ],
                "createdAt": "2023-08-24T10:37:51.397Z",
                "updatedAt": "2023-08-24T10:37:51.397Z",
                "__v": 0
            },
            {
                "_id": "64e737a09b91d0e766005dad",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "002",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e737a09b91d0e766005dae"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e737a09b91d0e766005daf"
                    }
                ],
                "createdAt": "2023-08-24T10:57:36.042Z",
                "updatedAt": "2023-08-24T10:57:36.042Z",
                "__v": 0
            },
            {
                "_id": "64e737b29b91d0e766005db5",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "003",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e737b29b91d0e766005db6"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e737b29b91d0e766005db7"
                    }
                ],
                "createdAt": "2023-08-24T10:57:54.755Z",
                "updatedAt": "2023-08-24T10:57:54.755Z",
                "__v": 0
            },
            {
                "_id": "64e737c49b91d0e766005dbd",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "004",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e737c49b91d0e766005dbe"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e737c49b91d0e766005dbf"
                    }
                ],
                "createdAt": "2023-08-24T10:58:12.627Z",
                "updatedAt": "2023-08-24T10:58:12.627Z",
                "__v": 0
            },
            {
                "_id": "64e737d39b91d0e766005dc5",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "005",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e737d39b91d0e766005dc6"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e737d39b91d0e766005dc7"
                    }
                ],
                "createdAt": "2023-08-24T10:58:27.281Z",
                "updatedAt": "2023-08-24T10:58:27.281Z",
                "__v": 0
            },
            {
                "_id": "64e737e79b91d0e766005dcd",
                "orgId": "01",
                "username": "Jerome",
                "refNumber": "006",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e737e79b91d0e766005dce"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e737e79b91d0e766005dcf"
                    }
                ],
                "createdAt": "2023-08-24T10:58:47.678Z",
                "updatedAt": "2023-08-24T10:58:47.678Z",
                "__v": 0
            },
            {
                "_id": "64e737fb9b91d0e766005dd5",
                "orgId": "01",
                "username": "Jerome",
                "refNumber": "007",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e737fb9b91d0e766005dd6"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e737fb9b91d0e766005dd7"
                    }
                ],
                "createdAt": "2023-08-24T10:59:07.314Z",
                "updatedAt": "2023-08-24T10:59:07.314Z",
                "__v": 0
            },
            {
                "_id": "64e7383a9b91d0e766005ddd",
                "orgId": "01",
                "username": "Jerome",
                "refNumber": "008",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e7383a9b91d0e766005dde"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e7383a9b91d0e766005ddf"
                    }
                ],
                "createdAt": "2023-08-24T11:00:10.553Z",
                "updatedAt": "2023-08-24T11:00:10.553Z",
                "__v": 0
            },
            {
                "_id": "64e738519b91d0e766005de5",
                "orgId": "01",
                "username": "Wilson",
                "refNumber": "009",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e738519b91d0e766005de6"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e738519b91d0e766005de7"
                    }
                ],
                "createdAt": "2023-08-24T11:00:33.565Z",
                "updatedAt": "2023-08-24T11:00:33.565Z",
                "__v": 0
            },
            {
                "_id": "64e738639b91d0e766005ded",
                "orgId": "01",
                "username": "Wilson",
                "refNumber": "010",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e738639b91d0e766005dee"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e738639b91d0e766005def"
                    }
                ],
                "createdAt": "2023-08-24T11:00:51.607Z",
                "updatedAt": "2023-08-24T11:00:51.607Z",
                "__v": 0
            },
            {
                "_id": "64e7387d9b91d0e766005df5",
                "orgId": "01",
                "username": "Clement",
                "refNumber": "011",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e7387d9b91d0e766005df6"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e7387d9b91d0e766005df7"
                    }
                ],
                "createdAt": "2023-08-24T11:01:17.723Z",
                "updatedAt": "2023-08-24T11:01:17.723Z",
                "__v": 0
            }
        ]
    }
}
```

### Get invoice details enpoint (GET request : base_URL/api/bsa/getInvoiceDetails/:refNumber)

- Sample output

```bash
   {
    "status": "success",
    "message": "Successfully retrieved invoice details",
    "data": {
        "result": [
            {
                "_id": "64e7328b6927fa48c0bea57b",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "002",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e7328b6927fa48c0bea57c"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e7328b6927fa48c0bea57d"
                    }
                ],
                "createdAt": "2023-08-24T10:35:56.002Z",
                "updatedAt": "2023-08-24T10:35:56.002Z",
                "__v": 0
            },
            {
                "_id": "64e737a09b91d0e766005dad",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "002",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e737a09b91d0e766005dae"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e737a09b91d0e766005daf"
                    }
                ],
                "createdAt": "2023-08-24T10:57:36.042Z",
                "updatedAt": "2023-08-24T10:57:36.042Z",
                "__v": 0
            }
        ]
    }
}
```

### Get worker's invoice enpoint (GET request : base_URL/api/bsa/getWorkerInvoices/:username)

- Sample output

```bash
{
    "status": "success",
    "message": "Successfully retrieved Andy's invoice",
    "results": 6,
    "data": {
        "result": [
            {
                "_id": "64e7328b6927fa48c0bea57b",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "002",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e7328b6927fa48c0bea57c"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e7328b6927fa48c0bea57d"
                    }
                ],
                "createdAt": "2023-08-24T10:35:56.002Z",
                "updatedAt": "2023-08-24T10:35:56.002Z",
                "__v": 0
            },
            {
                "_id": "64e732fffcd7bda42cd81ef0",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "001",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e732fffcd7bda42cd81ef1"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e732fffcd7bda42cd81ef2"
                    }
                ],
                "createdAt": "2023-08-24T10:37:51.397Z",
                "updatedAt": "2023-08-24T10:37:51.397Z",
                "__v": 0
            },
            {
                "_id": "64e737a09b91d0e766005dad",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "002",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e737a09b91d0e766005dae"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e737a09b91d0e766005daf"
                    }
                ],
                "createdAt": "2023-08-24T10:57:36.042Z",
                "updatedAt": "2023-08-24T10:57:36.042Z",
                "__v": 0
            },
            {
                "_id": "64e737b29b91d0e766005db5",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "003",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e737b29b91d0e766005db6"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e737b29b91d0e766005db7"
                    }
                ],
                "createdAt": "2023-08-24T10:57:54.755Z",
                "updatedAt": "2023-08-24T10:57:54.755Z",
                "__v": 0
            },
            {
                "_id": "64e737c49b91d0e766005dbd",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "004",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e737c49b91d0e766005dbe"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e737c49b91d0e766005dbf"
                    }
                ],
                "createdAt": "2023-08-24T10:58:12.627Z",
                "updatedAt": "2023-08-24T10:58:12.627Z",
                "__v": 0
            },
            {
                "_id": "64e737d39b91d0e766005dc5",
                "orgId": "01",
                "username": "Andy",
                "refNumber": "005",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 13 pro max",
                        "description": "A slightly used iphone 6s with no cracks",
                        "quantity": 2,
                        "price": 400,
                        "_id": "64e737d39b91d0e766005dc6"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e737d39b91d0e766005dc7"
                    }
                ],
                "createdAt": "2023-08-24T10:58:27.281Z",
                "updatedAt": "2023-08-24T10:58:27.281Z",
                "__v": 0
            }
        ]
    }
}
```

# DASHBOARD API DOCUMENTATION

### Get dashboard data (GET request : base_URL/api/bsa/admin/dashboard)

- sample output

```bash
{
    "status": "success",
    "message": "Successfully dashboard data",
    "invoices": 12,
    "workers": 4,
    "topThreeWorkers": [
        {
            "_id": "64e7304960454471a2c29354",
            "fullname": "Yeboah Andrews",
            "username": "Andy",
            "contact": "0247668344",
            "isAdmin": true,
            "orgId": "01",
            "invoices": [
                "64e732fffcd7bda42cd81ef0",
                "64e737a09b91d0e766005dad",
                "64e737b29b91d0e766005db5",
                "64e737c49b91d0e766005dbd",
                "64e737d39b91d0e766005dc5"
            ],
            "dateOfBirth": 1692872777193,
            "createdAt": "2023-08-24T10:26:17.220Z",
            "updatedAt": "2023-08-24T10:58:27.303Z",
            "__v": 5
        },
        {
            "_id": "64e7348f00c44c6578978806",
            "fullname": "Jerome Akumasi",
            "username": "Jerome",
            "contact": "0247668344",
            "isAdmin": false,
            "orgId": "01",
            "invoices": [
                "64e737e79b91d0e766005dcd",
                "64e737fb9b91d0e766005dd5",
                "64e7383a9b91d0e766005ddd"
            ],
            "dateOfBirth": 1692873871744,
            "createdAt": "2023-08-24T10:44:31.770Z",
            "updatedAt": "2023-08-24T11:00:10.564Z",
            "__v": 3
        },
        {
            "_id": "64e7349f00c44c6578978808",
            "fullname": "Wilson Ab.",
            "username": "Wilson",
            "contact": "0247668344",
            "isAdmin": false,
            "orgId": "01",
            "invoices": [
                "64e738519b91d0e766005de5",
                "64e738639b91d0e766005ded"
            ],
            "dateOfBirth": 1692873887833,
            "createdAt": "2023-08-24T10:44:47.836Z",
            "updatedAt": "2023-08-24T11:00:51.615Z",
            "__v": 2
        }
    ]
}
```












