# ShiftBlockCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code of the business block. | [optional] 
**IgnorePreAllocatedRooms** | Pointer to **bool** | When true, this will shift the block even if there are rooms pre-allocated. | [optional] 
**IgnoreTraces** | Pointer to **bool** | When true, this will shift the block even if there are active traces. | [optional] 
**NewStartDate** | Pointer to **string** | New start date of the business block. | [optional] 
**OverbookAll** | Pointer to **bool** | When true, this will overbook allocated rooms if needed. | [optional] 
**OverrideEventsProcessingWarnings** | Pointer to **bool** | Indicates whether to ignore any warning during applying the changes to the events associated with the current block. | [optional] 
**RemoveAlternateDates** | Pointer to **bool** | When true, this will remove alternate dates for this block before shifting dates. | [optional] 
**ValidateAlternateDates** | Pointer to **bool** | When true, this will validate alternate dates for this block before shifting dates. | [optional] 

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

### GetBlockId

`func (o *ShiftBlockCriteriaType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *ShiftBlockCriteriaType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *ShiftBlockCriteriaType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *ShiftBlockCriteriaType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetHotelId

`func (o *ShiftBlockCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ShiftBlockCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ShiftBlockCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ShiftBlockCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIgnorePreAllocatedRooms

`func (o *ShiftBlockCriteriaType) GetIgnorePreAllocatedRooms() bool`

GetIgnorePreAllocatedRooms returns the IgnorePreAllocatedRooms field if non-nil, zero value otherwise.

### GetIgnorePreAllocatedRoomsOk

`func (o *ShiftBlockCriteriaType) GetIgnorePreAllocatedRoomsOk() (*bool, bool)`

GetIgnorePreAllocatedRoomsOk returns a tuple with the IgnorePreAllocatedRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnorePreAllocatedRooms

`func (o *ShiftBlockCriteriaType) SetIgnorePreAllocatedRooms(v bool)`

SetIgnorePreAllocatedRooms sets IgnorePreAllocatedRooms field to given value.

### HasIgnorePreAllocatedRooms

`func (o *ShiftBlockCriteriaType) HasIgnorePreAllocatedRooms() bool`

HasIgnorePreAllocatedRooms returns a boolean if a field has been set.

### GetIgnoreTraces

`func (o *ShiftBlockCriteriaType) GetIgnoreTraces() bool`

GetIgnoreTraces returns the IgnoreTraces field if non-nil, zero value otherwise.

### GetIgnoreTracesOk

`func (o *ShiftBlockCriteriaType) GetIgnoreTracesOk() (*bool, bool)`

GetIgnoreTracesOk returns a tuple with the IgnoreTraces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreTraces

`func (o *ShiftBlockCriteriaType) SetIgnoreTraces(v bool)`

SetIgnoreTraces sets IgnoreTraces field to given value.

### HasIgnoreTraces

`func (o *ShiftBlockCriteriaType) HasIgnoreTraces() bool`

HasIgnoreTraces returns a boolean if a field has been set.

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


