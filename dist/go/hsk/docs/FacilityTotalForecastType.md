# FacilityTotalForecastType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalFacilityCodes** | Pointer to [**[]FacilityCodeForecastType**](FacilityCodeForecastType.md) | Collection of facility codes with their forecasts. | [optional] 
**Totals** | Pointer to [**[]ForecastTotalsQuantityType**](ForecastTotalsQuantityType.md) | Collection of dates and their total quantities. | [optional] 

## Methods

### NewFacilityTotalForecastType

`func NewFacilityTotalForecastType() *FacilityTotalForecastType`

NewFacilityTotalForecastType instantiates a new FacilityTotalForecastType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFacilityTotalForecastTypeWithDefaults

`func NewFacilityTotalForecastTypeWithDefaults() *FacilityTotalForecastType`

NewFacilityTotalForecastTypeWithDefaults instantiates a new FacilityTotalForecastType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalFacilityCodes

`func (o *FacilityTotalForecastType) GetTotalFacilityCodes() []FacilityCodeForecastType`

GetTotalFacilityCodes returns the TotalFacilityCodes field if non-nil, zero value otherwise.

### GetTotalFacilityCodesOk

`func (o *FacilityTotalForecastType) GetTotalFacilityCodesOk() (*[]FacilityCodeForecastType, bool)`

GetTotalFacilityCodesOk returns a tuple with the TotalFacilityCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalFacilityCodes

`func (o *FacilityTotalForecastType) SetTotalFacilityCodes(v []FacilityCodeForecastType)`

SetTotalFacilityCodes sets TotalFacilityCodes field to given value.

### HasTotalFacilityCodes

`func (o *FacilityTotalForecastType) HasTotalFacilityCodes() bool`

HasTotalFacilityCodes returns a boolean if a field has been set.

### GetTotals

`func (o *FacilityTotalForecastType) GetTotals() []ForecastTotalsQuantityType`

GetTotals returns the Totals field if non-nil, zero value otherwise.

### GetTotalsOk

`func (o *FacilityTotalForecastType) GetTotalsOk() (*[]ForecastTotalsQuantityType, bool)`

GetTotalsOk returns a tuple with the Totals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotals

`func (o *FacilityTotalForecastType) SetTotals(v []ForecastTotalsQuantityType)`

SetTotals sets Totals field to given value.

### HasTotals

`func (o *FacilityTotalForecastType) HasTotals() bool`

HasTotals returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


