import json
import glob
import io
import re

# by T

json_array = [];

for file_name in glob.glob("*.js"):
    file=io.open(file_name, mode="r", encoding="utf-8").read();
    key_value = {};
    for k,v in re.findall(r"//- (.*): (.*)", file):
        if k in key_value:
            key_value[k] += v;
        else:
            key_value[k] = v;
    json_array.append({"id": int(file_name.split('.')[0]), "name": key_value["name"], "description": key_value["description"] if 'description' in key_value else '-', "semester": key_value["semester"], "faculty": key_value["faculty"] if 'faculty' in key_value else '-', "author": key_value["author"] });
    


f = open("_list.json", "w", encoding="utf-8")
f.write(json.dumps(json_array, indent='\t', ensure_ascii=False))
f.close()