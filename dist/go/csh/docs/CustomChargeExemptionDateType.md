# CustomChargeExemptionDateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | Contains Custom Charge Exemption date. | [optional] 
**Quantity** | Pointer to **int32** | Contains number of Custom Charge Exemption for a day. | [optional] 
**Guests** | Pointer to [**[]CustomChargeGuestInfoType**](CustomChargeGuestInfoType.md) | List of guests. | [optional] 

## Methods

### NewCustomChargeExemptionDateType

`func NewCustomChargeExemptionDateType() *CustomChargeExemptionDateType`

NewCustomChargeExemptionDateType instantiates a new CustomChargeExemptionDateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomChargeExemptionDateTypeWithDefaults

`func NewCustomChargeExemptionDateTypeWithDefaults() *CustomChargeExemptionDateType`

NewCustomChargeExemptionDateTypeWithDefaults instantiates a new CustomChargeExemptionDateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *CustomChargeExemptionDateType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *CustomChargeExemptionDateType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *CustomChargeExemptionDateType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *CustomChargeExemptionDateType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetQuantity

`func (o *CustomChargeExemptionDateType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *CustomChargeExemptionDateType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *CustomChargeExemptionDateType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *CustomChargeExemptionDateType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetGuests

`func (o *CustomChargeExemptionDateType) GetGuests() []CustomChargeGuestInfoType`

GetGuests returns the Guests field if non-nil, zero value otherwise.

### GetGuestsOk

`func (o *CustomChargeExemptionDateType) GetGuestsOk() (*[]CustomChargeGuestInfoType, bool)`

GetGuestsOk returns a tuple with the Guests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuests

`func (o *CustomChargeExemptionDateType) SetGuests(v []CustomChargeGuestInfoType)`

SetGuests sets Guests field to given value.

### HasGuests

`func (o *CustomChargeExemptionDateType) HasGuests() bool`

HasGuests returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


