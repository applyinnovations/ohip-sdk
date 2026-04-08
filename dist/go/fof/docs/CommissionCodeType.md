# CommissionCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Commission code. | [optional] 
**VatPercentage** | Pointer to **float32** | Total commission that will be paid. | [optional] 

## Methods

### NewCommissionCodeType

`func NewCommissionCodeType() *CommissionCodeType`

NewCommissionCodeType instantiates a new CommissionCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionCodeTypeWithDefaults

`func NewCommissionCodeTypeWithDefaults() *CommissionCodeType`

NewCommissionCodeTypeWithDefaults instantiates a new CommissionCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *CommissionCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CommissionCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CommissionCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *CommissionCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetVatPercentage

`func (o *CommissionCodeType) GetVatPercentage() float32`

GetVatPercentage returns the VatPercentage field if non-nil, zero value otherwise.

### GetVatPercentageOk

`func (o *CommissionCodeType) GetVatPercentageOk() (*float32, bool)`

GetVatPercentageOk returns a tuple with the VatPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVatPercentage

`func (o *CommissionCodeType) SetVatPercentage(v float32)`

SetVatPercentage sets VatPercentage field to given value.

### HasVatPercentage

`func (o *CommissionCodeType) HasVatPercentage() bool`

HasVatPercentage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


