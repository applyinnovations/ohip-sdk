# ProfileTypeURLs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**URLInfo** | Pointer to [**[]URLInfoType**](URLInfoType.md) | Collection of Detailed information on web url/address for the customer. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewProfileTypeURLs

`func NewProfileTypeURLs() *ProfileTypeURLs`

NewProfileTypeURLs instantiates a new ProfileTypeURLs object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeURLsWithDefaults

`func NewProfileTypeURLsWithDefaults() *ProfileTypeURLs`

NewProfileTypeURLsWithDefaults instantiates a new ProfileTypeURLs object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetURLInfo

`func (o *ProfileTypeURLs) GetURLInfo() []URLInfoType`

GetURLInfo returns the URLInfo field if non-nil, zero value otherwise.

### GetURLInfoOk

`func (o *ProfileTypeURLs) GetURLInfoOk() (*[]URLInfoType, bool)`

GetURLInfoOk returns a tuple with the URLInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetURLInfo

`func (o *ProfileTypeURLs) SetURLInfo(v []URLInfoType)`

SetURLInfo sets URLInfo field to given value.

### HasURLInfo

`func (o *ProfileTypeURLs) HasURLInfo() bool`

HasURLInfo returns a boolean if a field has been set.

### GetHasMore

`func (o *ProfileTypeURLs) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ProfileTypeURLs) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ProfileTypeURLs) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ProfileTypeURLs) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ProfileTypeURLs) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfileTypeURLs) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfileTypeURLs) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfileTypeURLs) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *ProfileTypeURLs) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfileTypeURLs) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfileTypeURLs) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfileTypeURLs) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


