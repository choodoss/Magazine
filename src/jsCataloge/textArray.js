const text = `6
Electric Kettles
11
Coffee Makers
14
Soda Makers
14
Milk Frothers and Heaters
15
Juicers
16
Thermo Pots
18
Hand Blenders
19
Choppers
20
Electric Graters
20
Mixers
21
Kitchen Scales
22
Kitchen Machines
22
Meat Grinders
25
Vacuum Sealers
25
Coffee Grinders
26
Electric Slicers
28
Toasters
29
Sandwich Makers
29
Multi-Function Sandwich Makers
30
Electric Grills
31
Vertical Electric Grills
31
Electric Cookers
32
Induction Cookers
33
Food Dehydrators
34
Multicookers
36
Multicookers-Pressure Cookers
36
Air Fryers
37
Microwave Ovens
40
Electric Ovens
47
Cookers
52
Kitchen Hoods
56
Cordless Vacuum Cleaners
58
Corded Vacuum Cleaners
61
Mosquito Repellent Lanterns
63
Fabric Pill Removers
63
Steam Cleaners
64
Irons
65
Steamers
66
Shoe Dryers
69
Bathroom Scales
71
Oral Irrigators
72
Electric Toothbrushes
74
Hair Dryers
76
Professional Hair Dryers
76
Hair Curlers
77
Hair Straighteners
79
Hair Clippers
79
Trimmers
80
Hair Cutting Kits
80
Epilators
81
Electric Shavers
83
Refrigerators
87
Coolers
89
Freezers
90
Wine Coolers
90
Ice Makers
92
Semi Automatic Washing Machines
93
Automatic Washing Machines
96
Drying Machines
97
Dishwasher Machines
102
Convector Heaters
103
Industrial Fan Heaters
103
Oil Heaters
104
Infrared Heaters
106
Fans
108
Portable Fans
108
Exhaust Fans
109
Climatic Complexes
110
Humidifiers
111
Electric Water Heaters`;

const lines = text.split('\n');

const contents = [];

for (let i = 0; i < lines.length; i += 2) {
    contents.push({
        number: lines[i].trim(),
        name: lines[i + 1].trim(),
    });
}
export default contents;
console.log(contents)



