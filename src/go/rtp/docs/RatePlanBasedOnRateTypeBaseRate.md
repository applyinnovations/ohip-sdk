# RatePlanBasedOnRateTypeBaseRate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BaseAmount** | Pointer to **float32** | Base Amount used for base rate calculation. | [optional] 
**BasedOnRatePlan** | Pointer to **string** | Rate plan code used to base the rate on. | [optional] 
**DependentRatePlans** | Pointer to [**RatePlanCodeListType**](RatePlanCodeListType.md) |  | [optional] 
**FlatOrPercentage** | Pointer to **string** | Flat or Percentage (FLT/PCT) indicator. | [optional] 
**Rounding** | Pointer to **string** | Rounding style used for the calculated rate amounts. Valid values are U,D,N,C,F which means Up, Down, None, Up-Keep Decimal, Down - Keep Decimal. | [optional] 

## Methods

### NewRatePlanBasedOnRateTypeBaseRate

`func NewRatePlanBasedOnRateTypeBaseRate() *RatePlanBasedOnRateTypeBaseRate`

NewRatePlanBasedOnRateTypeBaseRate instantiates a new RatePlanBasedOnRateTypeBaseRate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanBasedOnRateTypeBaseRateWithDefaults

`func NewRatePlanBasedOnRateTypeBaseRateWithDefaults() *RatePlanBasedOnRateTypeBaseRate`

NewRatePlanBasedOnRateTypeBaseRateWithDefaults instantiates a new RatePlanBasedOnRateTypeBaseRate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBaseAmount

`func (o *RatePlanBasedOnRateTypeBaseRate) GetBaseAmount() float32`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *RatePlanBasedOnRateTypeBaseRate) GetBaseAmountOk() (*float32, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *RatePlanBasedOnRateTypeBaseRate) SetBaseAmount(v float32)`

SetBaseAmount sets BaseAmount field to given value.

### HasBaseAmount

`func (o *RatePlanBasedOnRateTypeBaseRate) HasBaseAmount() bool`

HasBaseAmount returns a boolean if a field has been set.

### GetBasedOnRatePlan

`func (o *RatePlanBasedOnRateTypeBaseRate) GetBasedOnRatePlan() string`

GetBasedOnRatePlan returns the BasedOnRatePlan field if non-nil, zero value otherwise.

### GetBasedOnRatePlanOk

`func (o *RatePlanBasedOnRateTypeBaseRate) GetBasedOnRatePlanOk() (*string, bool)`

GetBasedOnRatePlanOk returns a tuple with the BasedOnRatePlan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasedOnRatePlan

`func (o *RatePlanBasedOnRateTypeBaseRate) SetBasedOnRatePlan(v string)`

SetBasedOnRatePlan sets BasedOnRatePlan field to given value.

### HasBasedOnRatePlan

`func (o *RatePlanBasedOnRateTypeBaseRate) HasBasedOnRatePlan() bool`

HasBasedOnRatePlan returns a boolean if a field has been set.

### GetDependentRatePlans

`func (o *RatePlanBasedOnRateTypeBaseRate) GetDependentRatePlans() RatePlanCodeListType`

GetDependentRatePlans returns the DependentRatePlans field if non-nil, zero value otherwise.

### GetDependentRatePlansOk

`func (o *RatePlanBasedOnRateTypeBaseRate) GetDependentRatePlansOk() (*RatePlanCodeListType, bool)`

GetDependentRatePlansOk returns a tuple with the DependentRatePlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDependentRatePlans

`func (o *RatePlanBasedOnRateTypeBaseRate) SetDependentRatePlans(v RatePlanCodeListType)`

SetDependentRatePlans sets DependentRatePlans field to given value.

### HasDependentRatePlans

`func (o *RatePlanBasedOnRateTypeBaseRate) HasDependentRatePlans() bool`

HasDependentRatePlans returns a boolean if a field has been set.

### GetFlatOrPercentage

`func (o *RatePlanBasedOnRateTypeBaseRate) GetFlatOrPercentage() string`

GetFlatOrPercentage returns the FlatOrPercentage field if non-nil, zero value otherwise.

### GetFlatOrPercentageOk

`func (o *RatePlanBasedOnRateTypeBaseRate) GetFlatOrPercentageOk() (*string, bool)`

GetFlatOrPercentageOk returns a tuple with the FlatOrPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlatOrPercentage

`func (o *RatePlanBasedOnRateTypeBaseRate) SetFlatOrPercentage(v string)`

SetFlatOrPercentage sets FlatOrPercentage field to given value.

### HasFlatOrPercentage

`func (o *RatePlanBasedOnRateTypeBaseRate) HasFlatOrPercentage() bool`

HasFlatOrPercentage returns a boolean if a field has been set.

### GetRounding

`func (o *RatePlanBasedOnRateTypeBaseRate) GetRounding() string`

GetRounding returns the Rounding field if non-nil, zero value otherwise.

### GetRoundingOk

`func (o *RatePlanBasedOnRateTypeBaseRate) GetRoundingOk() (*string, bool)`

GetRoundingOk returns a tuple with the Rounding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRounding

`func (o *RatePlanBasedOnRateTypeBaseRate) SetRounding(v string)`

SetRounding sets Rounding field to given value.

### HasRounding

`func (o *RatePlanBasedOnRateTypeBaseRate) HasRounding() bool`

HasRounding returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


