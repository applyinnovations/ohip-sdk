# PackageTransactionCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Posting / transaction code. | [optional] 
**Description** | Pointer to **string** | The description of the code. | [optional] 
**Type** | Pointer to [**AmountDeterminationType**](AmountDeterminationType.md) |  | [optional] 

## Methods

### NewPackageTransactionCodeType

`func NewPackageTransactionCodeType() *PackageTransactionCodeType`

NewPackageTransactionCodeType instantiates a new PackageTransactionCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageTransactionCodeTypeWithDefaults

`func NewPackageTransactionCodeTypeWithDefaults() *PackageTransactionCodeType`

NewPackageTransactionCodeTypeWithDefaults instantiates a new PackageTransactionCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *PackageTransactionCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *PackageTransactionCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *PackageTransactionCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *PackageTransactionCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *PackageTransactionCodeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PackageTransactionCodeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PackageTransactionCodeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PackageTransactionCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *PackageTransactionCodeType) GetType() AmountDeterminationType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PackageTransactionCodeType) GetTypeOk() (*AmountDeterminationType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PackageTransactionCodeType) SetType(v AmountDeterminationType)`

SetType sets Type field to given value.

### HasType

`func (o *PackageTransactionCodeType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


