# CompanyProfileTypeGdsNegotiatedRates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GdsNegotiatedRate** | Pointer to [**[]GdsNegotiatedType**](GdsNegotiatedType.md) | Collection of Detailed information on channel negotiated rates for the profile. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewCompanyProfileTypeGdsNegotiatedRates

`func NewCompanyProfileTypeGdsNegotiatedRates() *CompanyProfileTypeGdsNegotiatedRates`

NewCompanyProfileTypeGdsNegotiatedRates instantiates a new CompanyProfileTypeGdsNegotiatedRates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompanyProfileTypeGdsNegotiatedRatesWithDefaults

`func NewCompanyProfileTypeGdsNegotiatedRatesWithDefaults() *CompanyProfileTypeGdsNegotiatedRates`

NewCompanyProfileTypeGdsNegotiatedRatesWithDefaults instantiates a new CompanyProfileTypeGdsNegotiatedRates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGdsNegotiatedRate

`func (o *CompanyProfileTypeGdsNegotiatedRates) GetGdsNegotiatedRate() []GdsNegotiatedType`

GetGdsNegotiatedRate returns the GdsNegotiatedRate field if non-nil, zero value otherwise.

### GetGdsNegotiatedRateOk

`func (o *CompanyProfileTypeGdsNegotiatedRates) GetGdsNegotiatedRateOk() (*[]GdsNegotiatedType, bool)`

GetGdsNegotiatedRateOk returns a tuple with the GdsNegotiatedRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGdsNegotiatedRate

`func (o *CompanyProfileTypeGdsNegotiatedRates) SetGdsNegotiatedRate(v []GdsNegotiatedType)`

SetGdsNegotiatedRate sets GdsNegotiatedRate field to given value.

### HasGdsNegotiatedRate

`func (o *CompanyProfileTypeGdsNegotiatedRates) HasGdsNegotiatedRate() bool`

HasGdsNegotiatedRate returns a boolean if a field has been set.

### GetHasMore

`func (o *CompanyProfileTypeGdsNegotiatedRates) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *CompanyProfileTypeGdsNegotiatedRates) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *CompanyProfileTypeGdsNegotiatedRates) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *CompanyProfileTypeGdsNegotiatedRates) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *CompanyProfileTypeGdsNegotiatedRates) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CompanyProfileTypeGdsNegotiatedRates) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CompanyProfileTypeGdsNegotiatedRates) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CompanyProfileTypeGdsNegotiatedRates) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *CompanyProfileTypeGdsNegotiatedRates) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CompanyProfileTypeGdsNegotiatedRates) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CompanyProfileTypeGdsNegotiatedRates) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CompanyProfileTypeGdsNegotiatedRates) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


