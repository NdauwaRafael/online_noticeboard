from rest_framework import routers
from .api import PostViewSet, DepartmentPostViewSet


router = routers.DefaultRouter()
router.register('api/posts', PostViewSet, 'posts')
router.register('api/posts/department', DepartmentPostViewSet, 'posts')
urlpatterns = router.urls
