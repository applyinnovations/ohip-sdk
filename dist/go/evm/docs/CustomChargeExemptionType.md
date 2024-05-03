# CustomChargeExemptionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomChargeDates** | Pointer to [**[]CustomChargeExemptionDateType**](CustomChargeExemptionDateType.md) | Contains List of Custom Charge Exemption information for a day. | [optional] 
**CustomChargeQuantity** | Pointer to [**CustomChargeQuantityType**](CustomChargeQuantityType.md) |  | [optional] 
**CustomChargesExemption** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**ExcludedDates** | Pointer to [**[]ExcludedDateType**](ExcludedDateType.md) | Contains list of dates which are valid for custom charge exemptions. | [optional] 
**Percentage** | Pointer to **float32** | Exemption Percentage | [optional] 
**PropertyExemption** | Pointer to **bool** | Flag specifying if custom charge exemptions is property level or not. | [optional] 

## Methods

### NewCustomChargeExemptionType

`func NewCustomChargeExemptionType() *CustomChargeExemptionType`

NewCustomChargeExemptionType instantiates a new CustomChargeExemptionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomChargeExemptionTypeWithDefaults

`func NewCustomChargeExemptionTypeWithDefaults() *CustomChargeExemptionType`

NewCustomChargeExemptionTypeWithDefaults instantiates a new CustomChargeExemptionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomChargeDates

`func (o *CustomChargeExemptionType) GetCustomChargeDates() []CustomChargeExemptionDateType`

GetCustomChargeDates returns the CustomChargeDates field if non-nil, zero value otherwise.

### GetCustomChargeDatesOk

`func (o *CustomChargeExemptionType) GetCustomChargeDatesOk() (*[]CustomChargeExemptionDateType, bool)`

GetCustomChargeDatesOk returns a tuple with the CustomChargeDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomChargeDates

`func (o *CustomChargeExemptionType) SetCustomChargeDates(v []CustomChargeExemptionDateType)`

SetCustomChargeDates sets CustomChargeDates field to given value.

### HasCustomChargeDates

`func (o *CustomChargeExemptionType) HasCustomChargeDates() bool`

HasCustomChargeDates returns a boolean if a field has been set.

### GetCustomChargeQuantity

`func (o *CustomChargeExemptionType) GetCustomChargeQuantity() CustomChargeQuantityType`

GetCustomChargeQuantity returns the CustomChargeQuantity field if non-nil, zero value otherwise.

### GetCustomChargeQuantityOk

`func (o *CustomChargeExemptionType) GetCustomChargeQuantityOk() (*CustomChargeQuantityType, bool)`

GetCustomChargeQuantityOk returns a tuple with the CustomChargeQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomChargeQuantity

`func (o *CustomChargeExemptionType) SetCustomChargeQuantity(v CustomChargeQuantityType)`

SetCustomChargeQuantity sets CustomChargeQuantity field to given value.

### HasCustomChargeQuantity

`func (o *CustomChargeExemptionType) HasCustomChargeQuantity() bool`

HasCustomChargeQuantity returns a boolean if a field has been set.

### GetCustomChargesExemption

`func (o *CustomChargeExemptionType) GetCustomChargesExemption() CodeDescriptionType`

GetCustomChargesExemption returns the CustomChargesExemption field if non-nil, zero value otherwise.

### GetCustomChargesExemptionOk

`func (o *CustomChargeExemptionType) GetCustomChargesExemptionOk() (*CodeDescriptionType, bool)`

GetCustomChargesExemptionOk returns a tuple with the CustomChargesExemption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomChargesExemption

`func (o *CustomChargeExemptionType) SetCustomChargesExemption(v CodeDescriptionType)`

SetCustomChargesExemption sets CustomChargesExemption field to given value.

### HasCustomChargesExemption

`func (o *CustomChargeExemptionType) HasCustomChargesExemption() bool`

HasCustomChargesExemption returns a boolean if a field has been set.

### GetExcludedDates

`func (o *CustomChargeExemptionType) GetExcludedDates() []ExcludedDateType`

GetExcludedDates returns the ExcludedDates field if non-nil, zero value otherwise.

### GetExcludedDatesOk

`func (o *CustomChargeExemptionType) GetExcludedDatesOk() (*[]ExcludedDateType, bool)`

GetExcludedDatesOk returns a tuple with the ExcludedDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedDates

`func (o *CustomChargeExemptionType) SetExcludedDates(v []ExcludedDateType)`

SetExcludedDates sets ExcludedDates field to given value.

### HasExcludedDates

`func (o *CustomChargeExemptionType) HasExcludedDates() bool`

HasExcludedDates returns a boolean if a field has been set.

### GetPercentage

`func (o *CustomChargeExemptionType) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *CustomChargeExemptionType) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *CustomChargeExemptionType) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *CustomChargeExemptionType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetPropertyExemption

`func (o *CustomChargeExemptionType) GetPropertyExemption() bool`

GetPropertyExemption returns the PropertyExemption field if non-nil, zero value otherwise.

### GetPropertyExemptionOk

`func (o *CustomChargeExemptionType) GetPropertyExemptionOk() (*bool, bool)`

GetPropertyExemptionOk returns a tuple with the PropertyExemption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyExemption

`func (o *CustomChargeExemptionType) SetPropertyExemption(v bool)`

SetPropertyExemption sets PropertyExemption field to given value.

### HasPropertyExemption

`func (o *CustomChargeExemptionType) HasPropertyExemption() bool`

HasPropertyExemption returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


