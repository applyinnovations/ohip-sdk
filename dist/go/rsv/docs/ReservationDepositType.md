# ReservationDepositType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmountPaid** | Pointer to **float32** | Deposit Amount Paid. | [optional] 
**DueDate** | Pointer to **string** | Deposit Due Date. | [optional] 
**PostingDate** | Pointer to **string** | Deposit Posting Date. | [optional] 
**HasPaid** | Pointer to **bool** | Resolves whether reservation has paid deposit. | [optional] 
**HasOutstanding** | Pointer to **bool** | Resolves whether reservation has outstanding deposit. | [optional] 
**AmountRequired** | Pointer to **float32** | Deposit Amount Required. | [optional] 
**AmountOwed** | Pointer to **float32** | Deposit Amount Oustanding. | [optional] 

## Methods

### NewReservationDepositType

`func NewReservationDepositType() *ReservationDepositType`

NewReservationDepositType instantiates a new ReservationDepositType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationDepositTypeWithDefaults

`func NewReservationDepositTypeWithDefaults() *ReservationDepositType`

NewReservationDepositTypeWithDefaults instantiates a new ReservationDepositType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmountPaid

`func (o *ReservationDepositType) GetAmountPaid() float32`

GetAmountPaid returns the AmountPaid field if non-nil, zero value otherwise.

### GetAmountPaidOk

`func (o *ReservationDepositType) GetAmountPaidOk() (*float32, bool)`

GetAmountPaidOk returns a tuple with the AmountPaid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountPaid

`func (o *ReservationDepositType) SetAmountPaid(v float32)`

SetAmountPaid sets AmountPaid field to given value.

### HasAmountPaid

`func (o *ReservationDepositType) HasAmountPaid() bool`

HasAmountPaid returns a boolean if a field has been set.

### GetDueDate

`func (o *ReservationDepositType) GetDueDate() string`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *ReservationDepositType) GetDueDateOk() (*string, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *ReservationDepositType) SetDueDate(v string)`

SetDueDate sets DueDate field to given value.

### HasDueDate

`func (o *ReservationDepositType) HasDueDate() bool`

HasDueDate returns a boolean if a field has been set.

### GetPostingDate

`func (o *ReservationDepositType) GetPostingDate() string`

GetPostingDate returns the PostingDate field if non-nil, zero value otherwise.

### GetPostingDateOk

`func (o *ReservationDepositType) GetPostingDateOk() (*string, bool)`

GetPostingDateOk returns a tuple with the PostingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingDate

`func (o *ReservationDepositType) SetPostingDate(v string)`

SetPostingDate sets PostingDate field to given value.

### HasPostingDate

`func (o *ReservationDepositType) HasPostingDate() bool`

HasPostingDate returns a boolean if a field has been set.

### GetHasPaid

`func (o *ReservationDepositType) GetHasPaid() bool`

GetHasPaid returns the HasPaid field if non-nil, zero value otherwise.

### GetHasPaidOk

`func (o *ReservationDepositType) GetHasPaidOk() (*bool, bool)`

GetHasPaidOk returns a tuple with the HasPaid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPaid

`func (o *ReservationDepositType) SetHasPaid(v bool)`

SetHasPaid sets HasPaid field to given value.

### HasHasPaid

`func (o *ReservationDepositType) HasHasPaid() bool`

HasHasPaid returns a boolean if a field has been set.

### GetHasOutstanding

`func (o *ReservationDepositType) GetHasOutstanding() bool`

GetHasOutstanding returns the HasOutstanding field if non-nil, zero value otherwise.

### GetHasOutstandingOk

`func (o *ReservationDepositType) GetHasOutstandingOk() (*bool, bool)`

GetHasOutstandingOk returns a tuple with the HasOutstanding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasOutstanding

`func (o *ReservationDepositType) SetHasOutstanding(v bool)`

SetHasOutstanding sets HasOutstanding field to given value.

### HasHasOutstanding

`func (o *ReservationDepositType) HasHasOutstanding() bool`

HasHasOutstanding returns a boolean if a field has been set.

### GetAmountRequired

`func (o *ReservationDepositType) GetAmountRequired() float32`

GetAmountRequired returns the AmountRequired field if non-nil, zero value otherwise.

### GetAmountRequiredOk

`func (o *ReservationDepositType) GetAmountRequiredOk() (*float32, bool)`

GetAmountRequiredOk returns a tuple with the AmountRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountRequired

`func (o *ReservationDepositType) SetAmountRequired(v float32)`

SetAmountRequired sets AmountRequired field to given value.

### HasAmountRequired

`func (o *ReservationDepositType) HasAmountRequired() bool`

HasAmountRequired returns a boolean if a field has been set.

### GetAmountOwed

`func (o *ReservationDepositType) GetAmountOwed() float32`

GetAmountOwed returns the AmountOwed field if non-nil, zero value otherwise.

### GetAmountOwedOk

`func (o *ReservationDepositType) GetAmountOwedOk() (*float32, bool)`

GetAmountOwedOk returns a tuple with the AmountOwed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountOwed

`func (o *ReservationDepositType) SetAmountOwed(v float32)`

SetAmountOwed sets AmountOwed field to given value.

### HasAmountOwed

`func (o *ReservationDepositType) HasAmountOwed() bool`

HasAmountOwed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


