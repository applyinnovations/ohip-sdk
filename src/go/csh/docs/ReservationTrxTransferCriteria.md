# ReservationTrxTransferCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizerId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**MembershipIdNo** | Pointer to **int32** | Unique ID of Membership. | [optional] 
**ReservationIdList** | Pointer to [**ReservationIdList**](ReservationIdList.md) |  | [optional] 
**TargetFolioWindowNo** | Pointer to **int32** | Folio Window Number to where transactions will be transfered. | [optional] 
**TargetReservationIdList** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 
**TransactionList** | Pointer to **[]float32** | List of transactions to be transfered. | [optional] 

## Methods

### NewReservationTrxTransferCriteria

`func NewReservationTrxTransferCriteria() *ReservationTrxTransferCriteria`

NewReservationTrxTransferCriteria instantiates a new ReservationTrxTransferCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationTrxTransferCriteriaWithDefaults

`func NewReservationTrxTransferCriteriaWithDefaults() *ReservationTrxTransferCriteria`

NewReservationTrxTransferCriteriaWithDefaults instantiates a new ReservationTrxTransferCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizerId

`func (o *ReservationTrxTransferCriteria) GetAuthorizerId() UniqueIDType`

GetAuthorizerId returns the AuthorizerId field if non-nil, zero value otherwise.

### GetAuthorizerIdOk

`func (o *ReservationTrxTransferCriteria) GetAuthorizerIdOk() (*UniqueIDType, bool)`

GetAuthorizerIdOk returns a tuple with the AuthorizerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerId

`func (o *ReservationTrxTransferCriteria) SetAuthorizerId(v UniqueIDType)`

SetAuthorizerId sets AuthorizerId field to given value.

### HasAuthorizerId

`func (o *ReservationTrxTransferCriteria) HasAuthorizerId() bool`

HasAuthorizerId returns a boolean if a field has been set.

### GetCashierId

`func (o *ReservationTrxTransferCriteria) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ReservationTrxTransferCriteria) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ReservationTrxTransferCriteria) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ReservationTrxTransferCriteria) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetHotelId

`func (o *ReservationTrxTransferCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationTrxTransferCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationTrxTransferCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationTrxTransferCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMembershipIdNo

`func (o *ReservationTrxTransferCriteria) GetMembershipIdNo() int32`

GetMembershipIdNo returns the MembershipIdNo field if non-nil, zero value otherwise.

### GetMembershipIdNoOk

`func (o *ReservationTrxTransferCriteria) GetMembershipIdNoOk() (*int32, bool)`

GetMembershipIdNoOk returns a tuple with the MembershipIdNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipIdNo

`func (o *ReservationTrxTransferCriteria) SetMembershipIdNo(v int32)`

SetMembershipIdNo sets MembershipIdNo field to given value.

### HasMembershipIdNo

`func (o *ReservationTrxTransferCriteria) HasMembershipIdNo() bool`

HasMembershipIdNo returns a boolean if a field has been set.

### GetReservationIdList

`func (o *ReservationTrxTransferCriteria) GetReservationIdList() ReservationIdList`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ReservationTrxTransferCriteria) GetReservationIdListOk() (*ReservationIdList, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ReservationTrxTransferCriteria) SetReservationIdList(v ReservationIdList)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ReservationTrxTransferCriteria) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetTargetFolioWindowNo

`func (o *ReservationTrxTransferCriteria) GetTargetFolioWindowNo() int32`

GetTargetFolioWindowNo returns the TargetFolioWindowNo field if non-nil, zero value otherwise.

### GetTargetFolioWindowNoOk

`func (o *ReservationTrxTransferCriteria) GetTargetFolioWindowNoOk() (*int32, bool)`

GetTargetFolioWindowNoOk returns a tuple with the TargetFolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFolioWindowNo

`func (o *ReservationTrxTransferCriteria) SetTargetFolioWindowNo(v int32)`

SetTargetFolioWindowNo sets TargetFolioWindowNo field to given value.

### HasTargetFolioWindowNo

`func (o *ReservationTrxTransferCriteria) HasTargetFolioWindowNo() bool`

HasTargetFolioWindowNo returns a boolean if a field has been set.

### GetTargetReservationIdList

`func (o *ReservationTrxTransferCriteria) GetTargetReservationIdList() UniqueIDListType`

GetTargetReservationIdList returns the TargetReservationIdList field if non-nil, zero value otherwise.

### GetTargetReservationIdListOk

`func (o *ReservationTrxTransferCriteria) GetTargetReservationIdListOk() (*UniqueIDListType, bool)`

GetTargetReservationIdListOk returns a tuple with the TargetReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetReservationIdList

`func (o *ReservationTrxTransferCriteria) SetTargetReservationIdList(v UniqueIDListType)`

SetTargetReservationIdList sets TargetReservationIdList field to given value.

### HasTargetReservationIdList

`func (o *ReservationTrxTransferCriteria) HasTargetReservationIdList() bool`

HasTargetReservationIdList returns a boolean if a field has been set.

### GetTransactionList

`func (o *ReservationTrxTransferCriteria) GetTransactionList() []float32`

GetTransactionList returns the TransactionList field if non-nil, zero value otherwise.

### GetTransactionListOk

`func (o *ReservationTrxTransferCriteria) GetTransactionListOk() (*[]float32, bool)`

GetTransactionListOk returns a tuple with the TransactionList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionList

`func (o *ReservationTrxTransferCriteria) SetTransactionList(v []float32)`

SetTransactionList sets TransactionList field to given value.

### HasTransactionList

`func (o *ReservationTrxTransferCriteria) HasTransactionList() bool`

HasTransactionList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


