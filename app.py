import os
import re
import json
import csv
# import sold_numbers
from sys import argv

# compile regular expressions to clean nubers
cleaned_number = re.compile(r'(\(|\)| |-)')

# create csv base directory
if not os.path.exists('csv'):
    os.makedirs('csv')


# open json to read
with open('data.json') as f:
    data = json.load(f)

# open csv to write json items
with open('csv/data.csv', 'w') as f:
    csv_file = csv.writer(f)
    for row in data.values():
        print
        for elem in row.values():
            print elem.values()
            break
        #     data_row = [
        #         elem.get('business_name'),
        #         elem.get('executive_name'),
        #         elem.get('executive_title'),
        #         cleaned_number.sub('', elem.get('phone')),
        #         elem.get('street_address'),
        #         elem.get('city'),
        #         elem.get('province'),
        #         elem.get('postal_code'),
        #         elem.get('sic_description')
        #     ]
print 'Success.'