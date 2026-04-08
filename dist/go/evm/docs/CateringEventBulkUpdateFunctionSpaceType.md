# CateringEventBulkUpdateFunctionSpaceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FunctionSpaceCode** | Pointer to **string** | Function Space code. | [optional] 
**SetupCode** | Pointer to **string** | Setup style code. | [optional] 
**SetupTime** | Pointer to **int32** | Setup time in minutes. | [optional] 
**SetdownTime** | Pointer to **int32** | Setdown time in minutes. | [optional] 
**RentalCode** | Pointer to **string** | Rate Code for function space. | [optional] 
**RentalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**DiscountPercentage** | Pointer to **float32** | Discount Percentage applied to Rent Amount. | [optional] 

## Methods

### NewCateringEventBulkUpdateFunctionSpaceType

`func NewCateringEventBulkUpdateFunctionSpaceType() *CateringEventBulkUpdateFunctionSpaceType`

NewCateringEventBulkUpdateFunctionSpaceType instantiates a new CateringEventBulkUpdateFunctionSpaceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventBulkUpdateFunctionSpaceTypeWithDefaults

`func NewCateringEventBulkUpdateFunctionSpaceTypeWithDefaults() *CateringEventBulkUpdateFunctionSpaceType`

NewCateringEventBulkUpdateFunctionSpaceTypeWithDefaults instantiates a new CateringEventBulkUpdateFunctionSpaceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFunctionSpaceCode

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetFunctionSpaceCode() string`

GetFunctionSpaceCode returns the FunctionSpaceCode field if non-nil, zero value otherwise.

### GetFunctionSpaceCodeOk

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetFunctionSpaceCodeOk() (*string, bool)`

GetFunctionSpaceCodeOk returns a tuple with the FunctionSpaceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaceCode

`func (o *CateringEventBulkUpdateFunctionSpaceType) SetFunctionSpaceCode(v string)`

SetFunctionSpaceCode sets FunctionSpaceCode field to given value.

### HasFunctionSpaceCode

`func (o *CateringEventBulkUpdateFunctionSpaceType) HasFunctionSpaceCode() bool`

HasFunctionSpaceCode returns a boolean if a field has been set.

### GetSetupCode

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetSetupCode() string`

GetSetupCode returns the SetupCode field if non-nil, zero value otherwise.

### GetSetupCodeOk

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetSetupCodeOk() (*string, bool)`

GetSetupCodeOk returns a tuple with the SetupCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupCode

`func (o *CateringEventBulkUpdateFunctionSpaceType) SetSetupCode(v string)`

SetSetupCode sets SetupCode field to given value.

### HasSetupCode

`func (o *CateringEventBulkUpdateFunctionSpaceType) HasSetupCode() bool`

HasSetupCode returns a boolean if a field has been set.

### GetSetupTime

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetSetupTime() int32`

GetSetupTime returns the SetupTime field if non-nil, zero value otherwise.

### GetSetupTimeOk

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetSetupTimeOk() (*int32, bool)`

GetSetupTimeOk returns a tuple with the SetupTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupTime

`func (o *CateringEventBulkUpdateFunctionSpaceType) SetSetupTime(v int32)`

SetSetupTime sets SetupTime field to given value.

### HasSetupTime

`func (o *CateringEventBulkUpdateFunctionSpaceType) HasSetupTime() bool`

HasSetupTime returns a boolean if a field has been set.

### GetSetdownTime

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetSetdownTime() int32`

GetSetdownTime returns the SetdownTime field if non-nil, zero value otherwise.

### GetSetdownTimeOk

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetSetdownTimeOk() (*int32, bool)`

GetSetdownTimeOk returns a tuple with the SetdownTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetdownTime

`func (o *CateringEventBulkUpdateFunctionSpaceType) SetSetdownTime(v int32)`

SetSetdownTime sets SetdownTime field to given value.

### HasSetdownTime

`func (o *CateringEventBulkUpdateFunctionSpaceType) HasSetdownTime() bool`

HasSetdownTime returns a boolean if a field has been set.

### GetRentalCode

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetRentalCode() string`

GetRentalCode returns the RentalCode field if non-nil, zero value otherwise.

### GetRentalCodeOk

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetRentalCodeOk() (*string, bool)`

GetRentalCodeOk returns a tuple with the RentalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRentalCode

`func (o *CateringEventBulkUpdateFunctionSpaceType) SetRentalCode(v string)`

SetRentalCode sets RentalCode field to given value.

### HasRentalCode

`func (o *CateringEventBulkUpdateFunctionSpaceType) HasRentalCode() bool`

HasRentalCode returns a boolean if a field has been set.

### GetRentalAmount

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetRentalAmount() CurrencyAmountType`

GetRentalAmount returns the RentalAmount field if non-nil, zero value otherwise.

### GetRentalAmountOk

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetRentalAmountOk() (*CurrencyAmountType, bool)`

GetRentalAmountOk returns a tuple with the RentalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRentalAmount

`func (o *CateringEventBulkUpdateFunctionSpaceType) SetRentalAmount(v CurrencyAmountType)`

SetRentalAmount sets RentalAmount field to given value.

### HasRentalAmount

`func (o *CateringEventBulkUpdateFunctionSpaceType) HasRentalAmount() bool`

HasRentalAmount returns a boolean if a field has been set.

### GetDiscountPercentage

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetDiscountPercentage() float32`

GetDiscountPercentage returns the DiscountPercentage field if non-nil, zero value otherwise.

### GetDiscountPercentageOk

`func (o *CateringEventBulkUpdateFunctionSpaceType) GetDiscountPercentageOk() (*float32, bool)`

GetDiscountPercentageOk returns a tuple with the DiscountPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountPercentage

`func (o *CateringEventBulkUpdateFunctionSpaceType) SetDiscountPercentage(v float32)`

SetDiscountPercentage sets DiscountPercentage field to given value.

### HasDiscountPercentage

`func (o *CateringEventBulkUpdateFunctionSpaceType) HasDiscountPercentage() bool`

HasDiscountPercentage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


