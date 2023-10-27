
#!/bin/bash
# Run docker-compose up in the background
cd .devcontainer

docker-compose up -d
# Pull another repository

cd ..

git clone https://github.com/example/repo.git
# Change directory to the repo folder
cd repo
# Run the dotnet command
dotnet
