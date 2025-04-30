# EventChangesByDateTimeSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventList** | Pointer to [**[]EventChangesByDateTimeSummaryType**](EventChangesByDateTimeSummaryType.md) | Collection of Catering Event changes by date and time. | [optional] 
**Offset** | Pointer to **int32** | Indicates the index of the next applicable set(page). | [optional] 
**Limit** | Pointer to **int32** | Indicates number of records the API can return as per the API request limit sent. A maximum of 200 records can be only returned at a time. | [optional] 
**Count** | Pointer to **int32** | Indicates number of records the API has returned actually as per the API request criteria. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether there are more records available to be returned as per the API request criteria or not. | [optional] 
**TotalResults** | Pointer to **int32** | Indicates total number of records available that can be returned as per the API request criteria. | [optional] 

## Methods

### NewEventChangesByDateTimeSummary

`func NewEventChangesByDateTimeSummary() *EventChangesByDateTimeSummary`

NewEventChangesByDateTimeSummary instantiates a new EventChangesByDateTimeSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventChangesByDateTimeSummaryWithDefaults

`func NewEventChangesByDateTimeSummaryWithDefaults() *EventChangesByDateTimeSummary`

NewEventChangesByDateTimeSummaryWithDefaults instantiates a new EventChangesByDateTimeSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventList

`func (o *EventChangesByDateTimeSummary) GetEventList() []EventChangesByDateTimeSummaryType`

GetEventList returns the EventList field if non-nil, zero value otherwise.

### GetEventListOk

`func (o *EventChangesByDateTimeSummary) GetEventListOk() (*[]EventChangesByDateTimeSummaryType, bool)`

GetEventListOk returns a tuple with the EventList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventList

`func (o *EventChangesByDateTimeSummary) SetEventList(v []EventChangesByDateTimeSummaryType)`

SetEventList sets EventList field to given value.

### HasEventList

`func (o *EventChangesByDateTimeSummary) HasEventList() bool`

HasEventList returns a boolean if a field has been set.

### GetOffset

`func (o *EventChangesByDateTimeSummary) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *EventChangesByDateTimeSummary) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *EventChangesByDateTimeSummary) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *EventChangesByDateTimeSummary) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *EventChangesByDateTimeSummary) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *EventChangesByDateTimeSummary) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *EventChangesByDateTimeSummary) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *EventChangesByDateTimeSummary) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetCount

`func (o *EventChangesByDateTimeSummary) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *EventChangesByDateTimeSummary) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *EventChangesByDateTimeSummary) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *EventChangesByDateTimeSummary) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *EventChangesByDateTimeSummary) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *EventChangesByDateTimeSummary) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *EventChangesByDateTimeSummary) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *EventChangesByDateTimeSummary) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *EventChangesByDateTimeSummary) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *EventChangesByDateTimeSummary) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *EventChangesByDateTimeSummary) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *EventChangesByDateTimeSummary) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


