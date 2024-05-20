# ResPaymentCardType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalAmountNeeded** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AttachCreditCardToProfile** | Pointer to **bool** | Attach the credit card to profile. | [optional] 
**CardHolderName** | Pointer to **string** |  | [optional] 
**CardId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CardNumber** | Pointer to **string** |  | [optional] 
**CardNumberLast4Digits** | Pointer to **string** |  | [optional] 
**CardNumberMasked** | Pointer to **string** |  | [optional] 
**CardOrToken** | Pointer to [**CardNumberTypeType**](CardNumberTypeType.md) |  | [optional] 
**CardPresent** | Pointer to **bool** | Flag to determine if the credit card was swiped/manually entered , This element is only used when PAYMENT SERVICE DIRECTIVE(PSD) Opera Control is active. | [optional] 
**CardType** | Pointer to [**CardTypeType**](CardTypeType.md) |  | [optional] 
**CitId** | Pointer to **string** | Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active. | [optional] 
**CurrentAuthorizedAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ExpirationDate** | Pointer to **string** | Expiration date of the credit card | [optional] 
**ExpirationDateExpired** | Pointer to **bool** |  | [optional] 
**ExpirationDateMasked** | Pointer to **string** | Masked Expiration date of the credit card | [optional] 
**Processing** | Pointer to [**CardProcessingType**](CardProcessingType.md) |  | [optional] 
**Swiped** | Pointer to **bool** |  | [optional] 
**UserDefinedCardType** | Pointer to **string** | Indicates the user defined credit card type if credit card type from a defined list is not provided | [optional] 

## Methods

### NewResPaymentCardType

`func NewResPaymentCardType() *ResPaymentCardType`

NewResPaymentCardType instantiates a new ResPaymentCardType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResPaymentCardTypeWithDefaults

`func NewResPaymentCardTypeWithDefaults() *ResPaymentCardType`

NewResPaymentCardTypeWithDefaults instantiates a new ResPaymentCardType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalAmountNeeded

`func (o *ResPaymentCardType) GetApprovalAmountNeeded() CurrencyAmountType`

GetApprovalAmountNeeded returns the ApprovalAmountNeeded field if non-nil, zero value otherwise.

### GetApprovalAmountNeededOk

`func (o *ResPaymentCardType) GetApprovalAmountNeededOk() (*CurrencyAmountType, bool)`

GetApprovalAmountNeededOk returns a tuple with the ApprovalAmountNeeded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalAmountNeeded

`func (o *ResPaymentCardType) SetApprovalAmountNeeded(v CurrencyAmountType)`

SetApprovalAmountNeeded sets ApprovalAmountNeeded field to given value.

### HasApprovalAmountNeeded

`func (o *ResPaymentCardType) HasApprovalAmountNeeded() bool`

HasApprovalAmountNeeded returns a boolean if a field has been set.

### GetAttachCreditCardToProfile

`func (o *ResPaymentCardType) GetAttachCreditCardToProfile() bool`

GetAttachCreditCardToProfile returns the AttachCreditCardToProfile field if non-nil, zero value otherwise.

### GetAttachCreditCardToProfileOk

`func (o *ResPaymentCardType) GetAttachCreditCardToProfileOk() (*bool, bool)`

GetAttachCreditCardToProfileOk returns a tuple with the AttachCreditCardToProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachCreditCardToProfile

`func (o *ResPaymentCardType) SetAttachCreditCardToProfile(v bool)`

SetAttachCreditCardToProfile sets AttachCreditCardToProfile field to given value.

### HasAttachCreditCardToProfile

`func (o *ResPaymentCardType) HasAttachCreditCardToProfile() bool`

HasAttachCreditCardToProfile returns a boolean if a field has been set.

### GetCardHolderName

`func (o *ResPaymentCardType) GetCardHolderName() string`

GetCardHolderName returns the CardHolderName field if non-nil, zero value otherwise.

### GetCardHolderNameOk

`func (o *ResPaymentCardType) GetCardHolderNameOk() (*string, bool)`

GetCardHolderNameOk returns a tuple with the CardHolderName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardHolderName

`func (o *ResPaymentCardType) SetCardHolderName(v string)`

SetCardHolderName sets CardHolderName field to given value.

### HasCardHolderName

`func (o *ResPaymentCardType) HasCardHolderName() bool`

HasCardHolderName returns a boolean if a field has been set.

### GetCardId

`func (o *ResPaymentCardType) GetCardId() UniqueIDType`

GetCardId returns the CardId field if non-nil, zero value otherwise.

### GetCardIdOk

`func (o *ResPaymentCardType) GetCardIdOk() (*UniqueIDType, bool)`

GetCardIdOk returns a tuple with the CardId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardId

`func (o *ResPaymentCardType) SetCardId(v UniqueIDType)`

SetCardId sets CardId field to given value.

### HasCardId

`func (o *ResPaymentCardType) HasCardId() bool`

HasCardId returns a boolean if a field has been set.

### GetCardNumber

`func (o *ResPaymentCardType) GetCardNumber() string`

GetCardNumber returns the CardNumber field if non-nil, zero value otherwise.

### GetCardNumberOk

`func (o *ResPaymentCardType) GetCardNumberOk() (*string, bool)`

GetCardNumberOk returns a tuple with the CardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumber

`func (o *ResPaymentCardType) SetCardNumber(v string)`

SetCardNumber sets CardNumber field to given value.

### HasCardNumber

`func (o *ResPaymentCardType) HasCardNumber() bool`

HasCardNumber returns a boolean if a field has been set.

### GetCardNumberLast4Digits

`func (o *ResPaymentCardType) GetCardNumberLast4Digits() string`

GetCardNumberLast4Digits returns the CardNumberLast4Digits field if non-nil, zero value otherwise.

### GetCardNumberLast4DigitsOk

`func (o *ResPaymentCardType) GetCardNumberLast4DigitsOk() (*string, bool)`

GetCardNumberLast4DigitsOk returns a tuple with the CardNumberLast4Digits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumberLast4Digits

`func (o *ResPaymentCardType) SetCardNumberLast4Digits(v string)`

SetCardNumberLast4Digits sets CardNumberLast4Digits field to given value.

### HasCardNumberLast4Digits

`func (o *ResPaymentCardType) HasCardNumberLast4Digits() bool`

HasCardNumberLast4Digits returns a boolean if a field has been set.

### GetCardNumberMasked

`func (o *ResPaymentCardType) GetCardNumberMasked() string`

GetCardNumberMasked returns the CardNumberMasked field if non-nil, zero value otherwise.

### GetCardNumberMaskedOk

`func (o *ResPaymentCardType) GetCardNumberMaskedOk() (*string, bool)`

GetCardNumberMaskedOk returns a tuple with the CardNumberMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumberMasked

`func (o *ResPaymentCardType) SetCardNumberMasked(v string)`

SetCardNumberMasked sets CardNumberMasked field to given value.

### HasCardNumberMasked

`func (o *ResPaymentCardType) HasCardNumberMasked() bool`

HasCardNumberMasked returns a boolean if a field has been set.

### GetCardOrToken

`func (o *ResPaymentCardType) GetCardOrToken() CardNumberTypeType`

GetCardOrToken returns the CardOrToken field if non-nil, zero value otherwise.

### GetCardOrTokenOk

`func (o *ResPaymentCardType) GetCardOrTokenOk() (*CardNumberTypeType, bool)`

GetCardOrTokenOk returns a tuple with the CardOrToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardOrToken

`func (o *ResPaymentCardType) SetCardOrToken(v CardNumberTypeType)`

SetCardOrToken sets CardOrToken field to given value.

### HasCardOrToken

`func (o *ResPaymentCardType) HasCardOrToken() bool`

HasCardOrToken returns a boolean if a field has been set.

### GetCardPresent

`func (o *ResPaymentCardType) GetCardPresent() bool`

GetCardPresent returns the CardPresent field if non-nil, zero value otherwise.

### GetCardPresentOk

`func (o *ResPaymentCardType) GetCardPresentOk() (*bool, bool)`

GetCardPresentOk returns a tuple with the CardPresent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardPresent

`func (o *ResPaymentCardType) SetCardPresent(v bool)`

SetCardPresent sets CardPresent field to given value.

### HasCardPresent

`func (o *ResPaymentCardType) HasCardPresent() bool`

HasCardPresent returns a boolean if a field has been set.

### GetCardType

`func (o *ResPaymentCardType) GetCardType() CardTypeType`

GetCardType returns the CardType field if non-nil, zero value otherwise.

### GetCardTypeOk

`func (o *ResPaymentCardType) GetCardTypeOk() (*CardTypeType, bool)`

GetCardTypeOk returns a tuple with the CardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardType

`func (o *ResPaymentCardType) SetCardType(v CardTypeType)`

SetCardType sets CardType field to given value.

### HasCardType

`func (o *ResPaymentCardType) HasCardType() bool`

HasCardType returns a boolean if a field has been set.

### GetCitId

`func (o *ResPaymentCardType) GetCitId() string`

GetCitId returns the CitId field if non-nil, zero value otherwise.

### GetCitIdOk

`func (o *ResPaymentCardType) GetCitIdOk() (*string, bool)`

GetCitIdOk returns a tuple with the CitId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCitId

`func (o *ResPaymentCardType) SetCitId(v string)`

SetCitId sets CitId field to given value.

### HasCitId

`func (o *ResPaymentCardType) HasCitId() bool`

HasCitId returns a boolean if a field has been set.

### GetCurrentAuthorizedAmount

`func (o *ResPaymentCardType) GetCurrentAuthorizedAmount() CurrencyAmountType`

GetCurrentAuthorizedAmount returns the CurrentAuthorizedAmount field if non-nil, zero value otherwise.

### GetCurrentAuthorizedAmountOk

`func (o *ResPaymentCardType) GetCurrentAuthorizedAmountOk() (*CurrencyAmountType, bool)`

GetCurrentAuthorizedAmountOk returns a tuple with the CurrentAuthorizedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentAuthorizedAmount

`func (o *ResPaymentCardType) SetCurrentAuthorizedAmount(v CurrencyAmountType)`

SetCurrentAuthorizedAmount sets CurrentAuthorizedAmount field to given value.

### HasCurrentAuthorizedAmount

`func (o *ResPaymentCardType) HasCurrentAuthorizedAmount() bool`

HasCurrentAuthorizedAmount returns a boolean if a field has been set.

### GetExpirationDate

`func (o *ResPaymentCardType) GetExpirationDate() string`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *ResPaymentCardType) GetExpirationDateOk() (*string, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *ResPaymentCardType) SetExpirationDate(v string)`

SetExpirationDate sets ExpirationDate field to given value.

### HasExpirationDate

`func (o *ResPaymentCardType) HasExpirationDate() bool`

HasExpirationDate returns a boolean if a field has been set.

### GetExpirationDateExpired

`func (o *ResPaymentCardType) GetExpirationDateExpired() bool`

GetExpirationDateExpired returns the ExpirationDateExpired field if non-nil, zero value otherwise.

### GetExpirationDateExpiredOk

`func (o *ResPaymentCardType) GetExpirationDateExpiredOk() (*bool, bool)`

GetExpirationDateExpiredOk returns a tuple with the ExpirationDateExpired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDateExpired

`func (o *ResPaymentCardType) SetExpirationDateExpired(v bool)`

SetExpirationDateExpired sets ExpirationDateExpired field to given value.

### HasExpirationDateExpired

`func (o *ResPaymentCardType) HasExpirationDateExpired() bool`

HasExpirationDateExpired returns a boolean if a field has been set.

### GetExpirationDateMasked

`func (o *ResPaymentCardType) GetExpirationDateMasked() string`

GetExpirationDateMasked returns the ExpirationDateMasked field if non-nil, zero value otherwise.

### GetExpirationDateMaskedOk

`func (o *ResPaymentCardType) GetExpirationDateMaskedOk() (*string, bool)`

GetExpirationDateMaskedOk returns a tuple with the ExpirationDateMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDateMasked

`func (o *ResPaymentCardType) SetExpirationDateMasked(v string)`

SetExpirationDateMasked sets ExpirationDateMasked field to given value.

### HasExpirationDateMasked

`func (o *ResPaymentCardType) HasExpirationDateMasked() bool`

HasExpirationDateMasked returns a boolean if a field has been set.

### GetProcessing

`func (o *ResPaymentCardType) GetProcessing() CardProcessingType`

GetProcessing returns the Processing field if non-nil, zero value otherwise.

### GetProcessingOk

`func (o *ResPaymentCardType) GetProcessingOk() (*CardProcessingType, bool)`

GetProcessingOk returns a tuple with the Processing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessing

`func (o *ResPaymentCardType) SetProcessing(v CardProcessingType)`

SetProcessing sets Processing field to given value.

### HasProcessing

`func (o *ResPaymentCardType) HasProcessing() bool`

HasProcessing returns a boolean if a field has been set.

### GetSwiped

`func (o *ResPaymentCardType) GetSwiped() bool`

GetSwiped returns the Swiped field if non-nil, zero value otherwise.

### GetSwipedOk

`func (o *ResPaymentCardType) GetSwipedOk() (*bool, bool)`

GetSwipedOk returns a tuple with the Swiped field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSwiped

`func (o *ResPaymentCardType) SetSwiped(v bool)`

SetSwiped sets Swiped field to given value.

### HasSwiped

`func (o *ResPaymentCardType) HasSwiped() bool`

HasSwiped returns a boolean if a field has been set.

### GetUserDefinedCardType

`func (o *ResPaymentCardType) GetUserDefinedCardType() string`

GetUserDefinedCardType returns the UserDefinedCardType field if non-nil, zero value otherwise.

### GetUserDefinedCardTypeOk

`func (o *ResPaymentCardType) GetUserDefinedCardTypeOk() (*string, bool)`

GetUserDefinedCardTypeOk returns a tuple with the UserDefinedCardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedCardType

`func (o *ResPaymentCardType) SetUserDefinedCardType(v string)`

SetUserDefinedCardType sets UserDefinedCardType field to given value.

### HasUserDefinedCardType

`func (o *ResPaymentCardType) HasUserDefinedCardType() bool`

HasUserDefinedCardType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


