# HousekeepingTaskTypeRoomCountsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | [optional] 
**TotalCount** | Pointer to **int32** |  | [optional] 

## Methods

### NewHousekeepingTaskTypeRoomCountsInner

`func NewHousekeepingTaskTypeRoomCountsInner() *HousekeepingTaskTypeRoomCountsInner`

NewHousekeepingTaskTypeRoomCountsInner instantiates a new HousekeepingTaskTypeRoomCountsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingTaskTypeRoomCountsInnerWithDefaults

`func NewHousekeepingTaskTypeRoomCountsInnerWithDefaults() *HousekeepingTaskTypeRoomCountsInner`

NewHousekeepingTaskTypeRoomCountsInnerWithDefaults instantiates a new HousekeepingTaskTypeRoomCountsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *HousekeepingTaskTypeRoomCountsInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *HousekeepingTaskTypeRoomCountsInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *HousekeepingTaskTypeRoomCountsInner) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *HousekeepingTaskTypeRoomCountsInner) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetTotalCount

`func (o *HousekeepingTaskTypeRoomCountsInner) GetTotalCount() int32`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *HousekeepingTaskTypeRoomCountsInner) GetTotalCountOk() (*int32, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *HousekeepingTaskTypeRoomCountsInner) SetTotalCount(v int32)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *HousekeepingTaskTypeRoomCountsInner) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


