#!/bin/bash

aws s3 sync ./build $S3_BUCKET --acl public-read
echo "DONE at `date`"
