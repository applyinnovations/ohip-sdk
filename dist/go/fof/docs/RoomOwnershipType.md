# RoomOwnershipType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomOwnershipId** | Pointer to **int32** | Unique Id for Room Owner record. | [optional] 
**ContractNumber** | Pointer to **string** | Contract number for room owner. | [optional] 
**RoomId** | Pointer to **string** | Room Id of room owner. | [optional] 
**RoomCategory** | Pointer to **string** | Room Category of the room ownership record. | [optional] 
**RoomType** | Pointer to **string** | Room Type of the room ownership record. | [optional] 
**StartDate** | Pointer to **string** | Start Date of the room ownership record. | [optional] 
**EndDate** | Pointer to **string** | End Date of the room ownership record. | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Status** | Pointer to **string** | Status of the room ownership record. | [optional] 

## Methods

### NewRoomOwnershipType

`func NewRoomOwnershipType() *RoomOwnershipType`

NewRoomOwnershipType instantiates a new RoomOwnershipType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomOwnershipTypeWithDefaults

`func NewRoomOwnershipTypeWithDefaults() *RoomOwnershipType`

NewRoomOwnershipTypeWithDefaults instantiates a new RoomOwnershipType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomOwnershipId

`func (o *RoomOwnershipType) GetRoomOwnershipId() int32`

GetRoomOwnershipId returns the RoomOwnershipId field if non-nil, zero value otherwise.

### GetRoomOwnershipIdOk

`func (o *RoomOwnershipType) GetRoomOwnershipIdOk() (*int32, bool)`

GetRoomOwnershipIdOk returns a tuple with the RoomOwnershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnershipId

`func (o *RoomOwnershipType) SetRoomOwnershipId(v int32)`

SetRoomOwnershipId sets RoomOwnershipId field to given value.

### HasRoomOwnershipId

`func (o *RoomOwnershipType) HasRoomOwnershipId() bool`

HasRoomOwnershipId returns a boolean if a field has been set.

### GetContractNumber

`func (o *RoomOwnershipType) GetContractNumber() string`

GetContractNumber returns the ContractNumber field if non-nil, zero value otherwise.

### GetContractNumberOk

`func (o *RoomOwnershipType) GetContractNumberOk() (*string, bool)`

GetContractNumberOk returns a tuple with the ContractNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractNumber

`func (o *RoomOwnershipType) SetContractNumber(v string)`

SetContractNumber sets ContractNumber field to given value.

### HasContractNumber

`func (o *RoomOwnershipType) HasContractNumber() bool`

HasContractNumber returns a boolean if a field has been set.

### GetRoomId

`func (o *RoomOwnershipType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoomOwnershipType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoomOwnershipType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *RoomOwnershipType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomCategory

`func (o *RoomOwnershipType) GetRoomCategory() string`

GetRoomCategory returns the RoomCategory field if non-nil, zero value otherwise.

### GetRoomCategoryOk

`func (o *RoomOwnershipType) GetRoomCategoryOk() (*string, bool)`

GetRoomCategoryOk returns a tuple with the RoomCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCategory

`func (o *RoomOwnershipType) SetRoomCategory(v string)`

SetRoomCategory sets RoomCategory field to given value.

### HasRoomCategory

`func (o *RoomOwnershipType) HasRoomCategory() bool`

HasRoomCategory returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomOwnershipType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomOwnershipType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomOwnershipType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomOwnershipType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetStartDate

`func (o *RoomOwnershipType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *RoomOwnershipType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *RoomOwnershipType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *RoomOwnershipType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *RoomOwnershipType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *RoomOwnershipType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *RoomOwnershipType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *RoomOwnershipType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetProfileId

`func (o *RoomOwnershipType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *RoomOwnershipType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *RoomOwnershipType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *RoomOwnershipType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetStatus

`func (o *RoomOwnershipType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RoomOwnershipType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RoomOwnershipType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *RoomOwnershipType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


