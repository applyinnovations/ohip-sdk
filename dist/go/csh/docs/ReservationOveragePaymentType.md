# ReservationOveragePaymentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CardExpirationDate** | Pointer to **string** | Expiration date of the credit card (mask based on PCI compliance) | [optional] 
**CardType** | Pointer to [**CardTypeType**](CardTypeType.md) |  | [optional] 
**CreditCardId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CreditCardLimit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CreditCardNo** | Pointer to **string** | Credit Card number / token (mask based on PCI compliance). | [optional] 
**GuestName** | Pointer to **string** | Guest name of the listed reservation. | [optional] 
**PaymentMethod** | Pointer to **string** | Defines the unique identifier for this payment method. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**RoomId** | Pointer to **string** | Room number on the reservation. | [optional] 
**UserDefinedCardType** | Pointer to **string** | Identifies the user defined credit card type if credit card type from a defined list is not provided. | [optional] 
**WindowNo** | Pointer to **int32** | Window number associated where the balance is equal or higher to the credit limit on the method of payment. | [optional] 

## Methods

### NewReservationOveragePaymentType

`func NewReservationOveragePaymentType() *ReservationOveragePaymentType`

NewReservationOveragePaymentType instantiates a new ReservationOveragePaymentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationOveragePaymentTypeWithDefaults

`func NewReservationOveragePaymentTypeWithDefaults() *ReservationOveragePaymentType`

NewReservationOveragePaymentTypeWithDefaults instantiates a new ReservationOveragePaymentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBalance

`func (o *ReservationOveragePaymentType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *ReservationOveragePaymentType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *ReservationOveragePaymentType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *ReservationOveragePaymentType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetCardExpirationDate

`func (o *ReservationOveragePaymentType) GetCardExpirationDate() string`

GetCardExpirationDate returns the CardExpirationDate field if non-nil, zero value otherwise.

### GetCardExpirationDateOk

`func (o *ReservationOveragePaymentType) GetCardExpirationDateOk() (*string, bool)`

GetCardExpirationDateOk returns a tuple with the CardExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardExpirationDate

`func (o *ReservationOveragePaymentType) SetCardExpirationDate(v string)`

SetCardExpirationDate sets CardExpirationDate field to given value.

### HasCardExpirationDate

`func (o *ReservationOveragePaymentType) HasCardExpirationDate() bool`

HasCardExpirationDate returns a boolean if a field has been set.

### GetCardType

`func (o *ReservationOveragePaymentType) GetCardType() CardTypeType`

GetCardType returns the CardType field if non-nil, zero value otherwise.

### GetCardTypeOk

`func (o *ReservationOveragePaymentType) GetCardTypeOk() (*CardTypeType, bool)`

GetCardTypeOk returns a tuple with the CardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardType

`func (o *ReservationOveragePaymentType) SetCardType(v CardTypeType)`

SetCardType sets CardType field to given value.

### HasCardType

`func (o *ReservationOveragePaymentType) HasCardType() bool`

HasCardType returns a boolean if a field has been set.

### GetCreditCardId

`func (o *ReservationOveragePaymentType) GetCreditCardId() UniqueIDType`

GetCreditCardId returns the CreditCardId field if non-nil, zero value otherwise.

### GetCreditCardIdOk

`func (o *ReservationOveragePaymentType) GetCreditCardIdOk() (*UniqueIDType, bool)`

GetCreditCardIdOk returns a tuple with the CreditCardId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardId

`func (o *ReservationOveragePaymentType) SetCreditCardId(v UniqueIDType)`

SetCreditCardId sets CreditCardId field to given value.

### HasCreditCardId

`func (o *ReservationOveragePaymentType) HasCreditCardId() bool`

HasCreditCardId returns a boolean if a field has been set.

### GetCreditCardLimit

`func (o *ReservationOveragePaymentType) GetCreditCardLimit() CurrencyAmountType`

GetCreditCardLimit returns the CreditCardLimit field if non-nil, zero value otherwise.

### GetCreditCardLimitOk

`func (o *ReservationOveragePaymentType) GetCreditCardLimitOk() (*CurrencyAmountType, bool)`

GetCreditCardLimitOk returns a tuple with the CreditCardLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardLimit

`func (o *ReservationOveragePaymentType) SetCreditCardLimit(v CurrencyAmountType)`

SetCreditCardLimit sets CreditCardLimit field to given value.

### HasCreditCardLimit

`func (o *ReservationOveragePaymentType) HasCreditCardLimit() bool`

HasCreditCardLimit returns a boolean if a field has been set.

### GetCreditCardNo

`func (o *ReservationOveragePaymentType) GetCreditCardNo() string`

GetCreditCardNo returns the CreditCardNo field if non-nil, zero value otherwise.

### GetCreditCardNoOk

`func (o *ReservationOveragePaymentType) GetCreditCardNoOk() (*string, bool)`

GetCreditCardNoOk returns a tuple with the CreditCardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardNo

`func (o *ReservationOveragePaymentType) SetCreditCardNo(v string)`

SetCreditCardNo sets CreditCardNo field to given value.

### HasCreditCardNo

`func (o *ReservationOveragePaymentType) HasCreditCardNo() bool`

HasCreditCardNo returns a boolean if a field has been set.

### GetGuestName

`func (o *ReservationOveragePaymentType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *ReservationOveragePaymentType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *ReservationOveragePaymentType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *ReservationOveragePaymentType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *ReservationOveragePaymentType) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *ReservationOveragePaymentType) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *ReservationOveragePaymentType) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *ReservationOveragePaymentType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationOveragePaymentType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationOveragePaymentType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationOveragePaymentType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationOveragePaymentType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRoomId

`func (o *ReservationOveragePaymentType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *ReservationOveragePaymentType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *ReservationOveragePaymentType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *ReservationOveragePaymentType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetUserDefinedCardType

`func (o *ReservationOveragePaymentType) GetUserDefinedCardType() string`

GetUserDefinedCardType returns the UserDefinedCardType field if non-nil, zero value otherwise.

### GetUserDefinedCardTypeOk

`func (o *ReservationOveragePaymentType) GetUserDefinedCardTypeOk() (*string, bool)`

GetUserDefinedCardTypeOk returns a tuple with the UserDefinedCardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedCardType

`func (o *ReservationOveragePaymentType) SetUserDefinedCardType(v string)`

SetUserDefinedCardType sets UserDefinedCardType field to given value.

### HasUserDefinedCardType

`func (o *ReservationOveragePaymentType) HasUserDefinedCardType() bool`

HasUserDefinedCardType returns a boolean if a field has been set.

### GetWindowNo

`func (o *ReservationOveragePaymentType) GetWindowNo() int32`

GetWindowNo returns the WindowNo field if non-nil, zero value otherwise.

### GetWindowNoOk

`func (o *ReservationOveragePaymentType) GetWindowNoOk() (*int32, bool)`

GetWindowNoOk returns a tuple with the WindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWindowNo

`func (o *ReservationOveragePaymentType) SetWindowNo(v int32)`

SetWindowNo sets WindowNo field to given value.

### HasWindowNo

`func (o *ReservationOveragePaymentType) HasWindowNo() bool`

HasWindowNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


