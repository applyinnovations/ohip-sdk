# CustomChargeQuantityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Available** | Pointer to **bool** | Indicates if Custom Charges Exemption information is editable. | [optional] 
**Guests** | Pointer to [**[]CustomChargeGuestInfoType**](CustomChargeGuestInfoType.md) | List of guests. | [optional] 
**Quantity** | Pointer to **int32** | Contains number of Custom Charge Exemption for a day. | [optional] 

## Methods

### NewCustomChargeQuantityType

`func NewCustomChargeQuantityType() *CustomChargeQuantityType`

NewCustomChargeQuantityType instantiates a new CustomChargeQuantityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomChargeQuantityTypeWithDefaults

`func NewCustomChargeQuantityTypeWithDefaults() *CustomChargeQuantityType`

NewCustomChargeQuantityTypeWithDefaults instantiates a new CustomChargeQuantityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailable

`func (o *CustomChargeQuantityType) GetAvailable() bool`

GetAvailable returns the Available field if non-nil, zero value otherwise.

### GetAvailableOk

`func (o *CustomChargeQuantityType) GetAvailableOk() (*bool, bool)`

GetAvailableOk returns a tuple with the Available field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailable

`func (o *CustomChargeQuantityType) SetAvailable(v bool)`

SetAvailable sets Available field to given value.

### HasAvailable

`func (o *CustomChargeQuantityType) HasAvailable() bool`

HasAvailable returns a boolean if a field has been set.

### GetGuests

`func (o *CustomChargeQuantityType) GetGuests() []CustomChargeGuestInfoType`

GetGuests returns the Guests field if non-nil, zero value otherwise.

### GetGuestsOk

`func (o *CustomChargeQuantityType) GetGuestsOk() (*[]CustomChargeGuestInfoType, bool)`

GetGuestsOk returns a tuple with the Guests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuests

`func (o *CustomChargeQuantityType) SetGuests(v []CustomChargeGuestInfoType)`

SetGuests sets Guests field to given value.

### HasGuests

`func (o *CustomChargeQuantityType) HasGuests() bool`

HasGuests returns a boolean if a field has been set.

### GetQuantity

`func (o *CustomChargeQuantityType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *CustomChargeQuantityType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *CustomChargeQuantityType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *CustomChargeQuantityType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

