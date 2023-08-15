# BSA BACKEND - API DOCUMENTATION

# GET ALL USERS 
## Endpoint (GET REQUEST)
base_URL/api/bsa/getAllUsers
## sample output
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


# GET USER DETAILS

## Endpoint (GET REQUEST)
base_URL/api/bsa/getUser/:username

## Sample output
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

# UPDATE USER

## Endpoint (PATCH REQUEST)
base_URL/api/bsa/updateUser/:username

## sample body
{
    "fullname": "Jerome Akumasi",
    "username" : "Jerome23",
    "password" : "jerome1234"
}

# DELETE USER

## Endpoint (DELETE REQUEST)
base_URL/api/bsa/deleteUser/:username

# Creating new user

## Endpoint (POST REQUEST)
base_URL/api/bsa/signUp

## Body
{
    "fullname": "Jerome Akumasi",
    "username" : "Jerome23",
    "password" : "jerome1234",
    "contact" : "0247558944",
    "dateOfBirth" : "2023-08-12T23:14:15.266Z"
}

# User SIGN IN

## Endpoint (POST REQUEST)
base_URL/api/bsa/signIn
## Body 
{
    "username": "Jerome23",
    "password": "jerome1234"
}

## Sample output
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



