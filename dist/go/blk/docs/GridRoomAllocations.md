# GridRoomAllocations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomAllocationType** | Pointer to [**[]RoomAllocationTypeType**](RoomAllocationTypeType.md) |  | [optional] 
**MasterInfo** | Pointer to [**RoomAllocationMasterInfoType**](RoomAllocationMasterInfoType.md) |  | [optional] 
**StartDate** | Pointer to **string** |  | [optional] 
**NumberOfDays** | Pointer to **float32** |  | [optional] 

## Methods

### NewGridRoomAllocations

`func NewGridRoomAllocations() *GridRoomAllocations`

NewGridRoomAllocations instantiates a new GridRoomAllocations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGridRoomAllocationsWithDefaults

`func NewGridRoomAllocationsWithDefaults() *GridRoomAllocations`

NewGridRoomAllocationsWithDefaults instantiates a new GridRoomAllocations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomAllocationType

`func (o *GridRoomAllocations) GetRoomAllocationType() []RoomAllocationTypeType`

GetRoomAllocationType returns the RoomAllocationType field if non-nil, zero value otherwise.

### GetRoomAllocationTypeOk

`func (o *GridRoomAllocations) GetRoomAllocationTypeOk() (*[]RoomAllocationTypeType, bool)`

GetRoomAllocationTypeOk returns a tuple with the RoomAllocationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAllocationType

`func (o *GridRoomAllocations) SetRoomAllocationType(v []RoomAllocationTypeType)`

SetRoomAllocationType sets RoomAllocationType field to given value.

### HasRoomAllocationType

`func (o *GridRoomAllocations) HasRoomAllocationType() bool`

HasRoomAllocationType returns a boolean if a field has been set.

### GetMasterInfo

`func (o *GridRoomAllocations) GetMasterInfo() RoomAllocationMasterInfoType`

GetMasterInfo returns the MasterInfo field if non-nil, zero value otherwise.

### GetMasterInfoOk

`func (o *GridRoomAllocations) GetMasterInfoOk() (*RoomAllocationMasterInfoType, bool)`

GetMasterInfoOk returns a tuple with the MasterInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfo

`func (o *GridRoomAllocations) SetMasterInfo(v RoomAllocationMasterInfoType)`

SetMasterInfo sets MasterInfo field to given value.

### HasMasterInfo

`func (o *GridRoomAllocations) HasMasterInfo() bool`

HasMasterInfo returns a boolean if a field has been set.

### GetStartDate

`func (o *GridRoomAllocations) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *GridRoomAllocations) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *GridRoomAllocations) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *GridRoomAllocations) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetNumberOfDays

`func (o *GridRoomAllocations) GetNumberOfDays() float32`

GetNumberOfDays returns the NumberOfDays field if non-nil, zero value otherwise.

### GetNumberOfDaysOk

`func (o *GridRoomAllocations) GetNumberOfDaysOk() (*float32, bool)`

GetNumberOfDaysOk returns a tuple with the NumberOfDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfDays

`func (o *GridRoomAllocations) SetNumberOfDays(v float32)`

SetNumberOfDays sets NumberOfDays field to given value.

### HasNumberOfDays

`func (o *GridRoomAllocations) HasNumberOfDays() bool`

HasNumberOfDays returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


