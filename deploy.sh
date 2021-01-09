npm run deploy
git add .
git commit -m "chore: build"
git push
git checkout gh-pages
git pull
echo www.akadsph.com > CNAME
git add .
git commit -m "CNAME"
git push
git checkout main


