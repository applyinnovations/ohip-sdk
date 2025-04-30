# CreditCardInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CardNumberMasked** | Pointer to **string** |  | [optional] 
**CardNumberLast4Digits** | Pointer to **string** |  | [optional] 
**ExpirationDateString** | Pointer to **string** | Expiration date in string representation. | [optional] 
**ExpirationDateMasked** | Pointer to **string** | Masked Expiration date of the credit card | [optional] 
**CardHolderName** | Pointer to **string** |  | [optional] 
**CardType** | Pointer to [**CardTypeType**](CardTypeType.md) |  | [optional] 
**CardId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewCreditCardInfo

`func NewCreditCardInfo() *CreditCardInfo`

NewCreditCardInfo instantiates a new CreditCardInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditCardInfoWithDefaults

`func NewCreditCardInfoWithDefaults() *CreditCardInfo`

NewCreditCardInfoWithDefaults instantiates a new CreditCardInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCardNumberMasked

`func (o *CreditCardInfo) GetCardNumberMasked() string`

GetCardNumberMasked returns the CardNumberMasked field if non-nil, zero value otherwise.

### GetCardNumberMaskedOk

`func (o *CreditCardInfo) GetCardNumberMaskedOk() (*string, bool)`

GetCardNumberMaskedOk returns a tuple with the CardNumberMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumberMasked

`func (o *CreditCardInfo) SetCardNumberMasked(v string)`

SetCardNumberMasked sets CardNumberMasked field to given value.

### HasCardNumberMasked

`func (o *CreditCardInfo) HasCardNumberMasked() bool`

HasCardNumberMasked returns a boolean if a field has been set.

### GetCardNumberLast4Digits

`func (o *CreditCardInfo) GetCardNumberLast4Digits() string`

GetCardNumberLast4Digits returns the CardNumberLast4Digits field if non-nil, zero value otherwise.

### GetCardNumberLast4DigitsOk

`func (o *CreditCardInfo) GetCardNumberLast4DigitsOk() (*string, bool)`

GetCardNumberLast4DigitsOk returns a tuple with the CardNumberLast4Digits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumberLast4Digits

`func (o *CreditCardInfo) SetCardNumberLast4Digits(v string)`

SetCardNumberLast4Digits sets CardNumberLast4Digits field to given value.

### HasCardNumberLast4Digits

`func (o *CreditCardInfo) HasCardNumberLast4Digits() bool`

HasCardNumberLast4Digits returns a boolean if a field has been set.

### GetExpirationDateString

`func (o *CreditCardInfo) GetExpirationDateString() string`

GetExpirationDateString returns the ExpirationDateString field if non-nil, zero value otherwise.

### GetExpirationDateStringOk

`func (o *CreditCardInfo) GetExpirationDateStringOk() (*string, bool)`

GetExpirationDateStringOk returns a tuple with the ExpirationDateString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDateString

`func (o *CreditCardInfo) SetExpirationDateString(v string)`

SetExpirationDateString sets ExpirationDateString field to given value.

### HasExpirationDateString

`func (o *CreditCardInfo) HasExpirationDateString() bool`

HasExpirationDateString returns a boolean if a field has been set.

### GetExpirationDateMasked

`func (o *CreditCardInfo) GetExpirationDateMasked() string`

GetExpirationDateMasked returns the ExpirationDateMasked field if non-nil, zero value otherwise.

### GetExpirationDateMaskedOk

`func (o *CreditCardInfo) GetExpirationDateMaskedOk() (*string, bool)`

GetExpirationDateMaskedOk returns a tuple with the ExpirationDateMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDateMasked

`func (o *CreditCardInfo) SetExpirationDateMasked(v string)`

SetExpirationDateMasked sets ExpirationDateMasked field to given value.

### HasExpirationDateMasked

`func (o *CreditCardInfo) HasExpirationDateMasked() bool`

HasExpirationDateMasked returns a boolean if a field has been set.

### GetCardHolderName

`func (o *CreditCardInfo) GetCardHolderName() string`

GetCardHolderName returns the CardHolderName field if non-nil, zero value otherwise.

### GetCardHolderNameOk

`func (o *CreditCardInfo) GetCardHolderNameOk() (*string, bool)`

GetCardHolderNameOk returns a tuple with the CardHolderName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardHolderName

`func (o *CreditCardInfo) SetCardHolderName(v string)`

SetCardHolderName sets CardHolderName field to given value.

### HasCardHolderName

`func (o *CreditCardInfo) HasCardHolderName() bool`

HasCardHolderName returns a boolean if a field has been set.

### GetCardType

`func (o *CreditCardInfo) GetCardType() CardTypeType`

GetCardType returns the CardType field if non-nil, zero value otherwise.

### GetCardTypeOk

`func (o *CreditCardInfo) GetCardTypeOk() (*CardTypeType, bool)`

GetCardTypeOk returns a tuple with the CardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardType

`func (o *CreditCardInfo) SetCardType(v CardTypeType)`

SetCardType sets CardType field to given value.

### HasCardType

`func (o *CreditCardInfo) HasCardType() bool`

HasCardType returns a boolean if a field has been set.

### GetCardId

`func (o *CreditCardInfo) GetCardId() UniqueIDType`

GetCardId returns the CardId field if non-nil, zero value otherwise.

### GetCardIdOk

`func (o *CreditCardInfo) GetCardIdOk() (*UniqueIDType, bool)`

GetCardIdOk returns a tuple with the CardId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardId

`func (o *CreditCardInfo) SetCardId(v UniqueIDType)`

SetCardId sets CardId field to given value.

### HasCardId

`func (o *CreditCardInfo) HasCardId() bool`

HasCardId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


