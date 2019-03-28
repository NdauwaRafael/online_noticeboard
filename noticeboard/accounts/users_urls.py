from rest_framework import routers
from .api import UsersViewSet


router = routers.DefaultRouter()
router.register('api/users', UsersViewSet, 'users')
urlpatterns = router.urls
