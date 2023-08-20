# API DOCUMENTATION FOR USERS

### Get all users endpoint (GET REQUEST: base_URL/api/bsa/getAllUsers)

- sample output
```bash
{
    "status": "Success",
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
    "status": "Success",
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

### Update User Endpoint (PATCH REQUEST: base_URL/api/bsa/updateUser/:username)

-sample body

```bash
{
    "fullname": "Jerome Akumasi",
    "username" : "Jerome23",
    "password" : "jerome1234"
}
```

### Delete User Endpoint (DELETE REQUEST: base_URL/api/bsa/deleteUser/:username)


### Create new user Endpoint (POST REQUEST: base_URL/api/bsa/signUp)

- sample body
```bash
{
    "fullname": "Jerome Akumasi",
    "username" : "Jerome23",
    "password" : "jerome1234",
    "passwordConfirm": "jerome1234",
    "contact" : "0247558944",
    "dateOfBirth" : "2023-08-12T23:14:15.266Z"
}
```

### Update Admin Data endpoint (.....IN PROGRESS)


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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGI0OWM4NmZlZTczN2IxNDczM2U3NyIsImlhdCI6MTY5MjA5NzU5NSwiZXhwIjoxNjk5ODczNTk1fQ.7Amj2tlT47UzTLD9cKQpTRKwwCwacCjj2QusvUi7fE0",
    "data": {
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

### Get all invoices endpoint (GET REQUEST: base_URL/api/bsa/getAllInvoices)

-sample output

```bash
{
    "status": "Success",
    "message": "Successfully retrieved invoices",
    "results": 2,
    "data": {
        "result": [
            {
                "_id": "64db66bc08da5225b224a56b",
                "username": "andyYeboah",
                "refNumber": "001",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 6s",
                        "description": "A slightly used iphone 6s with no cracks",
                        "price": 100,
                        "quantity" : 20,
                        "_id": "64db66bc08da5225b224a56c"
                    },
                    {
                        "item": "Nasco Television",
                        "description": "New but with some scratches at the back",
                        "quantity" : 50,
                        "price": 200,
                        "_id": "64db66bc08da5225b224a56d"
                    }
                ],
                "createdAt": "2023-08-15T11:51:24.241Z",
                "updatedAt": "2023-08-15T11:51:24.241Z",
                "__v": 0
            },
            {
                "_id": "64db68795e5603c7cb2a9e7c",
                "username": "andyYeboah",
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
                        "quantity" : 8,
                        "price": 4000,
                        "_id": "64db68795e5603c7cb2a9e7d"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity" : 2,
                        "price": 200,
                        "_id": "64db68795e5603c7cb2a9e7e"
                    }
                ],
                "createdAt": "2023-08-15T11:58:49.414Z",
                "updatedAt": "2023-08-15T11:58:49.414Z",
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
    "status": "Success",
    "message": "Successfully retrieved invoice details",
    "data": {
        "result": [
            {
                "_id": "64db66bc08da5225b224a56b",
                "username": "andyYeboah",
                "refNumber": "001",
                "senderName": "Yeboah Andrews",
                "senderContact": "0247668944",
                "senderLocation": "Manchester",
                "receiverName": "Wilson Aballey",
                "receiverContact": "0203232764",
                "receiverLocation": "Accra, Ghana",
                "items": [
                    {
                        "item": "iphone 6s",
                        "description": "A slightly used iphone 6s with no cracks",
                        "price": 100,
                        "quantity" : 5,
                        "_id": "64db66bc08da5225b224a56c"
                    },
                    {
                        "item": "Nasco Television",
                        "description": "New but with some scratches at the back",
                        "price": 200,
                        "quantity" : 6,
                        "_id": "64db66bc08da5225b224a56d"
                    }
                ],
                "createdAt": "2023-08-15T11:51:24.241Z",
                "updatedAt": "2023-08-15T11:51:24.241Z",
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
    "status": "Success",
    "message": "Successfully retrieved Andy's invoice",
    "results": 2,
    "data": {
        "result": [
            {
                "_id": "64e27705ed7a50db84b6a6a4",
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
                        "_id": "64e27705ed7a50db84b6a6a5"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e27705ed7a50db84b6a6a6"
                    }
                ],
                "createdAt": "2023-08-20T20:26:45.573Z",
                "updatedAt": "2023-08-20T20:26:45.573Z",
                "__v": 0
            },
            {
                "_id": "64e27e543e33bd6553b2aac9",
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
                        "_id": "64e27e543e33bd6553b2aaca"
                    },
                    {
                        "item": "Samsung Television",
                        "description": "Fresh in box",
                        "quantity": 1,
                        "price": 200,
                        "_id": "64e27e543e33bd6553b2aacb"
                    }
                ],
                "createdAt": "2023-08-20T20:57:56.034Z",
                "updatedAt": "2023-08-20T20:57:56.034Z",
                "__v": 0
            }
        ]
    }
}
```








