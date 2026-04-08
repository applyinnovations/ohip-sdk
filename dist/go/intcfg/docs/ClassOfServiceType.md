# ClassOfServiceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CosMsgLmpRg** | Pointer to **string** |  | [optional] 
**CosChkRg** | Pointer to **string** |  | [optional] 
**CosMsgCmdRg** | Pointer to **string** |  | [optional] 
**RoomEquipCi** | Pointer to **bool** |  | [optional] 
**RoomEquipCo** | Pointer to **bool** |  | [optional] 
**GuestDataChangeCo** | Pointer to **bool** |  | [optional] 
**StandardNameFormat** | Pointer to **string** | Standard name format in the class of service. | [optional] 
**DefinedNameFormat** | Pointer to [**[]DefinedNameFormatType**](DefinedNameFormatType.md) | Defined name format in the class of service. | [optional] 
**ResvInQueue** | Pointer to **bool** | Indicates whethe a message will be triggered when a room/reservation is placed on QUEUE | [optional] 

## Methods

### NewClassOfServiceType

`func NewClassOfServiceType() *ClassOfServiceType`

NewClassOfServiceType instantiates a new ClassOfServiceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClassOfServiceTypeWithDefaults

`func NewClassOfServiceTypeWithDefaults() *ClassOfServiceType`

NewClassOfServiceTypeWithDefaults instantiates a new ClassOfServiceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCosMsgLmpRg

`func (o *ClassOfServiceType) GetCosMsgLmpRg() string`

GetCosMsgLmpRg returns the CosMsgLmpRg field if non-nil, zero value otherwise.

### GetCosMsgLmpRgOk

`func (o *ClassOfServiceType) GetCosMsgLmpRgOk() (*string, bool)`

GetCosMsgLmpRgOk returns a tuple with the CosMsgLmpRg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCosMsgLmpRg

`func (o *ClassOfServiceType) SetCosMsgLmpRg(v string)`

SetCosMsgLmpRg sets CosMsgLmpRg field to given value.

### HasCosMsgLmpRg

`func (o *ClassOfServiceType) HasCosMsgLmpRg() bool`

HasCosMsgLmpRg returns a boolean if a field has been set.

### GetCosChkRg

`func (o *ClassOfServiceType) GetCosChkRg() string`

GetCosChkRg returns the CosChkRg field if non-nil, zero value otherwise.

### GetCosChkRgOk

`func (o *ClassOfServiceType) GetCosChkRgOk() (*string, bool)`

GetCosChkRgOk returns a tuple with the CosChkRg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCosChkRg

`func (o *ClassOfServiceType) SetCosChkRg(v string)`

SetCosChkRg sets CosChkRg field to given value.

### HasCosChkRg

`func (o *ClassOfServiceType) HasCosChkRg() bool`

HasCosChkRg returns a boolean if a field has been set.

### GetCosMsgCmdRg

`func (o *ClassOfServiceType) GetCosMsgCmdRg() string`

GetCosMsgCmdRg returns the CosMsgCmdRg field if non-nil, zero value otherwise.

### GetCosMsgCmdRgOk

`func (o *ClassOfServiceType) GetCosMsgCmdRgOk() (*string, bool)`

GetCosMsgCmdRgOk returns a tuple with the CosMsgCmdRg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCosMsgCmdRg

`func (o *ClassOfServiceType) SetCosMsgCmdRg(v string)`

SetCosMsgCmdRg sets CosMsgCmdRg field to given value.

### HasCosMsgCmdRg

`func (o *ClassOfServiceType) HasCosMsgCmdRg() bool`

HasCosMsgCmdRg returns a boolean if a field has been set.

### GetRoomEquipCi

`func (o *ClassOfServiceType) GetRoomEquipCi() bool`

GetRoomEquipCi returns the RoomEquipCi field if non-nil, zero value otherwise.

### GetRoomEquipCiOk

`func (o *ClassOfServiceType) GetRoomEquipCiOk() (*bool, bool)`

GetRoomEquipCiOk returns a tuple with the RoomEquipCi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomEquipCi

`func (o *ClassOfServiceType) SetRoomEquipCi(v bool)`

SetRoomEquipCi sets RoomEquipCi field to given value.

### HasRoomEquipCi

`func (o *ClassOfServiceType) HasRoomEquipCi() bool`

HasRoomEquipCi returns a boolean if a field has been set.

### GetRoomEquipCo

`func (o *ClassOfServiceType) GetRoomEquipCo() bool`

GetRoomEquipCo returns the RoomEquipCo field if non-nil, zero value otherwise.

### GetRoomEquipCoOk

`func (o *ClassOfServiceType) GetRoomEquipCoOk() (*bool, bool)`

GetRoomEquipCoOk returns a tuple with the RoomEquipCo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomEquipCo

`func (o *ClassOfServiceType) SetRoomEquipCo(v bool)`

SetRoomEquipCo sets RoomEquipCo field to given value.

### HasRoomEquipCo

`func (o *ClassOfServiceType) HasRoomEquipCo() bool`

HasRoomEquipCo returns a boolean if a field has been set.

### GetGuestDataChangeCo

`func (o *ClassOfServiceType) GetGuestDataChangeCo() bool`

GetGuestDataChangeCo returns the GuestDataChangeCo field if non-nil, zero value otherwise.

### GetGuestDataChangeCoOk

`func (o *ClassOfServiceType) GetGuestDataChangeCoOk() (*bool, bool)`

GetGuestDataChangeCoOk returns a tuple with the GuestDataChangeCo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestDataChangeCo

`func (o *ClassOfServiceType) SetGuestDataChangeCo(v bool)`

SetGuestDataChangeCo sets GuestDataChangeCo field to given value.

### HasGuestDataChangeCo

`func (o *ClassOfServiceType) HasGuestDataChangeCo() bool`

HasGuestDataChangeCo returns a boolean if a field has been set.

### GetStandardNameFormat

`func (o *ClassOfServiceType) GetStandardNameFormat() string`

GetStandardNameFormat returns the StandardNameFormat field if non-nil, zero value otherwise.

### GetStandardNameFormatOk

`func (o *ClassOfServiceType) GetStandardNameFormatOk() (*string, bool)`

GetStandardNameFormatOk returns a tuple with the StandardNameFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandardNameFormat

`func (o *ClassOfServiceType) SetStandardNameFormat(v string)`

SetStandardNameFormat sets StandardNameFormat field to given value.

### HasStandardNameFormat

`func (o *ClassOfServiceType) HasStandardNameFormat() bool`

HasStandardNameFormat returns a boolean if a field has been set.

### GetDefinedNameFormat

`func (o *ClassOfServiceType) GetDefinedNameFormat() []DefinedNameFormatType`

GetDefinedNameFormat returns the DefinedNameFormat field if non-nil, zero value otherwise.

### GetDefinedNameFormatOk

`func (o *ClassOfServiceType) GetDefinedNameFormatOk() (*[]DefinedNameFormatType, bool)`

GetDefinedNameFormatOk returns a tuple with the DefinedNameFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinedNameFormat

`func (o *ClassOfServiceType) SetDefinedNameFormat(v []DefinedNameFormatType)`

SetDefinedNameFormat sets DefinedNameFormat field to given value.

### HasDefinedNameFormat

`func (o *ClassOfServiceType) HasDefinedNameFormat() bool`

HasDefinedNameFormat returns a boolean if a field has been set.

### GetResvInQueue

`func (o *ClassOfServiceType) GetResvInQueue() bool`

GetResvInQueue returns the ResvInQueue field if non-nil, zero value otherwise.

### GetResvInQueueOk

`func (o *ClassOfServiceType) GetResvInQueueOk() (*bool, bool)`

GetResvInQueueOk returns a tuple with the ResvInQueue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvInQueue

`func (o *ClassOfServiceType) SetResvInQueue(v bool)`

SetResvInQueue sets ResvInQueue field to given value.

### HasResvInQueue

`func (o *ClassOfServiceType) HasResvInQueue() bool`

HasResvInQueue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


