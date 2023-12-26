from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def home(request: Request):
    return templates.TemplateResponse(
        name="login.astro",
        context={"request": request}
    )

@app.get("/dashboard")
def dashboard(request: Request):
    return templates.TemplateResponse(
        name="dashboard.astro",
        context={"request": request}
    )


