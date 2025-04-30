# CommissionPaymentActivityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property of the commission record. | [optional] 
**BankAccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**BatchId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PaymentId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AgentId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PaymentDate** | Pointer to **string** | Payment date of commission | [optional] 
**CheckNo** | Pointer to **float32** | Check no of payment. | [optional] 
**FileName** | Pointer to **string** | File name if payment method is EFT. | [optional] 
**Status** | Pointer to [**CommissionPaymentActivityStatusType**](CommissionPaymentActivityStatusType.md) |  | [optional] 
**Payee** | Pointer to **string** | Payee of commission | [optional] 
**CommissionAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**StatusDate** | Pointer to **string** | Status date of payment activity | [optional] 
**OnCommission** | Pointer to **bool** | Whether this payment batch has related commission records. Commission records could be unlinked for check payments when it is reprinted. | [optional] 

## Methods

### NewCommissionPaymentActivityType

`func NewCommissionPaymentActivityType() *CommissionPaymentActivityType`

NewCommissionPaymentActivityType instantiates a new CommissionPaymentActivityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionPaymentActivityTypeWithDefaults

`func NewCommissionPaymentActivityTypeWithDefaults() *CommissionPaymentActivityType`

NewCommissionPaymentActivityTypeWithDefaults instantiates a new CommissionPaymentActivityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CommissionPaymentActivityType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CommissionPaymentActivityType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CommissionPaymentActivityType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CommissionPaymentActivityType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBankAccountId

`func (o *CommissionPaymentActivityType) GetBankAccountId() UniqueIDType`

GetBankAccountId returns the BankAccountId field if non-nil, zero value otherwise.

### GetBankAccountIdOk

`func (o *CommissionPaymentActivityType) GetBankAccountIdOk() (*UniqueIDType, bool)`

GetBankAccountIdOk returns a tuple with the BankAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankAccountId

`func (o *CommissionPaymentActivityType) SetBankAccountId(v UniqueIDType)`

SetBankAccountId sets BankAccountId field to given value.

### HasBankAccountId

`func (o *CommissionPaymentActivityType) HasBankAccountId() bool`

HasBankAccountId returns a boolean if a field has been set.

### GetBatchId

`func (o *CommissionPaymentActivityType) GetBatchId() UniqueIDType`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *CommissionPaymentActivityType) GetBatchIdOk() (*UniqueIDType, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *CommissionPaymentActivityType) SetBatchId(v UniqueIDType)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *CommissionPaymentActivityType) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.

### GetPaymentId

`func (o *CommissionPaymentActivityType) GetPaymentId() UniqueIDType`

GetPaymentId returns the PaymentId field if non-nil, zero value otherwise.

### GetPaymentIdOk

`func (o *CommissionPaymentActivityType) GetPaymentIdOk() (*UniqueIDType, bool)`

GetPaymentIdOk returns a tuple with the PaymentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentId

`func (o *CommissionPaymentActivityType) SetPaymentId(v UniqueIDType)`

SetPaymentId sets PaymentId field to given value.

### HasPaymentId

`func (o *CommissionPaymentActivityType) HasPaymentId() bool`

HasPaymentId returns a boolean if a field has been set.

### GetAgentId

`func (o *CommissionPaymentActivityType) GetAgentId() UniqueIDType`

GetAgentId returns the AgentId field if non-nil, zero value otherwise.

### GetAgentIdOk

`func (o *CommissionPaymentActivityType) GetAgentIdOk() (*UniqueIDType, bool)`

GetAgentIdOk returns a tuple with the AgentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentId

`func (o *CommissionPaymentActivityType) SetAgentId(v UniqueIDType)`

SetAgentId sets AgentId field to given value.

### HasAgentId

`func (o *CommissionPaymentActivityType) HasAgentId() bool`

HasAgentId returns a boolean if a field has been set.

### GetPaymentDate

`func (o *CommissionPaymentActivityType) GetPaymentDate() string`

GetPaymentDate returns the PaymentDate field if non-nil, zero value otherwise.

### GetPaymentDateOk

`func (o *CommissionPaymentActivityType) GetPaymentDateOk() (*string, bool)`

GetPaymentDateOk returns a tuple with the PaymentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentDate

`func (o *CommissionPaymentActivityType) SetPaymentDate(v string)`

SetPaymentDate sets PaymentDate field to given value.

### HasPaymentDate

`func (o *CommissionPaymentActivityType) HasPaymentDate() bool`

HasPaymentDate returns a boolean if a field has been set.

### GetCheckNo

`func (o *CommissionPaymentActivityType) GetCheckNo() float32`

GetCheckNo returns the CheckNo field if non-nil, zero value otherwise.

### GetCheckNoOk

`func (o *CommissionPaymentActivityType) GetCheckNoOk() (*float32, bool)`

GetCheckNoOk returns a tuple with the CheckNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNo

`func (o *CommissionPaymentActivityType) SetCheckNo(v float32)`

SetCheckNo sets CheckNo field to given value.

### HasCheckNo

`func (o *CommissionPaymentActivityType) HasCheckNo() bool`

HasCheckNo returns a boolean if a field has been set.

### GetFileName

`func (o *CommissionPaymentActivityType) GetFileName() string`

GetFileName returns the FileName field if non-nil, zero value otherwise.

### GetFileNameOk

`func (o *CommissionPaymentActivityType) GetFileNameOk() (*string, bool)`

GetFileNameOk returns a tuple with the FileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileName

`func (o *CommissionPaymentActivityType) SetFileName(v string)`

SetFileName sets FileName field to given value.

### HasFileName

`func (o *CommissionPaymentActivityType) HasFileName() bool`

HasFileName returns a boolean if a field has been set.

### GetStatus

`func (o *CommissionPaymentActivityType) GetStatus() CommissionPaymentActivityStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CommissionPaymentActivityType) GetStatusOk() (*CommissionPaymentActivityStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CommissionPaymentActivityType) SetStatus(v CommissionPaymentActivityStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CommissionPaymentActivityType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetPayee

`func (o *CommissionPaymentActivityType) GetPayee() string`

GetPayee returns the Payee field if non-nil, zero value otherwise.

### GetPayeeOk

`func (o *CommissionPaymentActivityType) GetPayeeOk() (*string, bool)`

GetPayeeOk returns a tuple with the Payee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayee

`func (o *CommissionPaymentActivityType) SetPayee(v string)`

SetPayee sets Payee field to given value.

### HasPayee

`func (o *CommissionPaymentActivityType) HasPayee() bool`

HasPayee returns a boolean if a field has been set.

### GetCommissionAmount

`func (o *CommissionPaymentActivityType) GetCommissionAmount() CurrencyAmountType`

GetCommissionAmount returns the CommissionAmount field if non-nil, zero value otherwise.

### GetCommissionAmountOk

`func (o *CommissionPaymentActivityType) GetCommissionAmountOk() (*CurrencyAmountType, bool)`

GetCommissionAmountOk returns a tuple with the CommissionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionAmount

`func (o *CommissionPaymentActivityType) SetCommissionAmount(v CurrencyAmountType)`

SetCommissionAmount sets CommissionAmount field to given value.

### HasCommissionAmount

`func (o *CommissionPaymentActivityType) HasCommissionAmount() bool`

HasCommissionAmount returns a boolean if a field has been set.

### GetStatusDate

`func (o *CommissionPaymentActivityType) GetStatusDate() string`

GetStatusDate returns the StatusDate field if non-nil, zero value otherwise.

### GetStatusDateOk

`func (o *CommissionPaymentActivityType) GetStatusDateOk() (*string, bool)`

GetStatusDateOk returns a tuple with the StatusDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusDate

`func (o *CommissionPaymentActivityType) SetStatusDate(v string)`

SetStatusDate sets StatusDate field to given value.

### HasStatusDate

`func (o *CommissionPaymentActivityType) HasStatusDate() bool`

HasStatusDate returns a boolean if a field has been set.

### GetOnCommission

`func (o *CommissionPaymentActivityType) GetOnCommission() bool`

GetOnCommission returns the OnCommission field if non-nil, zero value otherwise.

### GetOnCommissionOk

`func (o *CommissionPaymentActivityType) GetOnCommissionOk() (*bool, bool)`

GetOnCommissionOk returns a tuple with the OnCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnCommission

`func (o *CommissionPaymentActivityType) SetOnCommission(v bool)`

SetOnCommission sets OnCommission field to given value.

### HasOnCommission

`func (o *CommissionPaymentActivityType) HasOnCommission() bool`

HasOnCommission returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


