##RUN THIS INSIDE CONTAINER
# ./node_modules/.bin/sequelize-cli db:migrate
#

# Run migrations
./node_modules/.bin/sequelize-cli db:migrate:undo:all
./node_modules/.bin/sequelize-cli db:migrate

# Run seeds
./node_modules/.bin/sequelize-cli db:seed --seed seeders/20200417120630-demo-clients.js
./node_modules/.bin/sequelize-cli db:seed --seed seeders/20200417120640-demo-forms.js
./node_modules/.bin/sequelize-cli db:seed --seed seeders/20200417120680-demo-contents.js