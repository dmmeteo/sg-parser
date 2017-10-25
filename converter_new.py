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
        for elem in row.values():
            data_row = [
                elem.get('contact_info'),
                cleaned_number.sub('', elem.get('phone')),
                elem.get('address'),
                elem.get('city'),
                elem.get('state'),
                elem.get('zip'),
                elem.get('country'),
                elem.get('age_range'),
                elem.get('income_range'),
                elem.get('home_value_range'),
                elem.get('owns')
            ]
            csv_file.writerow(data_row)

print 'Success.'