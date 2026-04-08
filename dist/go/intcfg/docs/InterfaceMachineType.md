# InterfaceMachineType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Machine** | Pointer to **string** | Unique Machine name of the running Interface. | [optional] 
**Program** | Pointer to **string** | Path and name of the Interface program running on every Machine. | [optional] 
**ControllerPort** | Pointer to **int32** | Opera Interface controller (server) port for the connecting clients. | [optional] 
**VncPort** | Pointer to **int32** | VNC server port for connecting to the VNC server. | [optional] 

## Methods

### NewInterfaceMachineType

`func NewInterfaceMachineType() *InterfaceMachineType`

NewInterfaceMachineType instantiates a new InterfaceMachineType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceMachineTypeWithDefaults

`func NewInterfaceMachineTypeWithDefaults() *InterfaceMachineType`

NewInterfaceMachineTypeWithDefaults instantiates a new InterfaceMachineType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *InterfaceMachineType) GetId() UniqueIDType`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *InterfaceMachineType) GetIdOk() (*UniqueIDType, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *InterfaceMachineType) SetId(v UniqueIDType)`

SetId sets Id field to given value.

### HasId

`func (o *InterfaceMachineType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetMachine

`func (o *InterfaceMachineType) GetMachine() string`

GetMachine returns the Machine field if non-nil, zero value otherwise.

### GetMachineOk

`func (o *InterfaceMachineType) GetMachineOk() (*string, bool)`

GetMachineOk returns a tuple with the Machine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachine

`func (o *InterfaceMachineType) SetMachine(v string)`

SetMachine sets Machine field to given value.

### HasMachine

`func (o *InterfaceMachineType) HasMachine() bool`

HasMachine returns a boolean if a field has been set.

### GetProgram

`func (o *InterfaceMachineType) GetProgram() string`

GetProgram returns the Program field if non-nil, zero value otherwise.

### GetProgramOk

`func (o *InterfaceMachineType) GetProgramOk() (*string, bool)`

GetProgramOk returns a tuple with the Program field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgram

`func (o *InterfaceMachineType) SetProgram(v string)`

SetProgram sets Program field to given value.

### HasProgram

`func (o *InterfaceMachineType) HasProgram() bool`

HasProgram returns a boolean if a field has been set.

### GetControllerPort

`func (o *InterfaceMachineType) GetControllerPort() int32`

GetControllerPort returns the ControllerPort field if non-nil, zero value otherwise.

### GetControllerPortOk

`func (o *InterfaceMachineType) GetControllerPortOk() (*int32, bool)`

GetControllerPortOk returns a tuple with the ControllerPort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControllerPort

`func (o *InterfaceMachineType) SetControllerPort(v int32)`

SetControllerPort sets ControllerPort field to given value.

### HasControllerPort

`func (o *InterfaceMachineType) HasControllerPort() bool`

HasControllerPort returns a boolean if a field has been set.

### GetVncPort

`func (o *InterfaceMachineType) GetVncPort() int32`

GetVncPort returns the VncPort field if non-nil, zero value otherwise.

### GetVncPortOk

`func (o *InterfaceMachineType) GetVncPortOk() (*int32, bool)`

GetVncPortOk returns a tuple with the VncPort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVncPort

`func (o *InterfaceMachineType) SetVncPort(v int32)`

SetVncPort sets VncPort field to given value.

### HasVncPort

`func (o *InterfaceMachineType) HasVncPort() bool`

HasVncPort returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


