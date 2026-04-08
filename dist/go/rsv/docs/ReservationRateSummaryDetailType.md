# ReservationRateSummaryDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SummaryDate** | Pointer to **string** | Stay date for which revenue calculation is done. | [optional] 
**Revenue** | Pointer to **float32** | Base Amount of rate. | [optional] 
**Package** | Pointer to **float32** | Amount of an additional product or service that is sold as part of the rate or in addition to the rate. | [optional] 
**Tax** | Pointer to **float32** | Amount of tax generated separately on the revenue and package. | [optional] 
**Gross** | Pointer to **float32** | Amount of revenue and package excluding tax. | [optional] 
**Net** | Pointer to **float32** | Amount of revenue and package including tax. | [optional] 
**RatePlanCode** | Pointer to **string** | Rate code calculation is based on. | [optional] 
**RevenueSimulationDate** | Pointer to **string** | Date revenue calculation is based on. | [optional] 
**CurrencyCode** | Pointer to **string** | Currency revenue calculation is based on. | [optional] 
**RateSuppressed** | Pointer to **bool** | Indicates if the rate is to be hidden. | [optional] 

## Methods

### NewReservationRateSummaryDetailType

`func NewReservationRateSummaryDetailType() *ReservationRateSummaryDetailType`

NewReservationRateSummaryDetailType instantiates a new ReservationRateSummaryDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationRateSummaryDetailTypeWithDefaults

`func NewReservationRateSummaryDetailTypeWithDefaults() *ReservationRateSummaryDetailType`

NewReservationRateSummaryDetailTypeWithDefaults instantiates a new ReservationRateSummaryDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSummaryDate

`func (o *ReservationRateSummaryDetailType) GetSummaryDate() string`

GetSummaryDate returns the SummaryDate field if non-nil, zero value otherwise.

### GetSummaryDateOk

`func (o *ReservationRateSummaryDetailType) GetSummaryDateOk() (*string, bool)`

GetSummaryDateOk returns a tuple with the SummaryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummaryDate

`func (o *ReservationRateSummaryDetailType) SetSummaryDate(v string)`

SetSummaryDate sets SummaryDate field to given value.

### HasSummaryDate

`func (o *ReservationRateSummaryDetailType) HasSummaryDate() bool`

HasSummaryDate returns a boolean if a field has been set.

### GetRevenue

`func (o *ReservationRateSummaryDetailType) GetRevenue() float32`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *ReservationRateSummaryDetailType) GetRevenueOk() (*float32, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *ReservationRateSummaryDetailType) SetRevenue(v float32)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *ReservationRateSummaryDetailType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetPackage

`func (o *ReservationRateSummaryDetailType) GetPackage() float32`

GetPackage returns the Package field if non-nil, zero value otherwise.

### GetPackageOk

`func (o *ReservationRateSummaryDetailType) GetPackageOk() (*float32, bool)`

GetPackageOk returns a tuple with the Package field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackage

`func (o *ReservationRateSummaryDetailType) SetPackage(v float32)`

SetPackage sets Package field to given value.

### HasPackage

`func (o *ReservationRateSummaryDetailType) HasPackage() bool`

HasPackage returns a boolean if a field has been set.

### GetTax

`func (o *ReservationRateSummaryDetailType) GetTax() float32`

GetTax returns the Tax field if non-nil, zero value otherwise.

### GetTaxOk

`func (o *ReservationRateSummaryDetailType) GetTaxOk() (*float32, bool)`

GetTaxOk returns a tuple with the Tax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTax

`func (o *ReservationRateSummaryDetailType) SetTax(v float32)`

SetTax sets Tax field to given value.

### HasTax

`func (o *ReservationRateSummaryDetailType) HasTax() bool`

HasTax returns a boolean if a field has been set.

### GetGross

`func (o *ReservationRateSummaryDetailType) GetGross() float32`

GetGross returns the Gross field if non-nil, zero value otherwise.

### GetGrossOk

`func (o *ReservationRateSummaryDetailType) GetGrossOk() (*float32, bool)`

GetGrossOk returns a tuple with the Gross field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGross

`func (o *ReservationRateSummaryDetailType) SetGross(v float32)`

SetGross sets Gross field to given value.

### HasGross

`func (o *ReservationRateSummaryDetailType) HasGross() bool`

HasGross returns a boolean if a field has been set.

### GetNet

`func (o *ReservationRateSummaryDetailType) GetNet() float32`

GetNet returns the Net field if non-nil, zero value otherwise.

### GetNetOk

`func (o *ReservationRateSummaryDetailType) GetNetOk() (*float32, bool)`

GetNetOk returns a tuple with the Net field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNet

`func (o *ReservationRateSummaryDetailType) SetNet(v float32)`

SetNet sets Net field to given value.

### HasNet

`func (o *ReservationRateSummaryDetailType) HasNet() bool`

HasNet returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *ReservationRateSummaryDetailType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *ReservationRateSummaryDetailType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *ReservationRateSummaryDetailType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *ReservationRateSummaryDetailType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRevenueSimulationDate

`func (o *ReservationRateSummaryDetailType) GetRevenueSimulationDate() string`

GetRevenueSimulationDate returns the RevenueSimulationDate field if non-nil, zero value otherwise.

### GetRevenueSimulationDateOk

`func (o *ReservationRateSummaryDetailType) GetRevenueSimulationDateOk() (*string, bool)`

GetRevenueSimulationDateOk returns a tuple with the RevenueSimulationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueSimulationDate

`func (o *ReservationRateSummaryDetailType) SetRevenueSimulationDate(v string)`

SetRevenueSimulationDate sets RevenueSimulationDate field to given value.

### HasRevenueSimulationDate

`func (o *ReservationRateSummaryDetailType) HasRevenueSimulationDate() bool`

HasRevenueSimulationDate returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *ReservationRateSummaryDetailType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *ReservationRateSummaryDetailType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *ReservationRateSummaryDetailType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *ReservationRateSummaryDetailType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetRateSuppressed

`func (o *ReservationRateSummaryDetailType) GetRateSuppressed() bool`

GetRateSuppressed returns the RateSuppressed field if non-nil, zero value otherwise.

### GetRateSuppressedOk

`func (o *ReservationRateSummaryDetailType) GetRateSuppressedOk() (*bool, bool)`

GetRateSuppressedOk returns a tuple with the RateSuppressed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateSuppressed

`func (o *ReservationRateSummaryDetailType) SetRateSuppressed(v bool)`

SetRateSuppressed sets RateSuppressed field to given value.

### HasRateSuppressed

`func (o *ReservationRateSummaryDetailType) HasRateSuppressed() bool`

HasRateSuppressed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


