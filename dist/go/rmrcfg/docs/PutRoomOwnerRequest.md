# PutRoomOwnerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContractId** | Pointer to **int32** | Contract ID of the room owner record. | [optional] 
**RoomOwner** | Pointer to [**RoomOwnerType**](RoomOwnerType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutRoomOwnerRequest

`func NewPutRoomOwnerRequest() *PutRoomOwnerRequest`

NewPutRoomOwnerRequest instantiates a new PutRoomOwnerRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRoomOwnerRequestWithDefaults

`func NewPutRoomOwnerRequestWithDefaults() *PutRoomOwnerRequest`

NewPutRoomOwnerRequestWithDefaults instantiates a new PutRoomOwnerRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContractId

`func (o *PutRoomOwnerRequest) GetContractId() int32`

GetContractId returns the ContractId field if non-nil, zero value otherwise.

### GetContractIdOk

`func (o *PutRoomOwnerRequest) GetContractIdOk() (*int32, bool)`

GetContractIdOk returns a tuple with the ContractId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractId

`func (o *PutRoomOwnerRequest) SetContractId(v int32)`

SetContractId sets ContractId field to given value.

### HasContractId

`func (o *PutRoomOwnerRequest) HasContractId() bool`

HasContractId returns a boolean if a field has been set.

### GetRoomOwner

`func (o *PutRoomOwnerRequest) GetRoomOwner() RoomOwnerType`

GetRoomOwner returns the RoomOwner field if non-nil, zero value otherwise.

### GetRoomOwnerOk

`func (o *PutRoomOwnerRequest) GetRoomOwnerOk() (*RoomOwnerType, bool)`

GetRoomOwnerOk returns a tuple with the RoomOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwner

`func (o *PutRoomOwnerRequest) SetRoomOwner(v RoomOwnerType)`

SetRoomOwner sets RoomOwner field to given value.

### HasRoomOwner

`func (o *PutRoomOwnerRequest) HasRoomOwner() bool`

HasRoomOwner returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRoomOwnerRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRoomOwnerRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRoomOwnerRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRoomOwnerRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


