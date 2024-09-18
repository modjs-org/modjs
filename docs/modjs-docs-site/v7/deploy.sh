# Remove all .html extension. Navigate to out folder and run
find . -type f -name "*.html" -exec bash -c 'mv "$0" "${0%.html}"' {} \;

# Upload to s3. Navigation to v7 folder and run:
aws s3 sync out s3://www.modjs.prashan.dev --metadata-directive REPLACE --content-type "text/html" --profile modjs-site-account-role