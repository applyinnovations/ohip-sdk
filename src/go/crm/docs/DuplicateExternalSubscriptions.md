# DuplicateExternalSubscriptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**DuplicateExternalSubscriptionsList** | Pointer to [**DuplicateExternalSubscriptionsListType**](DuplicateExternalSubscriptionsListType.md) |  | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewDuplicateExternalSubscriptions

`func NewDuplicateExternalSubscriptions() *DuplicateExternalSubscriptions`

NewDuplicateExternalSubscriptions instantiates a new DuplicateExternalSubscriptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDuplicateExternalSubscriptionsWithDefaults

`func NewDuplicateExternalSubscriptionsWithDefaults() *DuplicateExternalSubscriptions`

NewDuplicateExternalSubscriptionsWithDefaults instantiates a new DuplicateExternalSubscriptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *DuplicateExternalSubscriptions) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *DuplicateExternalSubscriptions) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *DuplicateExternalSubscriptions) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *DuplicateExternalSubscriptions) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetDuplicateExternalSubscriptionsList

`func (o *DuplicateExternalSubscriptions) GetDuplicateExternalSubscriptionsList() DuplicateExternalSubscriptionsListType`

GetDuplicateExternalSubscriptionsList returns the DuplicateExternalSubscriptionsList field if non-nil, zero value otherwise.

### GetDuplicateExternalSubscriptionsListOk

`func (o *DuplicateExternalSubscriptions) GetDuplicateExternalSubscriptionsListOk() (*DuplicateExternalSubscriptionsListType, bool)`

GetDuplicateExternalSubscriptionsListOk returns a tuple with the DuplicateExternalSubscriptionsList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuplicateExternalSubscriptionsList

`func (o *DuplicateExternalSubscriptions) SetDuplicateExternalSubscriptionsList(v DuplicateExternalSubscriptionsListType)`

SetDuplicateExternalSubscriptionsList sets DuplicateExternalSubscriptionsList field to given value.

### HasDuplicateExternalSubscriptionsList

`func (o *DuplicateExternalSubscriptions) HasDuplicateExternalSubscriptionsList() bool`

HasDuplicateExternalSubscriptionsList returns a boolean if a field has been set.

### GetHasMore

`func (o *DuplicateExternalSubscriptions) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *DuplicateExternalSubscriptions) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *DuplicateExternalSubscriptions) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *DuplicateExternalSubscriptions) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *DuplicateExternalSubscriptions) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *DuplicateExternalSubscriptions) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *DuplicateExternalSubscriptions) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *DuplicateExternalSubscriptions) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *DuplicateExternalSubscriptions) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DuplicateExternalSubscriptions) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DuplicateExternalSubscriptions) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DuplicateExternalSubscriptions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *DuplicateExternalSubscriptions) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *DuplicateExternalSubscriptions) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *DuplicateExternalSubscriptions) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *DuplicateExternalSubscriptions) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *DuplicateExternalSubscriptions) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *DuplicateExternalSubscriptions) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *DuplicateExternalSubscriptions) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *DuplicateExternalSubscriptions) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *DuplicateExternalSubscriptions) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *DuplicateExternalSubscriptions) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *DuplicateExternalSubscriptions) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *DuplicateExternalSubscriptions) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *DuplicateExternalSubscriptions) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DuplicateExternalSubscriptions) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DuplicateExternalSubscriptions) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DuplicateExternalSubscriptions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


