import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const OurWork = () => {
  return (
    <div id='ProjectList' className=' mx-auto w-[90%]'>
        <div>
            <p className='text-3xl text-center font-bold text-[#283040]'>Projects List</p>
            <hr className='border-2 text-[#283040] m-auto w-[8%]'></hr>
        </div>
        <div>
        <Tabs defaultValue="ArduinoProjects" className="w-full mt-20 ">
  <TabsList className='mx-auto max-md:flex-wrap h-fit'>
    <TabsTrigger value="ArduinoProjects">Arduino projects</TabsTrigger>
    <TabsTrigger value="ElectricalProjects">Electrical Projects</TabsTrigger>
    <TabsTrigger value="ComputerEngineering">Computer Engineering</TabsTrigger>
    <TabsTrigger value="MechanicalProjects">Mechanical Projects</TabsTrigger>
  </TabsList>
  <TabsContent value="ArduinoProjects" className='grid grid-cols-2 max-md:grid-cols-1 w-full border-[1px] border-gray-200 rounded-3xl p-4 shadow-2xl gap-2' >
<div className='flex flex-col w-full'>  
<p>‣ Soil Moisture Sensor with Arduino </p>
<p>‣ Automated plants watering system </p>
<p>‣ jump man lcd game </p>
<p>‣ Smartphone Controlled Arduino Based Bluetooth Car </p>
<p>‣ Cardboard Gesture Recognition with Embedded AI </p>
<p>‣ Temperature and Humidity on OLED Easy </p>
<p>‣ Temperature Monitoring with Arduino IoT Cloud using DHT22</p> 
<p>‣ Build Your Own Object Tracking 4-DOF Robotics Arm with Arduino</p> 
<p>‣ Smart Paper Bin 2.0 </p>
<p>‣ Create a Human-Machine Interface (HMI) with Arduino</p> 
<p>‣ Traffic Light using Arduino </p>
<p>‣ Mini RADAR station with position indicator and real-time range variation</p> 
<p>‣ Ultrasonic Radar with Arduino </p>
<p>‣ L298n Motor driver Arduino with control the Speed & Direction of Motor</p> 
<p>‣ Classic Style Arduino Weather Station with three Oled Displays </p>
<p>‣ Security Access System with LCD Display </p>
</div>
<div className='flex flex-col w-full'>
<p>‣ Parking sensor using Arduino </p>
<p>‣ Interfacing RGB Led with Arduino </p>
<p>‣ Obstacle avoiding robot </p>
<p>‣ Arduino Tachometer (RPM meter) with IR sensor module</p> 
<p>‣ Automatic School Bell Prototype </p>
<p>‣ Clap switch using Arduino </p>
<p>‣ RFID Door Lock </p>
<p>‣ Smoke Detector using Gas Sensor </p>
<p>‣ Smart Energy Consumption Meter IoT based</p> 
<p>‣ Smart Plant Monitoring System</p>
<p>‣ Arduino two weal self-Balancing Robot</p>
<p>‣ Arduino Voltage and Frequency Simulation </p>
<p>‣ Rain Detection System Using Arduino</p>
<p>‣ Traffic Light using Arduino - A Beginner Project</p>
<p>‣ Ultrasonic Radar with Arduino</p>
<p>‣ Arduino Earthquake alarm and protection system with D7S seismic Sensor</p>
</div>

  </TabsContent>
  <TabsContent value="ElectricalProjects" className='grid grid-cols-2 max-md:grid-cols-1 w-full border-[1px] border-gray-200 rounded-3xl p-4 shadow-2xl gap-2'>
    <div>
<p>‣ Laser Security System </p>
<p>‣ Arduino Based Flood Detection System </p>
<p>‣ Piezoelectric Floor Tiles</p>
<p>‣ Automatic Industries Barrier Gate Project</p>
<p>‣ Eddy Current Break Project</p>
<p>‣ Solar Charging Bag</p>
<p>‣ Magnetic Gun </p>
<p>‣ Smart Handicap Solar Chair </p>
<p>‣ Over Heating Load Cut Off System</p>
<p>‣ Automatic Emergency Light Project</p>
<p>‣ Wireless Power Transition Project</p>
<p>‣ Compact Stroboscope Effect Generator</p>
<p>‣ Bluetooth Home Lighting Automation Project</p>
<p>‣ Stepper Motor Drive Project</p>
<p>‣ Temperature Controller Using Pic Controller</p>
<p>‣ Tower Wire Fault Detection System</p>
<p>‣ Emergency Mobile Charger</p>
<p>‣ Thermocol Cutter</p>
<p>‣ Magnetic Gun Project</p>
<p>‣ Walking To Chare Mobile</p>
<p>‣ Smart Handicap Solar Chair</p>
<p>‣ Ir Remote Control Fan and Light Switching Project</p>
<p>‣ Water Level Indicator Alarmv</p>
<p>‣ Hybrid Solar Wind Turbine</p>
<p>‣ Tesla Coil Project</p>
<p>‣ Step Down Transformer Project</p>
<p>‣ Arduino Based Emg Robotic Arm</p>
<p>‣ Smart Solar Panels Cleaning </p>
<p>‣ Iot Based Underground Cable Fault Detection</p>
<p>‣ Smart Anti Suicide Fan System</p>

</div>
<div>

<p>‣ Metal Detecting Robot</p>
<p>‣ Bicycle On Electric Generator</p>
<p>‣ Auto Load Shifting Transformer with Protection</p>
<p>‣ Three Phase Protection</p>
<p>‣ Advance Fire Safety Apartment</p>
<p>‣ Vehicle Speed Controlling on Toll Highway</p>
<p>‣ Digital Garbage System Project</p>
<p>‣ Thermoelectric Freezer Project</p>
<p>‣ Electric Scooter</p>
<p>‣ Solar Inverter</p>
<p>‣ Windmill Using Plastic Multi Blade Turbine</p>
<p>‣ Vertical Wind Mill</p>
<p>‣ Van De Graaff Generator</p>
<p>‣gsm based exam gate authentication system</p>
<p>‣gsm based alcohol detection in vehicle</p>
<p>‣gsm based fire alert system</p>
<p>‣gsm based car accident alert</p>
<p>‣gsm based garbage monitoring system</p>
<p>‣gsm based smart bank locker</p>
<p>‣gsm based smart dustbin</p>
<p>‣Wireless Smart Helmet</p>
<p>‣gsm based health monitoring system</p>
<p>‣gsm based water quality monitoring</p>
<p>‣gsm based Wireless E notice board</p>
<p>‣gsm wireless accident alert system</p>
<p>‣gsm based smart agriculture system</p>
<p>‣GSM based Attendance system</p>
<p>‣gsm smart tank management system</p>
<p>‣gsm based home automation project</p>
</div>
</TabsContent>
<TabsContent value="ComputerEngineering" className='flex  flex-col max-md:flex-row w-full border-[1px] border-gray-200 rounded-3xl p-4 shadow-2xl gap-2'>
   
    <Tabs defaultValue='Python' className='flex-row max-md:flex-col'>
    <TabsList className='flex-col max-md:flex-row h-fit'>
    <TabsTrigger value="Python">Python </TabsTrigger>
    <TabsTrigger value="IOT"> IOT </TabsTrigger>
    <TabsTrigger value="Raspberry"> Raspberry </TabsTrigger>
    <TabsTrigger value="PHP"> PHP </TabsTrigger>
    </TabsList>
    <TabsContent value="Python" className='flex flex-col  border-[1px] border-gray-200 rounded-3xl p-4  gap-2'>
<p>‣ Number guessing game in Python</p>
<p>‣ Word guessing game in Python</p>
<p>‣ Hangman Game in Python</p>
<p>‣ 21 Number game in Python</p>
<p>‣ Rock Paper Scissor game in Python</p>
<p>‣ Check if two PDF documents are identical with Python</p>
<p>‣ Convert emoji into text in Python</p>
<p>‣ Create a Voice Recorder using Python</p>
<p>‣ Create a Screen recorder using Python</p>
<p>‣ Mastermind Game using Python</p>
<p>‣ 2048 Game in Python</p>
<p>‣ Flames game in Python</p>
<p>‣ Pokémon Training Game</p>
<p>‣ Taking Screenshots using pyscreenshot in Python</p>
<p>‣ Desktop Notifier in Python</p>
<p>‣ Get Live Weather Desktop Notifications Using Python</p>
<p>‣ How to use pynput to make a Keylogger?</p>
<p>‣ Python – Cows and Bulls game</p>
<p>‣ Simple Attendance Tracker using Python</p>
<p>‣ Higher-Lower Game with Python</p>
<p>‣ Fun Fact Generator Web App in Python</p>
<p>‣ Creating payment receipts using Python</p>
<p>‣ How To Create a Countdown Timer Using Python?</p>
    </TabsContent>
    <TabsContent value="IOT" className='flex flex-col border-[1px] border-gray-200 rounded-3xl p-4  gap-2'>
<p>‣IoT based Fire Fighter Project</p>
<p>‣IoT and LoRa Technology Based GPS Tracking System</p>
<p>‣Iot and LoRa Based Smart Agriculture Monitoring System</p>
<p>‣IoT Based TDS Meter </p>
<p>‣Iot based agriculture monitoring and planning system</p>
<p>‣Iot based fall detection chair</p>
<p>‣Iot based heart attack detection and monitoring system</p>
<p>‣Iot Based Underground Cable Fault Detection</p>
<p>‣Iot based smart Street Light Monitoring System</p>
<p>‣Iot Based Smart Agriculture System</p>
<p>‣Iot based smart garage</p>
<p>‣Iot Based Air Pollution Monitoring System</p>
<p>‣Iot based Smart Parking System</p>
<p>‣Iot based home automation</p>


    </TabsContent>
    <TabsContent value="Raspberry" className='flex flex-col border-[1px] border-gray-200 rounded-3xl p-4 gap-2'>
<p>‣Iot based anti-theft protection system</p>
<p>‣fruits name and calories detector</p>
<p>‣thermal camera-based human and object detection</p>
<p>‣measuring distance with Ultrasonic Sensor Raspberry Pi Pico</p>
<p>‣ADC on Raspberry Pi Pico using Micro Python</p>
<p>‣autonomous cleaning robot raspberry pi</p>
<p>‣Face Mask Detection using Raspberry Pi</p>
<p>‣traffic sign detection system using raspberry pi</p>
<p>‣ocr based text reading using raspberry pi</p>
<p>‣Image Processing Based Fire Detection Using Raspberry Pi</p>

    </TabsContent>
    <TabsContent value="PHP" className='flex flex-col border-[1px] border-gray-200 rounded-3xl p-4  gap-2'>
<p>‣E-commerce websites</p>
<p>‣Content management systems (CMS)</p>
<p>‣Social networking platforms</p>
<p>‣Online booking systems</p>
<p>‣Blogging platforms</p>
<p>‣Educational websites</p>
<p>‣Job portals</p>
<p>‣Real estate listings websites</p>
<p>‣Classified ads platforms</p>
<p>‣Discussion forums</p>
<p>‣Event management websites</p>
<p>‣Restaurant management systems</p>
<p>‣Travel and tourism websites</p>
<p>‣Portfolio websites</p>
<p>‣News portals</p>
<p>‣Identifying your target audience and purpose</p>
<p>‣Analyzing competition and market demand</p>
<p>‣Considering your technical skills and resources</p>
<p>‣Planning the project scope and features</p>


    </TabsContent>
    </Tabs>
   
</TabsContent>
<TabsContent value="MechanicalProjects" className='grid grid-cols-2 max-md:grid-cols-1 w-full border-[1px] border-gray-200 rounded-3xl p-4 shadow-2xl gap-2'>
    <div>
<p>‣Geneva mechanism-based conveyor system belt </p>
<p>‣hydraulic pipe bending machine </p>
<p>‣speed breaker through power generation</p>
<p>‣Regenerative braking system </p>
<p>‣solar cooker project</p>
<p>‣Pesticide sprayer robot</p>
<p>‣Fire flightier robot </p>
<p>‣all in one farming robot</p>
<p>‣Flame throwing agriculture robot </p>
<p>‣automatic industries barrier gate </p>
<p>‣Archimedes screw water pump </p>
<p>‣3D printer project</p>
<p>‣high tech car washing system</p>
<p>‣Hyper loop vacuum train </p>
<p>‣Water Turbine Project model</p>
<p>‣Automatic escalator system </p>
<p>‣water canal cleaner </p>
<p>‣cattle on power plant </p>
</div>
<div>
<p>‣automatic headlight control </p>
<p>‣magnetic conveyer belt</p>
<p>‣coconut dehusking machine</p>
<p>‣Geneva mechanism-based conveyor system</p>
<p>‣hydraulic braking system using syringe</p>
<p>‣hydraulic pipe bending machine</p>
<p>‣smart Arduino based eye tracking side-mirrors control</p>
<p>‣dual side shaping system</p>
<p>‣pneumatic punching machine</p>
<p>‣Bluetooth based 360-degree rotating machine</p>
<p>‣100kg lifting mechanism</p>
<p>‣Bluetooth operated 8-legged walking </p>
<p>‣Dual axis grinding working</p>
<p>‣Turbine grinding working</p>
<p>‣Floor cleaner robot</p>
<p>‣potato chips machine project</p>
<p>‣ball turning lathe attachment</p>
<p>‣Steering wheel control headlight</p>
</div>

</TabsContent>
</Tabs>
        </div>
    </div>
  )
}

export default OurWork