#!/bin/bash

aws s3 sync ./build $S3_BUCKET --acl public-read
echo "Deployemnt complete at `date`"
echo "ALL DONE at `date`"
