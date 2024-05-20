# BlockInstructionTypeGenericRoomAllocations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**MasterInfo** | Pointer to [**RoomAllocationMasterInfoType**](RoomAllocationMasterInfoType.md) |  | [optional] 
**NumberOfDays** | Pointer to **float32** |  | [optional] 
**RoomAllocationType** | Pointer to [**[]RoomAllocationTypeType**](RoomAllocationTypeType.md) |  | [optional] 
**StartDate** | Pointer to **string** |  | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewBlockInstructionTypeGenericRoomAllocations

`func NewBlockInstructionTypeGenericRoomAllocations() *BlockInstructionTypeGenericRoomAllocations`

NewBlockInstructionTypeGenericRoomAllocations instantiates a new BlockInstructionTypeGenericRoomAllocations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockInstructionTypeGenericRoomAllocationsWithDefaults

`func NewBlockInstructionTypeGenericRoomAllocationsWithDefaults() *BlockInstructionTypeGenericRoomAllocations`

NewBlockInstructionTypeGenericRoomAllocationsWithDefaults instantiates a new BlockInstructionTypeGenericRoomAllocations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *BlockInstructionTypeGenericRoomAllocations) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *BlockInstructionTypeGenericRoomAllocations) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *BlockInstructionTypeGenericRoomAllocations) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *BlockInstructionTypeGenericRoomAllocations) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *BlockInstructionTypeGenericRoomAllocations) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *BlockInstructionTypeGenericRoomAllocations) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *BlockInstructionTypeGenericRoomAllocations) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *BlockInstructionTypeGenericRoomAllocations) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetMasterInfo

`func (o *BlockInstructionTypeGenericRoomAllocations) GetMasterInfo() RoomAllocationMasterInfoType`

GetMasterInfo returns the MasterInfo field if non-nil, zero value otherwise.

### GetMasterInfoOk

`func (o *BlockInstructionTypeGenericRoomAllocations) GetMasterInfoOk() (*RoomAllocationMasterInfoType, bool)`

GetMasterInfoOk returns a tuple with the MasterInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfo

`func (o *BlockInstructionTypeGenericRoomAllocations) SetMasterInfo(v RoomAllocationMasterInfoType)`

SetMasterInfo sets MasterInfo field to given value.

### HasMasterInfo

`func (o *BlockInstructionTypeGenericRoomAllocations) HasMasterInfo() bool`

HasMasterInfo returns a boolean if a field has been set.

### GetNumberOfDays

`func (o *BlockInstructionTypeGenericRoomAllocations) GetNumberOfDays() float32`

GetNumberOfDays returns the NumberOfDays field if non-nil, zero value otherwise.

### GetNumberOfDaysOk

`func (o *BlockInstructionTypeGenericRoomAllocations) GetNumberOfDaysOk() (*float32, bool)`

GetNumberOfDaysOk returns a tuple with the NumberOfDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfDays

`func (o *BlockInstructionTypeGenericRoomAllocations) SetNumberOfDays(v float32)`

SetNumberOfDays sets NumberOfDays field to given value.

### HasNumberOfDays

`func (o *BlockInstructionTypeGenericRoomAllocations) HasNumberOfDays() bool`

HasNumberOfDays returns a boolean if a field has been set.

### GetRoomAllocationType

`func (o *BlockInstructionTypeGenericRoomAllocations) GetRoomAllocationType() []RoomAllocationTypeType`

GetRoomAllocationType returns the RoomAllocationType field if non-nil, zero value otherwise.

### GetRoomAllocationTypeOk

`func (o *BlockInstructionTypeGenericRoomAllocations) GetRoomAllocationTypeOk() (*[]RoomAllocationTypeType, bool)`

GetRoomAllocationTypeOk returns a tuple with the RoomAllocationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAllocationType

`func (o *BlockInstructionTypeGenericRoomAllocations) SetRoomAllocationType(v []RoomAllocationTypeType)`

SetRoomAllocationType sets RoomAllocationType field to given value.

### HasRoomAllocationType

`func (o *BlockInstructionTypeGenericRoomAllocations) HasRoomAllocationType() bool`

HasRoomAllocationType returns a boolean if a field has been set.

### GetStartDate

`func (o *BlockInstructionTypeGenericRoomAllocations) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *BlockInstructionTypeGenericRoomAllocations) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *BlockInstructionTypeGenericRoomAllocations) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *BlockInstructionTypeGenericRoomAllocations) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetTotalResults

`func (o *BlockInstructionTypeGenericRoomAllocations) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *BlockInstructionTypeGenericRoomAllocations) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *BlockInstructionTypeGenericRoomAllocations) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *BlockInstructionTypeGenericRoomAllocations) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


