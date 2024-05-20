# PrepaidCardInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AvailableCashoutAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CardNo** | Pointer to **string** | Prepaid card number. | [optional] 
**CardNumberMasked** | Pointer to **string** | Masked Prepaid card / account number. | [optional] 
**ExpiryDate** | Pointer to **string** | Expiry Date of the prepaid card. | [optional] 
**HotelId** | Pointer to **string** | Hotel context for the prepaid card. | [optional] 
**InitialCredit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**InitialLoadDate** | Pointer to **string** | Initial Load Date of the prepaid card. | [optional] 
**InterfaceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**IssueDate** | Pointer to **string** | Issue Date of the prepaid card. | [optional] 
**OperaTransactionsActive** | Pointer to **bool** | Indicate if opera transactions are included on the transactions list. | [optional] 
**PrepaidCardTransactions** | Pointer to [**[]PrepaidCardTransactionInfoType**](PrepaidCardTransactionInfoType.md) | Prepaid card transaction details. | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReservedAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalCredit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalDebit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ValidUntil** | Pointer to **string** | Validity of the prepaid card amount. | [optional] 
**VendorTransactionsActive** | Pointer to **bool** | Indicate if vendor transactions are included on the transactions list. | [optional] 

## Methods

### NewPrepaidCardInfoType

`func NewPrepaidCardInfoType() *PrepaidCardInfoType`

NewPrepaidCardInfoType instantiates a new PrepaidCardInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrepaidCardInfoTypeWithDefaults

`func NewPrepaidCardInfoTypeWithDefaults() *PrepaidCardInfoType`

NewPrepaidCardInfoTypeWithDefaults instantiates a new PrepaidCardInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailableCashoutAmount

`func (o *PrepaidCardInfoType) GetAvailableCashoutAmount() CurrencyAmountType`

GetAvailableCashoutAmount returns the AvailableCashoutAmount field if non-nil, zero value otherwise.

### GetAvailableCashoutAmountOk

`func (o *PrepaidCardInfoType) GetAvailableCashoutAmountOk() (*CurrencyAmountType, bool)`

GetAvailableCashoutAmountOk returns a tuple with the AvailableCashoutAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableCashoutAmount

`func (o *PrepaidCardInfoType) SetAvailableCashoutAmount(v CurrencyAmountType)`

SetAvailableCashoutAmount sets AvailableCashoutAmount field to given value.

### HasAvailableCashoutAmount

`func (o *PrepaidCardInfoType) HasAvailableCashoutAmount() bool`

HasAvailableCashoutAmount returns a boolean if a field has been set.

### GetBalance

`func (o *PrepaidCardInfoType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *PrepaidCardInfoType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *PrepaidCardInfoType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *PrepaidCardInfoType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetCardNo

`func (o *PrepaidCardInfoType) GetCardNo() string`

GetCardNo returns the CardNo field if non-nil, zero value otherwise.

### GetCardNoOk

`func (o *PrepaidCardInfoType) GetCardNoOk() (*string, bool)`

GetCardNoOk returns a tuple with the CardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNo

`func (o *PrepaidCardInfoType) SetCardNo(v string)`

SetCardNo sets CardNo field to given value.

### HasCardNo

`func (o *PrepaidCardInfoType) HasCardNo() bool`

HasCardNo returns a boolean if a field has been set.

### GetCardNumberMasked

`func (o *PrepaidCardInfoType) GetCardNumberMasked() string`

GetCardNumberMasked returns the CardNumberMasked field if non-nil, zero value otherwise.

### GetCardNumberMaskedOk

`func (o *PrepaidCardInfoType) GetCardNumberMaskedOk() (*string, bool)`

GetCardNumberMaskedOk returns a tuple with the CardNumberMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumberMasked

`func (o *PrepaidCardInfoType) SetCardNumberMasked(v string)`

SetCardNumberMasked sets CardNumberMasked field to given value.

### HasCardNumberMasked

`func (o *PrepaidCardInfoType) HasCardNumberMasked() bool`

HasCardNumberMasked returns a boolean if a field has been set.

### GetExpiryDate

`func (o *PrepaidCardInfoType) GetExpiryDate() string`

GetExpiryDate returns the ExpiryDate field if non-nil, zero value otherwise.

### GetExpiryDateOk

`func (o *PrepaidCardInfoType) GetExpiryDateOk() (*string, bool)`

GetExpiryDateOk returns a tuple with the ExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryDate

`func (o *PrepaidCardInfoType) SetExpiryDate(v string)`

SetExpiryDate sets ExpiryDate field to given value.

### HasExpiryDate

`func (o *PrepaidCardInfoType) HasExpiryDate() bool`

HasExpiryDate returns a boolean if a field has been set.

### GetHotelId

`func (o *PrepaidCardInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PrepaidCardInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PrepaidCardInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PrepaidCardInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInitialCredit

`func (o *PrepaidCardInfoType) GetInitialCredit() CurrencyAmountType`

GetInitialCredit returns the InitialCredit field if non-nil, zero value otherwise.

### GetInitialCreditOk

`func (o *PrepaidCardInfoType) GetInitialCreditOk() (*CurrencyAmountType, bool)`

GetInitialCreditOk returns a tuple with the InitialCredit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitialCredit

`func (o *PrepaidCardInfoType) SetInitialCredit(v CurrencyAmountType)`

SetInitialCredit sets InitialCredit field to given value.

### HasInitialCredit

`func (o *PrepaidCardInfoType) HasInitialCredit() bool`

HasInitialCredit returns a boolean if a field has been set.

### GetInitialLoadDate

`func (o *PrepaidCardInfoType) GetInitialLoadDate() string`

GetInitialLoadDate returns the InitialLoadDate field if non-nil, zero value otherwise.

### GetInitialLoadDateOk

`func (o *PrepaidCardInfoType) GetInitialLoadDateOk() (*string, bool)`

GetInitialLoadDateOk returns a tuple with the InitialLoadDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitialLoadDate

`func (o *PrepaidCardInfoType) SetInitialLoadDate(v string)`

SetInitialLoadDate sets InitialLoadDate field to given value.

### HasInitialLoadDate

`func (o *PrepaidCardInfoType) HasInitialLoadDate() bool`

HasInitialLoadDate returns a boolean if a field has been set.

### GetInterfaceId

`func (o *PrepaidCardInfoType) GetInterfaceId() UniqueIDType`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *PrepaidCardInfoType) GetInterfaceIdOk() (*UniqueIDType, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *PrepaidCardInfoType) SetInterfaceId(v UniqueIDType)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *PrepaidCardInfoType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetIssueDate

`func (o *PrepaidCardInfoType) GetIssueDate() string`

GetIssueDate returns the IssueDate field if non-nil, zero value otherwise.

### GetIssueDateOk

`func (o *PrepaidCardInfoType) GetIssueDateOk() (*string, bool)`

GetIssueDateOk returns a tuple with the IssueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueDate

`func (o *PrepaidCardInfoType) SetIssueDate(v string)`

SetIssueDate sets IssueDate field to given value.

### HasIssueDate

`func (o *PrepaidCardInfoType) HasIssueDate() bool`

HasIssueDate returns a boolean if a field has been set.

### GetOperaTransactionsActive

`func (o *PrepaidCardInfoType) GetOperaTransactionsActive() bool`

GetOperaTransactionsActive returns the OperaTransactionsActive field if non-nil, zero value otherwise.

### GetOperaTransactionsActiveOk

`func (o *PrepaidCardInfoType) GetOperaTransactionsActiveOk() (*bool, bool)`

GetOperaTransactionsActiveOk returns a tuple with the OperaTransactionsActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperaTransactionsActive

`func (o *PrepaidCardInfoType) SetOperaTransactionsActive(v bool)`

SetOperaTransactionsActive sets OperaTransactionsActive field to given value.

### HasOperaTransactionsActive

`func (o *PrepaidCardInfoType) HasOperaTransactionsActive() bool`

HasOperaTransactionsActive returns a boolean if a field has been set.

### GetPrepaidCardTransactions

`func (o *PrepaidCardInfoType) GetPrepaidCardTransactions() []PrepaidCardTransactionInfoType`

GetPrepaidCardTransactions returns the PrepaidCardTransactions field if non-nil, zero value otherwise.

### GetPrepaidCardTransactionsOk

`func (o *PrepaidCardInfoType) GetPrepaidCardTransactionsOk() (*[]PrepaidCardTransactionInfoType, bool)`

GetPrepaidCardTransactionsOk returns a tuple with the PrepaidCardTransactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrepaidCardTransactions

`func (o *PrepaidCardInfoType) SetPrepaidCardTransactions(v []PrepaidCardTransactionInfoType)`

SetPrepaidCardTransactions sets PrepaidCardTransactions field to given value.

### HasPrepaidCardTransactions

`func (o *PrepaidCardInfoType) HasPrepaidCardTransactions() bool`

HasPrepaidCardTransactions returns a boolean if a field has been set.

### GetReservationId

`func (o *PrepaidCardInfoType) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PrepaidCardInfoType) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PrepaidCardInfoType) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PrepaidCardInfoType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservedAmount

`func (o *PrepaidCardInfoType) GetReservedAmount() CurrencyAmountType`

GetReservedAmount returns the ReservedAmount field if non-nil, zero value otherwise.

### GetReservedAmountOk

`func (o *PrepaidCardInfoType) GetReservedAmountOk() (*CurrencyAmountType, bool)`

GetReservedAmountOk returns a tuple with the ReservedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservedAmount

`func (o *PrepaidCardInfoType) SetReservedAmount(v CurrencyAmountType)`

SetReservedAmount sets ReservedAmount field to given value.

### HasReservedAmount

`func (o *PrepaidCardInfoType) HasReservedAmount() bool`

HasReservedAmount returns a boolean if a field has been set.

### GetTotalCredit

`func (o *PrepaidCardInfoType) GetTotalCredit() CurrencyAmountType`

GetTotalCredit returns the TotalCredit field if non-nil, zero value otherwise.

### GetTotalCreditOk

`func (o *PrepaidCardInfoType) GetTotalCreditOk() (*CurrencyAmountType, bool)`

GetTotalCreditOk returns a tuple with the TotalCredit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCredit

`func (o *PrepaidCardInfoType) SetTotalCredit(v CurrencyAmountType)`

SetTotalCredit sets TotalCredit field to given value.

### HasTotalCredit

`func (o *PrepaidCardInfoType) HasTotalCredit() bool`

HasTotalCredit returns a boolean if a field has been set.

### GetTotalDebit

`func (o *PrepaidCardInfoType) GetTotalDebit() CurrencyAmountType`

GetTotalDebit returns the TotalDebit field if non-nil, zero value otherwise.

### GetTotalDebitOk

`func (o *PrepaidCardInfoType) GetTotalDebitOk() (*CurrencyAmountType, bool)`

GetTotalDebitOk returns a tuple with the TotalDebit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDebit

`func (o *PrepaidCardInfoType) SetTotalDebit(v CurrencyAmountType)`

SetTotalDebit sets TotalDebit field to given value.

### HasTotalDebit

`func (o *PrepaidCardInfoType) HasTotalDebit() bool`

HasTotalDebit returns a boolean if a field has been set.

### GetValidUntil

`func (o *PrepaidCardInfoType) GetValidUntil() string`

GetValidUntil returns the ValidUntil field if non-nil, zero value otherwise.

### GetValidUntilOk

`func (o *PrepaidCardInfoType) GetValidUntilOk() (*string, bool)`

GetValidUntilOk returns a tuple with the ValidUntil field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidUntil

`func (o *PrepaidCardInfoType) SetValidUntil(v string)`

SetValidUntil sets ValidUntil field to given value.

### HasValidUntil

`func (o *PrepaidCardInfoType) HasValidUntil() bool`

HasValidUntil returns a boolean if a field has been set.

### GetVendorTransactionsActive

`func (o *PrepaidCardInfoType) GetVendorTransactionsActive() bool`

GetVendorTransactionsActive returns the VendorTransactionsActive field if non-nil, zero value otherwise.

### GetVendorTransactionsActiveOk

`func (o *PrepaidCardInfoType) GetVendorTransactionsActiveOk() (*bool, bool)`

GetVendorTransactionsActiveOk returns a tuple with the VendorTransactionsActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendorTransactionsActive

`func (o *PrepaidCardInfoType) SetVendorTransactionsActive(v bool)`

SetVendorTransactionsActive sets VendorTransactionsActive field to given value.

### HasVendorTransactionsActive

`func (o *PrepaidCardInfoType) HasVendorTransactionsActive() bool`

HasVendorTransactionsActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


