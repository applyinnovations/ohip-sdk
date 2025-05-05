# AutoGenerateCardNumberType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CardRangeStart** | Pointer to **string** | Card number auto generation range. | [optional] 
**CardRangeEnd** | Pointer to **string** | Card number auto generation range. | [optional] 
**CardNumberPrefix** | Pointer to **string** | Valid card number prefix. | [optional] 
**CardNumberFormat** | Pointer to **string** | Indicates what format the random generation card number should follow, Format we support are - 9 for Numbers, X for Alphanumeric mixed, and A for Alpha only. For example, 32093K. | [optional] 

## Methods

### NewAutoGenerateCardNumberType

`func NewAutoGenerateCardNumberType() *AutoGenerateCardNumberType`

NewAutoGenerateCardNumberType instantiates a new AutoGenerateCardNumberType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoGenerateCardNumberTypeWithDefaults

`func NewAutoGenerateCardNumberTypeWithDefaults() *AutoGenerateCardNumberType`

NewAutoGenerateCardNumberTypeWithDefaults instantiates a new AutoGenerateCardNumberType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCardRangeStart

`func (o *AutoGenerateCardNumberType) GetCardRangeStart() string`

GetCardRangeStart returns the CardRangeStart field if non-nil, zero value otherwise.

### GetCardRangeStartOk

`func (o *AutoGenerateCardNumberType) GetCardRangeStartOk() (*string, bool)`

GetCardRangeStartOk returns a tuple with the CardRangeStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardRangeStart

`func (o *AutoGenerateCardNumberType) SetCardRangeStart(v string)`

SetCardRangeStart sets CardRangeStart field to given value.

### HasCardRangeStart

`func (o *AutoGenerateCardNumberType) HasCardRangeStart() bool`

HasCardRangeStart returns a boolean if a field has been set.

### GetCardRangeEnd

`func (o *AutoGenerateCardNumberType) GetCardRangeEnd() string`

GetCardRangeEnd returns the CardRangeEnd field if non-nil, zero value otherwise.

### GetCardRangeEndOk

`func (o *AutoGenerateCardNumberType) GetCardRangeEndOk() (*string, bool)`

GetCardRangeEndOk returns a tuple with the CardRangeEnd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardRangeEnd

`func (o *AutoGenerateCardNumberType) SetCardRangeEnd(v string)`

SetCardRangeEnd sets CardRangeEnd field to given value.

### HasCardRangeEnd

`func (o *AutoGenerateCardNumberType) HasCardRangeEnd() bool`

HasCardRangeEnd returns a boolean if a field has been set.

### GetCardNumberPrefix

`func (o *AutoGenerateCardNumberType) GetCardNumberPrefix() string`

GetCardNumberPrefix returns the CardNumberPrefix field if non-nil, zero value otherwise.

### GetCardNumberPrefixOk

`func (o *AutoGenerateCardNumberType) GetCardNumberPrefixOk() (*string, bool)`

GetCardNumberPrefixOk returns a tuple with the CardNumberPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumberPrefix

`func (o *AutoGenerateCardNumberType) SetCardNumberPrefix(v string)`

SetCardNumberPrefix sets CardNumberPrefix field to given value.

### HasCardNumberPrefix

`func (o *AutoGenerateCardNumberType) HasCardNumberPrefix() bool`

HasCardNumberPrefix returns a boolean if a field has been set.

### GetCardNumberFormat

`func (o *AutoGenerateCardNumberType) GetCardNumberFormat() string`

GetCardNumberFormat returns the CardNumberFormat field if non-nil, zero value otherwise.

### GetCardNumberFormatOk

`func (o *AutoGenerateCardNumberType) GetCardNumberFormatOk() (*string, bool)`

GetCardNumberFormatOk returns a tuple with the CardNumberFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumberFormat

`func (o *AutoGenerateCardNumberType) SetCardNumberFormat(v string)`

SetCardNumberFormat sets CardNumberFormat field to given value.

### HasCardNumberFormat

`func (o *AutoGenerateCardNumberType) HasCardNumberFormat() bool`

HasCardNumberFormat returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


