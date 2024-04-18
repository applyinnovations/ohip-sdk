# ARPaymentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Age** | Pointer to **int32** | The Aging age of the payment. | [optional] 
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AmountUsed** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CashierInfo** | Pointer to [**CashierInfoType**](CashierInfoType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**PaymentCard** | Pointer to [**ResPaymentCardType**](ResPaymentCardType.md) |  | [optional] 
**PostingDate** | Pointer to **string** | Posting date of the invoice. | [optional] 
**Reference** | Pointer to **string** | User-defined posting reference. | [optional] 
**Remark** | Pointer to **string** | User-defined posting remark. | [optional] 
**RevenueDate** | Pointer to **string** | Revenue date ID of the invoice. | [optional] 
**SequenceNo** | Pointer to **int32** | When this PostingType is used to return the postings generated by a batch request, the sequence number is used to relate to the Request&#39;s sequence number. | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code of the Payment. | [optional] 
**TransactionDate** | Pointer to **string** | Date of the Payment. | [optional] 
**TransactionNo** | Pointer to **float32** | Unique Transaction Identifier of the Payment. | [optional] 
**TransferDate** | Pointer to **string** | Transfer of the invoice. | [optional] 
**TransferredIn** | Pointer to **bool** |  | [optional] 
**TransferredOut** | Pointer to **bool** |  | [optional] 

## Methods

### NewARPaymentType

`func NewARPaymentType() *ARPaymentType`

NewARPaymentType instantiates a new ARPaymentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARPaymentTypeWithDefaults

`func NewARPaymentTypeWithDefaults() *ARPaymentType`

NewARPaymentTypeWithDefaults instantiates a new ARPaymentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAge

`func (o *ARPaymentType) GetAge() int32`

GetAge returns the Age field if non-nil, zero value otherwise.

### GetAgeOk

`func (o *ARPaymentType) GetAgeOk() (*int32, bool)`

GetAgeOk returns a tuple with the Age field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAge

`func (o *ARPaymentType) SetAge(v int32)`

SetAge sets Age field to given value.

### HasAge

`func (o *ARPaymentType) HasAge() bool`

HasAge returns a boolean if a field has been set.

### GetAmount

`func (o *ARPaymentType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ARPaymentType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ARPaymentType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ARPaymentType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetAmountUsed

`func (o *ARPaymentType) GetAmountUsed() CurrencyAmountType`

GetAmountUsed returns the AmountUsed field if non-nil, zero value otherwise.

### GetAmountUsedOk

`func (o *ARPaymentType) GetAmountUsedOk() (*CurrencyAmountType, bool)`

GetAmountUsedOk returns a tuple with the AmountUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountUsed

`func (o *ARPaymentType) SetAmountUsed(v CurrencyAmountType)`

SetAmountUsed sets AmountUsed field to given value.

### HasAmountUsed

`func (o *ARPaymentType) HasAmountUsed() bool`

HasAmountUsed returns a boolean if a field has been set.

### GetBalance

`func (o *ARPaymentType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *ARPaymentType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *ARPaymentType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *ARPaymentType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetCashierInfo

`func (o *ARPaymentType) GetCashierInfo() CashierInfoType`

GetCashierInfo returns the CashierInfo field if non-nil, zero value otherwise.

### GetCashierInfoOk

`func (o *ARPaymentType) GetCashierInfoOk() (*CashierInfoType, bool)`

GetCashierInfoOk returns a tuple with the CashierInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierInfo

`func (o *ARPaymentType) SetCashierInfo(v CashierInfoType)`

SetCashierInfo sets CashierInfo field to given value.

### HasCashierInfo

`func (o *ARPaymentType) HasCashierInfo() bool`

HasCashierInfo returns a boolean if a field has been set.

### GetHotelId

`func (o *ARPaymentType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARPaymentType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARPaymentType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARPaymentType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPaymentCard

`func (o *ARPaymentType) GetPaymentCard() ResPaymentCardType`

GetPaymentCard returns the PaymentCard field if non-nil, zero value otherwise.

### GetPaymentCardOk

`func (o *ARPaymentType) GetPaymentCardOk() (*ResPaymentCardType, bool)`

GetPaymentCardOk returns a tuple with the PaymentCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentCard

`func (o *ARPaymentType) SetPaymentCard(v ResPaymentCardType)`

SetPaymentCard sets PaymentCard field to given value.

### HasPaymentCard

`func (o *ARPaymentType) HasPaymentCard() bool`

HasPaymentCard returns a boolean if a field has been set.

### GetPostingDate

`func (o *ARPaymentType) GetPostingDate() string`

GetPostingDate returns the PostingDate field if non-nil, zero value otherwise.

### GetPostingDateOk

`func (o *ARPaymentType) GetPostingDateOk() (*string, bool)`

GetPostingDateOk returns a tuple with the PostingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingDate

`func (o *ARPaymentType) SetPostingDate(v string)`

SetPostingDate sets PostingDate field to given value.

### HasPostingDate

`func (o *ARPaymentType) HasPostingDate() bool`

HasPostingDate returns a boolean if a field has been set.

### GetReference

`func (o *ARPaymentType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ARPaymentType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ARPaymentType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *ARPaymentType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetRemark

`func (o *ARPaymentType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *ARPaymentType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *ARPaymentType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *ARPaymentType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetRevenueDate

`func (o *ARPaymentType) GetRevenueDate() string`

GetRevenueDate returns the RevenueDate field if non-nil, zero value otherwise.

### GetRevenueDateOk

`func (o *ARPaymentType) GetRevenueDateOk() (*string, bool)`

GetRevenueDateOk returns a tuple with the RevenueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDate

`func (o *ARPaymentType) SetRevenueDate(v string)`

SetRevenueDate sets RevenueDate field to given value.

### HasRevenueDate

`func (o *ARPaymentType) HasRevenueDate() bool`

HasRevenueDate returns a boolean if a field has been set.

### GetSequenceNo

`func (o *ARPaymentType) GetSequenceNo() int32`

GetSequenceNo returns the SequenceNo field if non-nil, zero value otherwise.

### GetSequenceNoOk

`func (o *ARPaymentType) GetSequenceNoOk() (*int32, bool)`

GetSequenceNoOk returns a tuple with the SequenceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequenceNo

`func (o *ARPaymentType) SetSequenceNo(v int32)`

SetSequenceNo sets SequenceNo field to given value.

### HasSequenceNo

`func (o *ARPaymentType) HasSequenceNo() bool`

HasSequenceNo returns a boolean if a field has been set.

### GetTransactionCode

`func (o *ARPaymentType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *ARPaymentType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *ARPaymentType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *ARPaymentType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionDate

`func (o *ARPaymentType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *ARPaymentType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *ARPaymentType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *ARPaymentType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetTransactionNo

`func (o *ARPaymentType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *ARPaymentType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *ARPaymentType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *ARPaymentType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.

### GetTransferDate

`func (o *ARPaymentType) GetTransferDate() string`

GetTransferDate returns the TransferDate field if non-nil, zero value otherwise.

### GetTransferDateOk

`func (o *ARPaymentType) GetTransferDateOk() (*string, bool)`

GetTransferDateOk returns a tuple with the TransferDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferDate

`func (o *ARPaymentType) SetTransferDate(v string)`

SetTransferDate sets TransferDate field to given value.

### HasTransferDate

`func (o *ARPaymentType) HasTransferDate() bool`

HasTransferDate returns a boolean if a field has been set.

### GetTransferredIn

`func (o *ARPaymentType) GetTransferredIn() bool`

GetTransferredIn returns the TransferredIn field if non-nil, zero value otherwise.

### GetTransferredInOk

`func (o *ARPaymentType) GetTransferredInOk() (*bool, bool)`

GetTransferredInOk returns a tuple with the TransferredIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferredIn

`func (o *ARPaymentType) SetTransferredIn(v bool)`

SetTransferredIn sets TransferredIn field to given value.

### HasTransferredIn

`func (o *ARPaymentType) HasTransferredIn() bool`

HasTransferredIn returns a boolean if a field has been set.

### GetTransferredOut

`func (o *ARPaymentType) GetTransferredOut() bool`

GetTransferredOut returns the TransferredOut field if non-nil, zero value otherwise.

### GetTransferredOutOk

`func (o *ARPaymentType) GetTransferredOutOk() (*bool, bool)`

GetTransferredOutOk returns a tuple with the TransferredOut field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferredOut

`func (o *ARPaymentType) SetTransferredOut(v bool)`

SetTransferredOut sets TransferredOut field to given value.

### HasTransferredOut

`func (o *ARPaymentType) HasTransferredOut() bool`

HasTransferredOut returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

