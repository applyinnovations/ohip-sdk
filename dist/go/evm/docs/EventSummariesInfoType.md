# EventSummariesInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventSummary** | Pointer to [**[]EventSummaryInfoType**](EventSummaryInfoType.md) | Contains master/sub-events or standalone events summary information | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewEventSummariesInfoType

`func NewEventSummariesInfoType() *EventSummariesInfoType`

NewEventSummariesInfoType instantiates a new EventSummariesInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventSummariesInfoTypeWithDefaults

`func NewEventSummariesInfoTypeWithDefaults() *EventSummariesInfoType`

NewEventSummariesInfoTypeWithDefaults instantiates a new EventSummariesInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventSummary

`func (o *EventSummariesInfoType) GetEventSummary() []EventSummaryInfoType`

GetEventSummary returns the EventSummary field if non-nil, zero value otherwise.

### GetEventSummaryOk

`func (o *EventSummariesInfoType) GetEventSummaryOk() (*[]EventSummaryInfoType, bool)`

GetEventSummaryOk returns a tuple with the EventSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventSummary

`func (o *EventSummariesInfoType) SetEventSummary(v []EventSummaryInfoType)`

SetEventSummary sets EventSummary field to given value.

### HasEventSummary

`func (o *EventSummariesInfoType) HasEventSummary() bool`

HasEventSummary returns a boolean if a field has been set.

### GetTotalPages

`func (o *EventSummariesInfoType) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *EventSummariesInfoType) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *EventSummariesInfoType) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *EventSummariesInfoType) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *EventSummariesInfoType) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *EventSummariesInfoType) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *EventSummariesInfoType) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *EventSummariesInfoType) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *EventSummariesInfoType) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *EventSummariesInfoType) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *EventSummariesInfoType) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *EventSummariesInfoType) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *EventSummariesInfoType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *EventSummariesInfoType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *EventSummariesInfoType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *EventSummariesInfoType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *EventSummariesInfoType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *EventSummariesInfoType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *EventSummariesInfoType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *EventSummariesInfoType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *EventSummariesInfoType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *EventSummariesInfoType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *EventSummariesInfoType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *EventSummariesInfoType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


