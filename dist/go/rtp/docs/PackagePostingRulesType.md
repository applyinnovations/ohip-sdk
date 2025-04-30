# PackagePostingRulesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionCode** | Pointer to [**PackageTransactionCodeType**](PackageTransactionCodeType.md) |  | [optional] 
**OverageCode** | Pointer to [**PackageTransactionCodeType**](PackageTransactionCodeType.md) |  | [optional] 
**ProfitCode** | Pointer to [**PackageTransactionCodeType**](PackageTransactionCodeType.md) |  | [optional] 
**LossCode** | Pointer to [**PackageTransactionCodeType**](PackageTransactionCodeType.md) |  | [optional] 
**AlternateCodesList** | Pointer to [**[]PackageTransactionCodeType**](PackageTransactionCodeType.md) | The alternate transaction code that can be consumed by the guest in place of the transaction code. | [optional] 

## Methods

### NewPackagePostingRulesType

`func NewPackagePostingRulesType() *PackagePostingRulesType`

NewPackagePostingRulesType instantiates a new PackagePostingRulesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackagePostingRulesTypeWithDefaults

`func NewPackagePostingRulesTypeWithDefaults() *PackagePostingRulesType`

NewPackagePostingRulesTypeWithDefaults instantiates a new PackagePostingRulesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionCode

`func (o *PackagePostingRulesType) GetTransactionCode() PackageTransactionCodeType`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *PackagePostingRulesType) GetTransactionCodeOk() (*PackageTransactionCodeType, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *PackagePostingRulesType) SetTransactionCode(v PackageTransactionCodeType)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *PackagePostingRulesType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetOverageCode

`func (o *PackagePostingRulesType) GetOverageCode() PackageTransactionCodeType`

GetOverageCode returns the OverageCode field if non-nil, zero value otherwise.

### GetOverageCodeOk

`func (o *PackagePostingRulesType) GetOverageCodeOk() (*PackageTransactionCodeType, bool)`

GetOverageCodeOk returns a tuple with the OverageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverageCode

`func (o *PackagePostingRulesType) SetOverageCode(v PackageTransactionCodeType)`

SetOverageCode sets OverageCode field to given value.

### HasOverageCode

`func (o *PackagePostingRulesType) HasOverageCode() bool`

HasOverageCode returns a boolean if a field has been set.

### GetProfitCode

`func (o *PackagePostingRulesType) GetProfitCode() PackageTransactionCodeType`

GetProfitCode returns the ProfitCode field if non-nil, zero value otherwise.

### GetProfitCodeOk

`func (o *PackagePostingRulesType) GetProfitCodeOk() (*PackageTransactionCodeType, bool)`

GetProfitCodeOk returns a tuple with the ProfitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfitCode

`func (o *PackagePostingRulesType) SetProfitCode(v PackageTransactionCodeType)`

SetProfitCode sets ProfitCode field to given value.

### HasProfitCode

`func (o *PackagePostingRulesType) HasProfitCode() bool`

HasProfitCode returns a boolean if a field has been set.

### GetLossCode

`func (o *PackagePostingRulesType) GetLossCode() PackageTransactionCodeType`

GetLossCode returns the LossCode field if non-nil, zero value otherwise.

### GetLossCodeOk

`func (o *PackagePostingRulesType) GetLossCodeOk() (*PackageTransactionCodeType, bool)`

GetLossCodeOk returns a tuple with the LossCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLossCode

`func (o *PackagePostingRulesType) SetLossCode(v PackageTransactionCodeType)`

SetLossCode sets LossCode field to given value.

### HasLossCode

`func (o *PackagePostingRulesType) HasLossCode() bool`

HasLossCode returns a boolean if a field has been set.

### GetAlternateCodesList

`func (o *PackagePostingRulesType) GetAlternateCodesList() []PackageTransactionCodeType`

GetAlternateCodesList returns the AlternateCodesList field if non-nil, zero value otherwise.

### GetAlternateCodesListOk

`func (o *PackagePostingRulesType) GetAlternateCodesListOk() (*[]PackageTransactionCodeType, bool)`

GetAlternateCodesListOk returns a tuple with the AlternateCodesList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateCodesList

`func (o *PackagePostingRulesType) SetAlternateCodesList(v []PackageTransactionCodeType)`

SetAlternateCodesList sets AlternateCodesList field to given value.

### HasAlternateCodesList

`func (o *PackagePostingRulesType) HasAlternateCodesList() bool`

HasAlternateCodesList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


