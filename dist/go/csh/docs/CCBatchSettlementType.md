# CCBatchSettlementType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SettlementId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**SettlementAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**GuestName** | Pointer to **string** | Guest name associated with the CC settlement transaction. | [optional] 
**RoomId** | Pointer to **string** | Room number associated with the CC settlement transaction. | [optional] 
**WindowNo** | Pointer to **int32** | Window number associated with the CC settlement transaction. | [optional] 
**PaymentMethod** | Pointer to [**ReservationPaymentMethodType**](ReservationPaymentMethodType.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ApprovalCode** | Pointer to **string** | The approval code authenticates the authorization. | [optional] 
**FolioNo** | Pointer to **float32** | Folio number of transaction | [optional] 
**TransactionDate** | Pointer to **string** | Transaction Date of the credit card transaction. | [optional] 

## Methods

### NewCCBatchSettlementType

`func NewCCBatchSettlementType() *CCBatchSettlementType`

NewCCBatchSettlementType instantiates a new CCBatchSettlementType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCCBatchSettlementTypeWithDefaults

`func NewCCBatchSettlementTypeWithDefaults() *CCBatchSettlementType`

NewCCBatchSettlementTypeWithDefaults instantiates a new CCBatchSettlementType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSettlementId

`func (o *CCBatchSettlementType) GetSettlementId() UniqueIDType`

GetSettlementId returns the SettlementId field if non-nil, zero value otherwise.

### GetSettlementIdOk

`func (o *CCBatchSettlementType) GetSettlementIdOk() (*UniqueIDType, bool)`

GetSettlementIdOk returns a tuple with the SettlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementId

`func (o *CCBatchSettlementType) SetSettlementId(v UniqueIDType)`

SetSettlementId sets SettlementId field to given value.

### HasSettlementId

`func (o *CCBatchSettlementType) HasSettlementId() bool`

HasSettlementId returns a boolean if a field has been set.

### GetSettlementAmount

`func (o *CCBatchSettlementType) GetSettlementAmount() CurrencyAmountType`

GetSettlementAmount returns the SettlementAmount field if non-nil, zero value otherwise.

### GetSettlementAmountOk

`func (o *CCBatchSettlementType) GetSettlementAmountOk() (*CurrencyAmountType, bool)`

GetSettlementAmountOk returns a tuple with the SettlementAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementAmount

`func (o *CCBatchSettlementType) SetSettlementAmount(v CurrencyAmountType)`

SetSettlementAmount sets SettlementAmount field to given value.

### HasSettlementAmount

`func (o *CCBatchSettlementType) HasSettlementAmount() bool`

HasSettlementAmount returns a boolean if a field has been set.

### GetGuestName

`func (o *CCBatchSettlementType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *CCBatchSettlementType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *CCBatchSettlementType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *CCBatchSettlementType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetRoomId

`func (o *CCBatchSettlementType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *CCBatchSettlementType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *CCBatchSettlementType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *CCBatchSettlementType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetWindowNo

`func (o *CCBatchSettlementType) GetWindowNo() int32`

GetWindowNo returns the WindowNo field if non-nil, zero value otherwise.

### GetWindowNoOk

`func (o *CCBatchSettlementType) GetWindowNoOk() (*int32, bool)`

GetWindowNoOk returns a tuple with the WindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWindowNo

`func (o *CCBatchSettlementType) SetWindowNo(v int32)`

SetWindowNo sets WindowNo field to given value.

### HasWindowNo

`func (o *CCBatchSettlementType) HasWindowNo() bool`

HasWindowNo returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *CCBatchSettlementType) GetPaymentMethod() ReservationPaymentMethodType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *CCBatchSettlementType) GetPaymentMethodOk() (*ReservationPaymentMethodType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *CCBatchSettlementType) SetPaymentMethod(v ReservationPaymentMethodType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *CCBatchSettlementType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetReservationId

`func (o *CCBatchSettlementType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *CCBatchSettlementType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *CCBatchSettlementType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *CCBatchSettlementType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetApprovalCode

`func (o *CCBatchSettlementType) GetApprovalCode() string`

GetApprovalCode returns the ApprovalCode field if non-nil, zero value otherwise.

### GetApprovalCodeOk

`func (o *CCBatchSettlementType) GetApprovalCodeOk() (*string, bool)`

GetApprovalCodeOk returns a tuple with the ApprovalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalCode

`func (o *CCBatchSettlementType) SetApprovalCode(v string)`

SetApprovalCode sets ApprovalCode field to given value.

### HasApprovalCode

`func (o *CCBatchSettlementType) HasApprovalCode() bool`

HasApprovalCode returns a boolean if a field has been set.

### GetFolioNo

`func (o *CCBatchSettlementType) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *CCBatchSettlementType) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *CCBatchSettlementType) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *CCBatchSettlementType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetTransactionDate

`func (o *CCBatchSettlementType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *CCBatchSettlementType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *CCBatchSettlementType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *CCBatchSettlementType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


