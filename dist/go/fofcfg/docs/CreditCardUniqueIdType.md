# CreditCardUniqueIdType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionType** | Pointer to [**CreditCardServiceActionType**](CreditCardServiceActionType.md) |  | [optional] 
**CardPresent** | Pointer to **bool** | Flag to determine if the credit card was swiped/manually entered , This element is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active. | [optional] 
**CitId** | Pointer to **string** | Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active. | [optional] 
**CreditCardName** | Pointer to **string** | Card name holder. | [optional] 
**CreditCardNumber** | Pointer to **string** | Credit card number. | [optional] 
**CreditCardNumberLast4Digits** | Pointer to **string** | Last 4 digits of a credit card. | [optional] 
**CreditCardType** | Pointer to **string** | Credit card type. | [optional] 
**ExpirationDateString** | Pointer to **string** | Expiration date in string representation. | [optional] 
**TerminalId** | Pointer to **string** | Terminal ID from where this request originated. | [optional] 
**UniqueId** | Pointer to **string** | Unique id of credit card. | [optional] 

## Methods

### NewCreditCardUniqueIdType

`func NewCreditCardUniqueIdType() *CreditCardUniqueIdType`

NewCreditCardUniqueIdType instantiates a new CreditCardUniqueIdType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditCardUniqueIdTypeWithDefaults

`func NewCreditCardUniqueIdTypeWithDefaults() *CreditCardUniqueIdType`

NewCreditCardUniqueIdTypeWithDefaults instantiates a new CreditCardUniqueIdType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActionType

`func (o *CreditCardUniqueIdType) GetActionType() CreditCardServiceActionType`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *CreditCardUniqueIdType) GetActionTypeOk() (*CreditCardServiceActionType, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *CreditCardUniqueIdType) SetActionType(v CreditCardServiceActionType)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *CreditCardUniqueIdType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetCardPresent

`func (o *CreditCardUniqueIdType) GetCardPresent() bool`

GetCardPresent returns the CardPresent field if non-nil, zero value otherwise.

### GetCardPresentOk

`func (o *CreditCardUniqueIdType) GetCardPresentOk() (*bool, bool)`

GetCardPresentOk returns a tuple with the CardPresent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardPresent

`func (o *CreditCardUniqueIdType) SetCardPresent(v bool)`

SetCardPresent sets CardPresent field to given value.

### HasCardPresent

`func (o *CreditCardUniqueIdType) HasCardPresent() bool`

HasCardPresent returns a boolean if a field has been set.

### GetCitId

`func (o *CreditCardUniqueIdType) GetCitId() string`

GetCitId returns the CitId field if non-nil, zero value otherwise.

### GetCitIdOk

`func (o *CreditCardUniqueIdType) GetCitIdOk() (*string, bool)`

GetCitIdOk returns a tuple with the CitId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCitId

`func (o *CreditCardUniqueIdType) SetCitId(v string)`

SetCitId sets CitId field to given value.

### HasCitId

`func (o *CreditCardUniqueIdType) HasCitId() bool`

HasCitId returns a boolean if a field has been set.

### GetCreditCardName

`func (o *CreditCardUniqueIdType) GetCreditCardName() string`

GetCreditCardName returns the CreditCardName field if non-nil, zero value otherwise.

### GetCreditCardNameOk

`func (o *CreditCardUniqueIdType) GetCreditCardNameOk() (*string, bool)`

GetCreditCardNameOk returns a tuple with the CreditCardName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardName

`func (o *CreditCardUniqueIdType) SetCreditCardName(v string)`

SetCreditCardName sets CreditCardName field to given value.

### HasCreditCardName

`func (o *CreditCardUniqueIdType) HasCreditCardName() bool`

HasCreditCardName returns a boolean if a field has been set.

### GetCreditCardNumber

`func (o *CreditCardUniqueIdType) GetCreditCardNumber() string`

GetCreditCardNumber returns the CreditCardNumber field if non-nil, zero value otherwise.

### GetCreditCardNumberOk

`func (o *CreditCardUniqueIdType) GetCreditCardNumberOk() (*string, bool)`

GetCreditCardNumberOk returns a tuple with the CreditCardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardNumber

`func (o *CreditCardUniqueIdType) SetCreditCardNumber(v string)`

SetCreditCardNumber sets CreditCardNumber field to given value.

### HasCreditCardNumber

`func (o *CreditCardUniqueIdType) HasCreditCardNumber() bool`

HasCreditCardNumber returns a boolean if a field has been set.

### GetCreditCardNumberLast4Digits

`func (o *CreditCardUniqueIdType) GetCreditCardNumberLast4Digits() string`

GetCreditCardNumberLast4Digits returns the CreditCardNumberLast4Digits field if non-nil, zero value otherwise.

### GetCreditCardNumberLast4DigitsOk

`func (o *CreditCardUniqueIdType) GetCreditCardNumberLast4DigitsOk() (*string, bool)`

GetCreditCardNumberLast4DigitsOk returns a tuple with the CreditCardNumberLast4Digits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardNumberLast4Digits

`func (o *CreditCardUniqueIdType) SetCreditCardNumberLast4Digits(v string)`

SetCreditCardNumberLast4Digits sets CreditCardNumberLast4Digits field to given value.

### HasCreditCardNumberLast4Digits

`func (o *CreditCardUniqueIdType) HasCreditCardNumberLast4Digits() bool`

HasCreditCardNumberLast4Digits returns a boolean if a field has been set.

### GetCreditCardType

`func (o *CreditCardUniqueIdType) GetCreditCardType() string`

GetCreditCardType returns the CreditCardType field if non-nil, zero value otherwise.

### GetCreditCardTypeOk

`func (o *CreditCardUniqueIdType) GetCreditCardTypeOk() (*string, bool)`

GetCreditCardTypeOk returns a tuple with the CreditCardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardType

`func (o *CreditCardUniqueIdType) SetCreditCardType(v string)`

SetCreditCardType sets CreditCardType field to given value.

### HasCreditCardType

`func (o *CreditCardUniqueIdType) HasCreditCardType() bool`

HasCreditCardType returns a boolean if a field has been set.

### GetExpirationDateString

`func (o *CreditCardUniqueIdType) GetExpirationDateString() string`

GetExpirationDateString returns the ExpirationDateString field if non-nil, zero value otherwise.

### GetExpirationDateStringOk

`func (o *CreditCardUniqueIdType) GetExpirationDateStringOk() (*string, bool)`

GetExpirationDateStringOk returns a tuple with the ExpirationDateString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDateString

`func (o *CreditCardUniqueIdType) SetExpirationDateString(v string)`

SetExpirationDateString sets ExpirationDateString field to given value.

### HasExpirationDateString

`func (o *CreditCardUniqueIdType) HasExpirationDateString() bool`

HasExpirationDateString returns a boolean if a field has been set.

### GetTerminalId

`func (o *CreditCardUniqueIdType) GetTerminalId() string`

GetTerminalId returns the TerminalId field if non-nil, zero value otherwise.

### GetTerminalIdOk

`func (o *CreditCardUniqueIdType) GetTerminalIdOk() (*string, bool)`

GetTerminalIdOk returns a tuple with the TerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminalId

`func (o *CreditCardUniqueIdType) SetTerminalId(v string)`

SetTerminalId sets TerminalId field to given value.

### HasTerminalId

`func (o *CreditCardUniqueIdType) HasTerminalId() bool`

HasTerminalId returns a boolean if a field has been set.

### GetUniqueId

`func (o *CreditCardUniqueIdType) GetUniqueId() string`

GetUniqueId returns the UniqueId field if non-nil, zero value otherwise.

### GetUniqueIdOk

`func (o *CreditCardUniqueIdType) GetUniqueIdOk() (*string, bool)`

GetUniqueIdOk returns a tuple with the UniqueId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueId

`func (o *CreditCardUniqueIdType) SetUniqueId(v string)`

SetUniqueId sets UniqueId field to given value.

### HasUniqueId

`func (o *CreditCardUniqueIdType) HasUniqueId() bool`

HasUniqueId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


