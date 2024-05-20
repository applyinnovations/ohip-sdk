# CCSurchargeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Percentage** | Pointer to **float32** | The percentage on the payment amount which will be the Surcharge. | [optional] 
**Threshold** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TransactionCode** | Pointer to **string** | The Payment Transaction Code for which the Surcharge Applies. | [optional] 

## Methods

### NewCCSurchargeInfoType

`func NewCCSurchargeInfoType() *CCSurchargeInfoType`

NewCCSurchargeInfoType instantiates a new CCSurchargeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCCSurchargeInfoTypeWithDefaults

`func NewCCSurchargeInfoTypeWithDefaults() *CCSurchargeInfoType`

NewCCSurchargeInfoTypeWithDefaults instantiates a new CCSurchargeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPercentage

`func (o *CCSurchargeInfoType) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *CCSurchargeInfoType) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *CCSurchargeInfoType) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *CCSurchargeInfoType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetThreshold

`func (o *CCSurchargeInfoType) GetThreshold() CurrencyAmountType`

GetThreshold returns the Threshold field if non-nil, zero value otherwise.

### GetThresholdOk

`func (o *CCSurchargeInfoType) GetThresholdOk() (*CurrencyAmountType, bool)`

GetThresholdOk returns a tuple with the Threshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreshold

`func (o *CCSurchargeInfoType) SetThreshold(v CurrencyAmountType)`

SetThreshold sets Threshold field to given value.

### HasThreshold

`func (o *CCSurchargeInfoType) HasThreshold() bool`

HasThreshold returns a boolean if a field has been set.

### GetTransactionCode

`func (o *CCSurchargeInfoType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *CCSurchargeInfoType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *CCSurchargeInfoType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *CCSurchargeInfoType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


