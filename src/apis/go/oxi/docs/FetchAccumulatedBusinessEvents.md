# FetchAccumulatedBusinessEvents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessEvents** | Pointer to [**[]AccumulatedBusinessEventType**](AccumulatedBusinessEventType.md) | List of accumulated business event messages | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchAccumulatedBusinessEvents

`func NewFetchAccumulatedBusinessEvents() *FetchAccumulatedBusinessEvents`

NewFetchAccumulatedBusinessEvents instantiates a new FetchAccumulatedBusinessEvents object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchAccumulatedBusinessEventsWithDefaults

`func NewFetchAccumulatedBusinessEventsWithDefaults() *FetchAccumulatedBusinessEvents`

NewFetchAccumulatedBusinessEventsWithDefaults instantiates a new FetchAccumulatedBusinessEvents object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessEvents

`func (o *FetchAccumulatedBusinessEvents) GetBusinessEvents() []AccumulatedBusinessEventType`

GetBusinessEvents returns the BusinessEvents field if non-nil, zero value otherwise.

### GetBusinessEventsOk

`func (o *FetchAccumulatedBusinessEvents) GetBusinessEventsOk() (*[]AccumulatedBusinessEventType, bool)`

GetBusinessEventsOk returns a tuple with the BusinessEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessEvents

`func (o *FetchAccumulatedBusinessEvents) SetBusinessEvents(v []AccumulatedBusinessEventType)`

SetBusinessEvents sets BusinessEvents field to given value.

### HasBusinessEvents

`func (o *FetchAccumulatedBusinessEvents) HasBusinessEvents() bool`

HasBusinessEvents returns a boolean if a field has been set.

### GetTotalPages

`func (o *FetchAccumulatedBusinessEvents) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *FetchAccumulatedBusinessEvents) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *FetchAccumulatedBusinessEvents) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *FetchAccumulatedBusinessEvents) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *FetchAccumulatedBusinessEvents) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *FetchAccumulatedBusinessEvents) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *FetchAccumulatedBusinessEvents) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *FetchAccumulatedBusinessEvents) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *FetchAccumulatedBusinessEvents) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *FetchAccumulatedBusinessEvents) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *FetchAccumulatedBusinessEvents) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *FetchAccumulatedBusinessEvents) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *FetchAccumulatedBusinessEvents) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *FetchAccumulatedBusinessEvents) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *FetchAccumulatedBusinessEvents) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *FetchAccumulatedBusinessEvents) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *FetchAccumulatedBusinessEvents) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *FetchAccumulatedBusinessEvents) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *FetchAccumulatedBusinessEvents) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *FetchAccumulatedBusinessEvents) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetLinks

`func (o *FetchAccumulatedBusinessEvents) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchAccumulatedBusinessEvents) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchAccumulatedBusinessEvents) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchAccumulatedBusinessEvents) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchAccumulatedBusinessEvents) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchAccumulatedBusinessEvents) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchAccumulatedBusinessEvents) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchAccumulatedBusinessEvents) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


