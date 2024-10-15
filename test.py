# General imports =================================================================================
import json
from pocketbase import Client
from pocketbase.services.realtime_service import MessageData
import numpy

numpy.frombuffer()

client = Client('http://127.0.0.1:8090')


data_list = [12.0, 34, 56, 78, 90, 110]


json_data = json.dumps({"pt_data": data_list})

# Push the JSON data to PocketBase using the correct schema

client.collection("LabJack1").create(json.loads(json_data))