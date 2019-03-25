from rest_framework import routers
from .api import DepartmentViewSet


router = routers.DefaultRouter()
router.register('api/departments', DepartmentViewSet, 'posts')
urlpatterns = router.urls
