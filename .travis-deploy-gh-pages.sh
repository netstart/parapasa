#!/usr/bin/env bash

#https://medium.com/trainingcenter/utilizando-travis-ci-para-fazer-continuous-deployment-de-suas-aplica%C3%A7%C3%B5es-no-github-pages-e86c6b55cba1

echo Deploy to GitHub Pages

# pull requests e commits para outras branches diferentes da master
# não devem fazer o deploy, isso é opcional caso queira deletar as próximas 6 linhas
# fique a vontade
SOURCE_BRANCH="master"

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy."
    exit 0
fi


# only deploy tags
#if [ -z "$TRAVIS_TAG" ]; then
#  echo Deploy to GitHub Pages - Skip deployment because $TRAVIS_TAG is defined
#else

  echo Deploy to GitHub Pages - Start

  # go to the directory which contains build artifacts and create a *new* Git repo
  # directory may be different based on your particular build process
  cd dist
  git init

  # inside this git repo we'll pretend to be a new user
  git config user.name "netstart"
  git config user.email "netstart@gmail.com"

  # The first and only commit to this new Git repo contains all the
  # files present with the commit message "Deploy to GitHub Pages".
  git add . -A
  git commit -m "Deploy to GitHub Pages"

  # Force push from the current repo's master branch to the remote
  # repo's gh-pages branch. (All previous history on the gh-pages branch
  # will be lost, since we are overwriting it.) We redirect any output to
  # /dev/null to hide any sensitive credential data that might otherwise be exposed.
  # tokens GH_TOKEN and GH_REF will be provided as Travis CI environment variables
  git push --force "https://${GH_TOKEN}@${GH_REF}" master:gh-pages

  echo Deploy to GitHub Pages - Success

#fi

echo Deploy to GitHub Pages - Finish
