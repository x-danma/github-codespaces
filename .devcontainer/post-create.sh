#!/bin/bash
# Run docker-compose up in the background
docker-compose up -d
# Pull another repository
git clone https://github.com/x-danma/codespaces-test-backend.git
# Change directory to the repo folder
cd codespaces-test-backend
# Run the dotnet command
dotnet
