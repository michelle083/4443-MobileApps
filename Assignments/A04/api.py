# Libraries for FastAPI
from fastapi import FastAPI, Query, Path, HTTPException
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import json
from pymongo import MongoClient
from typing import List
from pydantic import BaseModel
from mongoManager import MongoManager
from uuid import uuid4
from pydantic import BaseModel


# Builtin libraries
import os

from random import shuffle 


class Candy(BaseModel):
    id: int
    name: str
    price: float
    category: str

"""
           _____ _____   _____ _   _ ______ ____
     /\   |  __ \_   _| |_   _| \ | |  ____/ __ \
    /  \  | |__) || |     | | |  \| | |__ | |  | |
   / /\ \ |  ___/ | |     | | | . ` |  __|| |  | |
  / ____ \| |    _| |_   _| |_| |\  | |   | |__| |
 /_/    \_\_|   |_____| |_____|_| \_|_|    \____/

The `description` is the information that gets displayed when the api is accessed from a browser and loads the base route.
Also the instance of `app` below description has info that gets displayed as well when the base route is accessed.
"""

description = """🤡Proceed at your own discretion🤡


## Description:
Sweet Nostalgia Candies brings you a delightful journey through time with its extensive collection of 
candies. From the vibrant, trendy flavors of today to the cherished, classic treats of yesteryear, 
our store is a haven for candy lovers of all ages (but mostly kids). Step into a world where every shelf and corner 
is adorned with jars and boxes filled with colors and tastes that evoke memories and create new ones. 
Whether you're seeking a rare, retro candy from your childhood or the latest sugary creation, Sweet 
Nostalgia Candies is your destination. Indulge in our handpicked selection and experience a sweet 
escape into the world of confectionery wonders! And don't worry! We will watch your kids!! (😉)

#### Contact Information:

- **Address:** Texas, USA
- **Phone:** (123) 968-7378 [or (123 you-perv)]
- **Email:** perv@kidsinvans.com
- **Website:** www.kidsinvans.fun

"""

# Needed for CORS
# origins = ["*"]


# This is the `app` instance which passes in a series of keyword arguments
# configuring this instance of the api. The URL's are obviously fake.
app = FastAPI(
    title="MichelleAPI.Fun🤡",
    description=description,
    version="0.0.1",
    terms_of_service="http://www.kidsinvans.fun/worldleterms/",
    contact={
        "name": "Michelle Orru",
        "url": "http://161.35.231.247",
        "email": "morru1008@my.msutexas.edu",
    },
    license_info={
        "name": "Apache 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
)

# Needed for CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

"""
  _      ____   _____          _         _____ _                _____ _____ ______  _____
 | |    / __ \ / ____|   /\   | |       / ____| |        /\    / ____/ ____|  ____|/ ____|
 | |   | |  | | |       /  \  | |      | |    | |       /  \  | (___| (___ | |__  | (___
 | |   | |  | | |      / /\ \ | |      | |    | |      / /\ \  \___ \\___ \|  __|  \___ \
 | |___| |__| | |____ / ____ \| |____  | |____| |____ / ____ \ ____) |___) | |____ ____) |
 |______\____/ \_____/_/    \_\______|  \_____|______/_/    \_\_____/_____/|______|_____/

This is where you will add code to load all the countries and not just countries. Below is a single
instance of the class `CountryReader` that loads countries. There are 6 other continents to load or
maybe you create your own country file, which would be great. But try to implement a class that 
organizes your ability to access a countries polygon data.
"""

mm = MongoManager(db="candies")

"""
  _      ____   _____          _        __  __ ______ _______ _    _  ____  _____   _____
 | |    / __ \ / ____|   /\   | |      |  \/  |  ____|__   __| |  | |/ __ \|  __ \ / ____|
 | |   | |  | | |       /  \  | |      | \  / | |__     | |  | |__| | |  | | |  | | (___
 | |   | |  | | |      / /\ \ | |      | |\/| |  __|    | |  |  __  | |  | | |  | |\___ \
 | |___| |__| | |____ / ____ \| |____  | |  | | |____   | |  | |  | | |__| | |__| |____) |
 |______\____/ \_____/_/    \_\______| |_|  |_|______|  |_|  |_|  |_|\____/|_____/|_____/

This is where methods you write to help with any routes written below should go. Unless you have 
a module written that you include with statements above.  
"""


"""
  _____   ____  _    _ _______ ______  _____
 |  __ \ / __ \| |  | |__   __|  ____|/ ____|
 | |__) | |  | | |  | |  | |  | |__  | (___
 |  _  /| |  | | |  | |  | |  |  __|  \___ \
 | | \ \| |__| | |__| |  | |  | |____ ____) |
 |_|  \_\\____/ \____/   |_|  |______|_____/

 This is where your routes will be defined. Routes are just python functions that retrieve, save, 
 delete, and update data. How you make that happen is up to you.
"""


@app.get("/")
async def docs_redirect():
    """Api's base route that displays the information created above in the ApiInfo section."""
    return RedirectResponse(url="/docs")


@app.get("/categories")
def list_categories():
    """
    Get a list of candy categories (e.g., chocolates, gummies, hard candies).
    """
    mm.setCollection("candies")
    categories = mm.distinct("category")
    return categories


@app.get("/candies")
def list_all_candies():
    """
    Retrieve a list of all candies available in the store.
    """
    mm.setCollection("candies")
    result = mm.get(filter={"_id": 0})
    return result


@app.get("/candies/category/{category}")
def candies_by_category(category: str):
    """
    Search for candies based on a query string (e.g., name, category, flavor).
    """
    mm.setCollection("candies")
    result = mm.get(
        query={"category": category},
        filter={"_id": 0, "name": 1, "price": 1, "category": 1},
    )
    return result


@app.get("/candies/id/{id}")
def get_candy_by_id(id: str):
    """
    Get detailed information about a specific candy.
    """
    mm.setCollection("candies")
    result = mm.get(
        query={"id": id}, filter={"_id": 0, "name": 1, "price": 1, "category": 1}
    )
    return result


@app.post("/candies")
def add_new_candy(name: str, price: float, category: str):
    """
    Add a new candy to the store's inventory.
    """
    mm.setCollection("candies")
    new_candy = {
        "id": str(uuid4()),  # Generate a unique ID for the new candy
        "name": name,
        "price": price,
        "category": category
    }
    mm.insert(new_candy)
    return {"message": "New candy added successfully."}


@app.put("/candies/{candy_id}")
def update_candy_info(candy_id: int):
    """
    Update information about an existing candy.
    """
    mm.setCollection("candies")
    mm.update(
        query={"id": candy_id},
        update={"$set": updated_info}
    )
    return {"message": "Candy information updated successfully."}


@app.delete("/candies/{candy_id}")
def delete_candy(candy_id: int):
    """
    Remove a candy from the store's inventory.
    """
    mm.setCollection("candies")
    mm.delete(
        query={"id": candy_id}
    )
    return {"message": "Candy deleted successfully."}


@app.get("/candies/description/{keyword}")
def candies_by_description(keyword: str):
    """
    Search for candies based on a keyword in the description.
    """
    mm.setCollection("candies")
    result = mm.get(
        query={"desc": {"$regex": keyword, "$options": "i"}},
        filter={"_id": 0, "name": 1, "price": 1, "category": 1},
    )
    return result

@app.get("/candies/name/{keyword}")
def candies_by_name(keyword: str):
    """
    Search for candies based on a keyword in the name.
    """
    mm.setCollection("candies")
    result = mm.get(
        query={"name": {"$regex": keyword, "$options": "i"}},
        filter={"_id": 0, "name": 1, "price": 1, "category": 1},
    )
    return result

@app.get("/candies/price")
def candies_by_price_range(min_price: float = Query(None), max_price: float = Query(None)):
    """
    Search for candies within a specific price range.
    """
    mm.setCollection("candies")
    query = {}
    if min_price is not None:
        query["price"] = {"$gte": min_price}
    if max_price is not None:
        query["price"] = {"$lte": max_price}
    result = mm.get(
        query=query,
        filter={"_id": 0, "name": 1, "price": 1, "category": 1},
    )
    return result

@app.get("/candies/image/{id}")
def get_candy_image(id: str):
    """
    Get the image URL of a specific candy by its ID.
    """
    mm.setCollection("candies")
    result = mm.get(
        query={"id": id}, filter={"_id": 0, "img_url": 1}
    )
    # return result['img_url']
    if result and 'img_url' in result:
        return result['img_url']
    else:
        raise HTTPException(status_code=404, detail="Image not found")

@app.put("/candies/{candy_id}")
def update_candy_price(candy_id: str, new_price: float):
    """
    Update the price of an existing candy.
    """
    mm.setCollection("candies")
    mm.update(
        query={"id": candy_id},
        update={"$set": {"price": new_price}}
    )
    return {"message": "Candy price updated successfully."}    

@app.get("/store-info")
def store_information():
    """
    Basic information about the candy store, including contact details.
    """
    store_info = {
        "address": "Texas, USA",
        "phone": "(123) 968-7378",
        "email": "perv@kidsinvans.com",
        "website": "www.kidsinvans.fun"
    }
    return store_info

"""
This main block gets run when you invoke this file. How do you invoke this file?

        python api.py 

After it is running, copy paste this into a browser: http://161.35.231.247:8080 

You should see your api's base route!

Note:
    Notice the first param below: api:app 
    The left side (api) is the name of this file (api.py without the extension)
    The right side (app) is the bearingiable name of the FastApi instance declared at the top of the file.
"""
if __name__ == "__main__":
    uvicorn.run(
        "api:app", host="161.35.231.247", port=8084, log_level="debug", reload=True
    )