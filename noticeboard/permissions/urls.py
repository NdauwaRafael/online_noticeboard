from rest_framework import routers
from .api import PermissionViewSet


router = routers.DefaultRouter()
router.register('api/permissions', PermissionViewSet, 'permissions')
urlpatterns = router.urls
