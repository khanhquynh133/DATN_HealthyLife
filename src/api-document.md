<!-- @format -->

## API Document

AUTHENTICATION
• POST /api/auth/register
• POST /api/auth/login
• GET /api/auth/logout - delete refresh token
USERS
• GET /api/users – admin get all uses (except detail of admin)
• GET /api/users/{userId} – admin get user’s infor
• PATCH /api/users/{userId} – admin update user’s infor
• DELETE /api/users/{userId} – admin delete user
• GET /api/users/user/information - user get infor
• PATCH /api/users/user/information – user update info
FAVORITE
• GET /api/favorites
• PUT/api/favorites/remove
• POST /api/favorites /add
RECIPE
• GET /api/recipes – admin/user/guest get all recipes (no use)
• GET /api/recipes/type/{typeId} - admin/user/guest get all recipes filter by type id
• GET /api/recipes/user/{userId} – user get all recipes by user id (own recipes)
• GET /api/recipes/{id} - admin/user/guest get recipe by recipe id (detail recipe)
• GET /api/recipes?name= - admin/user/guest get all recipes filter by name recipe
• GET /api/recipes?ingredient= - admin/user/guest get all recipes filter by name ingredient
• POST /api/recipes – user create new recipe
• DELETE /api/recipes/{id} – admin/user delete a recipe by recipe id
• PATCH /api/recipes/{id} – admin/user update a recipe by recipe id
• PUT /api/recipes/{id}/publish - users public their recipes
• PUT /api/recipes/{id}/hide - users hide their recipes
