# RatePlanBasedOnRateTypeBARBasedRate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BARBaseAmount** | Pointer to **float32** | Base Amount used for BAR based rate calculation. | [optional] 
**CompareWithRateSchedules** | Pointer to **bool** | While showing availability, do system need to compare the static rates defined for the rate with dynamically computed BAR based rate pricing? If true, availability shows lower of the these two pricing. If false, availabilty shows the dynamically calucated pricing. | [optional] 
**DefaultToHighestBar** | Pointer to **bool** | While showing availability, in case all the BAR rates are closed whether to calculate the rate amount based on highest BAR instead of defaulting to its own rate schedule. If false, availability shows rates from its own rate schedule. | [optional] 
**FlatOrPercentage** | Pointer to **string** | Flat or Percentage (FLT/PCT) indicator. | [optional] 
**Rounding** | Pointer to **string** | Rounding style used for the calculated rate amounts. Valid values are U,D,N,C,F which means Up, Down, None, Up-Keep Decimal, Down - Keep Decimal. | [optional] 

## Methods

### NewRatePlanBasedOnRateTypeBARBasedRate

`func NewRatePlanBasedOnRateTypeBARBasedRate() *RatePlanBasedOnRateTypeBARBasedRate`

NewRatePlanBasedOnRateTypeBARBasedRate instantiates a new RatePlanBasedOnRateTypeBARBasedRate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanBasedOnRateTypeBARBasedRateWithDefaults

`func NewRatePlanBasedOnRateTypeBARBasedRateWithDefaults() *RatePlanBasedOnRateTypeBARBasedRate`

NewRatePlanBasedOnRateTypeBARBasedRateWithDefaults instantiates a new RatePlanBasedOnRateTypeBARBasedRate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBARBaseAmount

`func (o *RatePlanBasedOnRateTypeBARBasedRate) GetBARBaseAmount() float32`

GetBARBaseAmount returns the BARBaseAmount field if non-nil, zero value otherwise.

### GetBARBaseAmountOk

`func (o *RatePlanBasedOnRateTypeBARBasedRate) GetBARBaseAmountOk() (*float32, bool)`

GetBARBaseAmountOk returns a tuple with the BARBaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBARBaseAmount

`func (o *RatePlanBasedOnRateTypeBARBasedRate) SetBARBaseAmount(v float32)`

SetBARBaseAmount sets BARBaseAmount field to given value.

### HasBARBaseAmount

`func (o *RatePlanBasedOnRateTypeBARBasedRate) HasBARBaseAmount() bool`

HasBARBaseAmount returns a boolean if a field has been set.

### GetCompareWithRateSchedules

`func (o *RatePlanBasedOnRateTypeBARBasedRate) GetCompareWithRateSchedules() bool`

GetCompareWithRateSchedules returns the CompareWithRateSchedules field if non-nil, zero value otherwise.

### GetCompareWithRateSchedulesOk

`func (o *RatePlanBasedOnRateTypeBARBasedRate) GetCompareWithRateSchedulesOk() (*bool, bool)`

GetCompareWithRateSchedulesOk returns a tuple with the CompareWithRateSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompareWithRateSchedules

`func (o *RatePlanBasedOnRateTypeBARBasedRate) SetCompareWithRateSchedules(v bool)`

SetCompareWithRateSchedules sets CompareWithRateSchedules field to given value.

### HasCompareWithRateSchedules

`func (o *RatePlanBasedOnRateTypeBARBasedRate) HasCompareWithRateSchedules() bool`

HasCompareWithRateSchedules returns a boolean if a field has been set.

### GetDefaultToHighestBar

`func (o *RatePlanBasedOnRateTypeBARBasedRate) GetDefaultToHighestBar() bool`

GetDefaultToHighestBar returns the DefaultToHighestBar field if non-nil, zero value otherwise.

### GetDefaultToHighestBarOk

`func (o *RatePlanBasedOnRateTypeBARBasedRate) GetDefaultToHighestBarOk() (*bool, bool)`

GetDefaultToHighestBarOk returns a tuple with the DefaultToHighestBar field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultToHighestBar

`func (o *RatePlanBasedOnRateTypeBARBasedRate) SetDefaultToHighestBar(v bool)`

SetDefaultToHighestBar sets DefaultToHighestBar field to given value.

### HasDefaultToHighestBar

`func (o *RatePlanBasedOnRateTypeBARBasedRate) HasDefaultToHighestBar() bool`

HasDefaultToHighestBar returns a boolean if a field has been set.

### GetFlatOrPercentage

`func (o *RatePlanBasedOnRateTypeBARBasedRate) GetFlatOrPercentage() string`

GetFlatOrPercentage returns the FlatOrPercentage field if non-nil, zero value otherwise.

### GetFlatOrPercentageOk

`func (o *RatePlanBasedOnRateTypeBARBasedRate) GetFlatOrPercentageOk() (*string, bool)`

GetFlatOrPercentageOk returns a tuple with the FlatOrPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlatOrPercentage

`func (o *RatePlanBasedOnRateTypeBARBasedRate) SetFlatOrPercentage(v string)`

SetFlatOrPercentage sets FlatOrPercentage field to given value.

### HasFlatOrPercentage

`func (o *RatePlanBasedOnRateTypeBARBasedRate) HasFlatOrPercentage() bool`

HasFlatOrPercentage returns a boolean if a field has been set.

### GetRounding

`func (o *RatePlanBasedOnRateTypeBARBasedRate) GetRounding() string`

GetRounding returns the Rounding field if non-nil, zero value otherwise.

### GetRoundingOk

`func (o *RatePlanBasedOnRateTypeBARBasedRate) GetRoundingOk() (*string, bool)`

GetRoundingOk returns a tuple with the Rounding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRounding

`func (o *RatePlanBasedOnRateTypeBARBasedRate) SetRounding(v string)`

SetRounding sets Rounding field to given value.

### HasRounding

`func (o *RatePlanBasedOnRateTypeBARBasedRate) HasRounding() bool`

HasRounding returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


