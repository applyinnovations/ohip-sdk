# ChangeRoomOwnerDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContractId** | Pointer to **int32** | Contract ID of the room owner record. | [optional] 
**RoomOwner** | Pointer to [**RoomOwnerType**](RoomOwnerType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeRoomOwnerDetails

`func NewChangeRoomOwnerDetails() *ChangeRoomOwnerDetails`

NewChangeRoomOwnerDetails instantiates a new ChangeRoomOwnerDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeRoomOwnerDetailsWithDefaults

`func NewChangeRoomOwnerDetailsWithDefaults() *ChangeRoomOwnerDetails`

NewChangeRoomOwnerDetailsWithDefaults instantiates a new ChangeRoomOwnerDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContractId

`func (o *ChangeRoomOwnerDetails) GetContractId() int32`

GetContractId returns the ContractId field if non-nil, zero value otherwise.

### GetContractIdOk

`func (o *ChangeRoomOwnerDetails) GetContractIdOk() (*int32, bool)`

GetContractIdOk returns a tuple with the ContractId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractId

`func (o *ChangeRoomOwnerDetails) SetContractId(v int32)`

SetContractId sets ContractId field to given value.

### HasContractId

`func (o *ChangeRoomOwnerDetails) HasContractId() bool`

HasContractId returns a boolean if a field has been set.

### GetRoomOwner

`func (o *ChangeRoomOwnerDetails) GetRoomOwner() RoomOwnerType`

GetRoomOwner returns the RoomOwner field if non-nil, zero value otherwise.

### GetRoomOwnerOk

`func (o *ChangeRoomOwnerDetails) GetRoomOwnerOk() (*RoomOwnerType, bool)`

GetRoomOwnerOk returns a tuple with the RoomOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwner

`func (o *ChangeRoomOwnerDetails) SetRoomOwner(v RoomOwnerType)`

SetRoomOwner sets RoomOwner field to given value.

### HasRoomOwner

`func (o *ChangeRoomOwnerDetails) HasRoomOwner() bool`

HasRoomOwner returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeRoomOwnerDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeRoomOwnerDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeRoomOwnerDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeRoomOwnerDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


