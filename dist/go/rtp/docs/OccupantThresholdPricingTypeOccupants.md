# OccupantThresholdPricingTypeOccupants

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Threshold** | Pointer to **int32** | Threshold value, after it is reached the corresponding amount will be charged. | [optional] 
**Amount** | Pointer to **float32** | Amount to be charged after the threshold is reached. | [optional] 

## Methods

### NewOccupantThresholdPricingTypeOccupants

`func NewOccupantThresholdPricingTypeOccupants() *OccupantThresholdPricingTypeOccupants`

NewOccupantThresholdPricingTypeOccupants instantiates a new OccupantThresholdPricingTypeOccupants object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOccupantThresholdPricingTypeOccupantsWithDefaults

`func NewOccupantThresholdPricingTypeOccupantsWithDefaults() *OccupantThresholdPricingTypeOccupants`

NewOccupantThresholdPricingTypeOccupantsWithDefaults instantiates a new OccupantThresholdPricingTypeOccupants object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetThreshold

`func (o *OccupantThresholdPricingTypeOccupants) GetThreshold() int32`

GetThreshold returns the Threshold field if non-nil, zero value otherwise.

### GetThresholdOk

`func (o *OccupantThresholdPricingTypeOccupants) GetThresholdOk() (*int32, bool)`

GetThresholdOk returns a tuple with the Threshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreshold

`func (o *OccupantThresholdPricingTypeOccupants) SetThreshold(v int32)`

SetThreshold sets Threshold field to given value.

### HasThreshold

`func (o *OccupantThresholdPricingTypeOccupants) HasThreshold() bool`

HasThreshold returns a boolean if a field has been set.

### GetAmount

`func (o *OccupantThresholdPricingTypeOccupants) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *OccupantThresholdPricingTypeOccupants) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *OccupantThresholdPricingTypeOccupants) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *OccupantThresholdPricingTypeOccupants) HasAmount() bool`

HasAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


