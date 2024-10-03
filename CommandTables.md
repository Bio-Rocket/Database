# Labjack 1 Commands

## LabJack1Commands Table Schema

command : String

value : Number (Only used for EPR_SET)

### LJ1 Table Commands

- SOL1_OPEN
- SOL1_CLOSE
- SOL2_OPEN
- SOL2_CLOSE
- SOL3_OPEN
- SOL3_CLOSE
- SOL4_OPEN
- SOL4_CLOSE
- EPR1_START
- EPR1_STOP
- EPR2_START
- EPR2_STOP
- (EPR1_SET, value)
- (EPR2_SET, value)

# Labjack 2 Commands

## LabJack2Commands Table Schema

loadcell : String

command : String

value : Number

### LJ2 Table Commands

- (LC3, TARE, 0)
- (LC3, CALIBRATE, weight)
- (LC3, CANCEL, 0)
- (LC3, FINISH, weight)
- (LC4, TARE, 0)
- (LC4, CALIBRATE, weight)
- (LC4, CANCEL, 0)
- (LC4, FINISH, weight)
- (LC5, TARE, 0)
- (LC5, CALIBRATE, weight)
- (LC5, CANCEL, 0)
- (LC5, FINISH, weight)
- (LC6, TARE, 0)
- (LC6, CALIBRATE, weight)
- (LC6, CANCEL, 0)
- (LC6, FINISH, weight)

# PLC Commands

## PlcCommands Table Schema

loadcell : String (Only used for calibration)

command : String

value : Number (Only used for calibration)

### PLC Table Commands

- PBV1_OPEN
- PBV1_CLOSE
- PBV2_OPEN
- PBV2_CLOSE
- PBV3_OPEN
- PBV3_CLOSE
- PBV4_OPEN
- PBV4_CLOSE
- PBV5_OPEN
- PBV5_CLOSE
- PBV6_OPEN
- PBV6_CLOSE
- PBV7_OPEN
- PBV7_CLOSE
- PBV8_OPEN
- PBV8_CLOSE
- PMP1_ON
- PMP1_OFF
- PMP2_ON
- PMP2_OFF
- PMP3_ON
- PMP3_OFF
- IGN1_ON
- IGN1_OFF
- IGN2_ON
- IGN2_OFF
- HEATER_ON
- HEATER_OFF
- (LC1, TARE, 0)
- (LC1, CALIBRATE, weight)
- (LC1, CANCEL, 0)
- (LC1, FINISH, weight)
- (LC2, TARE, 0)
- (LC2, CALIBRATE, weight)
- (LC2, CANCEL, 0)
- (LC2, FINISH, weight)
