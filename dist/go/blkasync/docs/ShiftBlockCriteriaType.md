# ShiftBlockCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewStartDate** | Pointer to **string** | New start date of the business block. | [optional] 
**RemoveAlternateDates** | Pointer to **bool** | When true, this will remove alternate dates for this block before shifting dates. | [optional] 
**ValidateAlternateDates** | Pointer to **bool** | When true, this will validate alternate dates for this block before shifting dates. | [optional] 
**OverbookAll** | Pointer to **bool** | When true, this will overbook allocated rooms if needed. | [optional] 
**ValidatePreAllocatedRooms** | Pointer to **bool** | When true, this will validate if there are rooms pre-allocated before shifting the block dates. | [optional] 
**ValidateTraces** | Pointer to **bool** | When true, this will validate if there are active traces before shifting the block dates. | [optional] 
**OverrideEventsProcessingWarnings** | Pointer to **bool** | Indicates whether to ignore any warning during applying the changes to the events associated with the current block. | [optional] 

## Methods

### NewShiftBlockCriteriaType

`func NewShiftBlockCriteriaType() *ShiftBlockCriteriaType`

NewShiftBlockCriteriaType instantiates a new ShiftBlockCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewShiftBlockCriteriaTypeWithDefaults

`func NewShiftBlockCriteriaTypeWithDefaults() *ShiftBlockCriteriaType`

NewShiftBlockCriteriaTypeWithDefaults instantiates a new ShiftBlockCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNewStartDate

`func (o *ShiftBlockCriteriaType) GetNewStartDate() string`

GetNewStartDate returns the NewStartDate field if non-nil, zero value otherwise.

### GetNewStartDateOk

`func (o *ShiftBlockCriteriaType) GetNewStartDateOk() (*string, bool)`

GetNewStartDateOk returns a tuple with the NewStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewStartDate

`func (o *ShiftBlockCriteriaType) SetNewStartDate(v string)`

SetNewStartDate sets NewStartDate field to given value.

### HasNewStartDate

`func (o *ShiftBlockCriteriaType) HasNewStartDate() bool`

HasNewStartDate returns a boolean if a field has been set.

### GetRemoveAlternateDates

`func (o *ShiftBlockCriteriaType) GetRemoveAlternateDates() bool`

GetRemoveAlternateDates returns the RemoveAlternateDates field if non-nil, zero value otherwise.

### GetRemoveAlternateDatesOk

`func (o *ShiftBlockCriteriaType) GetRemoveAlternateDatesOk() (*bool, bool)`

GetRemoveAlternateDatesOk returns a tuple with the RemoveAlternateDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveAlternateDates

`func (o *ShiftBlockCriteriaType) SetRemoveAlternateDates(v bool)`

SetRemoveAlternateDates sets RemoveAlternateDates field to given value.

### HasRemoveAlternateDates

`func (o *ShiftBlockCriteriaType) HasRemoveAlternateDates() bool`

HasRemoveAlternateDates returns a boolean if a field has been set.

### GetValidateAlternateDates

`func (o *ShiftBlockCriteriaType) GetValidateAlternateDates() bool`

GetValidateAlternateDates returns the ValidateAlternateDates field if non-nil, zero value otherwise.

### GetValidateAlternateDatesOk

`func (o *ShiftBlockCriteriaType) GetValidateAlternateDatesOk() (*bool, bool)`

GetValidateAlternateDatesOk returns a tuple with the ValidateAlternateDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidateAlternateDates

`func (o *ShiftBlockCriteriaType) SetValidateAlternateDates(v bool)`

SetValidateAlternateDates sets ValidateAlternateDates field to given value.

### HasValidateAlternateDates

`func (o *ShiftBlockCriteriaType) HasValidateAlternateDates() bool`

HasValidateAlternateDates returns a boolean if a field has been set.

### GetOverbookAll

`func (o *ShiftBlockCriteriaType) GetOverbookAll() bool`

GetOverbookAll returns the OverbookAll field if non-nil, zero value otherwise.

### GetOverbookAllOk

`func (o *ShiftBlockCriteriaType) GetOverbookAllOk() (*bool, bool)`

GetOverbookAllOk returns a tuple with the OverbookAll field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverbookAll

`func (o *ShiftBlockCriteriaType) SetOverbookAll(v bool)`

SetOverbookAll sets OverbookAll field to given value.

### HasOverbookAll

`func (o *ShiftBlockCriteriaType) HasOverbookAll() bool`

HasOverbookAll returns a boolean if a field has been set.

### GetValidatePreAllocatedRooms

`func (o *ShiftBlockCriteriaType) GetValidatePreAllocatedRooms() bool`

GetValidatePreAllocatedRooms returns the ValidatePreAllocatedRooms field if non-nil, zero value otherwise.

### GetValidatePreAllocatedRoomsOk

`func (o *ShiftBlockCriteriaType) GetValidatePreAllocatedRoomsOk() (*bool, bool)`

GetValidatePreAllocatedRoomsOk returns a tuple with the ValidatePreAllocatedRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidatePreAllocatedRooms

`func (o *ShiftBlockCriteriaType) SetValidatePreAllocatedRooms(v bool)`

SetValidatePreAllocatedRooms sets ValidatePreAllocatedRooms field to given value.

### HasValidatePreAllocatedRooms

`func (o *ShiftBlockCriteriaType) HasValidatePreAllocatedRooms() bool`

HasValidatePreAllocatedRooms returns a boolean if a field has been set.

### GetValidateTraces

`func (o *ShiftBlockCriteriaType) GetValidateTraces() bool`

GetValidateTraces returns the ValidateTraces field if non-nil, zero value otherwise.

### GetValidateTracesOk

`func (o *ShiftBlockCriteriaType) GetValidateTracesOk() (*bool, bool)`

GetValidateTracesOk returns a tuple with the ValidateTraces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidateTraces

`func (o *ShiftBlockCriteriaType) SetValidateTraces(v bool)`

SetValidateTraces sets ValidateTraces field to given value.

### HasValidateTraces

`func (o *ShiftBlockCriteriaType) HasValidateTraces() bool`

HasValidateTraces returns a boolean if a field has been set.

### GetOverrideEventsProcessingWarnings

`func (o *ShiftBlockCriteriaType) GetOverrideEventsProcessingWarnings() bool`

GetOverrideEventsProcessingWarnings returns the OverrideEventsProcessingWarnings field if non-nil, zero value otherwise.

### GetOverrideEventsProcessingWarningsOk

`func (o *ShiftBlockCriteriaType) GetOverrideEventsProcessingWarningsOk() (*bool, bool)`

GetOverrideEventsProcessingWarningsOk returns a tuple with the OverrideEventsProcessingWarnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideEventsProcessingWarnings

`func (o *ShiftBlockCriteriaType) SetOverrideEventsProcessingWarnings(v bool)`

SetOverrideEventsProcessingWarnings sets OverrideEventsProcessingWarnings field to given value.

### HasOverrideEventsProcessingWarnings

`func (o *ShiftBlockCriteriaType) HasOverrideEventsProcessingWarnings() bool`

HasOverrideEventsProcessingWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


