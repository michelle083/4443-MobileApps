## A04 - Mongo DB + Fast API
### Michelle Orru
### Description:


### Files

|   #   | File             | Description                                        |
| :---: | ---------------- | -------------------------------------------------- |
|   1   | [api.py](https://github.com/michelle083/4443-MobileApps/edit/main/Assignments/A03/api.py) | api file |
|   2   | [requirements.txt](https://github.com/michelle083/4443-MobileApps/edit/main/Assignments/A03/requirements.txt) | needed requirements|


### Instructions
1. Populate my MongoDB:
2. Create New Routes: 
    1. Get all candies.
    2. Get a list of categories.
    3. Get candies in a specific category.
    4. Get candies with a key word in the description.
    5. Get candies with a key word in the name.
    6. Get candies by price range.
    7. Get candy with with a specified ID.
    8. Get a candy image.
    9. Update a candies price. 
    10. Update a candies { ....... }
    11. Delete a candy.
3. Register my API: 

### Example Command

#### Step 1
- Create a virtual environment and install requirements.
- This will create a folder called `myvenv` in your project folder.
- Project folder for this example is: `/root/A04`

requirements.txt 
```txt
fastapi
uvicorn
rich
```

```bash
cd /root/A04
python3 -m venv myvenv
source myvenv/bin/activate 
#prompt will change with name of venv in front of it
pip install -r requirements.txt
```

#### Step 2

Test the command from your service file, that starts your `api.py` to make sure it works:
```bash
$/root/A04/myvenv/bin/python /root/A04/api.py
```

#### Step 3

My instance of the API be up and running 
http://161.35.231.247:8084


