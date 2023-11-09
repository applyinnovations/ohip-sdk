# CompTransactionInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionId** | Pointer to **float32** | Transaction Number for which request is being submitted. | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code. | [optional] 
**TransactionDescription** | Pointer to **string** | Transaction description. | [optional] 
**RoomId** | Pointer to **string** | Room number associated with the transaction. | [optional] 
**ConfirmationNo** | Pointer to **string** | Confirmation number associated with the transaction. | [optional] 
**ApprovalDate** | Pointer to **string** | Approval date of the posting. | [optional] 
**ApprovalStatus** | Pointer to **string** | Approval status of the posting. | [optional] 
**ApprovalCode** | Pointer to **string** | Approval code of the posting. | [optional] 
**ApprovalMessage** | Pointer to **string** | Approval message of the posting coming from the vendor. | [optional] 
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Name** | Pointer to **string** | Family name, last name or Company Name. | [optional] 
**FirstName** | Pointer to **string** | Given name, first name or names. | [optional] 

## Methods

### NewCompTransactionInfoType

`func NewCompTransactionInfoType() *CompTransactionInfoType`

NewCompTransactionInfoType instantiates a new CompTransactionInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompTransactionInfoTypeWithDefaults

`func NewCompTransactionInfoTypeWithDefaults() *CompTransactionInfoType`

NewCompTransactionInfoTypeWithDefaults instantiates a new CompTransactionInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionId

`func (o *CompTransactionInfoType) GetTransactionId() float32`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *CompTransactionInfoType) GetTransactionIdOk() (*float32, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *CompTransactionInfoType) SetTransactionId(v float32)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *CompTransactionInfoType) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### GetTransactionCode

`func (o *CompTransactionInfoType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *CompTransactionInfoType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *CompTransactionInfoType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *CompTransactionInfoType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionDescription

`func (o *CompTransactionInfoType) GetTransactionDescription() string`

GetTransactionDescription returns the TransactionDescription field if non-nil, zero value otherwise.

### GetTransactionDescriptionOk

`func (o *CompTransactionInfoType) GetTransactionDescriptionOk() (*string, bool)`

GetTransactionDescriptionOk returns a tuple with the TransactionDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDescription

`func (o *CompTransactionInfoType) SetTransactionDescription(v string)`

SetTransactionDescription sets TransactionDescription field to given value.

### HasTransactionDescription

`func (o *CompTransactionInfoType) HasTransactionDescription() bool`

HasTransactionDescription returns a boolean if a field has been set.

### GetRoomId

`func (o *CompTransactionInfoType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *CompTransactionInfoType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *CompTransactionInfoType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *CompTransactionInfoType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetConfirmationNo

`func (o *CompTransactionInfoType) GetConfirmationNo() string`

GetConfirmationNo returns the ConfirmationNo field if non-nil, zero value otherwise.

### GetConfirmationNoOk

`func (o *CompTransactionInfoType) GetConfirmationNoOk() (*string, bool)`

GetConfirmationNoOk returns a tuple with the ConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationNo

`func (o *CompTransactionInfoType) SetConfirmationNo(v string)`

SetConfirmationNo sets ConfirmationNo field to given value.

### HasConfirmationNo

`func (o *CompTransactionInfoType) HasConfirmationNo() bool`

HasConfirmationNo returns a boolean if a field has been set.

### GetApprovalDate

`func (o *CompTransactionInfoType) GetApprovalDate() string`

GetApprovalDate returns the ApprovalDate field if non-nil, zero value otherwise.

### GetApprovalDateOk

`func (o *CompTransactionInfoType) GetApprovalDateOk() (*string, bool)`

GetApprovalDateOk returns a tuple with the ApprovalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalDate

`func (o *CompTransactionInfoType) SetApprovalDate(v string)`

SetApprovalDate sets ApprovalDate field to given value.

### HasApprovalDate

`func (o *CompTransactionInfoType) HasApprovalDate() bool`

HasApprovalDate returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *CompTransactionInfoType) GetApprovalStatus() string`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *CompTransactionInfoType) GetApprovalStatusOk() (*string, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *CompTransactionInfoType) SetApprovalStatus(v string)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *CompTransactionInfoType) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetApprovalCode

`func (o *CompTransactionInfoType) GetApprovalCode() string`

GetApprovalCode returns the ApprovalCode field if non-nil, zero value otherwise.

### GetApprovalCodeOk

`func (o *CompTransactionInfoType) GetApprovalCodeOk() (*string, bool)`

GetApprovalCodeOk returns a tuple with the ApprovalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalCode

`func (o *CompTransactionInfoType) SetApprovalCode(v string)`

SetApprovalCode sets ApprovalCode field to given value.

### HasApprovalCode

`func (o *CompTransactionInfoType) HasApprovalCode() bool`

HasApprovalCode returns a boolean if a field has been set.

### GetApprovalMessage

`func (o *CompTransactionInfoType) GetApprovalMessage() string`

GetApprovalMessage returns the ApprovalMessage field if non-nil, zero value otherwise.

### GetApprovalMessageOk

`func (o *CompTransactionInfoType) GetApprovalMessageOk() (*string, bool)`

GetApprovalMessageOk returns a tuple with the ApprovalMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalMessage

`func (o *CompTransactionInfoType) SetApprovalMessage(v string)`

SetApprovalMessage sets ApprovalMessage field to given value.

### HasApprovalMessage

`func (o *CompTransactionInfoType) HasApprovalMessage() bool`

HasApprovalMessage returns a boolean if a field has been set.

### GetAmount

`func (o *CompTransactionInfoType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CompTransactionInfoType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CompTransactionInfoType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *CompTransactionInfoType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetName

`func (o *CompTransactionInfoType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CompTransactionInfoType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CompTransactionInfoType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CompTransactionInfoType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetFirstName

`func (o *CompTransactionInfoType) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *CompTransactionInfoType) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *CompTransactionInfoType) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *CompTransactionInfoType) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


