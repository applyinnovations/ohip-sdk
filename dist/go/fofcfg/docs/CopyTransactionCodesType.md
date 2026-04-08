# CopyTransactionCodesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionCode** | Pointer to [**[]CopyTransactionCodeType**](CopyTransactionCodeType.md) | List of transaction codes to be copied within the same hotel code. | [optional] 
**HotelId** | Pointer to **string** | Source hotel code from where transaction codes(s) have to be copied. The transaction codes will be copied to the same hotel code with a different code and description. | [optional] 
**CopyGenerates** | Pointer to **bool** | Indicator that tells whether the transaction code generates should be copied or not. | [optional] 

## Methods

### NewCopyTransactionCodesType

`func NewCopyTransactionCodesType() *CopyTransactionCodesType`

NewCopyTransactionCodesType instantiates a new CopyTransactionCodesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyTransactionCodesTypeWithDefaults

`func NewCopyTransactionCodesTypeWithDefaults() *CopyTransactionCodesType`

NewCopyTransactionCodesTypeWithDefaults instantiates a new CopyTransactionCodesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionCode

`func (o *CopyTransactionCodesType) GetTransactionCode() []CopyTransactionCodeType`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *CopyTransactionCodesType) GetTransactionCodeOk() (*[]CopyTransactionCodeType, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *CopyTransactionCodesType) SetTransactionCode(v []CopyTransactionCodeType)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *CopyTransactionCodesType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetHotelId

`func (o *CopyTransactionCodesType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyTransactionCodesType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyTransactionCodesType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyTransactionCodesType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCopyGenerates

`func (o *CopyTransactionCodesType) GetCopyGenerates() bool`

GetCopyGenerates returns the CopyGenerates field if non-nil, zero value otherwise.

### GetCopyGeneratesOk

`func (o *CopyTransactionCodesType) GetCopyGeneratesOk() (*bool, bool)`

GetCopyGeneratesOk returns a tuple with the CopyGenerates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyGenerates

`func (o *CopyTransactionCodesType) SetCopyGenerates(v bool)`

SetCopyGenerates sets CopyGenerates field to given value.

### HasCopyGenerates

`func (o *CopyTransactionCodesType) HasCopyGenerates() bool`

HasCopyGenerates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


