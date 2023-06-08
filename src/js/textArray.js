const text = `4
TELEVISIONS THAT BECOME THE CENTER OF A SMART HOME
LG 2022 models provide excellent image quality and offer new smart services.
4
SEE MORE!
2E - a new name in the television market.
11
SMART LIGHTING FOR A MORE COMFORTABLE LIFE
Philips Hue creates a range of luminaires for special moments, any mood, and every corner of the home.
16
SMART LIGHTING BECOMES ACCESSIBLE
Expanding the Wiz product line with outdoor lighting solutions that support the universal Matter open standard.
20
INVERTER AIR CONDITIONERS - A MODERN COOLING SYSTEM
Let's explore the secrets of the popularity of ARDESTO brand models.
26
CLEAN WATER FOR YOUR HOME AND FAMILY
Ecosoft filters - an effective solution to the problem of hard water in your apartment.
30
EXPLOSION-PROOF COMPOSITE GAS CYLINDERS
Hexagon Ragasco gas cylinders help you use gas safely and conveniently, globally recognized for their safety.
40
RADIATORS THAT PROVIDE HEAT
2E thermal radiators quickly warm up the room and help create an optimal microclimate.
44
GAS AS AN ALTERNATIVE FOR SOLVING CURRENT ISSUES
Portable burners and cartridges EL GAZ.
48
EQUIPMENT FOR DOMESTIC AND FIELD CONDITIONS
NEO Tools offers various solutions that can be useful during cooking and dining in challenging field or domestic conditions.
54
SECRETS OF THE FINNISH AXE
Fiskars Norden N - embodiment of age-old experience.
60
CONVENIENT POWER SOURCE
NEO Tools portable solar panels and their accessories.
68
SOLAR PANELS - A STEP TOWARDS ENERGY INDEPENDENCE
Environmentally friendly and economical 2E panels suitable for use even in extreme conditions, useful not only at home but also in the field.
74
PORTABLE POWER STATIONS: ALWAYS WITH LIGHT AND CONNECTION
2E charging stations for backup power supply.
86
POWERFUL ALTERNATIVE TO DISPOSABLE BATTERIES
Panasonic eneloop successfully combine the convenience of alkaline batteries with the advantages of rechargeable batteries.
90
MULTIFUNCTIONAL SOLUTIONS FOR BATTERY MAINTENANCE
NEO Tools chargers and starters - effortless charging without voltage "games."
92
UNIVERSAL SHOVELS
2E shovels - indispensable helpers in household chores, during travel, in the backyard, and even in extreme field conditions!
96
GARDEN TRIMMERS
VERTO devices will help maintain the lawn in proper condition where a regular lawnmower cannot handle.
102
LAWN MOWERS FOR GARDENS AND LAWNS
RYOBI lawn mowers come in handy for caring for gardens of any size, from small front yards to large gardening areas.
106
IRRIGATION SOLUTIONS FOR YOUR GARDEN OR BACKYARD
Building a watering system with Cellfast.
116
HEDGE TRIMMERS FOR DIFFERENT NEEDS
Functional Einhell tools for maintaining hedges, shrubs, trees, and decorative plants in proper condition.
120
SCARIFY YOUR LAWN PROPERLY
Einhell devices will help make your lawn lush, green, dense, strong, and resilient.
126
CORDLESS LAWN MOWER
Eco-friendly and efficient mowing without noise and gasoline.
136
MEASURING TOOLS
Measuring distance and size, determining moisture and temperature, as well as leveling become much easier with RYOBI tools.`;

const lines = text.split('\n');

const contents = [];

for (let i = 0; i < lines.length; i += 3) {
    contents.push({
        number: lines[i].trim(),
        name: lines[i + 1].trim(),
        text: lines[i + 2].trim()
    });
}
export default contents;
console.log(contents)



