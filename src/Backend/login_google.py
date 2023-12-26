from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from .models import User

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="https://accounts.google.com/o/oauth2/token")

@router.get("/login/google")
async def login_google(credentials: OAuth2Credentials = Depends(oauth2_scheme)):
    # Obtener el usuario de Google
    google_user = await google.get_user(credentials.id_token)

    # Crear un nuevo usuario en la base de datos
    if not User.get(google_user.email):
        user = User(
            email=google_user.email,
            name=google_user.name,
            avatar=google_user.avatar,
        )
        user.save()

    # Devolver el token de autorización
    return {"access_token": credentials.access_token}
