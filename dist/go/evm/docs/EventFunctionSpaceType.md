# EventFunctionSpaceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FunctionSpaceCode** | Pointer to **string** | Function Space (event functionSpaceDetails) code. | [optional] 
**FunctionSpaceDescription** | Pointer to **string** | Function Space description. | [optional] 
**SetupCode** | Pointer to **string** | Setup style code. | [optional] 
**SetupDescription** | Pointer to **string** | Setup Style description. | [optional] 
**SetupTime** | Pointer to **int32** | Setup time in minutes. | [optional] 
**SetdownTime** | Pointer to **int32** | Setdown time in minutes. | [optional] 
**RentalCode** | Pointer to **string** | Rate Code for function space. | [optional] 
**RateDesc** | Pointer to **string** | Function Space Rate description. | [optional] 
**RentalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**DiscountPercentage** | Pointer to **float32** | Discount Percentage applied to Rent Amount. | [optional] 
**MinimumOccupancy** | Pointer to **int32** | Minimum Occupancy for the SetupCode of Catring Event. | [optional] 
**MaximumOccupancy** | Pointer to **int32** | Maximum Occupancy for the SetupCode of Catring Event. | [optional] 
**Shareable** | Pointer to **bool** | Flag to indicate if the event functionSpaceDetails is shareable. | [optional] 
**ComboSpace** | Pointer to **bool** | Flag to indicate if the function space is a combination functionSpaceDetails. | [optional] 
**ElementSpace** | Pointer to **bool** | Flag to indicate if the function space is an elementSpace of a comboSpace function space. | [optional] 

## Methods

### NewEventFunctionSpaceType

`func NewEventFunctionSpaceType() *EventFunctionSpaceType`

NewEventFunctionSpaceType instantiates a new EventFunctionSpaceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventFunctionSpaceTypeWithDefaults

`func NewEventFunctionSpaceTypeWithDefaults() *EventFunctionSpaceType`

NewEventFunctionSpaceTypeWithDefaults instantiates a new EventFunctionSpaceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFunctionSpaceCode

`func (o *EventFunctionSpaceType) GetFunctionSpaceCode() string`

GetFunctionSpaceCode returns the FunctionSpaceCode field if non-nil, zero value otherwise.

### GetFunctionSpaceCodeOk

`func (o *EventFunctionSpaceType) GetFunctionSpaceCodeOk() (*string, bool)`

GetFunctionSpaceCodeOk returns a tuple with the FunctionSpaceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaceCode

`func (o *EventFunctionSpaceType) SetFunctionSpaceCode(v string)`

SetFunctionSpaceCode sets FunctionSpaceCode field to given value.

### HasFunctionSpaceCode

`func (o *EventFunctionSpaceType) HasFunctionSpaceCode() bool`

HasFunctionSpaceCode returns a boolean if a field has been set.

### GetFunctionSpaceDescription

`func (o *EventFunctionSpaceType) GetFunctionSpaceDescription() string`

GetFunctionSpaceDescription returns the FunctionSpaceDescription field if non-nil, zero value otherwise.

### GetFunctionSpaceDescriptionOk

`func (o *EventFunctionSpaceType) GetFunctionSpaceDescriptionOk() (*string, bool)`

GetFunctionSpaceDescriptionOk returns a tuple with the FunctionSpaceDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaceDescription

`func (o *EventFunctionSpaceType) SetFunctionSpaceDescription(v string)`

SetFunctionSpaceDescription sets FunctionSpaceDescription field to given value.

### HasFunctionSpaceDescription

`func (o *EventFunctionSpaceType) HasFunctionSpaceDescription() bool`

HasFunctionSpaceDescription returns a boolean if a field has been set.

### GetSetupCode

`func (o *EventFunctionSpaceType) GetSetupCode() string`

GetSetupCode returns the SetupCode field if non-nil, zero value otherwise.

### GetSetupCodeOk

`func (o *EventFunctionSpaceType) GetSetupCodeOk() (*string, bool)`

GetSetupCodeOk returns a tuple with the SetupCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupCode

`func (o *EventFunctionSpaceType) SetSetupCode(v string)`

SetSetupCode sets SetupCode field to given value.

### HasSetupCode

`func (o *EventFunctionSpaceType) HasSetupCode() bool`

HasSetupCode returns a boolean if a field has been set.

### GetSetupDescription

`func (o *EventFunctionSpaceType) GetSetupDescription() string`

GetSetupDescription returns the SetupDescription field if non-nil, zero value otherwise.

### GetSetupDescriptionOk

`func (o *EventFunctionSpaceType) GetSetupDescriptionOk() (*string, bool)`

GetSetupDescriptionOk returns a tuple with the SetupDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupDescription

`func (o *EventFunctionSpaceType) SetSetupDescription(v string)`

SetSetupDescription sets SetupDescription field to given value.

### HasSetupDescription

`func (o *EventFunctionSpaceType) HasSetupDescription() bool`

HasSetupDescription returns a boolean if a field has been set.

### GetSetupTime

`func (o *EventFunctionSpaceType) GetSetupTime() int32`

GetSetupTime returns the SetupTime field if non-nil, zero value otherwise.

### GetSetupTimeOk

`func (o *EventFunctionSpaceType) GetSetupTimeOk() (*int32, bool)`

GetSetupTimeOk returns a tuple with the SetupTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupTime

`func (o *EventFunctionSpaceType) SetSetupTime(v int32)`

SetSetupTime sets SetupTime field to given value.

### HasSetupTime

`func (o *EventFunctionSpaceType) HasSetupTime() bool`

HasSetupTime returns a boolean if a field has been set.

### GetSetdownTime

`func (o *EventFunctionSpaceType) GetSetdownTime() int32`

GetSetdownTime returns the SetdownTime field if non-nil, zero value otherwise.

### GetSetdownTimeOk

`func (o *EventFunctionSpaceType) GetSetdownTimeOk() (*int32, bool)`

GetSetdownTimeOk returns a tuple with the SetdownTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetdownTime

`func (o *EventFunctionSpaceType) SetSetdownTime(v int32)`

SetSetdownTime sets SetdownTime field to given value.

### HasSetdownTime

`func (o *EventFunctionSpaceType) HasSetdownTime() bool`

HasSetdownTime returns a boolean if a field has been set.

### GetRentalCode

`func (o *EventFunctionSpaceType) GetRentalCode() string`

GetRentalCode returns the RentalCode field if non-nil, zero value otherwise.

### GetRentalCodeOk

`func (o *EventFunctionSpaceType) GetRentalCodeOk() (*string, bool)`

GetRentalCodeOk returns a tuple with the RentalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRentalCode

`func (o *EventFunctionSpaceType) SetRentalCode(v string)`

SetRentalCode sets RentalCode field to given value.

### HasRentalCode

`func (o *EventFunctionSpaceType) HasRentalCode() bool`

HasRentalCode returns a boolean if a field has been set.

### GetRateDesc

`func (o *EventFunctionSpaceType) GetRateDesc() string`

GetRateDesc returns the RateDesc field if non-nil, zero value otherwise.

### GetRateDescOk

`func (o *EventFunctionSpaceType) GetRateDescOk() (*string, bool)`

GetRateDescOk returns a tuple with the RateDesc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateDesc

`func (o *EventFunctionSpaceType) SetRateDesc(v string)`

SetRateDesc sets RateDesc field to given value.

### HasRateDesc

`func (o *EventFunctionSpaceType) HasRateDesc() bool`

HasRateDesc returns a boolean if a field has been set.

### GetRentalAmount

`func (o *EventFunctionSpaceType) GetRentalAmount() CurrencyAmountType`

GetRentalAmount returns the RentalAmount field if non-nil, zero value otherwise.

### GetRentalAmountOk

`func (o *EventFunctionSpaceType) GetRentalAmountOk() (*CurrencyAmountType, bool)`

GetRentalAmountOk returns a tuple with the RentalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRentalAmount

`func (o *EventFunctionSpaceType) SetRentalAmount(v CurrencyAmountType)`

SetRentalAmount sets RentalAmount field to given value.

### HasRentalAmount

`func (o *EventFunctionSpaceType) HasRentalAmount() bool`

HasRentalAmount returns a boolean if a field has been set.

### GetDiscountPercentage

`func (o *EventFunctionSpaceType) GetDiscountPercentage() float32`

GetDiscountPercentage returns the DiscountPercentage field if non-nil, zero value otherwise.

### GetDiscountPercentageOk

`func (o *EventFunctionSpaceType) GetDiscountPercentageOk() (*float32, bool)`

GetDiscountPercentageOk returns a tuple with the DiscountPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountPercentage

`func (o *EventFunctionSpaceType) SetDiscountPercentage(v float32)`

SetDiscountPercentage sets DiscountPercentage field to given value.

### HasDiscountPercentage

`func (o *EventFunctionSpaceType) HasDiscountPercentage() bool`

HasDiscountPercentage returns a boolean if a field has been set.

### GetMinimumOccupancy

`func (o *EventFunctionSpaceType) GetMinimumOccupancy() int32`

GetMinimumOccupancy returns the MinimumOccupancy field if non-nil, zero value otherwise.

### GetMinimumOccupancyOk

`func (o *EventFunctionSpaceType) GetMinimumOccupancyOk() (*int32, bool)`

GetMinimumOccupancyOk returns a tuple with the MinimumOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumOccupancy

`func (o *EventFunctionSpaceType) SetMinimumOccupancy(v int32)`

SetMinimumOccupancy sets MinimumOccupancy field to given value.

### HasMinimumOccupancy

`func (o *EventFunctionSpaceType) HasMinimumOccupancy() bool`

HasMinimumOccupancy returns a boolean if a field has been set.

### GetMaximumOccupancy

`func (o *EventFunctionSpaceType) GetMaximumOccupancy() int32`

GetMaximumOccupancy returns the MaximumOccupancy field if non-nil, zero value otherwise.

### GetMaximumOccupancyOk

`func (o *EventFunctionSpaceType) GetMaximumOccupancyOk() (*int32, bool)`

GetMaximumOccupancyOk returns a tuple with the MaximumOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumOccupancy

`func (o *EventFunctionSpaceType) SetMaximumOccupancy(v int32)`

SetMaximumOccupancy sets MaximumOccupancy field to given value.

### HasMaximumOccupancy

`func (o *EventFunctionSpaceType) HasMaximumOccupancy() bool`

HasMaximumOccupancy returns a boolean if a field has been set.

### GetShareable

`func (o *EventFunctionSpaceType) GetShareable() bool`

GetShareable returns the Shareable field if non-nil, zero value otherwise.

### GetShareableOk

`func (o *EventFunctionSpaceType) GetShareableOk() (*bool, bool)`

GetShareableOk returns a tuple with the Shareable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareable

`func (o *EventFunctionSpaceType) SetShareable(v bool)`

SetShareable sets Shareable field to given value.

### HasShareable

`func (o *EventFunctionSpaceType) HasShareable() bool`

HasShareable returns a boolean if a field has been set.

### GetComboSpace

`func (o *EventFunctionSpaceType) GetComboSpace() bool`

GetComboSpace returns the ComboSpace field if non-nil, zero value otherwise.

### GetComboSpaceOk

`func (o *EventFunctionSpaceType) GetComboSpaceOk() (*bool, bool)`

GetComboSpaceOk returns a tuple with the ComboSpace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComboSpace

`func (o *EventFunctionSpaceType) SetComboSpace(v bool)`

SetComboSpace sets ComboSpace field to given value.

### HasComboSpace

`func (o *EventFunctionSpaceType) HasComboSpace() bool`

HasComboSpace returns a boolean if a field has been set.

### GetElementSpace

`func (o *EventFunctionSpaceType) GetElementSpace() bool`

GetElementSpace returns the ElementSpace field if non-nil, zero value otherwise.

### GetElementSpaceOk

`func (o *EventFunctionSpaceType) GetElementSpaceOk() (*bool, bool)`

GetElementSpaceOk returns a tuple with the ElementSpace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElementSpace

`func (o *EventFunctionSpaceType) SetElementSpace(v bool)`

SetElementSpace sets ElementSpace field to given value.

### HasElementSpace

`func (o *EventFunctionSpaceType) HasElementSpace() bool`

HasElementSpace returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


