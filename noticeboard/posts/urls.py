from rest_framework import routers
from .api import PostViewSet, DepartmentPostViewSet


router = routers.DefaultRouter()

router.register('api/posts', DepartmentPostViewSet, 'posts')
urlpatterns = router.urls
