#!/bin/bash

# replace all date-time with string pattern instead as datetime format from OHIP is non-standard
grep -rl '"format": "date-time"' hospitality-api-docs | while read -r file; do
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS requires an explicit argument for -i, here using an empty string ('')
    sed -i '' 's|"format": "date-time"|"pattern": "/([0-9]{4})-(?:[0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}).([0-9]+)/"|g' "$file"
  else
    # Linux does not require an explicit argument for -i
    sed -i 's|"format": "date-time"|"pattern": "/([0-9]{4})-(?:[0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}).([0-9]+)/"|g' "$file"
  fi
done

# remove all "body" parameters from requests using jq
