from rest_framework import viewsets, permissions
from .serializers import PostSerializer
from accounts.serializers import UserSerializer
from .models import Post
from accounts.permissions import UserIsStudentLeader, UserIsHOD, UserIsAdministrator, CanPublishPublic, \
    IsOwnerOrReadOnly
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import get_template
from django.template import Context
from django.conf import settings


# Public posts
class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer

    def get_queryset(self):
        queryset = Post.objects.all()
        category = self.request.query_params.get('category')
        user_department = UserSerializer(self.request.user).data['department']
        if category == 'departmental':
            return queryset.filter(category=category, department=user_department)
        else:
            return queryset.filter(category='public')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        if self.request.data['send_mail'] == 'send_mail':
            # with open(settings.BASE_DIR + "/frontend/templates/emails/email.txt") as msg:
            #     post_email_message = msg.read()
            post_email_message = self.request.data['description']
            subject = 'POST: ' + self.request.data['title']
            to_email = (UserSerializer(self.request.user).data['email'],)
            from_email = 'ONAP: <no-reply@onlinenoticeboard.com>'
            message = EmailMultiAlternatives(subject=subject, body=post_email_message, from_email=from_email,
                                             to=to_email)
            message_body = {'body': self.request.data['description'], 'title': self.request.data['title']}
            html_template = get_template(settings.BASE_DIR + "/frontend/templates/emails/email.html").render(message_body)
            message.attach_alternative(html_template, "text/html")
            message.send()

    def perform_update(self, serializer, **kwargs):
        serializer.save()

    def perform_destroy(self, instance):
        instance.delete()

    # def send_post_email(self):
    #     with open(settings.BASE_DIR + "/frontend/templates/emails/email.txt") as msg:
    #         post_email_message = msg.read()
    #     subject = 'Online Noticeboard Notice'
    #     to_email = (UserSerializer(self.request.user).data['email'],)
    #     from_email = 'ONAP: <no-reply@onlinenoticeboard.com>'
    #     message = EmailMultiAlternatives(subject=subject, body=post_email_message, from_email=from_email, to=to_email)
    #     data =
    #     html_template = get_template(settings.BASE_DIR + "/frontend/templates/emails/email.html").render()
    #     message.attach_alternative(html_template, "text/html")
    #     message.send()

    def get_permissions(self):
        if self.request.method == 'GET':
            permission_classes = [permissions.IsAuthenticated]
        elif self.request.method == 'DELETE':
            permission_classes = [CanPublishPublic, IsOwnerOrReadOnly]
        else:
            if self.request.data['category'] == 'public':
                permission_classes = [CanPublishPublic, IsOwnerOrReadOnly]
            else:
                permission_classes = [UserIsHOD, IsOwnerOrReadOnly]
        return [permission() for permission in permission_classes]

# # Departmental posts
# class DepartmentPostViewSet(viewsets.ModelViewSet):
#     serializer_class = PostSerializer
#
#     def get_queryset(self):
#         return Post.objects.filter(category='departmental')
#
#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)
#
#     def get_permissions(self):
#         if self.request.method == 'GET':
#             permission_classes = [permissions.IsAuthenticated]
#         else:
#             permission_classes = [UserIsHOD, IsOwnerOrReadOnly]
#         return [permission() for permission in permission_classes]
