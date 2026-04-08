# PayeeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PayeeId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PayeeName** | Pointer to **string** | Name of the payee. | [optional] 
**PayeeAddress** | Pointer to [**AddressInfoType**](AddressInfoType.md) |  | [optional] 
**PayeeAddressCount** | Pointer to **int32** | Payee multiple address count. | [optional] 
**PayeeReferenceCurrency** | Pointer to **string** | Reference currency of the payee. | [optional] 
**PayeeAccountInfo** | Pointer to [**ARAccountShortInfoType**](ARAccountShortInfoType.md) |  | [optional] 
**PayeeTaxNumber** | Pointer to **string** | The tax number of the payee. | [optional] 

## Methods

### NewPayeeInfoType

`func NewPayeeInfoType() *PayeeInfoType`

NewPayeeInfoType instantiates a new PayeeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPayeeInfoTypeWithDefaults

`func NewPayeeInfoTypeWithDefaults() *PayeeInfoType`

NewPayeeInfoTypeWithDefaults instantiates a new PayeeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPayeeId

`func (o *PayeeInfoType) GetPayeeId() UniqueIDType`

GetPayeeId returns the PayeeId field if non-nil, zero value otherwise.

### GetPayeeIdOk

`func (o *PayeeInfoType) GetPayeeIdOk() (*UniqueIDType, bool)`

GetPayeeIdOk returns a tuple with the PayeeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeId

`func (o *PayeeInfoType) SetPayeeId(v UniqueIDType)`

SetPayeeId sets PayeeId field to given value.

### HasPayeeId

`func (o *PayeeInfoType) HasPayeeId() bool`

HasPayeeId returns a boolean if a field has been set.

### GetPayeeName

`func (o *PayeeInfoType) GetPayeeName() string`

GetPayeeName returns the PayeeName field if non-nil, zero value otherwise.

### GetPayeeNameOk

`func (o *PayeeInfoType) GetPayeeNameOk() (*string, bool)`

GetPayeeNameOk returns a tuple with the PayeeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeName

`func (o *PayeeInfoType) SetPayeeName(v string)`

SetPayeeName sets PayeeName field to given value.

### HasPayeeName

`func (o *PayeeInfoType) HasPayeeName() bool`

HasPayeeName returns a boolean if a field has been set.

### GetPayeeAddress

`func (o *PayeeInfoType) GetPayeeAddress() AddressInfoType`

GetPayeeAddress returns the PayeeAddress field if non-nil, zero value otherwise.

### GetPayeeAddressOk

`func (o *PayeeInfoType) GetPayeeAddressOk() (*AddressInfoType, bool)`

GetPayeeAddressOk returns a tuple with the PayeeAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeAddress

`func (o *PayeeInfoType) SetPayeeAddress(v AddressInfoType)`

SetPayeeAddress sets PayeeAddress field to given value.

### HasPayeeAddress

`func (o *PayeeInfoType) HasPayeeAddress() bool`

HasPayeeAddress returns a boolean if a field has been set.

### GetPayeeAddressCount

`func (o *PayeeInfoType) GetPayeeAddressCount() int32`

GetPayeeAddressCount returns the PayeeAddressCount field if non-nil, zero value otherwise.

### GetPayeeAddressCountOk

`func (o *PayeeInfoType) GetPayeeAddressCountOk() (*int32, bool)`

GetPayeeAddressCountOk returns a tuple with the PayeeAddressCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeAddressCount

`func (o *PayeeInfoType) SetPayeeAddressCount(v int32)`

SetPayeeAddressCount sets PayeeAddressCount field to given value.

### HasPayeeAddressCount

`func (o *PayeeInfoType) HasPayeeAddressCount() bool`

HasPayeeAddressCount returns a boolean if a field has been set.

### GetPayeeReferenceCurrency

`func (o *PayeeInfoType) GetPayeeReferenceCurrency() string`

GetPayeeReferenceCurrency returns the PayeeReferenceCurrency field if non-nil, zero value otherwise.

### GetPayeeReferenceCurrencyOk

`func (o *PayeeInfoType) GetPayeeReferenceCurrencyOk() (*string, bool)`

GetPayeeReferenceCurrencyOk returns a tuple with the PayeeReferenceCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeReferenceCurrency

`func (o *PayeeInfoType) SetPayeeReferenceCurrency(v string)`

SetPayeeReferenceCurrency sets PayeeReferenceCurrency field to given value.

### HasPayeeReferenceCurrency

`func (o *PayeeInfoType) HasPayeeReferenceCurrency() bool`

HasPayeeReferenceCurrency returns a boolean if a field has been set.

### GetPayeeAccountInfo

`func (o *PayeeInfoType) GetPayeeAccountInfo() ARAccountShortInfoType`

GetPayeeAccountInfo returns the PayeeAccountInfo field if non-nil, zero value otherwise.

### GetPayeeAccountInfoOk

`func (o *PayeeInfoType) GetPayeeAccountInfoOk() (*ARAccountShortInfoType, bool)`

GetPayeeAccountInfoOk returns a tuple with the PayeeAccountInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeAccountInfo

`func (o *PayeeInfoType) SetPayeeAccountInfo(v ARAccountShortInfoType)`

SetPayeeAccountInfo sets PayeeAccountInfo field to given value.

### HasPayeeAccountInfo

`func (o *PayeeInfoType) HasPayeeAccountInfo() bool`

HasPayeeAccountInfo returns a boolean if a field has been set.

### GetPayeeTaxNumber

`func (o *PayeeInfoType) GetPayeeTaxNumber() string`

GetPayeeTaxNumber returns the PayeeTaxNumber field if non-nil, zero value otherwise.

### GetPayeeTaxNumberOk

`func (o *PayeeInfoType) GetPayeeTaxNumberOk() (*string, bool)`

GetPayeeTaxNumberOk returns a tuple with the PayeeTaxNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeTaxNumber

`func (o *PayeeInfoType) SetPayeeTaxNumber(v string)`

SetPayeeTaxNumber sets PayeeTaxNumber field to given value.

### HasPayeeTaxNumber

`func (o *PayeeInfoType) HasPayeeTaxNumber() bool`

HasPayeeTaxNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


