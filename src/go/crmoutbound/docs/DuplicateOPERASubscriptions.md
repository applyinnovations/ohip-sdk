# DuplicateOPERASubscriptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DuplicateOPERASubscriptionsList** | Pointer to [**DuplicateOPERASubscriptionsListType**](DuplicateOPERASubscriptionsListType.md) |  | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**PageNumber** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**MaxFetchCount** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 

## Methods

### NewDuplicateOPERASubscriptions

`func NewDuplicateOPERASubscriptions() *DuplicateOPERASubscriptions`

NewDuplicateOPERASubscriptions instantiates a new DuplicateOPERASubscriptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDuplicateOPERASubscriptionsWithDefaults

`func NewDuplicateOPERASubscriptionsWithDefaults() *DuplicateOPERASubscriptions`

NewDuplicateOPERASubscriptionsWithDefaults instantiates a new DuplicateOPERASubscriptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDuplicateOPERASubscriptionsList

`func (o *DuplicateOPERASubscriptions) GetDuplicateOPERASubscriptionsList() DuplicateOPERASubscriptionsListType`

GetDuplicateOPERASubscriptionsList returns the DuplicateOPERASubscriptionsList field if non-nil, zero value otherwise.

### GetDuplicateOPERASubscriptionsListOk

`func (o *DuplicateOPERASubscriptions) GetDuplicateOPERASubscriptionsListOk() (*DuplicateOPERASubscriptionsListType, bool)`

GetDuplicateOPERASubscriptionsListOk returns a tuple with the DuplicateOPERASubscriptionsList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuplicateOPERASubscriptionsList

`func (o *DuplicateOPERASubscriptions) SetDuplicateOPERASubscriptionsList(v DuplicateOPERASubscriptionsListType)`

SetDuplicateOPERASubscriptionsList sets DuplicateOPERASubscriptionsList field to given value.

### HasDuplicateOPERASubscriptionsList

`func (o *DuplicateOPERASubscriptions) HasDuplicateOPERASubscriptionsList() bool`

HasDuplicateOPERASubscriptionsList returns a boolean if a field has been set.

### GetTotalPages

`func (o *DuplicateOPERASubscriptions) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *DuplicateOPERASubscriptions) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *DuplicateOPERASubscriptions) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *DuplicateOPERASubscriptions) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetPageNumber

`func (o *DuplicateOPERASubscriptions) GetPageNumber() int32`

GetPageNumber returns the PageNumber field if non-nil, zero value otherwise.

### GetPageNumberOk

`func (o *DuplicateOPERASubscriptions) GetPageNumberOk() (*int32, bool)`

GetPageNumberOk returns a tuple with the PageNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageNumber

`func (o *DuplicateOPERASubscriptions) SetPageNumber(v int32)`

SetPageNumber sets PageNumber field to given value.

### HasPageNumber

`func (o *DuplicateOPERASubscriptions) HasPageNumber() bool`

HasPageNumber returns a boolean if a field has been set.

### GetMaxFetchCount

`func (o *DuplicateOPERASubscriptions) GetMaxFetchCount() int32`

GetMaxFetchCount returns the MaxFetchCount field if non-nil, zero value otherwise.

### GetMaxFetchCountOk

`func (o *DuplicateOPERASubscriptions) GetMaxFetchCountOk() (*int32, bool)`

GetMaxFetchCountOk returns a tuple with the MaxFetchCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxFetchCount

`func (o *DuplicateOPERASubscriptions) SetMaxFetchCount(v int32)`

SetMaxFetchCount sets MaxFetchCount field to given value.

### HasMaxFetchCount

`func (o *DuplicateOPERASubscriptions) HasMaxFetchCount() bool`

HasMaxFetchCount returns a boolean if a field has been set.

### GetAllRowsFetched

`func (o *DuplicateOPERASubscriptions) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *DuplicateOPERASubscriptions) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *DuplicateOPERASubscriptions) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *DuplicateOPERASubscriptions) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetTotalRows

`func (o *DuplicateOPERASubscriptions) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *DuplicateOPERASubscriptions) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *DuplicateOPERASubscriptions) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *DuplicateOPERASubscriptions) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.

### GetLinks

`func (o *DuplicateOPERASubscriptions) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DuplicateOPERASubscriptions) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DuplicateOPERASubscriptions) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DuplicateOPERASubscriptions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


