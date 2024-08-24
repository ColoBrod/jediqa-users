#!/usr/bin/bash

while getopts m: flag
do
  case "${flag}" in
    m) mode=${OPTARG};;
  esac
done

if [ "$mode" = "prod" ]; then
    dir="demo.wmf24.ru"
else
    echo "Invalid mode specified"
    exit 1
fi

user="root"
host="62.113.111.120"

echo "Uploading to /var/www/$dir/front ..."

echo "[*] => Removing files..."
ssh $user@$host rm -rf /var/www/$dir/front
echo "[*] => Completed!"

echo "[*] => Copying files..."
scp -r ./dist $user@$host:/var/www/$dir/front
echo "[*] => Completed!"


 
