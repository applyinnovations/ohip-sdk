# RatesSearchType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorporateRates** | Pointer to [**CorporateRatesSearchType**](CorporateRatesSearchType.md) |  | [optional] 
**RatePlanCodes** | Pointer to **[]string** | Available Rate Plan codes whose availability is requested. | [optional] 

## Methods

### NewRatesSearchType

`func NewRatesSearchType() *RatesSearchType`

NewRatesSearchType instantiates a new RatesSearchType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatesSearchTypeWithDefaults

`func NewRatesSearchTypeWithDefaults() *RatesSearchType`

NewRatesSearchTypeWithDefaults instantiates a new RatesSearchType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorporateRates

`func (o *RatesSearchType) GetCorporateRates() CorporateRatesSearchType`

GetCorporateRates returns the CorporateRates field if non-nil, zero value otherwise.

### GetCorporateRatesOk

`func (o *RatesSearchType) GetCorporateRatesOk() (*CorporateRatesSearchType, bool)`

GetCorporateRatesOk returns a tuple with the CorporateRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorporateRates

`func (o *RatesSearchType) SetCorporateRates(v CorporateRatesSearchType)`

SetCorporateRates sets CorporateRates field to given value.

### HasCorporateRates

`func (o *RatesSearchType) HasCorporateRates() bool`

HasCorporateRates returns a boolean if a field has been set.

### GetRatePlanCodes

`func (o *RatesSearchType) GetRatePlanCodes() []string`

GetRatePlanCodes returns the RatePlanCodes field if non-nil, zero value otherwise.

### GetRatePlanCodesOk

`func (o *RatesSearchType) GetRatePlanCodesOk() (*[]string, bool)`

GetRatePlanCodesOk returns a tuple with the RatePlanCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCodes

`func (o *RatesSearchType) SetRatePlanCodes(v []string)`

SetRatePlanCodes sets RatePlanCodes field to given value.

### HasRatePlanCodes

`func (o *RatesSearchType) HasRatePlanCodes() bool`

HasRatePlanCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


