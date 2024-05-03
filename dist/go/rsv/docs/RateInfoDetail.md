# RateInfoDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Packages** | Pointer to [**[]TotalType**](TotalType.md) | Package information for the rate code. | [optional] 
**RateSuppressed** | Pointer to **bool** | Indicates if the rate is to be hidden. | [optional] 
**Revenue** | Pointer to [**TotalType**](TotalType.md) |  | [optional] 

## Methods

### NewRateInfoDetail

`func NewRateInfoDetail() *RateInfoDetail`

NewRateInfoDetail instantiates a new RateInfoDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateInfoDetailWithDefaults

`func NewRateInfoDetailWithDefaults() *RateInfoDetail`

NewRateInfoDetailWithDefaults instantiates a new RateInfoDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPackages

`func (o *RateInfoDetail) GetPackages() []TotalType`

GetPackages returns the Packages field if non-nil, zero value otherwise.

### GetPackagesOk

`func (o *RateInfoDetail) GetPackagesOk() (*[]TotalType, bool)`

GetPackagesOk returns a tuple with the Packages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackages

`func (o *RateInfoDetail) SetPackages(v []TotalType)`

SetPackages sets Packages field to given value.

### HasPackages

`func (o *RateInfoDetail) HasPackages() bool`

HasPackages returns a boolean if a field has been set.

### GetRateSuppressed

`func (o *RateInfoDetail) GetRateSuppressed() bool`

GetRateSuppressed returns the RateSuppressed field if non-nil, zero value otherwise.

### GetRateSuppressedOk

`func (o *RateInfoDetail) GetRateSuppressedOk() (*bool, bool)`

GetRateSuppressedOk returns a tuple with the RateSuppressed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateSuppressed

`func (o *RateInfoDetail) SetRateSuppressed(v bool)`

SetRateSuppressed sets RateSuppressed field to given value.

### HasRateSuppressed

`func (o *RateInfoDetail) HasRateSuppressed() bool`

HasRateSuppressed returns a boolean if a field has been set.

### GetRevenue

`func (o *RateInfoDetail) GetRevenue() TotalType`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *RateInfoDetail) GetRevenueOk() (*TotalType, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *RateInfoDetail) SetRevenue(v TotalType)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *RateInfoDetail) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


