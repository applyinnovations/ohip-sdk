# ARTaxCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaxCode** | Pointer to **int32** | Tax Code number | [optional] 
**TransactionCode** | Pointer to **string** | Transaction Code Value | [optional] 
**TaxAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewARTaxCodeType

`func NewARTaxCodeType() *ARTaxCodeType`

NewARTaxCodeType instantiates a new ARTaxCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARTaxCodeTypeWithDefaults

`func NewARTaxCodeTypeWithDefaults() *ARTaxCodeType`

NewARTaxCodeTypeWithDefaults instantiates a new ARTaxCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaxCode

`func (o *ARTaxCodeType) GetTaxCode() int32`

GetTaxCode returns the TaxCode field if non-nil, zero value otherwise.

### GetTaxCodeOk

`func (o *ARTaxCodeType) GetTaxCodeOk() (*int32, bool)`

GetTaxCodeOk returns a tuple with the TaxCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxCode

`func (o *ARTaxCodeType) SetTaxCode(v int32)`

SetTaxCode sets TaxCode field to given value.

### HasTaxCode

`func (o *ARTaxCodeType) HasTaxCode() bool`

HasTaxCode returns a boolean if a field has been set.

### GetTransactionCode

`func (o *ARTaxCodeType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *ARTaxCodeType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *ARTaxCodeType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *ARTaxCodeType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTaxAmount

`func (o *ARTaxCodeType) GetTaxAmount() CurrencyAmountType`

GetTaxAmount returns the TaxAmount field if non-nil, zero value otherwise.

### GetTaxAmountOk

`func (o *ARTaxCodeType) GetTaxAmountOk() (*CurrencyAmountType, bool)`

GetTaxAmountOk returns a tuple with the TaxAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxAmount

`func (o *ARTaxCodeType) SetTaxAmount(v CurrencyAmountType)`

SetTaxAmount sets TaxAmount field to given value.

### HasTaxAmount

`func (o *ARTaxCodeType) HasTaxAmount() bool`

HasTaxAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


