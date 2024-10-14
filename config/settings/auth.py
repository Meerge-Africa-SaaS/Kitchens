from .base import *

AUTHENTICATION_BACKENDS = [
    "django.contrib.auth.backends.ModelBackend",
    "allauth.account.auth_backends.AuthenticationBackend",
]


INSTALLED_APPS += [
    "allauth",
    "allauth.account",

    "allauth.socialaccount",
]


MIDDLEWARE = MIDDLEWARE.append(
    "allauth.account.middleware.AccountMiddleware",
)
