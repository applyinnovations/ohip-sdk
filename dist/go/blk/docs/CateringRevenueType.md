# CateringRevenueType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ItemDiscount** | Pointer to **float32** | Item discount for the block. | [optional] 
**ItemDiscountPercentage** | Pointer to **float32** | The discount percentage to be applied to resource items associated with catering events. | [optional] 
**ServiceCharge** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TaxAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewCateringRevenueType

`func NewCateringRevenueType() *CateringRevenueType`

NewCateringRevenueType instantiates a new CateringRevenueType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringRevenueTypeWithDefaults

`func NewCateringRevenueTypeWithDefaults() *CateringRevenueType`

NewCateringRevenueTypeWithDefaults instantiates a new CateringRevenueType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItemDiscount

`func (o *CateringRevenueType) GetItemDiscount() float32`

GetItemDiscount returns the ItemDiscount field if non-nil, zero value otherwise.

### GetItemDiscountOk

`func (o *CateringRevenueType) GetItemDiscountOk() (*float32, bool)`

GetItemDiscountOk returns a tuple with the ItemDiscount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemDiscount

`func (o *CateringRevenueType) SetItemDiscount(v float32)`

SetItemDiscount sets ItemDiscount field to given value.

### HasItemDiscount

`func (o *CateringRevenueType) HasItemDiscount() bool`

HasItemDiscount returns a boolean if a field has been set.

### GetItemDiscountPercentage

`func (o *CateringRevenueType) GetItemDiscountPercentage() float32`

GetItemDiscountPercentage returns the ItemDiscountPercentage field if non-nil, zero value otherwise.

### GetItemDiscountPercentageOk

`func (o *CateringRevenueType) GetItemDiscountPercentageOk() (*float32, bool)`

GetItemDiscountPercentageOk returns a tuple with the ItemDiscountPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemDiscountPercentage

`func (o *CateringRevenueType) SetItemDiscountPercentage(v float32)`

SetItemDiscountPercentage sets ItemDiscountPercentage field to given value.

### HasItemDiscountPercentage

`func (o *CateringRevenueType) HasItemDiscountPercentage() bool`

HasItemDiscountPercentage returns a boolean if a field has been set.

### GetServiceCharge

`func (o *CateringRevenueType) GetServiceCharge() CurrencyAmountType`

GetServiceCharge returns the ServiceCharge field if non-nil, zero value otherwise.

### GetServiceChargeOk

`func (o *CateringRevenueType) GetServiceChargeOk() (*CurrencyAmountType, bool)`

GetServiceChargeOk returns a tuple with the ServiceCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceCharge

`func (o *CateringRevenueType) SetServiceCharge(v CurrencyAmountType)`

SetServiceCharge sets ServiceCharge field to given value.

### HasServiceCharge

`func (o *CateringRevenueType) HasServiceCharge() bool`

HasServiceCharge returns a boolean if a field has been set.

### GetTaxAmount

`func (o *CateringRevenueType) GetTaxAmount() CurrencyAmountType`

GetTaxAmount returns the TaxAmount field if non-nil, zero value otherwise.

### GetTaxAmountOk

`func (o *CateringRevenueType) GetTaxAmountOk() (*CurrencyAmountType, bool)`

GetTaxAmountOk returns a tuple with the TaxAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxAmount

`func (o *CateringRevenueType) SetTaxAmount(v CurrencyAmountType)`

SetTaxAmount sets TaxAmount field to given value.

### HasTaxAmount

`func (o *CateringRevenueType) HasTaxAmount() bool`

HasTaxAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


