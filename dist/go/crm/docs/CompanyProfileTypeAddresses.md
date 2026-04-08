# CompanyProfileTypeAddresses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressInfo** | Pointer to [**[]AddressInfoType**](AddressInfoType.md) | Collection of Detailed information on an address for the customer. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewCompanyProfileTypeAddresses

`func NewCompanyProfileTypeAddresses() *CompanyProfileTypeAddresses`

NewCompanyProfileTypeAddresses instantiates a new CompanyProfileTypeAddresses object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompanyProfileTypeAddressesWithDefaults

`func NewCompanyProfileTypeAddressesWithDefaults() *CompanyProfileTypeAddresses`

NewCompanyProfileTypeAddressesWithDefaults instantiates a new CompanyProfileTypeAddresses object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddressInfo

`func (o *CompanyProfileTypeAddresses) GetAddressInfo() []AddressInfoType`

GetAddressInfo returns the AddressInfo field if non-nil, zero value otherwise.

### GetAddressInfoOk

`func (o *CompanyProfileTypeAddresses) GetAddressInfoOk() (*[]AddressInfoType, bool)`

GetAddressInfoOk returns a tuple with the AddressInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressInfo

`func (o *CompanyProfileTypeAddresses) SetAddressInfo(v []AddressInfoType)`

SetAddressInfo sets AddressInfo field to given value.

### HasAddressInfo

`func (o *CompanyProfileTypeAddresses) HasAddressInfo() bool`

HasAddressInfo returns a boolean if a field has been set.

### GetHasMore

`func (o *CompanyProfileTypeAddresses) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *CompanyProfileTypeAddresses) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *CompanyProfileTypeAddresses) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *CompanyProfileTypeAddresses) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *CompanyProfileTypeAddresses) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CompanyProfileTypeAddresses) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CompanyProfileTypeAddresses) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CompanyProfileTypeAddresses) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *CompanyProfileTypeAddresses) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CompanyProfileTypeAddresses) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CompanyProfileTypeAddresses) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CompanyProfileTypeAddresses) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


