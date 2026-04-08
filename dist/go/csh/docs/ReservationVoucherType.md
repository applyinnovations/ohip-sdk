# ReservationVoucherType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Status** | Pointer to **string** | Reflect the current status of the voucher. | [optional] 
**VoucherNo** | Pointer to **float32** | Voucher no of the voucher | [optional] 
**VoucherDate** | Pointer to **string** | Date of the voucher | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 

## Methods

### NewReservationVoucherType

`func NewReservationVoucherType() *ReservationVoucherType`

NewReservationVoucherType instantiates a new ReservationVoucherType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationVoucherTypeWithDefaults

`func NewReservationVoucherTypeWithDefaults() *ReservationVoucherType`

NewReservationVoucherTypeWithDefaults instantiates a new ReservationVoucherType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *ReservationVoucherType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ReservationVoucherType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ReservationVoucherType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ReservationVoucherType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetStatus

`func (o *ReservationVoucherType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ReservationVoucherType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ReservationVoucherType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ReservationVoucherType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetVoucherNo

`func (o *ReservationVoucherType) GetVoucherNo() float32`

GetVoucherNo returns the VoucherNo field if non-nil, zero value otherwise.

### GetVoucherNoOk

`func (o *ReservationVoucherType) GetVoucherNoOk() (*float32, bool)`

GetVoucherNoOk returns a tuple with the VoucherNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoucherNo

`func (o *ReservationVoucherType) SetVoucherNo(v float32)`

SetVoucherNo sets VoucherNo field to given value.

### HasVoucherNo

`func (o *ReservationVoucherType) HasVoucherNo() bool`

HasVoucherNo returns a boolean if a field has been set.

### GetVoucherDate

`func (o *ReservationVoucherType) GetVoucherDate() string`

GetVoucherDate returns the VoucherDate field if non-nil, zero value otherwise.

### GetVoucherDateOk

`func (o *ReservationVoucherType) GetVoucherDateOk() (*string, bool)`

GetVoucherDateOk returns a tuple with the VoucherDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoucherDate

`func (o *ReservationVoucherType) SetVoucherDate(v string)`

SetVoucherDate sets VoucherDate field to given value.

### HasVoucherDate

`func (o *ReservationVoucherType) HasVoucherDate() bool`

HasVoucherDate returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationVoucherType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationVoucherType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationVoucherType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationVoucherType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


