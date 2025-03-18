# CopyTransactionCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceTransactionCode** | Pointer to **string** | Source transaction code to be copied. | [optional] 
**CopyAs** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 

## Methods

### NewCopyTransactionCodeType

`func NewCopyTransactionCodeType() *CopyTransactionCodeType`

NewCopyTransactionCodeType instantiates a new CopyTransactionCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyTransactionCodeTypeWithDefaults

`func NewCopyTransactionCodeTypeWithDefaults() *CopyTransactionCodeType`

NewCopyTransactionCodeTypeWithDefaults instantiates a new CopyTransactionCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceTransactionCode

`func (o *CopyTransactionCodeType) GetSourceTransactionCode() string`

GetSourceTransactionCode returns the SourceTransactionCode field if non-nil, zero value otherwise.

### GetSourceTransactionCodeOk

`func (o *CopyTransactionCodeType) GetSourceTransactionCodeOk() (*string, bool)`

GetSourceTransactionCodeOk returns a tuple with the SourceTransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTransactionCode

`func (o *CopyTransactionCodeType) SetSourceTransactionCode(v string)`

SetSourceTransactionCode sets SourceTransactionCode field to given value.

### HasSourceTransactionCode

`func (o *CopyTransactionCodeType) HasSourceTransactionCode() bool`

HasSourceTransactionCode returns a boolean if a field has been set.

### GetCopyAs

`func (o *CopyTransactionCodeType) GetCopyAs() CodeDescriptionType`

GetCopyAs returns the CopyAs field if non-nil, zero value otherwise.

### GetCopyAsOk

`func (o *CopyTransactionCodeType) GetCopyAsOk() (*CodeDescriptionType, bool)`

GetCopyAsOk returns a tuple with the CopyAs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyAs

`func (o *CopyTransactionCodeType) SetCopyAs(v CodeDescriptionType)`

SetCopyAs sets CopyAs field to given value.

### HasCopyAs

`func (o *CopyTransactionCodeType) HasCopyAs() bool`

HasCopyAs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


