# CompanyProfileTypeURLs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**URLInfo** | Pointer to [**[]URLInfoType**](URLInfoType.md) | Collection of Detailed information on web url/address for the customer. | [optional] 

## Methods

### NewCompanyProfileTypeURLs

`func NewCompanyProfileTypeURLs() *CompanyProfileTypeURLs`

NewCompanyProfileTypeURLs instantiates a new CompanyProfileTypeURLs object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompanyProfileTypeURLsWithDefaults

`func NewCompanyProfileTypeURLsWithDefaults() *CompanyProfileTypeURLs`

NewCompanyProfileTypeURLsWithDefaults instantiates a new CompanyProfileTypeURLs object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *CompanyProfileTypeURLs) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CompanyProfileTypeURLs) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CompanyProfileTypeURLs) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CompanyProfileTypeURLs) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *CompanyProfileTypeURLs) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *CompanyProfileTypeURLs) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *CompanyProfileTypeURLs) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *CompanyProfileTypeURLs) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *CompanyProfileTypeURLs) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CompanyProfileTypeURLs) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CompanyProfileTypeURLs) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CompanyProfileTypeURLs) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetURLInfo

`func (o *CompanyProfileTypeURLs) GetURLInfo() []URLInfoType`

GetURLInfo returns the URLInfo field if non-nil, zero value otherwise.

### GetURLInfoOk

`func (o *CompanyProfileTypeURLs) GetURLInfoOk() (*[]URLInfoType, bool)`

GetURLInfoOk returns a tuple with the URLInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetURLInfo

`func (o *CompanyProfileTypeURLs) SetURLInfo(v []URLInfoType)`

SetURLInfo sets URLInfo field to given value.

### HasURLInfo

`func (o *CompanyProfileTypeURLs) HasURLInfo() bool`

HasURLInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


