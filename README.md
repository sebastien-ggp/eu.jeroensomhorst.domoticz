# Domoticz app 


Add support for Domoticz devices

* 0.1.5 Refactored the code moved from driver only to device driven. This seems to decrease memory usage?

* 0.1.4 Fixed the capability for the WTGR800 device(s) and some smaller optimizations

* 0.1.3 Added German translations. Thanks to Marco David

* 0.1.2 Fixed contribution link

* 0.1.1 Fixed a memory leak in the Domoticz api.

* 0.1.0 Added cumulative meter readers for T1, T2, Gas. For this to work you need to repair the device(s)

* 0.0.9 The app now only reads information from devices that are used in domoticz

* 0.0.8 Added support for no username/password situations.

* 0.0.7 Added support for the type 'lightning2' and ignored devices that are not used in domoticz ( used = 0 )

* 0.0.6: Changed pairing. When a device isn't recognized ( no capability or class ) it will not show up in the devicelist

* 0.0.5: Added basic support for weather information (wind)
  
* 0.0.4: Added basic support for temperature things

=======
Homey app that adds support for domoticz devices.

