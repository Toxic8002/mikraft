from fastapi import FastAPI
from pydantic import BaseModel

app=FastAPI()

class User(BaseModel):
    first_name:str
    last_name:str
    age:int
    email:str

fake_db=[{"John":"Cena"},{"Adolf":"Hitler"},{"Nill":"Armstrong"}]

@app.get('/root')
def sayHello():
    return {"message":"Hello world"}

@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id":item_id}

@app.get("/human")
async def get_human(first:int,last:int):
    return fake_db[first+last]

@app.put("/users/{user_id}")
async def update_user(user_id:int,user:User):
    return {"user_id":user_id, **user.dict()}