# MembershipTransactionInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrencyCode** | Pointer to **string** | Code type of the type of currency. | [optional] 
**HotelId** | Pointer to **string** | Resort of the transaction. | [optional] 
**Nights** | Pointer to **int32** | Total nights. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Stay** | Pointer to **int32** | Total stay. | [optional] 
**StayTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**TransactionDate** | Pointer to **string** | Membership Transaction Date. | [optional] 
**TransactionType** | Pointer to **string** | Membership Transaction Type. | [optional] 

## Methods

### NewMembershipTransactionInfoType

`func NewMembershipTransactionInfoType() *MembershipTransactionInfoType`

NewMembershipTransactionInfoType instantiates a new MembershipTransactionInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTransactionInfoTypeWithDefaults

`func NewMembershipTransactionInfoTypeWithDefaults() *MembershipTransactionInfoType`

NewMembershipTransactionInfoTypeWithDefaults instantiates a new MembershipTransactionInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrencyCode

`func (o *MembershipTransactionInfoType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *MembershipTransactionInfoType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *MembershipTransactionInfoType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *MembershipTransactionInfoType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetHotelId

`func (o *MembershipTransactionInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MembershipTransactionInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MembershipTransactionInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MembershipTransactionInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNights

`func (o *MembershipTransactionInfoType) GetNights() int32`

GetNights returns the Nights field if non-nil, zero value otherwise.

### GetNightsOk

`func (o *MembershipTransactionInfoType) GetNightsOk() (*int32, bool)`

GetNightsOk returns a tuple with the Nights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNights

`func (o *MembershipTransactionInfoType) SetNights(v int32)`

SetNights sets Nights field to given value.

### HasNights

`func (o *MembershipTransactionInfoType) HasNights() bool`

HasNights returns a boolean if a field has been set.

### GetReservationIdList

`func (o *MembershipTransactionInfoType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *MembershipTransactionInfoType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *MembershipTransactionInfoType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *MembershipTransactionInfoType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetStay

`func (o *MembershipTransactionInfoType) GetStay() int32`

GetStay returns the Stay field if non-nil, zero value otherwise.

### GetStayOk

`func (o *MembershipTransactionInfoType) GetStayOk() (*int32, bool)`

GetStayOk returns a tuple with the Stay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStay

`func (o *MembershipTransactionInfoType) SetStay(v int32)`

SetStay sets Stay field to given value.

### HasStay

`func (o *MembershipTransactionInfoType) HasStay() bool`

HasStay returns a boolean if a field has been set.

### GetStayTimeSpan

`func (o *MembershipTransactionInfoType) GetStayTimeSpan() TimeSpanType`

GetStayTimeSpan returns the StayTimeSpan field if non-nil, zero value otherwise.

### GetStayTimeSpanOk

`func (o *MembershipTransactionInfoType) GetStayTimeSpanOk() (*TimeSpanType, bool)`

GetStayTimeSpanOk returns a tuple with the StayTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayTimeSpan

`func (o *MembershipTransactionInfoType) SetStayTimeSpan(v TimeSpanType)`

SetStayTimeSpan sets StayTimeSpan field to given value.

### HasStayTimeSpan

`func (o *MembershipTransactionInfoType) HasStayTimeSpan() bool`

HasStayTimeSpan returns a boolean if a field has been set.

### GetTransactionDate

`func (o *MembershipTransactionInfoType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *MembershipTransactionInfoType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *MembershipTransactionInfoType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *MembershipTransactionInfoType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetTransactionType

`func (o *MembershipTransactionInfoType) GetTransactionType() string`

GetTransactionType returns the TransactionType field if non-nil, zero value otherwise.

### GetTransactionTypeOk

`func (o *MembershipTransactionInfoType) GetTransactionTypeOk() (*string, bool)`

GetTransactionTypeOk returns a tuple with the TransactionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionType

`func (o *MembershipTransactionInfoType) SetTransactionType(v string)`

SetTransactionType sets TransactionType field to given value.

### HasTransactionType

`func (o *MembershipTransactionInfoType) HasTransactionType() bool`

HasTransactionType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


