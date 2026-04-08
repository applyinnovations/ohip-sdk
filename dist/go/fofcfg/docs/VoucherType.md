# VoucherType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VoucherId** | Pointer to **int32** | Unique internal ID of the voucher | [optional] 
**MembershipType** | Pointer to **string** | Membership type | [optional] 
**MembershipLevel** | Pointer to **string** | Membership level | [optional] 
**StartDate** | Pointer to **string** | Start date | [optional] 
**EndDate** | Pointer to **string** | End date | [optional] 
**Amount** | Pointer to **float64** | Voucher amount | [optional] 
**HotelId** | Pointer to **string** | Unique ID of the hotel in OPERA | [optional] 

## Methods

### NewVoucherType

`func NewVoucherType() *VoucherType`

NewVoucherType instantiates a new VoucherType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVoucherTypeWithDefaults

`func NewVoucherTypeWithDefaults() *VoucherType`

NewVoucherTypeWithDefaults instantiates a new VoucherType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVoucherId

`func (o *VoucherType) GetVoucherId() int32`

GetVoucherId returns the VoucherId field if non-nil, zero value otherwise.

### GetVoucherIdOk

`func (o *VoucherType) GetVoucherIdOk() (*int32, bool)`

GetVoucherIdOk returns a tuple with the VoucherId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoucherId

`func (o *VoucherType) SetVoucherId(v int32)`

SetVoucherId sets VoucherId field to given value.

### HasVoucherId

`func (o *VoucherType) HasVoucherId() bool`

HasVoucherId returns a boolean if a field has been set.

### GetMembershipType

`func (o *VoucherType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *VoucherType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *VoucherType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *VoucherType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *VoucherType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *VoucherType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *VoucherType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *VoucherType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetStartDate

`func (o *VoucherType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *VoucherType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *VoucherType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *VoucherType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *VoucherType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *VoucherType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *VoucherType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *VoucherType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetAmount

`func (o *VoucherType) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *VoucherType) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *VoucherType) SetAmount(v float64)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *VoucherType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetHotelId

`func (o *VoucherType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *VoucherType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *VoucherType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *VoucherType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


