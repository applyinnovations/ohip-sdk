# TaskSheetLockCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code which the task sheet belongs to. | [optional] 
**LockTaskSheet** | Pointer to **bool** | If set to true, the task sheet will be locked. | [optional] 
**TaskSeqNo** | Pointer to **int32** | Task sequence number of the task sheet. | [optional] 

## Methods

### NewTaskSheetLockCriteriaType

`func NewTaskSheetLockCriteriaType() *TaskSheetLockCriteriaType`

NewTaskSheetLockCriteriaType instantiates a new TaskSheetLockCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskSheetLockCriteriaTypeWithDefaults

`func NewTaskSheetLockCriteriaTypeWithDefaults() *TaskSheetLockCriteriaType`

NewTaskSheetLockCriteriaTypeWithDefaults instantiates a new TaskSheetLockCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TaskSheetLockCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TaskSheetLockCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TaskSheetLockCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TaskSheetLockCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLockTaskSheet

`func (o *TaskSheetLockCriteriaType) GetLockTaskSheet() bool`

GetLockTaskSheet returns the LockTaskSheet field if non-nil, zero value otherwise.

### GetLockTaskSheetOk

`func (o *TaskSheetLockCriteriaType) GetLockTaskSheetOk() (*bool, bool)`

GetLockTaskSheetOk returns a tuple with the LockTaskSheet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockTaskSheet

`func (o *TaskSheetLockCriteriaType) SetLockTaskSheet(v bool)`

SetLockTaskSheet sets LockTaskSheet field to given value.

### HasLockTaskSheet

`func (o *TaskSheetLockCriteriaType) HasLockTaskSheet() bool`

HasLockTaskSheet returns a boolean if a field has been set.

### GetTaskSeqNo

`func (o *TaskSheetLockCriteriaType) GetTaskSeqNo() int32`

GetTaskSeqNo returns the TaskSeqNo field if non-nil, zero value otherwise.

### GetTaskSeqNoOk

`func (o *TaskSheetLockCriteriaType) GetTaskSeqNoOk() (*int32, bool)`

GetTaskSeqNoOk returns a tuple with the TaskSeqNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSeqNo

`func (o *TaskSheetLockCriteriaType) SetTaskSeqNo(v int32)`

SetTaskSeqNo sets TaskSeqNo field to given value.

### HasTaskSeqNo

`func (o *TaskSheetLockCriteriaType) HasTaskSeqNo() bool`

HasTaskSeqNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


