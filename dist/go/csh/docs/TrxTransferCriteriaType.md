# TrxTransferCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizerId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**MembershipIdNo** | Pointer to **int32** | Unique ID of Membership. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**TargetFolioWindowNo** | Pointer to **int32** | Folio Window Number to where transactions will be transfered. | [optional] 
**TargetReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**TransactionList** | Pointer to **[]float32** | List of transactions to be transfered. | [optional] 

## Methods

### NewTrxTransferCriteriaType

`func NewTrxTransferCriteriaType() *TrxTransferCriteriaType`

NewTrxTransferCriteriaType instantiates a new TrxTransferCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrxTransferCriteriaTypeWithDefaults

`func NewTrxTransferCriteriaTypeWithDefaults() *TrxTransferCriteriaType`

NewTrxTransferCriteriaTypeWithDefaults instantiates a new TrxTransferCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizerId

`func (o *TrxTransferCriteriaType) GetAuthorizerId() UniqueIDType`

GetAuthorizerId returns the AuthorizerId field if non-nil, zero value otherwise.

### GetAuthorizerIdOk

`func (o *TrxTransferCriteriaType) GetAuthorizerIdOk() (*UniqueIDType, bool)`

GetAuthorizerIdOk returns a tuple with the AuthorizerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerId

`func (o *TrxTransferCriteriaType) SetAuthorizerId(v UniqueIDType)`

SetAuthorizerId sets AuthorizerId field to given value.

### HasAuthorizerId

`func (o *TrxTransferCriteriaType) HasAuthorizerId() bool`

HasAuthorizerId returns a boolean if a field has been set.

### GetCashierId

`func (o *TrxTransferCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *TrxTransferCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *TrxTransferCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *TrxTransferCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetHotelId

`func (o *TrxTransferCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TrxTransferCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TrxTransferCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TrxTransferCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMembershipIdNo

`func (o *TrxTransferCriteriaType) GetMembershipIdNo() int32`

GetMembershipIdNo returns the MembershipIdNo field if non-nil, zero value otherwise.

### GetMembershipIdNoOk

`func (o *TrxTransferCriteriaType) GetMembershipIdNoOk() (*int32, bool)`

GetMembershipIdNoOk returns a tuple with the MembershipIdNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipIdNo

`func (o *TrxTransferCriteriaType) SetMembershipIdNo(v int32)`

SetMembershipIdNo sets MembershipIdNo field to given value.

### HasMembershipIdNo

`func (o *TrxTransferCriteriaType) HasMembershipIdNo() bool`

HasMembershipIdNo returns a boolean if a field has been set.

### GetReservationIdList

`func (o *TrxTransferCriteriaType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *TrxTransferCriteriaType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *TrxTransferCriteriaType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *TrxTransferCriteriaType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetTargetFolioWindowNo

`func (o *TrxTransferCriteriaType) GetTargetFolioWindowNo() int32`

GetTargetFolioWindowNo returns the TargetFolioWindowNo field if non-nil, zero value otherwise.

### GetTargetFolioWindowNoOk

`func (o *TrxTransferCriteriaType) GetTargetFolioWindowNoOk() (*int32, bool)`

GetTargetFolioWindowNoOk returns a tuple with the TargetFolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFolioWindowNo

`func (o *TrxTransferCriteriaType) SetTargetFolioWindowNo(v int32)`

SetTargetFolioWindowNo sets TargetFolioWindowNo field to given value.

### HasTargetFolioWindowNo

`func (o *TrxTransferCriteriaType) HasTargetFolioWindowNo() bool`

HasTargetFolioWindowNo returns a boolean if a field has been set.

### GetTargetReservationIdList

`func (o *TrxTransferCriteriaType) GetTargetReservationIdList() []UniqueIDType`

GetTargetReservationIdList returns the TargetReservationIdList field if non-nil, zero value otherwise.

### GetTargetReservationIdListOk

`func (o *TrxTransferCriteriaType) GetTargetReservationIdListOk() (*[]UniqueIDType, bool)`

GetTargetReservationIdListOk returns a tuple with the TargetReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetReservationIdList

`func (o *TrxTransferCriteriaType) SetTargetReservationIdList(v []UniqueIDType)`

SetTargetReservationIdList sets TargetReservationIdList field to given value.

### HasTargetReservationIdList

`func (o *TrxTransferCriteriaType) HasTargetReservationIdList() bool`

HasTargetReservationIdList returns a boolean if a field has been set.

### GetTransactionList

`func (o *TrxTransferCriteriaType) GetTransactionList() []float32`

GetTransactionList returns the TransactionList field if non-nil, zero value otherwise.

### GetTransactionListOk

`func (o *TrxTransferCriteriaType) GetTransactionListOk() (*[]float32, bool)`

GetTransactionListOk returns a tuple with the TransactionList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionList

`func (o *TrxTransferCriteriaType) SetTransactionList(v []float32)`

SetTransactionList sets TransactionList field to given value.

### HasTransactionList

`func (o *TrxTransferCriteriaType) HasTransactionList() bool`

HasTransactionList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


