#!/bin/bash

aws s3 sync ./public $S3_BUCKET --acl public-read
echo "DONE at `date`"
