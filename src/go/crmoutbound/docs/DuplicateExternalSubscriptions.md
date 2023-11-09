# DuplicateExternalSubscriptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DuplicateExternalSubscriptionsList** | Pointer to [**DuplicateExternalSubscriptionsListType**](DuplicateExternalSubscriptionsListType.md) |  | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**PageNumber** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**MaxFetchCount** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 

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

### GetPageNumber

`func (o *DuplicateExternalSubscriptions) GetPageNumber() int32`

GetPageNumber returns the PageNumber field if non-nil, zero value otherwise.

### GetPageNumberOk

`func (o *DuplicateExternalSubscriptions) GetPageNumberOk() (*int32, bool)`

GetPageNumberOk returns a tuple with the PageNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageNumber

`func (o *DuplicateExternalSubscriptions) SetPageNumber(v int32)`

SetPageNumber sets PageNumber field to given value.

### HasPageNumber

`func (o *DuplicateExternalSubscriptions) HasPageNumber() bool`

HasPageNumber returns a boolean if a field has been set.

### GetMaxFetchCount

`func (o *DuplicateExternalSubscriptions) GetMaxFetchCount() int32`

GetMaxFetchCount returns the MaxFetchCount field if non-nil, zero value otherwise.

### GetMaxFetchCountOk

`func (o *DuplicateExternalSubscriptions) GetMaxFetchCountOk() (*int32, bool)`

GetMaxFetchCountOk returns a tuple with the MaxFetchCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxFetchCount

`func (o *DuplicateExternalSubscriptions) SetMaxFetchCount(v int32)`

SetMaxFetchCount sets MaxFetchCount field to given value.

### HasMaxFetchCount

`func (o *DuplicateExternalSubscriptions) HasMaxFetchCount() bool`

HasMaxFetchCount returns a boolean if a field has been set.

### GetAllRowsFetched

`func (o *DuplicateExternalSubscriptions) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *DuplicateExternalSubscriptions) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *DuplicateExternalSubscriptions) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *DuplicateExternalSubscriptions) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetTotalRows

`func (o *DuplicateExternalSubscriptions) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *DuplicateExternalSubscriptions) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *DuplicateExternalSubscriptions) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *DuplicateExternalSubscriptions) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


